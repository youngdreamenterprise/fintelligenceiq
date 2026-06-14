// Server-side FRED proxy — uses FRED_API_KEY env var, never exposed to client
export default async function handler(req, res) {
  const apikey = process.env.FRED_API_KEY
  if (!apikey) {
    return res.status(503).json({
      error: 'FRED_API_KEY is not set. Add it in Vercel → Project Settings → Environment Variables, then redeploy.'
    })
  }

  const { series } = req.query
  if (!series) return res.status(400).json({ error: 'Missing series parameter' })

  const ids = series.split(',').map(s => s.trim()).filter(Boolean).slice(0, 12)

  const fetchSeries = async (id) => {
    const url = new URL('https://api.stlouisfed.org/fred/series/observations')
    url.searchParams.set('series_id', id)
    url.searchParams.set('api_key', apikey)
    url.searchParams.set('file_type', 'json')
    url.searchParams.set('limit', '24')
    url.searchParams.set('sort_order', 'desc')

    const r = await fetch(url.toString(), {
      headers: { 'User-Agent': 'FintelligenceIQ/1.0', Accept: 'application/json' },
      signal: AbortSignal.timeout(12000),
    })

    if (r.status === 400) return { id, error: `Bad series ID: ${id}`, data: [] }
    if (r.status === 401 || r.status === 403) return { id, error: 'Invalid FRED API key', data: [] }
    if (!r.ok) return { id, error: `FRED returned HTTP ${r.status}`, data: [] }

    const json = await r.json()
    if (!json.observations) return { id, error: 'No observations in FRED response', data: [] }

    const data = json.observations
      .filter(o => o.value !== '.')
      .map(o => ({ date: o.date.slice(0, 7), value: parseFloat(o.value) }))
      .reverse()

    return { id, data }
  }

  try {
    // Fetch all series concurrently
    const results = await Promise.all(ids.map(fetchSeries))

    res.setHeader('Cache-Control', 'public, s-maxage=1800, stale-while-revalidate=3600')
    return res.status(200).json({ results })
  } catch (err) {
    return res.status(500).json({ error: `Server error: ${err.message}` })
  }
}
