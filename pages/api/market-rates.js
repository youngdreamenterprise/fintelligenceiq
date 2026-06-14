// Consumer lending rate aggregator
// Sources: FRED (Federal Reserve) for verified series + Bankrate for consumer rates

const FRED_KEY = process.env.FRED_API_KEY

async function fetchFRED(seriesId) {
  if (!FRED_KEY) return null
  try {
    const url = `https://api.stlouisfed.org/fred/series/observations?series_id=${seriesId}&api_key=${FRED_KEY}&file_type=json&limit=5&sort_order=desc`
    const r = await fetch(url, { signal: AbortSignal.timeout(10000) })
    if (!r.ok) return null
    const d = await r.json()
    const obs = (d.observations || []).filter(o => o.value !== '.' && o.value !== '')
    if (!obs.length) return null
    return {
      value: parseFloat(obs[0].value),
      date: obs[0].date.slice(0, 10),
      source: 'Federal Reserve (FRED)',
      frequency: 'Monthly',
    }
  } catch { return null }
}

// Try multiple Bankrate endpoint patterns for a given product
async function fetchBankrate(paths) {
  for (const path of paths) {
    try {
      const r = await fetch(`https://www.bankrate.com/api/next-data/financial-products/${path}`, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'application/json',
          'Referer': 'https://www.bankrate.com/',
        },
        signal: AbortSignal.timeout(7000),
      })
      if (!r.ok) continue
      const d = await r.json()
      // Try multiple response shape paths
      const val = d?.nationalAverages?.apr
        ?? d?.averageRate
        ?? d?.averageAPR
        ?? d?.avg
        ?? d?.rate
        ?? d?.data?.averageRate
        ?? d?.result?.averageRate
        ?? null
      if (val != null && !isNaN(parseFloat(val))) {
        return {
          value: parseFloat(val),
          date: new Date().toISOString().slice(0, 10),
          source: 'Bankrate',
          frequency: 'Daily',
        }
      }
    } catch { continue }
  }
  return null
}

// Derive HELOC rate from Prime (HELOCs are typically Prime + 0–2%)
async function fetchHELOC() {
  const prime = await fetchFRED('PRIME')
  if (!prime) return null
  return {
    value: parseFloat((prime.value + 0.5).toFixed(2)), // Prime + 0.5% typical floor
    date: prime.date,
    source: 'Derived (Prime Rate + ~0.5%)',
    frequency: 'As changed',
  }
}

// Verified FRED series + Bankrate paths + fallback display rates
const RATE_DEFS = [
  {
    id: 'cc_apr',
    label: 'Credit Card APR',
    icon: '💳',
    colorKey: 'neg',
    desc: 'Average APR on all credit card accounts at commercial banks',
    bankratePaths: ['credit-card', 'credit-cards', 'credit-card-interest-rate'],
    fredSeries: 'TERMCBCCALLNS',   // G.19 — verified valid
  },
  {
    id: 'auto_new',
    label: 'New Car Loan (60-mo)',
    icon: '🚗',
    colorKey: 'pos',
    desc: 'Average rate on new vehicle loans, 60-month term',
    bankratePaths: ['auto-loan', 'auto-loans', 'new-car-loan', 'auto-new'],
    fredSeries: null, // G.19 auto rate series ID uncertain — Bankrate only
  },
  {
    id: 'auto_used',
    label: 'Used Car Loan (48-mo)',
    icon: '🚙',
    colorKey: 'gold',
    desc: 'Average rate on used vehicle loans, 48-month term',
    bankratePaths: ['auto-loan-used', 'used-auto-loan', 'used-car-loan', 'auto-used'],
    fredSeries: null, // No verified FRED series — Bankrate only
  },
  {
    id: 'personal_loan',
    label: 'Personal Loan (24-mo)',
    icon: '🤝',
    colorKey: 'warn',
    desc: 'Average rate on unsecured personal loans, 24-month term',
    bankratePaths: ['personal-loan', 'personal-loans', 'personal-loan-rates'],
    fredSeries: 'TERMCBPER24NS',   // G.19 — likely valid
  },
  {
    id: 'heloc',
    label: 'HELOC Rate',
    icon: '🏡',
    colorKey: 'purple',
    desc: 'Home equity line of credit — variable, typically Prime + 0–2%',
    bankratePaths: ['heloc', 'home-equity-line-of-credit', 'heloc-rates'],
    fredSeries: 'PRIME',            // HELOCs float with Prime; use as base
    useHelocDerivation: true,
  },
]

export default async function handler(req, res) {
  const results = await Promise.all(
    RATE_DEFS.map(async (def) => {
      let data = null

      // 1. Try Bankrate (daily)
      if (def.bankratePaths?.length) {
        data = await fetchBankrate(def.bankratePaths)
      }

      // 2. Try FRED fallback (monthly for most, derived for HELOC)
      if (!data) {
        if (def.useHelocDerivation) {
          data = await fetchHELOC()
        } else if (def.fredSeries) {
          data = await fetchFRED(def.fredSeries)
        }
      }

      return {
        id: def.id,
        label: def.label,
        icon: def.icon,
        colorKey: def.colorKey,
        desc: def.desc,
        value: data?.value ?? null,
        date: data?.date ?? null,
        source: data?.source ?? 'Unavailable',
        frequency: data?.frequency ?? '—',
      }
    })
  )

  res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=7200')
  res.status(200).json({ rates: results, fetchedAt: new Date().toISOString() })
}
