// Financial news API — fetches from 8 diverse free RSS feeds
// Caps each source to 4 articles max, then interleaves for variety
export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'public, s-maxage=600, stale-while-revalidate=1200')

  const feeds = [
    { url: 'https://feeds.marketwatch.com/marketwatch/topstories/', source: 'MarketWatch' },
    { url: 'https://feeds.reuters.com/reuters/businessNews', source: 'Reuters' },
    { url: 'https://search.cnbc.com/rs/search/combinedcms/view.xml?partnerId=wrss01&id=10000664', source: 'CNBC' },
    { url: 'https://finance.yahoo.com/news/rssindex', source: 'Yahoo Finance' },
    { url: 'https://www.investopedia.com/feedbuilder/feed/getfeed/?feedName=rss_headline', source: 'Investopedia' },
    { url: 'https://www.thestreet.com/rss/main.xml', source: 'The Street' },
    { url: 'https://search.cnbc.com/rs/search/combinedcms/view.xml?partnerId=wrss01&id=15839135', source: 'CNBC Investing' },
    { url: 'https://feeds.marketwatch.com/marketwatch/marketpulse/', source: 'MarketWatch Pulse' },
  ]

  const MAX_PER_SOURCE = 4

  const parseItem = (xml, defaultSource) => {
    const items = []
    const blocks = xml.split(/<item[\s>]/i)
    for (let i = 1; i < blocks.length; i++) {
      const b = blocks[i]
      const get = (tag) => {
        const patterns = [
          new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`, 'i'),
          new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i'),
        ]
        for (const p of patterns) {
          const m = b.match(p)
          if (m && m[1].trim()) return m[1].trim()
        }
        return ''
      }
      const getAttr = (tag, attr) => {
        const m = b.match(new RegExp(`<${tag}[^>]+${attr}="([^"]*)"`, 'i'))
        return m ? m[1] : ''
      }
      const title = get('title')
        .replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>')
        .replace(/&#39;/g,"'").replace(/&quot;/g,'"').trim()
      const link = get('link') || getAttr('link', 'href')
      const pubDate = get('pubDate') || get('published') || get('dc:date') || ''
      const rawDesc = get('description')
      const desc = rawDesc
        .replace(/<[^>]+>/g,'')
        .replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>')
        .replace(/&#39;/g,"'").replace(/&nbsp;/g,' ').trim().slice(0, 200)
      const imgMatch =
        b.match(/<media:content[^>]+url="([^"]+)"/) ||
        b.match(/<media:thumbnail[^>]+url="([^"]+)"/) ||
        b.match(/https?:\/\/[^\s"'<>]+\.(?:jpg|jpeg|png|webp)(?:\?[^\s"'<>]*)?/i)
      const img = imgMatch ? (imgMatch[1] || imgMatch[0]) : ''
      if (title && link) {
        items.push({ title, link, pubDate, desc, img, source: defaultSource })
      }
    }
    return items
  }

  // Fetch all feeds concurrently with 6s timeout each
  const results = await Promise.allSettled(
    feeds.map(async ({ url, source }) => {
      const r = await fetch(url, {
        headers: { 'User-Agent': 'Mozilla/5.0 (compatible; FintelligenceIQ/1.0)' },
        signal: AbortSignal.timeout(6000),
      })
      if (!r.ok) throw new Error(`${source}: HTTP ${r.status}`)
      const xml = await r.text()
      const items = parseItem(xml, source)
      // Sort each source's items by date, cap at MAX_PER_SOURCE
      items.sort((a, b) => {
        const da = a.pubDate ? new Date(a.pubDate).getTime() : 0
        const db = b.pubDate ? new Date(b.pubDate).getTime() : 0
        return db - da
      })
      return items.slice(0, MAX_PER_SOURCE)
    })
  )

  // Collect successful feeds
  const bySource = results
    .filter(r => r.status === 'fulfilled' && r.value.length > 0)
    .map(r => r.value)

  // Interleave: take 1 article from each source in rotation
  // This ensures maximum source variety in the final list
  const interleaved = []
  const maxLen = Math.max(...bySource.map(s => s.length))
  for (let i = 0; i < maxLen; i++) {
    for (const source of bySource) {
      if (source[i]) interleaved.push(source[i])
    }
  }

  // Deduplicate by title (first 45 chars, case-insensitive)
  const seen = new Set()
  const unique = interleaved.filter(a => {
    const key = a.title.toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 45)
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })

  // Log source distribution for debugging
  const dist = {}
  unique.forEach(a => { dist[a.source] = (dist[a.source] || 0) + 1 })

  res.status(200).json({
    articles: unique.slice(0, 40),
    sourceDist: dist,
    fetchedAt: new Date().toISOString(),
  })
}
