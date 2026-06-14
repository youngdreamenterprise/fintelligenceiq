// Server-side Finnhub proxy — uses server env var, no key exposed to client
export default async function handler(req, res) {
  const token = process.env.FINNHUB_API_KEY
  if (!token) return res.status(503).json({ error: 'Finnhub API key not configured on server' })

  const { path } = req.query
  if (!path) return res.status(400).json({ error: 'Missing path' })

  const url = `https://finnhub.io/api/v1${path}${path.includes('?') ? '&' : '?'}token=${token}`

  try {
    const r = await fetch(url, {
      headers: { 'User-Agent': 'FintelligenceIQ/1.0' },
      signal: AbortSignal.timeout(10000),
    })
    const text = await r.text()
    if (!r.ok) {
      if (r.status === 401 || r.status === 403) return res.status(401).json({ error: 'Invalid API key' })
      if (r.status === 429) return res.status(429).json({ error: 'Rate limit — wait 60s' })
      return res.status(r.status).json({ error: `Finnhub error ${r.status}` })
    }
    let data
    try { data = JSON.parse(text) } catch { return res.status(502).json({ error: 'Invalid response' }) }
    res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=120')
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json({ error: err.message || 'Fetch failed' })
  }
}
