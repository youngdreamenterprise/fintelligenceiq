import { useState, useEffect, useRef, createContext, useContext } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { useUser, UserButton, useClerk } from '@clerk/nextjs'
import {
  TrendingUp, BarChart2, Calculator, Globe, GraduationCap,
  ChevronRight, RefreshCw, Search, Plus, Trash2, Settings, X, Send,
  Newspaper, ExternalLink, BookOpen, ArrowRight, Zap, User, Lock, Crown, Star, CheckCircle, AlertCircle,
} from 'lucide-react'
import { KB, STOPWORDS } from '../data/searchKnowledge'
import { CURRICULUM_INDEX } from '../data/curriculumIndex'
import {
  AreaChart, Area, BarChart, Bar, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts'

// ─── Themes ───────────────────────────────────────────────────────────────────
const THEMES = {
  midnight: {
    bg: '#02060F', surface: '#060E1C', card: '#081325', border: '#102540',
    accent: '#FF6B35', pos: '#00D09C', neg: '#FF4560', warn: '#FFB830',
    text: '#E8F4FF', sub: '#5A7FA8', dim: '#0C1D35', blue: '#3D8EFF',
    gold: '#F5C842', purple: '#8B5CF6',
    gradA: '#FF6B35', gradB: '#FFB830',
    sidebarGlow: 'rgba(255,107,53,0.08)', name: 'midnight',
  },
  daytime: {
    bg: '#F0F4FA', surface: '#FFFFFF', card: '#FFFFFF', border: '#DDE4EF',
    text: '#0F1629', sub: '#5A6A85', dim: '#E8EEF8', deep: '#E2EAF5',
    accent: '#2563EB', pos: '#16A34A', neg: '#DC2626', warn: '#D97706',
    gold: '#D97706', purple: '#7C3AED', blue: '#0EA5E9', mid: '#EEF2FB',
    gradA: '#2563EB', gradB: '#0EA5E9',
    sidebarGlow: 'rgba(37,99,235,0.08)', name: 'daytime',
    resourceText: '#1D4ED8',
  },
}

const ThemeCtx = createContext(THEMES.midnight)
const useC = () => useContext(ThemeCtx)
const getS = (C) => ({
  card: { background: C.name === 'daytime' ? 'rgba(255,255,255,0.88)' : 'rgba(20,28,48,0.82)', border: `1px solid ${C.border}`, borderRadius: 14, padding: 22, backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' },
  input: { background: C.surface, border: `1px solid ${C.border}`, borderRadius: 9, color: C.text, padding: '9px 13px', fontSize: 14, outline: 'none', fontFamily: 'inherit', width: '100%' },
  numInput: { background: C.surface, border: `1px solid ${C.border}`, borderRadius: 8, color: C.text, padding: '6px 10px', fontSize: 13, outline: 'none', fontFamily: 'inherit', textAlign: 'right' },
  btn: (col) => ({ background: col || C.accent, color: '#fff', border: 'none', borderRadius: 9, padding: '10px 18px', fontWeight: 700, fontSize: 13, cursor: 'pointer', fontFamily: 'inherit', display: 'inline-flex', alignItems: 'center', gap: 7 }),
  label: { fontSize: 10, color: C.sub, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 5, display: 'block' },
  tab: (a) => ({ background: a ? C.accent : C.dim, color: a ? '#fff' : C.sub, border: 'none', borderRadius: 8, padding: '7px 15px', cursor: 'pointer', fontWeight: 700, fontSize: 12, fontFamily: 'inherit' }),
  row: { display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: `1px solid ${C.border}` },
})

// ─── Utilities ────────────────────────────────────────────────────────────────
const fmtD = n => n != null ? `$${(+n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : '—'
const fmtP = n => n != null ? `${+n >= 0 ? '+' : ''}${(+n).toFixed(2)}%` : '—'
const fmtL = n => { if (!n && n !== 0) return '—'; const v = +n; if (Math.abs(v) >= 1e12) return `$${(v/1e12).toFixed(2)}T`; if (Math.abs(v) >= 1e9) return `$${(v/1e9).toFixed(2)}B`; if (Math.abs(v) >= 1e6) return `$${(v/1e6).toFixed(2)}M`; if (Math.abs(v) >= 1e3) return `$${(v/1e3).toFixed(0)}K`; return `$${Math.round(v).toLocaleString()}` }
const fmtN = (n, d = 2) => n != null && !isNaN(+n) ? (+n).toFixed(d) : '—'
const fmtK = n => { const v = Math.round(+n); if (Math.abs(v) >= 1e6) return `$${(v/1e6).toFixed(2)}M`; if (Math.abs(v) >= 1e3) return `$${(v/1e3).toFixed(0)}K`; return `$${v.toLocaleString()}` }

// APIs
// Server-side Finnhub proxy — token stored in server env var
const fh = async (path) => {
  const r = await fetch(`/api/finnhub?path=${encodeURIComponent(path)}`)
  const d = await r.json()
  if (!r.ok) throw new Error(d.error || `Finnhub error ${r.status}`)
  return d
}
// Server-side FRED proxy — token stored in server env var
const fredFetchAll = async (ids) => {
  const r = await fetch(`/api/fred?series=${ids.join(',')}`)
  const d = await r.json().catch(() => ({ error: `HTTP ${r.status} — non-JSON response` }))
  if (!r.ok || d.error) throw new Error(d.error || `FRED proxy returned ${r.status}`)
  return d.results
}

// Technical indicators
function calcRSI(closes, p = 14) {
  if (closes.length < p + 1) return null
  let g = 0, l = 0
  for (let i = 1; i <= p; i++) { const d = closes[i] - closes[i - 1]; if (d > 0) g += d; else l += Math.abs(d) }
  let ag = g / p, al = l / p
  for (let i = p + 1; i < closes.length; i++) { const d = closes[i] - closes[i - 1]; ag = (ag * (p - 1) + Math.max(0, d)) / p; al = (al * (p - 1) + Math.max(0, -d)) / p }
  if (al === 0) return 100
  return 100 - (100 / (1 + ag / al))
}
const calcSMA = (arr, p) => arr.length < p ? null : arr.slice(-p).reduce((a, b) => a + b, 0) / p

// ─── DualInput ─────────────────────────────────────────────────────────────────
function DualInput({ label, value, onChange, min, max, step = 1, prefix = '', suffix = '', w = 80 }) {
  const C = useC()
  const S = getS(C)
  const [raw, setRaw] = useState(String(value))
  useEffect(() => { setRaw(String(value)) }, [value])
  const commit = (str) => { const v = parseFloat(str); if (!isNaN(v)) onChange(Math.min(max, Math.max(min, v))) }
  return (
    <div style={{ marginBottom: 18 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 7 }}>
        <span style={S.label}>{label}</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          {prefix && <span style={{ fontSize: 13, color: C.sub, fontWeight: 600 }}>{prefix}</span>}
          <input type="number" value={raw} step={step} style={{ ...S.numInput, width: w }}
            onChange={e => { setRaw(e.target.value); commit(e.target.value) }}
            onBlur={() => setRaw(String(value))} />
          {suffix && <span style={{ fontSize: 12, color: C.sub }}>{suffix}</span>}
        </div>
      </div>
      <input type="range" min={min} max={max} step={step} value={Math.min(max, Math.max(min, value))}
        onChange={e => { const v = +e.target.value; setRaw(String(v)); onChange(v) }}
        style={{ width: '100%', height: 3, accentColor: C.accent, cursor: 'pointer' }} />
    </div>
  )
}

// ─── Metric Tile ──────────────────────────────────────────────────────────────
function Tile({ label, value, sub, color }) {
  const C = useC()
  const S = getS(C)
  return (
  <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 10, padding: 14 }}>
    <div style={S.label}>{label}</div>
    <div style={{ fontFamily: "'JetBrains Mono',monospace", fontWeight: 700, fontSize: 15, color: color || C.text }}>{value}</div>
    {sub && <div style={{ fontSize: 11, color: C.sub, marginTop: 4 }}>{sub}</div>}
  </div>
)
}

function RowItem({ label, value, accent, color }) {
  const C = useC()
  const S = getS(C)
  return (
  <div style={S.row}>
    <span style={{ fontSize: 13, color: C.sub }}>{label}</span>
    <span style={{ fontSize: 13, fontWeight: accent ? 800 : 600, color: color || (accent ? C.accent : C.text), fontFamily: "'JetBrains Mono',monospace" }}>{value}</span>
  </div>
)
}

// ─── STOCK ANALYZER ────────────────────────────────────────────────────────────
function StockAnalyzer() {
  const C = useC()
  const S = getS(C)
  const [ticker, setTicker] = useState('')
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [tab, setTab] = useState('fundamental')

  const analyze = async () => {
    if (!ticker.trim()) return
    setLoading(true); setError(''); setData(null)
    try {
      const sym = ticker.toUpperCase().trim()
      const to = Math.floor(Date.now() / 1000)
      const from = to - 365 * 86400

      // Use allSettled so one failing endpoint doesn't block the rest
      const [quoteR, profileR, metricsR, recsR, candlesR] = await Promise.allSettled([
        fh(`/quote?symbol=${sym}`),
        fh(`/stock/profile2?symbol=${sym}`),
        fh(`/stock/metric?symbol=${sym}&metric=all`),
        fh(`/stock/recommendation?symbol=${sym}`),
        fh(`/stock/candle?symbol=${sym}&resolution=D&from=${from}&to=${to}`),
      ])

      // Surface the first real error encountered
      const firstErr = [quoteR, profileR].find(r => r.status === 'rejected')
      if (firstErr) throw new Error(firstErr.reason?.message || 'Failed to load quote data')

      const quote   = quoteR.value
      const profile = profileR.status === 'fulfilled' ? profileR.value : {}
      const metrics = metricsR.status === 'fulfilled' ? metricsR.value : {}
      const recs    = recsR.status   === 'fulfilled' ? recsR.value   : []
      const candles = candlesR.status === 'fulfilled' ? candlesR.value : { s: 'no_data' }

      // Validate the quote actually has data
      if (!quote?.c && quote?.c !== 0) throw new Error('Ticker not found or no data available')

      setData({ quote, profile, m: metrics?.metric || {}, recs: recs || [], candles, sym })
    } catch (e) {
      const msg = e.message || ''
      if (msg.includes('Invalid API key') || msg.includes('401') || msg.includes('403')) {
        setError('Invalid Finnhub API key. Contact support.')
      } else if (msg.includes('Rate limit') || msg.includes('429')) {
        setError('Finnhub rate limit reached (60 calls/min). Wait a moment and try again.')
      } else if (msg.includes('Ticker not found') || msg.includes('no data')) {
        setError(`Ticker "${ticker.toUpperCase()}" not found. Check the symbol and try again.`)
      } else {
        setError(`Could not load data: ${msg || 'Unknown error. Check your API key and ticker.'}`)
      }
    }
    setLoading(false)
  }

  const closes = data?.candles?.c || []
  const currentPrice = data?.quote?.c
  const up = (data?.quote?.dp || 0) >= 0
  const rsi14 = calcRSI(closes)
  const sma20 = calcSMA(closes, 20)
  const sma50 = calcSMA(closes, 50)
  const smaYear = calcSMA(closes, 52)
  const rec = data?.recs?.[0]
  const total = rec ? rec.strongBuy + rec.buy + rec.hold + rec.sell + rec.strongSell : 0

  const priceChart = (data?.candles?.t || []).slice(-52).map((t, i) => ({
    d: new Date(t * 1000).toLocaleDateString('en-US', { month: 'short', year: '2-digit' }),
    p: parseFloat((closes[closes.length - 52 + i] || 0).toFixed(2)),
  }))

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

      <div style={{ display: 'flex', gap: 10 }}>
        <input value={ticker} onChange={e => setTicker(e.target.value.toUpperCase())} onKeyDown={e => e.key === 'Enter' && analyze()} placeholder="Enter ticker symbol — AAPL · MSFT · NVDA · TSLA" style={{ ...S.input, flex: 1, fontSize: 15 }} />
        <button style={S.btn()} onClick={analyze} disabled={loading}><Search size={14} />{loading ? 'Loading…' : 'Analyze'}</button>
      </div>
      {error && <div style={{ color: C.neg, background: `${C.neg}15`, borderRadius: 8, padding: '12px 16px', fontSize: 13 }}>{error}</div>}

      {data && (<>
        {/* Header */}
        <div style={{ ...S.card, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <div>
            <div style={{ fontSize: 12, color: C.sub }}>{data.profile?.exchange} · {data.profile?.finnhubIndustry}</div>
            <div style={{ fontFamily: "'Sora',sans-serif", fontSize: 24, fontWeight: 800, marginTop: 4, color: C.text }}>{data.profile?.name || data.sym}</div>
            <div style={{ fontSize: 13, color: C.sub, marginTop: 5 }}>Mkt Cap: {fmtL((data.profile?.marketCapitalization || 0) * 1e6)} · Employees: {data.profile?.employeeTotal?.toLocaleString() || '—'}</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 38, fontWeight: 700 }}>{fmtD(currentPrice)}</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: up ? C.pos : C.neg }}>{up ? '▲' : '▼'} {fmtP(Math.abs(data.quote?.dp || 0))} today</div>
            <div style={{ fontSize: 12, color: C.sub, marginTop: 4 }}>O {fmtD(data.quote?.o)} · H {fmtD(data.quote?.h)} · L {fmtD(data.quote?.l)}</div>
          </div>
        </div>

        {/* Price chart */}
        {priceChart.length > 4 && (
          <div style={S.card}>
            <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 14 }}>52-Week Price History (Weekly)</div>
            <ResponsiveContainer width="100%" height={175}>
              <AreaChart data={priceChart}>
                <defs><linearGradient id="pg" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor={up ? C.pos : C.neg} stopOpacity={0.25}/><stop offset="95%" stopColor={up ? C.pos : C.neg} stopOpacity={0}/></linearGradient></defs>
                <CartesianGrid strokeDasharray="3 3" stroke={C.border} />
                <XAxis dataKey="d" tick={{ fill: C.sub, fontSize: 10 }} />
                <YAxis tick={{ fill: C.sub, fontSize: 10 }} tickFormatter={v => `$${v}`} domain={['auto','auto']} width={60} />
                <Tooltip contentStyle={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 9 }} labelStyle={{ color: C.sub, fontSize: 11 }} formatter={v => [fmtD(v), 'Price']} />
                <Area type="monotone" dataKey="p" stroke={up ? C.pos : C.neg} fill="url(#pg)" strokeWidth={2} dot={false} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        )}

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 8 }}>
          {['fundamental', 'analyst'].map(t => <button key={t} style={S.tab(tab === t)} onClick={() => setTab(t)}>{t.charAt(0).toUpperCase() + t.slice(1)} Analysis</button>)}
        </div>

        {/* FUNDAMENTAL */}
        {tab === 'fundamental' && (
          <div style={S.card}>
            <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 16 }}>Fundamental Analysis</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(155px, 1fr))', gap: 10 }}>
              {[
                { label: 'P/E Ratio (TTM)', value: fmtN(data.m['peBasicExclExtraTTM']) },
                { label: 'EPS (Annual)', value: data.m['epsBasicExclExtraAnnual'] ? `$${fmtN(data.m['epsBasicExclExtraAnnual'])}` : '—' },
                { label: 'P/B Ratio', value: fmtN(data.m['pbAnnual']) },
                { label: 'P/S Ratio (TTM)', value: fmtN(data.m['psTTM']) },
                { label: 'Debt / Equity', value: fmtN(data.m['totalDebt/totalEquityAnnual']) },
                { label: 'Current Ratio', value: fmtN(data.m['currentRatioAnnual']) },
                { label: 'Gross Margin', value: data.m['grossMarginTTM'] ? `${fmtN(data.m['grossMarginTTM'])}%` : '—' },
                { label: 'Net Margin', value: data.m['netProfitMarginTTM'] ? `${fmtN(data.m['netProfitMarginTTM'])}%` : '—' },
                { label: 'ROE (TTM)', value: data.m['roeTTM'] ? `${fmtN(data.m['roeTTM'])}%` : '—' },
                { label: 'ROA (TTM)', value: data.m['roaTTM'] ? `${fmtN(data.m['roaTTM'])}%` : '—' },
                { label: 'Revenue / Share', value: data.m['revenuePerShareTTM'] ? `$${fmtN(data.m['revenuePerShareTTM'])}` : '—' },
                { label: 'Free Cash Flow', value: fmtL(data.m['freeCashFlowTTM']) },
                { label: 'Dividend Yield', value: data.m['dividendYieldIndicatedAnnual'] ? `${fmtN(data.m['dividendYieldIndicatedAnnual'])}%` : '—' },
                { label: 'Beta', value: fmtN(data.m['beta']) },
                { label: '52W High', value: fmtD(data.m['52WeekHigh']) },
                { label: '52W Low', value: fmtD(data.m['52WeekLow']) },
              ].map(({ label, value }) => <Tile key={label} label={label} value={value} />)}
            </div>
          </div>
        )}



        {/* ANALYST */}
        {tab === 'analyst' && (
          <div style={S.card}>
            <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 16 }}>Analyst Review</div>
            {rec && total > 0 ? (<>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 8, marginBottom: 18 }}>
                {[{ label: 'Strong Buy', count: rec.strongBuy, color: C.pos }, { label: 'Buy', count: rec.buy, color: '#5BC97F' }, { label: 'Hold', count: rec.hold, color: C.warn }, { label: 'Sell', count: rec.sell, color: '#FF8070' }, { label: 'Strong Sell', count: rec.strongSell, color: C.neg }].map(({ label, count, color }) => (
                  <div key={label} style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 9, padding: '14px 8px', textAlign: 'center' }}>
                    <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 26, fontWeight: 800, color }}>{count}</div>
                    <div style={{ fontSize: 10, color: C.sub, marginTop: 4 }}>{label}</div>
                  </div>
                ))}
              </div>
              {(() => {
                const buyPct = Math.round((rec.strongBuy + rec.buy) / total * 100)
                const holdPct = Math.round(rec.hold / total * 100)
                const sellPct = 100 - buyPct - holdPct
                return (<>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: C.sub, marginBottom: 5 }}>
                    <span>Buy {buyPct}%</span><span>Hold {holdPct}%</span><span>Sell {sellPct}%</span>
                  </div>
                  <div style={{ height: 8, borderRadius: 4, overflow: 'hidden', display: 'flex', marginBottom: 16 }}>
                    <div style={{ width: `${buyPct}%`, background: C.pos }} />
                    <div style={{ width: `${holdPct}%`, background: C.warn }} />
                    <div style={{ width: `${sellPct}%`, background: C.neg }} />
                  </div>
                  <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 9, padding: 14 }}>
                    <div style={{ fontSize: 13, fontWeight: 600 }}>Period: {rec.period}</div>
                    <div style={{ fontSize: 12, color: C.sub, marginTop: 5 }}>
                      Consensus: {buyPct > 55 ? '🟢 Bullish' : sellPct > 35 ? '🔴 Bearish' : '🟡 Mixed'} · {total} analyst{total !== 1 ? 's' : ''} covering
                    </div>
                  </div>
                </>)
              })()}
              <div style={{ fontSize: 11, color: C.sub, fontStyle: 'italic', marginTop: 12 }}>Analyst ratings are third-party opinions — not a recommendation to buy or sell.</div>
            </>) : <div style={{ color: C.sub, fontSize: 13 }}>No analyst ratings available for this symbol.</div>}
          </div>
        )}
      </>)}

      {!data && !loading && !error && (
        <div style={{ ...S.card, textAlign: 'center', padding: 60, color: C.sub }}>
          <TrendingUp size={48} color={C.dim} style={{ display: 'block', margin: '0 auto 16px' }} />
          <div style={{ fontSize: 17, color: C.text, marginBottom: 8, fontWeight: 600 }}>Enter a ticker to get started</div>
          <div style={{ fontSize: 13 }}>Try AAPL · MSFT · NVDA · TSLA · AMZN · GOOGL · BRK.B</div>
        </div>
      )}
    </div>
  )
}

// ─── COMPOUND INTEREST ────────────────────────────────────────────────────────
function CompoundCalc() {
  const C = useC()
  const S = getS(C)

  const [principal, setPrincipal] = useState(10000)
  const [rate, setRate] = useState(7)
  const [years, setYears] = useState(20)
  const [monthly, setMonthly] = useState(200)

  const chartData = []
  let bal = principal
  for (let y = 0; y <= years; y++) {
    chartData.push({ year: `Y${y}`, Invested: Math.round(principal + monthly * y * 12), Balance: Math.round(bal) })
    for (let m = 0; m < 12; m++) bal = bal * (1 + rate / 100 / 12) + monthly
  }
  const finalBal = chartData[chartData.length - 1].Balance
  const totalInvested = chartData[chartData.length - 1].Invested
  const growth = finalBal - totalInvested
  const multiplier = totalInvested > 0 ? (finalBal / totalInvested).toFixed(1) : '—'

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 22 }}>
      <div>
        <DualInput label="Initial Investment" value={principal} onChange={setPrincipal} min={0} max={500000} step={500} prefix="$" w={90} />
        <DualInput label="Annual Return" value={rate} onChange={setRate} min={0} max={25} step={0.5} suffix="%" w={60} />
        <DualInput label="Time Horizon" value={years} onChange={setYears} min={1} max={50} step={1} suffix=" yrs" w={60} />
        <DualInput label="Monthly Contribution" value={monthly} onChange={setMonthly} min={0} max={5000} step={50} prefix="$" w={80} />
        <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 11, padding: 16, marginTop: 8 }}>
          <RowItem label="Total Invested" value={fmtK(totalInvested)} />
          <RowItem label="Investment Growth" value={fmtK(growth)} color={C.pos} />
          <RowItem label="Final Balance" value={fmtK(finalBal)} accent />
          <RowItem label="Money Multiplied" value={`${multiplier}x`} color={C.gold} />
        </div>
      </div>
      <div style={S.card}>
        <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 14 }}>Growth Breakdown</div>
        <ResponsiveContainer width="100%" height={220}>
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="invGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor={C.blue} stopOpacity={0.4}/><stop offset="95%" stopColor={C.blue} stopOpacity={0}/></linearGradient>
              <linearGradient id="balGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor={C.pos} stopOpacity={0.4}/><stop offset="95%" stopColor={C.pos} stopOpacity={0}/></linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke={C.border} />
            <XAxis dataKey="year" tick={{ fill: C.sub, fontSize: 10 }} interval={Math.floor(years / 5)} />
            <YAxis tick={{ fill: C.sub, fontSize: 10 }} tickFormatter={v => fmtK(v)} width={65} />
            <Tooltip contentStyle={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 9 }} labelStyle={{ color: C.sub, fontSize: 11 }} formatter={v => [fmtK(v)]} />
            <Legend wrapperStyle={{ fontSize: 11, color: C.sub }} />
            <Area type="monotone" dataKey="Invested" stroke={C.blue} fill="url(#invGrad)" strokeWidth={2} dot={false} />
            <Area type="monotone" dataKey="Balance" stroke={C.pos} fill="url(#balGrad)" strokeWidth={2} dot={false} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

// ─── MORTGAGE CALCULATOR ─────────────────────────────────────────────────────
function MortgageCalc() {
  const C = useC()
  const S = getS(C)

  const [homePrice, setHomePrice] = useState(400000)
  const [downPct, setDownPct] = useState(20)
  const [rate, setRate] = useState(7)
  const [termYrs, setTermYrs] = useState(30)

  const principal = homePrice * (1 - downPct / 100)
  const mr = rate / 100 / 12
  const n = termYrs * 12
  const payment = mr > 0 ? principal * (mr * Math.pow(1 + mr, n)) / (Math.pow(1 + mr, n) - 1) : principal / n
  const totalPaid = payment * n
  const totalInterest = totalPaid - principal

  // Yearly amortization
  const amorData = []
  let balance = principal
  for (let y = 1; y <= termYrs && balance > 0.01; y++) {
    let yPrincipal = 0, yInterest = 0
    for (let m = 0; m < 12 && balance > 0.01; m++) {
      const iCharge = balance * mr
      const pCharge = Math.min(payment - iCharge, balance)
      yInterest += iCharge; yPrincipal += pCharge; balance = Math.max(0, balance - pCharge)
    }
    amorData.push({ year: `Y${y}`, Principal: Math.round(yPrincipal), Interest: Math.round(yInterest), Balance: Math.round(balance) })
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

      <div className="mobile-stack" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22 }}>
        <div>
          <DualInput label="Home Price" value={homePrice} onChange={setHomePrice} min={50000} max={3000000} step={5000} prefix="$" w={100} />
          <DualInput label="Down Payment" value={downPct} onChange={setDownPct} min={0} max={50} step={1} suffix="%" w={55} />
          <DualInput label="Interest Rate" value={rate} onChange={setRate} min={1} max={15} step={0.125} suffix="%" w={60} />
          <DualInput label="Loan Term" value={termYrs} onChange={setTermYrs} min={5} max={30} step={5} suffix=" yrs" w={55} />
          <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 11, padding: 16 }}>
            <RowItem label="Loan Amount" value={fmtK(principal)} />
            <RowItem label="Monthly Payment" value={fmtK(payment)} accent />
            <RowItem label="Total Interest" value={fmtK(totalInterest)} color={C.neg} />
            <RowItem label="Total Paid" value={fmtK(totalPaid)} />
            <RowItem label="Interest % of Total" value={`${((totalInterest / totalPaid) * 100).toFixed(1)}%`} color={C.warn} />
          </div>
        </div>
        <div style={S.card}>
          <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 14 }}>Principal vs. Interest per Year</div>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={amorData.filter((_, i) => i % 2 === 0 || amorData.length <= 15)}>
              <CartesianGrid strokeDasharray="3 3" stroke={C.border} />
              <XAxis dataKey="year" tick={{ fill: C.sub, fontSize: 9 }} />
              <YAxis tick={{ fill: C.sub, fontSize: 9 }} tickFormatter={v => fmtK(v)} width={58} />
              <Tooltip contentStyle={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 9 }} formatter={v => [fmtK(v)]} />
              <Legend wrapperStyle={{ fontSize: 11, color: C.sub }} />
              <Bar dataKey="Principal" stackId="a" fill={C.pos} radius={[0,0,0,0]} />
              <Bar dataKey="Interest" stackId="a" fill={C.neg} radius={[3,3,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* Amortization table */}
      <div style={S.card}>
        <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 14 }}>Amortization Schedule (Yearly)</div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
            <thead>
              <tr style={{ borderBottom: `2px solid ${C.border}` }}>
                {['Year', 'Principal Paid', 'Interest Paid', 'Total Paid', 'Remaining Balance'].map(h => (
                  <th key={h} style={{ padding: '8px 12px', textAlign: 'right', color: C.sub, fontWeight: 700, fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {amorData.map((r, i) => (
                <tr key={i} style={{ borderBottom: `1px solid ${C.border}`, background: i % 2 === 0 ? 'transparent' : `${C.surface}60` }}>
                  <td style={{ padding: '7px 12px', color: C.sub, textAlign: 'right' }}>{r.year}</td>
                  <td style={{ padding: '7px 12px', color: C.pos, textAlign: 'right', fontFamily: "'JetBrains Mono',monospace" }}>{fmtK(r.Principal)}</td>
                  <td style={{ padding: '7px 12px', color: C.neg, textAlign: 'right', fontFamily: "'JetBrains Mono',monospace" }}>{fmtK(r.Interest)}</td>
                  <td style={{ padding: '7px 12px', color: C.text, textAlign: 'right', fontFamily: "'JetBrains Mono',monospace" }}>{fmtK(r.Principal + r.Interest)}</td>
                  <td style={{ padding: '7px 12px', color: C.warn, textAlign: 'right', fontFamily: "'JetBrains Mono',monospace" }}>{fmtK(r.Balance)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

// ─── RETIREMENT CALCULATOR ────────────────────────────────────────────────────
function RetirementCalc() {
  const C = useC()
  const S = getS(C)

  const [currentAge, setCurrentAge] = useState(35)
  const [retireAge, setRetireAge] = useState(65)
  const [deathAge, setDeathAge] = useState(90)
  const [currentSavings, setCurrentSavings] = useState(50000)
  const [monthlySavings, setMonthlySavings] = useState(800)
  const [annualReturn, setAnnualReturn] = useState(8)
  const [guaranteedMonthly, setGuaranteedMonthly] = useState(2500)
  const [monthlyExpenses, setMonthlyExpenses] = useState(6000)

  const annualRate = annualReturn / 100
  const netWithdrawal = Math.max(0, monthlyExpenses - guaranteedMonthly)

  // ── Accumulation simulation: monthly savings stop at retirement
  // Annual compounding applied every 12 months
  const simulateAccumulation = (ms) => {
    let balance = currentSavings
    const totalAccMonths = (retireAge - currentAge) * 12
    for (let m = 0; m < totalAccMonths; m++) {
      balance += ms                          // add monthly savings
      if ((m + 1) % 12 === 0) {             // compound annually
        balance *= (1 + annualRate)
      }
    }
    return balance
  }

  const savingsAtRetirement = simulateAccumulation(monthlySavings)

  // ── Distribution simulation: savings continue to compound, shortfall subtracted monthly
  const simDrawdown = (startSavings) => {
    let s = startSavings
    let depletedAt = null
    const yearly = []
    const totalDrawMonths = (deathAge - retireAge) * 12
    for (let i = 0; i < totalDrawMonths; i++) {
      s -= netWithdrawal                      // subtract monthly shortfall
      if ((i + 1) % 12 === 0) {              // compound annually
        s *= (1 + annualRate)
      }
      if (s <= 0 && depletedAt === null) depletedAt = i + 1
      if ((i + 1) % 12 === 0) yearly.push({ age: retireAge + (i + 1) / 12, balance: Math.max(0, Math.round(s)) })
    }
    return { finalBalance: s, depletedAt, yearly }
  }

  const { finalBalance, depletedAt, yearly } = simDrawdown(savingsAtRetirement)

  // ── Required monthly savings (binary search)
  let lo = 0, hi = 20000
  for (let i = 0; i < 60; i++) {
    const mid = (lo + hi) / 2
    const { finalBalance: fb } = simDrawdown(simulateAccumulation(mid))
    if (fb >= 0) hi = mid; else lo = mid
  }
  const requiredMonthlySavings = hi

  const totalGuaranteedIncome = guaranteedMonthly * (deathAge - retireAge) * 12
  const annualWithdrawal = netWithdrawal * 12
  const pctFromSavings = monthlyExpenses > 0 ? (netWithdrawal / monthlyExpenses * 100).toFixed(0) : 0
  const pctFromGuaranteed = monthlyExpenses > 0 ? (guaranteedMonthly / monthlyExpenses * 100).toFixed(0) : 0

  // ── Chart data: accumulation phase
  const chartData = []
  let accBal = currentSavings
  for (let y = 0; y <= retireAge - currentAge; y++) {
    chartData.push({ age: currentAge + y, balance: Math.round(accBal), phase: 'Saving' })
    for (let m = 0; m < 12; m++) accBal += monthlySavings
    accBal *= (1 + annualRate)
  }
  yearly.forEach(pt => chartData.push({ age: Math.round(pt.age), balance: pt.balance, phase: 'Retirement' }))

  const lasts = depletedAt == null
  const depletedAge = depletedAt ? retireAge + depletedAt / 12 : null

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 22 }}>
        <div>
          <DualInput label="Current Age" value={currentAge} onChange={setCurrentAge} min={18} max={retireAge - 1} step={1} suffix=" yrs" w={55} />
          <DualInput label="Retirement Age" value={retireAge} onChange={v => setRetireAge(Math.max(currentAge + 1, v))} min={currentAge + 1} max={80} step={1} suffix=" yrs" w={55} />
          <DualInput label="Expected Death Age" value={deathAge} onChange={v => setDeathAge(Math.max(retireAge + 1, v))} min={retireAge + 1} max={110} step={1} suffix=" yrs" w={55} />
          <DualInput label="Current Savings" value={currentSavings} onChange={setCurrentSavings} min={0} max={2000000} step={5000} prefix="$" w={90} />
          <DualInput label="Monthly Savings (now)" value={monthlySavings} onChange={setMonthlySavings} min={0} max={10000} step={50} prefix="$" w={80} />
          <DualInput label="Expected Annual Return" value={annualReturn} onChange={setAnnualReturn} min={1} max={15} step={0.5} suffix="%" w={55} />
          <DualInput label="Guaranteed Monthly Income (SS + Pension)" value={guaranteedMonthly} onChange={setGuaranteedMonthly} min={0} max={10000} step={50} prefix="$" w={80} />
          <DualInput label="Expected Monthly Expenses in Retirement" value={monthlyExpenses} onChange={setMonthlyExpenses} min={0} max={20000} step={100} prefix="$" w={80} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Status card */}
          <div style={{ ...S.card, background: lasts ? `${C.pos}15` : `${C.neg}15`, borderColor: lasts ? `${C.pos}50` : `${C.neg}50` }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: lasts ? C.pos : C.neg, marginBottom: 8 }}>
              {lasts ? '✅ Your savings will last until age ' + deathAge : `⚠️ Savings depleted at age ${depletedAge?.toFixed(0)}`}
            </div>
            <div style={{ fontSize: 13, color: C.sub }}>
              {lasts ? `You have $${Math.round(finalBalance).toLocaleString()} remaining at death` : `You run out ${(deathAge - (depletedAge || 0)).toFixed(0)} years before your target`}
            </div>
          </div>
          {/* Summary table */}
          <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 11, padding: 16 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: C.sub, marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Retirement Summary</div>
            <RowItem label="Savings at Retirement" value={fmtK(savingsAtRetirement)} accent />
            <RowItem label="Annual Withdrawal from Savings" value={fmtK(annualWithdrawal)} />
            <RowItem label="% of Expenses from Savings" value={`${pctFromSavings}%`} color={C.warn} />
            <RowItem label="% from Guaranteed Income" value={`${pctFromGuaranteed}%`} color={C.pos} />
            <RowItem label="Total Guaranteed Income (lifetime)" value={fmtK(totalGuaranteedIncome)} color={C.pos} />
            <RowItem label="Monthly Total Income" value={fmtK(monthlyExpenses)} />
          </div>
          {/* Required savings nudge */}
          <div style={{ background: `${C.accent}12`, border: `1px solid ${C.accent}40`, borderRadius: 11, padding: 16 }}>
            <div style={{ fontSize: 11, color: C.sub, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>Minimum Monthly Savings Needed</div>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 28, fontWeight: 800, color: C.accent }}>{fmtK(requiredMonthlySavings)}</div>
            <div style={{ fontSize: 12, color: C.sub, marginTop: 5 }}>
              {monthlySavings >= requiredMonthlySavings ? `✅ You're saving ${fmtK(monthlySavings - requiredMonthlySavings)}/mo more than needed` : `⚠️ You need ${fmtK(requiredMonthlySavings - monthlySavings)}/mo more`}
            </div>
          </div>
        </div>
      </div>
      {/* Balance projection chart */}
      <div style={S.card}>
        <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 14 }}>Savings Balance Projection (Age {currentAge} to {deathAge})</div>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="retGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={C.blue} stopOpacity={0.4}/><stop offset="95%" stopColor={C.blue} stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke={C.border} />
            <XAxis dataKey="age" tick={{ fill: C.sub, fontSize: 10 }} label={{ value: 'Age', position: 'insideBottom', fill: C.sub, fontSize: 10, dy: 10 }} height={32} />
            <YAxis tick={{ fill: C.sub, fontSize: 10 }} tickFormatter={v => fmtK(v)} width={65} />
            <Tooltip contentStyle={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 9 }} labelFormatter={v => `Age ${v}`} formatter={v => [fmtK(v), 'Balance']} />
            <Area type="monotone" dataKey="balance" stroke={C.blue} fill="url(#retGrad)" strokeWidth={2} dot={false} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div style={{ fontSize: 11, color: C.sub, fontStyle: 'italic' }}>Returns are projected at {annualReturn}% annually. Actual results will vary. Not financial advice.</div>
    </div>
  )
}

// ─── DEBT PAYOFF ──────────────────────────────────────────────────────────────
function DebtCalc() {
  const C = useC()
  const S = getS(C)

  const [debts, setDebts] = useState([
    { id: 1, name: 'Credit Card', balance: 8000, rate: 22, payment: 250 },
    { id: 2, name: 'Car Loan', balance: 15000, rate: 6.5, payment: 320 },
    { id: 3, name: 'Student Loan', balance: 28000, rate: 5.0, payment: 300 },
  ])
  const [extra, setExtra] = useState(0)
  const [method, setMethod] = useState('avalanche')
  const [form, setForm] = useState({ name: '', balance: '', rate: '', payment: '' })

  const addDebt = () => {
    if (!form.balance || !form.rate || !form.payment) return
    setDebts([...debts, { id: Date.now(), name: form.name || `Debt ${debts.length + 1}`, balance: +form.balance, rate: +form.rate, payment: +form.payment }])
    setForm({ name: '', balance: '', rate: '', payment: '' })
  }

  const sim = (extraPay, strat) => {
    let ds = debts.map(d => ({ ...d, interestPaid: 0, paidOffMonth: 0 }))
    let month = 0, totalInterest = 0
    while (ds.some(d => d.balance > 0.01) && month < 600) {
      month++
      const active = ds.filter(d => d.balance > 0.01)
      const sorted = [...active].sort((a, b) => strat === 'avalanche' ? b.rate - a.rate : a.balance - b.balance)
      ds.forEach(d => {
        if (d.balance <= 0.01) return
        const iCharge = d.balance * d.rate / 100 / 12
        totalInterest += iCharge; d.interestPaid += iCharge
        d.balance = Math.max(0, d.balance + iCharge - Math.min(d.balance + iCharge, d.payment))
        if (d.balance < 0.01 && !d.paidOffMonth) d.paidOffMonth = month
      })
      let rem = extraPay
      for (const t of sorted) {
        const d = ds.find(x => x.id === t.id)
        if (!d || d.balance < 0.01 || rem <= 0) continue
        const apply = Math.min(d.balance, rem); d.balance -= apply; rem -= apply
        if (d.balance < 0.01 && !d.paidOffMonth) d.paidOffMonth = month
      }
    }
    return { months: month, totalInterest, debts: ds }
  }

  const result = sim(extra, method)
  const altResult = sim(extra, method === 'avalanche' ? 'snowball' : 'avalanche')
  const totalDebt = debts.reduce((s, d) => s + d.balance, 0)
  const totalMinPayment = debts.reduce((s, d) => s + d.payment, 0)

  const chartData = result.debts.map(d => ({
    name: d.name,
    Months: d.paidOffMonth || result.months,
    'Interest Paid': Math.round(d.interestPaid),
  }))

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {/* Debt list */}
      <div style={S.card}>
        <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 14 }}>Your Debts</div>
        {debts.map(d => (
          <div key={d.id} style={{ display: 'flex', gap: 10, alignItems: 'center', background: C.surface, borderRadius: 8, padding: '10px 14px', marginBottom: 8 }}>
            <span style={{ flex: 2, fontSize: 13, fontWeight: 600 }}>{d.name}</span>
            <span style={{ flex: 1, fontFamily: "'JetBrains Mono',monospace", fontSize: 13 }}>{fmtK(d.balance)}</span>
            <span style={{ flex: 1, fontSize: 13, color: C.neg }}>{d.rate}% APR</span>
            <span style={{ flex: 1, fontSize: 13, color: C.pos }}>{fmtK(d.payment)}/mo min</span>
            <button onClick={() => setDebts(debts.filter(x => x.id !== d.id))} style={{ background: 'none', border: 'none', color: C.sub, cursor: 'pointer', padding: 4 }}><Trash2 size={14} /></button>
          </div>
        ))}
        {/* Add debt form */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr auto', gap: 8, marginTop: 14 }}>
          {[['Debt name (optional)', 'name'], ['Balance $', 'balance'], ['Rate %', 'rate'], ['Min Payment $', 'payment']].map(([ph, key]) => (
            <input key={key} placeholder={ph} type={key === 'name' ? 'text' : 'number'} value={form[key]}
              onChange={e => setForm({ ...form, [key]: e.target.value })}
              onKeyDown={e => e.key === 'Enter' && addDebt()}
              style={S.input} />
          ))}
          <button onClick={addDebt} style={S.btn()}><Plus size={14} />Add</button>
        </div>
      </div>

      {/* Strategy */}
      <div className="mobile-stack" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22 }}>
        <div>
          <div style={S.label}>Extra Monthly Payment</div>
          <DualInput label="" value={extra} onChange={setExtra} min={0} max={2000} step={25} prefix="$" w={75} />
          <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
            {[{ id: 'avalanche', label: '🏔 Avalanche', desc: 'Highest rate first — saves most interest' }, { id: 'snowball', label: '⛄ Snowball', desc: 'Lowest balance first — motivating wins' }].map(m => (
              <button key={m.id} onClick={() => setMethod(m.id)} style={{ flex: 1, ...S.tab(method === m.id), padding: '12px 10px' }}>
                <div>{m.label}</div>
                <div style={{ fontSize: 10, fontWeight: 400, marginTop: 3, opacity: 0.8 }}>{m.desc}</div>
              </button>
            ))}
          </div>
          <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 11, padding: 16, marginTop: 14 }}>
            <RowItem label="Total Debt" value={fmtK(totalDebt)} />
            <RowItem label="Min Monthly Payments" value={fmtK(totalMinPayment)} />
            <RowItem label="Total Monthly (with extra)" value={fmtK(totalMinPayment + extra)} accent />
            <RowItem label="Payoff Time" value={`${Math.floor(result.months / 12)}y ${result.months % 12}m`} color={C.pos} />
            <RowItem label="Total Interest" value={fmtK(result.totalInterest)} color={C.neg} />
            <RowItem label="vs. Alternate Strategy" value={result.totalInterest < altResult.totalInterest ? `Save ${fmtK(altResult.totalInterest - result.totalInterest)}` : `+${fmtK(result.totalInterest - altResult.totalInterest)} interest`} color={result.totalInterest < altResult.totalInterest ? C.pos : C.warn} />
          </div>
        </div>
        <div style={S.card}>
          <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 14 }}>Payoff Timeline by Debt</div>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={chartData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke={C.border} />
              <XAxis type="number" tick={{ fill: C.sub, fontSize: 9 }} label={{ value: 'Months', fill: C.sub, fontSize: 10 }} />
              <YAxis type="category" dataKey="name" tick={{ fill: C.sub, fontSize: 11 }} width={90} />
              <Tooltip contentStyle={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 9 }} formatter={(v, n) => [n === 'Months' ? `${v} months` : fmtK(v), n]} />
              <Bar dataKey="Months" fill={C.accent} radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

// ─── CALCULATORS WRAPPER ──────────────────────────────────────────────────────
function Calculators({ tier = 'free', setPage }) {
  const C = useC()
  const S = getS(C)

  const [tab, setTab] = useState('compound')
  const TABS = [{ id: 'compound', label: 'Compound Interest' }, { id: 'mortgage', label: 'Mortgage' }, { id: 'retirement', label: 'Retirement' }, { id: 'debt', label: 'Debt Payoff' }]
  return (
    <div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 22, flexWrap: 'wrap' }}>
        {TABS.map(t => <button key={t.id} style={S.tab(tab === t.id)} onClick={() => setTab(t.id)}>{t.label}</button>)}
      </div>
      {tab === 'compound' && <CompoundCalc />}
      {tab === 'mortgage' && <PaywallGate required='premium' userTier={tier} feature='Mortgage Calculator' setPage={setPage}><MortgageCalc /></PaywallGate>}
      {tab === 'retirement' && <PaywallGate required='premium' userTier={tier} feature='Retirement Planner' setPage={setPage}><RetirementCalc /></PaywallGate>}
      {tab === 'debt' && <PaywallGate required='premium' userTier={tier} feature='Debt Payoff Calculator' setPage={setPage}><DebtCalc /></PaywallGate>}
    </div>
  )
}

// ─── MARKET DATA ──────────────────────────────────────────────────────────────
const FRED_SERIES = [
  { id: 'FEDFUNDS', label: 'Fed Funds Rate', suffix: '%', colorKey: 'accent' },
  { id: 'UNRATE', label: 'Unemployment Rate', suffix: '%', colorKey: 'warn' },
  { id: 'CPIAUCSL', label: 'CPI Inflation', suffix: '', colorKey: 'neg' },
  { id: 'DGS10', label: '10-Yr Treasury', suffix: '%', colorKey: 'blue' },
  { id: 'GDPC1', label: 'Real GDP (B)', suffix: 'B', colorKey: 'pos' },
  { id: 'M2SL', label: 'M2 Money Supply (B)', suffix: 'B', colorKey: 'purple' },
]
const MORTGAGE_SERIES = [
  { id: 'MORTGAGE30US', label: '30-Yr Fixed Mortgage', suffix: '%', colorKey: 'blue',   icon: '🏠', desc: 'National avg — Freddie Mac weekly survey', frequency: 'Weekly' },
  { id: 'MORTGAGE15US', label: '15-Yr Fixed Mortgage', suffix: '%', colorKey: 'blue',   icon: '🏡', desc: 'National avg — Freddie Mac weekly survey', frequency: 'Weekly' },
  { id: 'PRIME',        label: 'Bank Prime Rate',      suffix: '%', colorKey: 'accent', icon: '🏦', desc: 'Basis for HELOCs and adjustable rate loans', frequency: 'As changed' },
]
const INDICES = [
  { sym: 'SPY', label: 'S&P 500 (SPY)', colorKey: 'blue' },
  { sym: 'QQQ', label: 'Nasdaq 100 (QQQ)', colorKey: 'accent' },
  { sym: 'DIA', label: 'Dow Jones (DIA)', colorKey: 'pos' },
  { sym: 'IWM', label: 'Russell 2000 (IWM)', colorKey: 'warn' },
]
const CRYPTOS = [
  { id: 'bitcoin', label: 'Bitcoin', sym: 'BTC' },
  { id: 'ethereum', label: 'Ethereum', sym: 'ETH' },
  { id: 'solana', label: 'Solana', sym: 'SOL' },
  { id: 'cardano', label: 'Cardano', sym: 'ADA' },
  { id: 'ripple', label: 'XRP', sym: 'XRP' },
  { id: 'dogecoin', label: 'Dogecoin', sym: 'DOGE' },
  { id: 'polkadot', label: 'Polkadot', sym: 'DOT' },
  { id: 'chainlink', label: 'Chainlink', sym: 'LINK' },
]

function MarketData() {
  const C = useC()
  const S = getS(C)
  const [tab, setTab] = useState('crypto')
  const [crypto, setCrypto] = useState(null)
  const [indices, setIndices] = useState(null)
  const [economic, setEconomic] = useState(null)
  const [econError, setEconError] = useState('')
  const [rates, setRates] = useState(null)
  const [ratesError, setRatesError] = useState('')
  const [loading, setLoading] = useState(false)

  const loadCrypto = async () => {
    setLoading(true)
    try {
      const ids = CRYPTOS.map(c => c.id).join(',')
      const r = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd&include_24hr_change=true&include_market_cap=true`)
      const d = await r.json()
      setCrypto(d)
    } catch {}
    setLoading(false)
  }

  const loadIndices = async () => {
    setLoading(true)
    try {
      const results = await Promise.allSettled(
        INDICES.map(idx => fh(`/quote?symbol=${idx.sym}`).then(q => ({ ...idx, quote: q })))
      )
      setIndices(results.map((r, i) => r.status === 'fulfilled' ? r.value : { ...INDICES[i], quote: null }))
    } catch (e) {
      console.error('Indices load error:', e.message)
      setIndices([])
    }
    setLoading(false)
  }

  const loadEconomic = async () => {
    setLoading(true)
    setEconomic(null)
    setEconError('')
    try {
      const ids = FRED_SERIES.map(s => s.id)
      const proxyResults = await fredFetchAll(ids)
      if (!proxyResults || proxyResults.length === 0) {
        throw new Error('No data returned from FRED proxy')
      }
      const merged = FRED_SERIES.map(s => {
        const match = proxyResults.find(r => r.id === s.id)
        return { ...s, data: match?.data || [], error: match?.error }
      })
      setEconomic(merged)
    } catch (e) {
      const msg = e.message || 'Unknown error'
      console.error('FRED load error:', msg)
      setEconError(msg)
      setEconomic([])
    }
    setLoading(false)
  }

  const loadRates = async () => {
    setLoading(true)
    setRates(null)
    setRatesError('')
    try {
      // Fetch mortgage/prime from FRED (weekly/daily) + consumer rates from market-rates route
      const [mortgageRes, consumerRes] = await Promise.allSettled([
        fredFetchAll(MORTGAGE_SERIES.map(s => s.id)),
        fetch('/api/market-rates').then(r => r.json()),
      ])

      const mortgageData = mortgageRes.status === 'fulfilled'
        ? MORTGAGE_SERIES.map(s => {
            const match = (mortgageRes.value || []).find(r => r.id === s.id)
            return { ...s, data: match?.data || [], source: 'Federal Reserve / Freddie Mac' }
          })
        : []

      const consumerRates = consumerRes.status === 'fulfilled'
        ? (consumerRes.value?.rates || [])
        : []

      if (!mortgageData.length && !consumerRates.length) throw new Error('No rate data available')
      setRates({ mortgage: mortgageData, consumer: consumerRates })
    } catch (e) {
      setRatesError(e.message || 'Unknown error')
      setRates(null)
    }
    setLoading(false)
  }

  useEffect(() => { if (tab === 'crypto' && !crypto) loadCrypto() }, [tab])
  useEffect(() => { if (tab === 'indices') loadIndices() }, [tab])
  useEffect(() => { if (tab === 'economic') loadEconomic() }, [tab])
  useEffect(() => { if (tab === 'rates') loadRates() }, [tab])

  return (
    <div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
        {[{ id: 'crypto', label: '₿ Crypto' }, { id: 'indices', label: '📊 Market Indices' }, { id: 'economic', label: '🏛 Economic Data' }, { id: 'rates', label: '💳 Loan & Credit Rates' }].map(t => (
          <button key={t.id} style={S.tab(tab === t.id)} onClick={() => setTab(t.id)}>{t.label}</button>
        ))}
        <button onClick={() => { if (tab === 'crypto') { setCrypto(null); loadCrypto() } else if (tab === 'indices') { setIndices(null); loadIndices() } else if (tab === 'rates') { setRates(null); loadRates() } else { setEconomic(null); loadEconomic() } }}
          style={{ ...S.btn(C.dim), marginLeft: 'auto' }}><RefreshCw size={12} />Refresh</button>
      </div>

      {/* CRYPTO */}
      {tab === 'crypto' && (
        loading ? <div style={{ color: C.sub, padding: 24 }}>Loading crypto prices…</div> :
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 12 }}>
          {CRYPTOS.map(c => {
            const d = crypto?.[c.id]
            const up = (d?.usd_24h_change || 0) >= 0
            return (
              <div key={c.id} style={{ ...S.card, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700 }}>{c.label}</div>
                  <div style={{ fontSize: 11, color: C.sub }}>{c.sym}</div>
                  <div style={{ fontSize: 11, color: C.sub, marginTop: 4 }}>MCap: {d?.usd_market_cap ? fmtL(d.usd_market_cap) : '—'}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 16, fontWeight: 700 }}>{d ? fmtD(d.usd) : '—'}</div>
                  {d && <div style={{ fontSize: 12, color: up ? C.pos : C.neg, fontWeight: 700 }}>{up ? '▲' : '▼'} {Math.abs(d.usd_24h_change || 0).toFixed(2)}%</div>}
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* INDICES */}
      {tab === 'indices' && (
        loading ? <div style={{ color: C.sub, padding: 24 }}>Loading market data…</div> :
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 12 }}>
          {(indices || []).map(idx => {
            const q = idx.quote; const up = (q?.dp || 0) >= 0
            return (
              <div key={idx.sym} style={{ ...S.card }}>
                <div style={{ fontSize: 12, color: C.sub }}>{idx.sym}</div>
                <div style={{ fontSize: 15, fontWeight: 700, marginTop: 4 }}>{idx.label}</div>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 24, fontWeight: 800, marginTop: 10 }}>{q ? fmtD(q.c) : '—'}</div>
                <div style={{ fontSize: 13, color: up ? C.pos : C.neg, fontWeight: 700, marginTop: 4 }}>{up ? '▲' : '▼'} {fmtP(Math.abs(q?.dp || 0))} today</div>
                <div style={{ fontSize: 11, color: C.sub, marginTop: 4 }}>O: {fmtD(q?.o)} · H: {fmtD(q?.h)} · L: {fmtD(q?.l)}</div>
              </div>
            )
          })}
        </div>
      )}

      {/* ECONOMIC */}
      {tab === 'economic' && (
        loading ? <div style={{ color: C.sub, padding: 24, textAlign: 'center' }}>Loading economic data from FRED…</div> :
        econError ? (
          <div style={{ background: `${C.neg}18`, border: `1px solid ${C.neg}44`, borderRadius: 14, padding: '18px 22px', fontSize: 13, color: C.neg }}>
            <div style={{ fontWeight: 700, marginBottom: 8 }}>⚠️ Could not load economic data</div>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, background: `${C.neg}15`, borderRadius: 8, padding: '8px 12px', marginBottom: 10, wordBreak: 'break-all' }}>{econError}</div>
            <div style={{ opacity: 0.85 }}>Make sure <code style={{ background: `${C.neg}20`, padding: '1px 5px', borderRadius: 4 }}>FRED_API_KEY</code> is set in your Vercel environment variables, then redeploy.</div>
          </div>
        ) :
        economic && economic.length === 0 ? (
          <div style={{ color: C.sub, padding: 24, textAlign: 'center' }}>No data returned. Try refreshing.</div>
        ) :
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 14 }}>
          {(economic || []).map(s => {
            const latest = s.data?.[s.data.length - 1]; const prev = s.data?.[s.data.length - 2]
            const chg = latest && prev ? latest.value - prev.value : 0
            const sparkData = (s.data || []).slice(-12)
            return (
              <div key={s.id} style={S.card}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                  <div>
                    <div style={{ fontSize: 10, color: C.sub, fontFamily: 'monospace' }}>FRED:{s.id}</div>
                    <div style={{ fontSize: 13, fontWeight: 700, marginTop: 2 }}>{s.label}</div>
                  </div>
                  {latest && <div style={{ textAlign: 'right' }}>
                    <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 20, fontWeight: 800, color: C[s.colorKey] || C.accent }}>{latest.value.toFixed(2)}{s.suffix}</div>
                    <div style={{ fontSize: 11, color: chg >= 0 ? C.pos : C.neg }}>{chg >= 0 ? '▲' : '▼'} {Math.abs(chg).toFixed(2)}</div>
                  </div>}
                </div>
                <div style={{ height: 50, display: 'flex', alignItems: 'flex-end', gap: 2 }}>
                  {sparkData.map((pt, i) => {
                    const vals = sparkData.map(x => x.value); const mn = Math.min(...vals); const mx = Math.max(...vals)
                    const h = mx > mn ? Math.round(((pt.value - mn) / (mx - mn)) * 42) + 8 : 25
                    return <div key={i} style={{ flex: 1, height: h, background: C[s.colorKey] || C.accent, opacity: 0.5 + (i / sparkData.length) * 0.5, borderRadius: '2px 2px 0 0' }} />
                  })}
                </div>
                <div style={{ fontSize: 10, color: C.sub, marginTop: 8 }}>Latest: {latest?.date} · Federal Reserve</div>
              </div>
            )
          })}
        </div>
      )}


      {/* LOAN & CREDIT RATES */}
      {tab === 'rates' && (() => {
        const RateCard = ({ icon, label, desc, colorKey, value, date, source, frequency, sparkData }) => {
          const color = C[colorKey] || C.accent
          const vals = (sparkData || []).map(x => x.value)
          const mn = Math.min(...vals); const mx = Math.max(...vals)
          return (
            <div style={{ ...S.card, position: 'relative', overflow: 'hidden', padding: '20px 18px 14px' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${color}, ${color}50)` }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 3 }}>
                    <span style={{ fontSize: 17 }}>{icon}</span>
                    <span style={{ fontSize: 13, fontWeight: 800, color: C.text }}>{label}</span>
                  </div>
                  <div style={{ fontSize: 11, color: C.sub, lineHeight: 1.5 }}>{desc}</div>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0, marginLeft: 14 }}>
                  {value != null
                    ? <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 28, fontWeight: 800, color, lineHeight: 1 }}>
                        {value.toFixed(2)}<span style={{ fontSize: 14, fontWeight: 600, color: C.sub }}>%</span>
                      </div>
                    : <div style={{ fontSize: 13, color: C.sub, textAlign: 'right', maxWidth: 120 }}>
                        <div style={{ marginBottom: 3 }}>—</div>
                        <div style={{ fontSize: 10, lineHeight: 1.5 }}>Check bankrate.com<br/>for current rate</div>
                      </div>
                  }
                </div>
              </div>
              {sparkData && sparkData.length > 2 && (
                <div style={{ height: 38, display: 'flex', alignItems: 'flex-end', gap: 2, marginBottom: 10 }}>
                  {sparkData.slice(-18).map((pt, i, arr) => {
                    const h = mx > mn ? Math.round(((pt.value - mn) / (mx - mn)) * 30) + 6 : 18
                    return <div key={i} style={{ flex: 1, height: h, background: i === arr.length - 1 ? color : color + '44', borderRadius: '2px 2px 0 0' }} />
                  })}
                </div>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 8, borderTop: `1px solid ${C.border}` }}>
                <span style={{ fontSize: 10, color: source === 'Unavailable' ? C.warn : C.sub }}>{source || '—'}</span>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <span style={{ fontSize: 10, color: C.sub }}>Updated: {date || '—'}</span>
                  {frequency && <span style={{ fontSize: 9, fontWeight: 700, color: frequency === 'Daily' ? C.pos : frequency === 'Weekly' ? C.blue : C.sub, background: `${frequency === 'Daily' ? C.pos : frequency === 'Weekly' ? C.blue : C.sub}18`, padding: '2px 6px', borderRadius: 10 }}>{frequency}</span>}
                </div>
              </div>
            </div>
          )
        }
        return loading ? (
          <div style={{ color: C.sub, padding: 24, textAlign: 'center' }}>Loading rate data…</div>
        ) : ratesError ? (
          <div style={{ background: `${C.neg}18`, border: `1px solid ${C.neg}44`, borderRadius: 14, padding: '18px 22px', fontSize: 13, color: C.neg }}>
            <div style={{ fontWeight: 700, marginBottom: 8 }}>⚠️ Could not load rate data</div>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, background: `${C.neg}15`, borderRadius: 8, padding: '8px 12px', marginBottom: 10, wordBreak: 'break-all' }}>{ratesError}</div>
            <div>Ensure <code>FRED_API_KEY</code> is set in Vercel environment variables.</div>
          </div>
        ) : (
          <div>
            {/* Mortgage & Prime — FRED weekly/daily */}
            <div style={{ fontSize: 13, fontWeight: 700, color: C.text, marginBottom: 10, display: 'flex', alignItems: 'center', gap: 8 }}>
              🏠 Mortgage & Prime Rates
              <span style={{ fontSize: 11, color: C.sub, fontWeight: 400 }}>Weekly updates from Freddie Mac & Federal Reserve</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12, marginBottom: 24 }}>
              {(rates?.mortgage || []).map(s => {
                const latest = s.data?.[s.data.length - 1]
                return <RateCard key={s.id} icon={s.icon} label={s.label} desc={s.desc} colorKey={s.colorKey}
                  value={latest?.value ?? null} date={latest?.date} source={s.source} frequency={s.frequency}
                  sparkData={s.data?.slice(-18)} />
              })}
            </div>

            {/* Consumer Rates — Bankrate daily / FRED monthly fallback */}
            <div style={{ fontSize: 13, fontWeight: 700, color: C.text, marginBottom: 10, display: 'flex', alignItems: 'center', gap: 8 }}>
              💳 Consumer Lending Rates
              <span style={{ fontSize: 11, color: C.sub, fontWeight: 400 }}>Bankrate daily avg · Federal Reserve G.19 fallback</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12, marginBottom: 20 }}>
              {(rates?.consumer || []).map(r => (
                <RateCard key={r.id} icon={r.icon} label={r.label} desc={r.desc} colorKey={r.colorKey}
                  value={r.value} date={r.date} source={r.source} frequency={r.frequency} sparkData={null} />
              ))}
            </div>

            {/* Context note */}
            <div style={{ background: C.dim, border: `1px solid ${C.border}`, borderRadius: 12, padding: '14px 18px' }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: C.text, marginBottom: 6 }}>💡 How to use this data</div>
              <div style={{ fontSize: 12, color: C.sub, lineHeight: 1.85 }}>
                <strong style={{ color: C.text }}>Credit Card APR</strong> — carrying a balance at 20%+ costs more than most investments return. Pay in full every month.<br />
                <strong style={{ color: C.text }}>Mortgage rates</strong> track the 10-yr Treasury yield. The Prime Rate sets the floor for HELOCs and adjustable-rate loans.<br />
                <strong style={{ color: C.text }}>Auto and personal loans</strong> — credit unions consistently offer rates 1–2% below big bank averages. Always compare before signing.
              </div>
            </div>
          </div>
        )
      })()}
    </div>
  )
}

// ─── NAV ─────────────────────────────────────────────────────────────────────

// ─── RESOURCES ────────────────────────────────────────────────────────────────
const RESOURCES = [
  {
    name: 'TipRanks',
    url: 'https://www.tipranks.com',
    category: 'Stock Research',
    color: '#FF6B35',
    icon: '📊',
    desc: "Analyst ratings aggregator and stock scoring platform. Use TipRanks to see consensus analyst price targets, track the historical accuracy of individual analysts, and identify when insiders are buying or selling their own company's stock. Excellent for validating sell-side research before acting on it.",
  },
  {
    name: 'TradingView',
    url: 'https://www.tradingview.com',
    category: 'Charts & Technical Analysis',
    color: '#3D8EFF',
    icon: '📈',
    desc: "The world's most popular charting platform. Use TradingView for advanced technical analysis, drawing tools, custom indicators, and multi-timeframe analysis. The screener filters thousands of stocks by technical criteria. Free tier is robust; Pro unlocks more indicators per chart.",
  },
  {
    name: 'Coinbase',
    url: 'https://www.coinbase.com',
    category: 'Cryptocurrency',
    color: '#00D09C',
    icon: '₿',
    desc: 'The largest US-regulated cryptocurrency exchange. Use Coinbase to buy, sell, and hold Bitcoin, Ethereum, and hundreds of other digital assets. FDIC-insured USD balances up to $250K. Coinbase Advanced Trade offers competitive fees for active crypto traders.',
  },
  {
    name: 'Bloomberg',
    url: 'https://www.bloomberg.com',
    category: 'Financial News & Data',
    color: '#F5C842',
    icon: '🌐',
    desc: 'Premier financial news and data source used by professionals globally. Bloomberg provides breaking market news, economic data, company analysis, and in-depth long-form journalism. The free site offers limited articles monthly; Bloomberg Terminal access requires institutional subscription.',
  },
  {
    name: "Barron's",
    url: 'https://www.barrons.com',
    category: 'Investment Analysis',
    color: '#8B5CF6',
    icon: '📰',
    desc: "Regarded as Wall Street's bible for over 100 years. Barron's weekly magazine and website provide in-depth stock analysis, CEO interviews, and fund manager roundtables. Particularly valuable for its quantitative stock rankings and weekend reads that inform Monday morning trading decisions.",
  },
  {
    name: 'Wall Street Journal',
    url: 'https://www.wsj.com',
    category: 'Financial News',
    color: '#FF4560',
    icon: '📋',
    desc: "The most widely read financial newspaper in the world. Use WSJ for comprehensive coverage of markets, business, economics, and policy. The WSJ Markets section tracks real-time prices. Their What's News and 10-Point daily digests provide efficient briefings on market-moving events.",  },
  {
    name: 'CNBC',
    url: 'https://www.cnbc.com',
    category: 'Financial TV & News',
    color: '#FFB830',
    icon: '📡',
    desc: 'The dominant financial television network for real-time market commentary. Use CNBC.com for live market data, breaking news, and video interviews with CEOs and fund managers. CNBC Pro unlocks analyst calls and earnings previews. Best consumed critically — TV commentary often follows price, not leads it.',
  },
]

// ─── INSIGHT TABS ─────────────────────────────────────────────────────────────
const INSIGHT_TABS = [
  { id: 'all',      label: 'All Articles',         emoji: '📚' },
  { id: 'taxes',    label: 'Taxes',                emoji: '🧾' },
  { id: 'investing',label: 'Investing & Retirement',emoji: '📈' },
  { id: 'credit',   label: 'Credit & Lending',     emoji: '💳' },
  { id: 'banking',  label: 'Banking & Insurance',  emoji: '🏦' },
  { id: 'crypto',   label: 'Crypto',               emoji: '₿'  },
]

// ─── BLOG POSTS ───────────────────────────────────────────────────────────────
const BLOG_POSTS = [
  {
    id: 1, tab: 'investing', category: 'Investing & Retirement', readTime: '7 min', emoji: '🏖️',
    date: 'May 2025',
    title: 'The 4% Rule Revisited: Is Your Retirement Number Still Safe?',
    excerpt: "William Bengen's landmark 1994 study showed that retirees could withdraw 4% of their portfolio annually, adjusted for inflation, without running out of money over any 30-year period in US history. But in a world of historically low bond yields, elevated valuations, and potentially 40-year retirements, does this rule still hold?",
    content: `The 4% rule is built on a simple but powerful historical observation: had you retired at any point since 1926 and withdrawn 4% of your initial portfolio annually (adjusted for inflation), you would have survived every historical 30-year period — including the Great Depression, the stagflation of the 1970s, and the dot-com crash.

The mechanics: a $1 million portfolio allows $40,000 in annual withdrawals ($3,333/month). This amount increases each year with inflation. The portfolio is typically held in a 60% stock / 40% bond allocation. The original research found this strategy succeeded 100% of the time over any 30-year historical window.

But critics raise three legitimate challenges for today's environment. First, sequence of returns risk: if markets crash in your first five years of retirement, the damage is disproportionate. Withdrawing $40,000 from a $700,000 portfolio after a 30% decline forces you to sell more shares at depressed prices, permanently impairing your portfolio's recovery potential. Second, the 4% rule was calibrated on 30-year retirements. If you retire at 55 and live to 95, you face a 40-year horizon — and the rule's historical success rate drops meaningfully. Third, bond yields have structurally changed. The 40% bond allocation in a 60/40 portfolio historically provided both income and diversification. When 10-year Treasuries yielded 6-8%, the math worked differently than when they yield 4%.

What should you do? Financial planners increasingly recommend dynamic withdrawal strategies: starting at 3.3-3.5% for early retirees, adjusting withdrawals downward in down markets and upward in strong years, and keeping 2-3 years of expenses in stable assets to avoid forced selling. The 4% rule is an excellent starting point, not a rigid prescription. Your own retirement calculator above lets you model your specific scenario.`,
  },
  {
    id: 2, tab: 'taxes', category: 'Taxes', readTime: '8 min', emoji: '📉',
    date: 'April 2025',
    title: 'Tax-Loss Harvesting: Turning Market Crashes Into Tax Savings',
    excerpt: 'When markets fall, most investors focus on their losses. Sophisticated investors see opportunity. Tax-loss harvesting converts paper losses into real tax savings — without meaningfully changing your market exposure. For investors in the 22%+ tax bracket, this strategy adds an estimated 0.5-1.5% in annual after-tax returns.',
    content: `Tax-loss harvesting is the practice of selling investments at a loss to offset capital gains elsewhere in your portfolio. The losses reduce your tax bill without requiring you to give up market exposure — because you immediately repurchase a similar (but not identical) investment.

Here's a concrete example: You hold $50,000 of Vanguard Total International ETF (VXUS) that has declined to $43,000 — a $7,000 unrealized loss. You also have $7,000 in realized capital gains from selling Apple stock earlier in the year. Without harvesting, you owe $1,050 in taxes on those gains (at the 15% long-term rate). With harvesting: sell VXUS, immediately buy iShares Core MSCI International ETF (IXUS) — nearly identical exposure to international stocks — and realize the $7,000 loss. Your gain is completely offset. Tax saved: $1,050.

The wash-sale rule is the critical constraint: you cannot buy the same or "substantially identical" security within 30 days before or after the sale. Selling VTI (Vanguard Total Market) and immediately buying ITOT (iShares Total Market) satisfies the rule because they're not identical, despite tracking similar indices.

The best opportunities come during market volatility — when individual positions decline while the overall portfolio may be holding its value. Automated platforms like Betterment and Wealthfront monitor positions daily and execute harvesting automatically. For manual investors, scan your portfolio during any market decline exceeding 10% and look for positions sitting at losses.

The harvested loss carries forward forever. If you have $20,000 in losses and only $5,000 in gains this year, the remaining $15,000 offsets $3,000 of ordinary income this year (the maximum) and carries forward to future years. Think of harvested losses as a tax asset sitting on your balance sheet.`,
  },
  {
    id: 3, tab: 'investing', category: 'Investing & Retirement', readTime: '6 min', emoji: '💰',
    date: 'March 2025',
    title: 'The Free Money Most Americans Leave on the Table',
    excerpt: "An estimated 20% of employees eligible for a 401(k) employer match fail to contribute enough to capture it — leaving thousands of dollars in guaranteed returns unclaimed each year. No investment strategy, stock pick, or market timing approach reliably delivers the 50-100% instant return that an employer match provides.",
    content: `When your employer offers to match 50 cents for every dollar you contribute to your 401(k), up to 6% of your salary, they are offering you a 50% guaranteed return on those dollars before any investment gain occurs. This is not a figure of speech. A $500 monthly contribution becomes $750 before the market does anything.

Let's make this concrete: at a $75,000 salary with a 50% match up to 6%, contributing 6% ($4,500/year) earns you a $2,250 employer match — every year. Not capturing this match to instead "invest elsewhere" or simply not save is forgoing $2,250 in guaranteed compensation annually. Over a 30-year career at 7% average investment returns, that unclaimed match compounds to approximately $223,000.

The vesting schedule is the only complication. Many employers use cliff vesting (you own 0% of matching funds until a date, then 100%) or graded vesting (gradual ownership over 3-6 years). Know your vesting schedule before leaving an employer — unvested matching funds are forfeited.

After capturing the full match, the next priority is typically a Roth IRA (if income eligible), then returning to the 401(k) for additional pre-tax contributions up to the $23,500 limit. This sequence optimizes both the match capture and the tax treatment of additional savings.

If you are not currently contributing at least enough to capture your full employer match, log into your HR portal or payroll system today and increase your contribution rate. This single action — taking perhaps 5 minutes — is almost certainly the highest-return financial decision available to you right now.`,
  },
  {
    id: 4, tab: 'credit', category: 'Credit & Lending', readTime: '5 min', emoji: '💳',
    date: 'February 2025',
    title: 'Why Your Credit Utilization Is Hurting Your Score More Than You Think',
    excerpt: "Credit utilization — the ratio of your credit card balances to your credit limits — accounts for 30% of your FICO score. It's the fastest lever available to improve your credit score, and it's widely misunderstood. Many people believe staying under 30% is the target. The reality: under 10% is where optimal scores live.",
    content: `Credit utilization is calculated two ways: per card (each individual card's balance versus its limit) and in aggregate (total balances across all cards versus total credit limits). Both matter, but aggregate utilization carries more weight.

The mathematical reality: if you have $10,000 in total credit limits and carry $3,000 in balances, your utilization is 30%. Most sources say "stay under 30%" — this is the bare minimum, not the target. Consumers with FICO scores above 750 typically carry aggregate utilization below 10%. Those above 800 average around 5-7%.

The timing of utilization reporting is often misunderstood. Credit card issuers report your balance to the bureaus once per month — typically on your statement closing date, not your payment due date. If you pay your balance in full every month but your statement closes with a $2,000 balance, that $2,000 appears on your credit report regardless of whether you pay it in 5 days.

This creates a powerful optimization: pay down your balances a few days before your statement closes, not just before the due date. Your reported utilization will be near zero, even if you spend heavily and pay in full each month. This single timing adjustment can raise scores by 20-50 points for consumers with significant card spending.

Requesting credit limit increases is the other lever. If your limit increases from $5,000 to $8,000 while your balance stays at $1,500, your utilization falls from 30% to 18.75% automatically. Request increases every 6-12 months with issuers where you've had good payment history — most grant increases without a hard inquiry (ask for a "soft pull" increase).`,
  },
  {
    id: 5, tab: 'banking', category: 'Banking & Insurance', readTime: '6 min', emoji: '🏦',
    date: 'January 2025',
    title: "Your Emergency Fund Is Losing $4,000 a Year (Here's the Fix)",
    excerpt: "The average American household emergency fund held in a traditional savings account earning 0.01% APY is losing thousands in potential interest annually compared to what's available at online banks — with identical FDIC protection and full liquidity. The switch takes 20 minutes and costs nothing.",
    content: `Emergency funds are sacrosanct in personal finance — three to six months of essential expenses, liquid, safe, accessible within days. This is correct and important. What's often wrong is where that fund lives.

The average big bank savings account pays 0.01% to 0.46% APY. In 2024 to 2025, high-yield savings accounts at online banks paid 4.5% to 5.25% APY. On a $25,000 emergency fund, the difference is $1,125 to $1,308 annually. Over five years, keeping your emergency fund at a traditional bank instead of a high-yield account costs you approximately $6,000 to $7,500 in foregone interest — for an account that is equally FDIC-insured, equally liquid, and accessible via electronic transfer in 1-3 business days.

The best high-yield savings accounts as of early 2025: Marcus by Goldman Sachs, Ally Bank, SoFi, American Express National Bank, and Discover all consistently offer competitive rates with no minimum balances and no monthly fees. All are FDIC-insured to $250,000 per depositor.

The only genuine tradeoff: online banks rarely have physical branches, so cash deposits require a linked external account. For emergency fund purposes — money you hope never to touch — this limitation is essentially irrelevant.

The setup process: visit any of the above banks online, open an account (takes 10-15 minutes), link your existing checking account, and initiate a transfer. Done. Set up a small automatic monthly transfer from checking to continuously build the reserve.

One important note: keep a small buffer ($1,000-2,000) in your traditional bank checking account for immediate access. The high-yield savings is for the core emergency reserve — money you would access after the immediate cash on hand runs out. Electronic transfer time (1-3 business days) means you want some local liquidity for genuine emergencies.`,
  },
]

// ─── DASHBOARD HOME ─────────────────────────────────────────────────────────
function DashboardHome({ user, setPage, setInsightsTab, tier }) {
  const C = useC()
  const S = getS(C)
  const [news, setNews] = useState([])
  const [newsLoading, setNewsLoading] = useState(true)
  const [newsError, setNewsError] = useState(null)
  const [lastFetched, setLastFetched] = useState(null)
  const [expandedPost, setExpandedPost] = useState(null)

  const fetchNews = async () => {
    setNewsLoading(true); setNewsError(null)
    try {
      const r = await fetch('/api/news')
      if (!r.ok) throw new Error('News unavailable')
      const d = await r.json()
      setNews((d.articles || []).slice(0, 10))
      setLastFetched(new Date())
    } catch (e) { setNewsError('Could not load news. Check your connection.') }
    finally { setNewsLoading(false) }
  }

  useEffect(() => { fetchNews() }, [])
  useEffect(() => { const id = setInterval(fetchNews, 10 * 60 * 1000); return () => clearInterval(id) }, [])

  const timeAgo = (d) => {
    if (!d) return ''
    const t = new Date(d)
    if (isNaN(t.getTime())) return ''
    const m = Math.floor((Date.now() - t.getTime()) / 60000)
    if (m < 1) return 'just now'; if (m < 60) return `${m}m ago`
    const h = Math.floor(m / 60); if (h < 24) return `${h}h ago`
    return `${Math.floor(h / 24)}d ago`
  }

  const firstName = user?.firstName || 'there'
  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening'

  const CARD_H = 105  // approximate height of one news card + gap

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>

      {/* ── Welcome banner ── */}
      <div style={{ background: `linear-gradient(135deg, ${C.accent}1A, ${C.blue}12)`, border: `1px solid ${C.accent}30`, borderRadius: 18, padding: '22px 28px', marginBottom: 28, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 14 }}>
        <div>
          <div style={{ fontFamily: "'Sora',sans-serif", fontSize: 22, fontWeight: 800, marginBottom: 5, background: `linear-gradient(90deg, ${C.gradA}, ${C.gradB})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            {greeting}, {firstName} 👋
          </div>
          <div style={{ fontSize: 13, color: C.sub }}>
            {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {[{ label: 'Stock Analyzer', id: 'analyzer', emoji: '📊' },
            { label: 'Calculators', id: 'calculators', emoji: '🧮' },
            { label: 'Market Data', id: 'markets', emoji: '📉' },].map(q => (
            <button key={q.id} onClick={() => setPage(q.id)}
              style={{ background: C.dim, border: `1px solid ${C.border}`, borderRadius: 10, padding: '9px 14px', color: C.text, fontSize: 12, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', display: 'flex', alignItems: 'center', gap: 6, transition: 'border-color 0.15s' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = C.accent + '80'}
              onMouseLeave={e => e.currentTarget.style.borderColor = C.border}>
              {q.emoji} {q.label}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 24, alignItems: 'start' }}>

        {/* ── News feed: 10 articles, 5 visible, scrollable ── */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
              <Newspaper size={17} color={C.accent} />
              <span style={{ fontFamily: "'Sora',sans-serif", fontSize: 16, fontWeight: 800 }}>Financial News</span>
              {lastFetched && <span style={{ fontSize: 11, color: C.sub, background: C.dim, padding: '2px 8px', borderRadius: 20 }}>Updated {timeAgo(lastFetched)}</span>}
            </div>
            <button onClick={fetchNews} disabled={newsLoading}
              style={{ background: C.dim, border: `1px solid ${C.border}`, borderRadius: 8, padding: '5px 11px', color: C.sub, fontSize: 12, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', display: 'flex', alignItems: 'center', gap: 5, opacity: newsLoading ? 0.5 : 1 }}>
              <RefreshCw size={11} style={newsLoading ? { animation: 'spin 1s linear infinite' } : {}} /> Refresh
            </button>
          </div>

          {/* Scrollable container — ~5 cards visible (~530px), scroll for all 10 */}
          <div style={{ height: 530, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 10, paddingRight: 4 }}>
            {newsLoading && [1,2,3,4,5].map(i => (
              <div key={i} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: 14, display: 'flex', gap: 12, flexShrink: 0 }}>
                <div style={{ width: 80, height: 62, background: C.dim, borderRadius: 10, flexShrink: 0 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ height: 12, background: C.dim, borderRadius: 6, marginBottom: 7, width: '80%' }} />
                  <div style={{ height: 10, background: C.dim, borderRadius: 6, marginBottom: 5, width: '100%' }} />
                  <div style={{ height: 10, background: C.dim, borderRadius: 6, width: '55%' }} />
                </div>
              </div>
            ))}
            {newsError && (
              <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: 32, textAlign: 'center' }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>📰</div>
                <div style={{ color: C.neg, fontWeight: 700, marginBottom: 8 }}>{newsError}</div>
                <button onClick={fetchNews} style={S.btn()}>Try Again</button>
              </div>
            )}
            {!newsLoading && !newsError && news.map((article, i) => (
              <a key={i} href={article.link} target="_blank" rel="noreferrer noopener"
                style={{ textDecoration: 'none', display: 'block', flexShrink: 0 }}>
                <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: 14, display: 'flex', gap: 12, transition: 'border-color 0.15s, background 0.15s', cursor: 'pointer' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = C.accent + '50'; e.currentTarget.style.background = C.dim }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.background = C.card }}>
                  {article.img && (
                    <img src={article.img} alt="" onError={e => { e.target.style.display = 'none' }}
                      style={{ width: 80, height: 62, objectFit: 'cover', borderRadius: 10, flexShrink: 0, background: C.dim }} />
                  )}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 5 }}>
                      <span style={{ fontSize: 10, fontWeight: 700, color: C.accent, background: C.accent + '18', padding: '2px 7px', borderRadius: 20 }}>{article.source}</span>
                      <span style={{ fontSize: 10, color: C.sub }}>{timeAgo(article.pubDate)}</span>
                    </div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: C.text, lineHeight: 1.4, marginBottom: 4, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{article.title}</div>
                    {article.desc && <div style={{ fontSize: 11, color: C.sub, lineHeight: 1.5, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{article.desc}</div>}
                  </div>
                  <ExternalLink size={13} color={C.sub} style={{ flexShrink: 0, marginTop: 2 }} />
                </div>
              </a>
            ))}
          </div>

          {/* Scroll hint */}
          {!newsLoading && !newsError && news.length > 5 && (
            <div style={{ textAlign: 'center', marginTop: 8, fontSize: 11, color: C.sub, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
              <span>↕</span> Scroll to see all {news.length} articles
            </div>
          )}

          {/* ── FIQ Insights (4 posts, under news) ── */}
          <div style={{ marginTop: 22 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 14 }}>
              <Zap size={17} color={C.gold} />
              <span style={{ fontFamily: "'Sora',sans-serif", fontSize: 16, fontWeight: 800 }}>FintelligenceIQ Insights</span>
              <button onClick={() => setPage('insights')} style={{ marginLeft: 'auto', background: 'none', border: 'none', color: C.accent, fontSize: 12, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>
                View all →
              </button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {BLOG_POSTS.slice(0, 4).map(post => (
                <div key={post.id}
                  style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, overflow: 'hidden', cursor: 'pointer', transition: 'border-color 0.15s, transform 0.15s', display: 'flex', flexDirection: 'column' }}
                  onClick={() => setExpandedPost(expandedPost === post.id ? null : post.id)}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = C.accent + '60'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.transform = 'translateY(0)' }}>
                  <div style={{ padding: '14px 14px 10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                      <span style={{ fontSize: 10, fontWeight: 700, color: C.accent, background: C.accent + '18', padding: '2px 8px', borderRadius: 20 }}>{post.category}</span>
                      <span style={{ fontSize: 10, color: C.sub }}>{post.readTime}</span>
                    </div>
                    <div style={{ fontSize: 18, marginBottom: 7 }}>{post.emoji}</div>
                    <div style={{ fontFamily: "'Sora',sans-serif", fontSize: 13, fontWeight: 800, color: C.text, lineHeight: 1.4, marginBottom: 7 }}>{post.title}</div>
                    <div style={{ fontSize: 11, color: C.sub, lineHeight: 1.6, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{post.excerpt}</div>
                  </div>
                  <div style={{ padding: '8px 14px', borderTop: `1px solid ${C.border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', background: expandedPost === post.id ? C.accent + '12' : 'transparent' }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: C.accent }}>{expandedPost === post.id ? 'Collapse ↑' : 'Read more →'}</span>
                  </div>
                  {expandedPost === post.id && (
                    <div style={{ padding: '16px 14px 18px', borderTop: `1px solid ${C.border}`, background: C.dim }}>
                      {post.content.split(/\n\n+/).map((para, pi) => (
                        <p key={pi} style={{ fontSize: 12, color: C.text, lineHeight: 1.8, marginBottom: 12 }}>{para.trim()}</p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ── Right column: AI Assistant ── */}
        <InlineNavBot setPage={setPage} setInsightsTab={setInsightsTab} tier={tier} />

      </div>

            <style>{`
        @keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }
      `}</style>
    </div>
  )
}



// ─── INSIGHTS PAGE ────────────────────────────────────────────────────────────
function InsightsPage({ activeTab = 'all', tier = 'free', setPage }) {
  const C = useC()
  const [expandedPost, setExpandedPost] = useState(null)

  const allPosts = activeTab === 'all' ? BLOG_POSTS : BLOG_POSTS.filter(p => p.tab === activeTab)
  const FREE_LIMIT = 3
  const filtered = tier === 'free' ? allPosts.slice(0, FREE_LIMIT) : allPosts
  const isLimited = tier === 'free' && allPosts.length > FREE_LIMIT

  const tabMeta = INSIGHT_TABS.find(t => t.id === activeTab) || INSIGHT_TABS[0]

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto' }}>
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
          <Zap size={20} color={C.gold} />
          <h1 style={{ fontFamily: "'Sora',sans-serif", fontSize: 24, fontWeight: 800, margin: 0 }}>
            FintelligenceIQ Insights
            {activeTab !== 'all' && (
              <span style={{ fontSize: 16, fontWeight: 600, color: C.accent, marginLeft: 10 }}>
                — {tabMeta.emoji} {tabMeta.label}
              </span>
            )}
          </h1>
        </div>
        <p style={{ fontSize: 14, color: C.sub, margin: 0 }}>Educational articles from the FintelligenceIQ team — clear, actionable financial knowledge.</p>
        <div style={{ height: 3, background: `linear-gradient(90deg, ${C.gradA}, ${C.gradB})`, marginTop: 16, borderRadius: 2, width: 120 }} />
      </div>

      {filtered.length === 0 ? (
        <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 16, padding: '48px 24px', textAlign: 'center' }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>{tabMeta.emoji}</div>
          <div style={{ fontSize: 16, fontWeight: 700, color: C.text, marginBottom: 8 }}>{tabMeta.label} articles coming soon</div>
          <div style={{ fontSize: 13, color: C.sub }}>We're working on in-depth educational content for this category. Check back soon.</div>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {filtered.map((post) => (
            <div key={post.id}
              style={{ background: C.card, border: `1px solid ${expandedPost === post.id ? C.accent + '60' : C.border}`, borderRadius: 18, overflow: 'hidden', transition: 'border-color 0.2s' }}>
              <div style={{ padding: '22px 24px', display: 'flex', gap: 20, alignItems: 'flex-start', cursor: 'pointer' }}
                onClick={() => setExpandedPost(expandedPost === post.id ? null : post.id)}>
                <div style={{ fontSize: 40, lineHeight: 1, flexShrink: 0 }}>{post.emoji}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8, flexWrap: 'wrap' }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: C.accent, background: C.accent + '18', padding: '3px 10px', borderRadius: 20 }}>{post.category}</span>
                    <span style={{ fontSize: 11, color: C.sub }}>{post.readTime}</span>
                    <span style={{ fontSize: 11, color: C.sub }}>·</span>
                    <span style={{ fontSize: 11, color: C.sub }}>{post.date}</span>
                  </div>
                  <div style={{ fontFamily: "'Sora',sans-serif", fontSize: 18, fontWeight: 800, color: C.text, lineHeight: 1.4, marginBottom: 8 }}>{post.title}</div>
                  <div style={{ fontSize: 13, color: C.sub, lineHeight: 1.7 }}>{post.excerpt}</div>
                </div>
                <div style={{ flexShrink: 0, paddingTop: 4 }}>
                  <div style={{ background: C.dim, border: `1px solid ${C.border}`, borderRadius: 8, padding: '6px 14px', fontSize: 12, fontWeight: 700, color: C.accent, whiteSpace: 'nowrap' }}>
                    {expandedPost === post.id ? 'Collapse ↑' : 'Read article →'}
                  </div>
                </div>
              </div>
              {expandedPost === post.id && (
                <div style={{ padding: '0 24px 28px', borderTop: `1px solid ${C.border}` }}>
                  <div style={{ height: 1, background: `linear-gradient(90deg, ${C.accent}40, transparent)`, marginBottom: 24 }} />
                  {post.content.split(/\n\n+/).map((para, pi) => (
                    <p key={pi} style={{ fontSize: 14, color: C.text, lineHeight: 1.9, marginBottom: 18 }}>{para.trim()}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}


// ─── SITE SEARCH BOT (client-side, no API keys) ───────────────────────────────
function tokenize(str) {
  return str.toLowerCase().replace(/[^a-z0-9 ]/g, ' ').split(/\s+/).filter(t => t.length > 1 && !STOPWORDS.has(t))
}

function searchKB(query) {
  const tokens = tokenize(query)
  if (!tokens.length) return []

  // ── Score knowledge base entries ─────────────────────────────────────────
  const kbScored = KB.map(entry => {
    let score = 0
    const contentLower = entry.content.toLowerCase()
    const titleLower   = entry.title.toLowerCase()
    for (const token of tokens) {
      for (const kw of entry.keywords) {
        if (kw === token)                                     score += 4
        else if (kw.startsWith(token) || token.startsWith(kw)) score += 2
        else if (kw.includes(token)   || token.includes(kw))   score += 1
      }
      if (titleLower === token)          score += 3
      else if (titleLower.includes(token)) score += 2
      if (contentLower.includes(token))  score += 0.5
    }
    return { ...entry, score, _type: 'kb' }
  }).filter(e => e.score > 0)

  // ── Score curriculum index entries ────────────────────────────────────────
  const currScored = CURRICULUM_INDEX.map(unit => {
    let score = 0
    const titleLower = unit.title.toLowerCase()
    const descLower  = unit.desc.toLowerCase()
    const unitTokens = tokenize(unit.title + ' ' + unit.desc)
    for (const token of tokens) {
      if (titleLower === token)             score += 5
      else if (titleLower.includes(token))  score += 3
      if (descLower.includes(token))        score += 1
      // bonus if multiple tokens match the same unit
      const matchCount = tokens.filter(t => titleLower.includes(t) || descLower.includes(t)).length
      if (matchCount > 1) score += matchCount * 0.5
    }
    if (score === 0) return null
    return {
      id: unit.id,
      title: unit.title,
      content: unit.desc,
      action: { type: 'url', target: unit.url, label: unit.label },
      keywords: unitTokens,
      score,
      _type: 'curriculum'
    }
  }).filter(Boolean)

  // ── Merge, deduplicate by title, return top 3 ────────────────────────────
  const all = [...kbScored, ...currScored]
    .sort((a, b) => b.score - a.score)
    .filter((e, i, arr) => arr.findIndex(x => x.title === e.title) === i)

  return all.slice(0, 3)
}

function buildResponse(results, query) {
  if (!results.length) {
    return {
      message: `I couldn't find specific information about "${query}" in my knowledge base. Try asking about topics like RSI, compound interest, Bitcoin, mortgage calculations, Roth IRA, Bollinger Bands, credit scores, or DCA — or browse the Academy sections for comprehensive lessons.`,
      action: null,
      related: []
    }
  }
  const top = results[0]
  const related = results.slice(1).map(r => r.title)
  return { message: top.content, action: top.action, related, title: top.title }
}

function InlineNavBot({ setPage, setInsightsTab }) {
  const C = useC()
  const [question, setQuestion] = useState('')
  const [messages, setMessages] = useState([
    { role: 'assistant', title: null, content: `Hi! I'm your FintelligenceIQ search assistant. I can explain financial concepts and direct you to the right part of the site — all without any API calls. Try asking about RSI, mortgage payments, Roth IRA, Bitcoin, compound interest, or anything you're curious about.`, action: null, related: [] }
  ])
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages])

  const ask = () => {
    const q = question.trim()
    if (!q || loading) return
    setQuestion('')
    setLoading(true)
    const results = searchKB(q)
    const response = buildResponse(results, q)
    setTimeout(() => {
      setMessages(m => [
        ...m,
        { role: 'user', content: q, action: null, related: [], title: null },
        { role: 'assistant', ...response }
      ])
      setLoading(false)
    }, 280)
  }

  const handleAction = (action) => {
    if (!action) return
    if (action.type === 'page') { setPage(action.target); if (action.target === 'insights') setInsightsTab('all') }
    else window.location.href = action.target
  }

  const SUGGESTIONS = ['What is RSI?', 'How does compound interest work?', 'What is a Roth IRA?', 'Explain Bollinger Bands', 'How do I pay off debt faster?', 'What is DCA?']
  const isDark = C.name !== 'daytime'

  return (
    <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, display: 'flex', flexDirection: 'column', height: 530, backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', overflow: 'hidden' }}>

      {/* Header */}
      <div style={{ padding: '13px 16px', borderBottom: `1px solid ${C.border}`, display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0, background: isDark ? 'rgba(255,107,53,0.08)' : 'rgba(37,99,235,0.06)' }}>
        <div style={{ width: 34, height: 34, borderRadius: '50%', background: `linear-gradient(135deg, ${C.accent}, ${C.purple || '#7C3AED'})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, flexShrink: 0 }}>🔍</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 800, color: C.text }}>FIQ Search Assistant</div>
          <div style={{ fontSize: 10, color: C.sub }}>453 topics · instant · 100% offline</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, background: C.dim, borderRadius: 20, padding: '3px 10px' }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#00D09C' }} />
          <span style={{ fontSize: 10, fontWeight: 700, color: C.sub }}>LIVE</span>
        </div>
      </div>

      {/* Messages */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '12px 12px 4px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {messages.map((m, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: m.role === 'user' ? 'flex-end' : 'flex-start', gap: 6 }}>
            {m.title && m.role === 'assistant' && (
              <div style={{ fontSize: 10, fontWeight: 700, color: C.accent, letterSpacing: '0.06em', textTransform: 'uppercase', paddingLeft: 2 }}>{m.title}</div>
            )}
            <div style={{
              maxWidth: '94%', padding: '9px 13px',
              borderRadius: m.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
              background: m.role === 'user' ? C.accent : isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)',
              color: m.role === 'user' ? '#fff' : C.text,
              fontSize: 12.5, lineHeight: 1.75, border: m.role === 'user' ? 'none' : `1px solid ${C.border}`,
            }}>
              {m.content}
            </div>
            {m.action && (
              <button onClick={() => handleAction(m.action)}
                style={{ background: C.accent + '18', color: C.accent, border: `1px solid ${C.accent}40`, borderRadius: 20, padding: '6px 13px', fontSize: 11, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', display: 'flex', alignItems: 'center', gap: 5, transition: 'all 0.15s' }}
                onMouseEnter={e => { e.currentTarget.style.background = C.accent; e.currentTarget.style.color = '#fff' }}
                onMouseLeave={e => { e.currentTarget.style.background = C.accent + '18'; e.currentTarget.style.color = C.accent }}>
                → {m.action.label}
              </button>
            )}
            {m.related && m.related.length > 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                <span style={{ fontSize: 10, color: C.sub }}>Related:</span>
                {m.related.map(r => (
                  <span key={r} onClick={() => { setQuestion(r); }} style={{ fontSize: 10, color: C.accent, cursor: 'pointer', background: C.accent + '12', borderRadius: 10, padding: '2px 8px' }}>{r}</span>
                ))}
              </div>
            )}
          </div>
        ))}

        {loading && (
          <div style={{ display: 'flex', gap: 4, padding: '9px 13px', alignSelf: 'flex-start', background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)', border: `1px solid ${C.border}`, borderRadius: '16px 16px 16px 4px' }}>
            {[0,1,2].map(i => <div key={i} style={{ width: 6, height: 6, borderRadius: '50%', background: C.accent, animation: `sbPulse 1.2s ease-in-out ${i*0.2}s infinite` }} />)}
          </div>
        )}

        {messages.length === 1 && !loading && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5, marginTop: 4 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: C.sub, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 2 }}>Try asking:</div>
            {SUGGESTIONS.map(s => (
              <button key={s} onClick={() => setQuestion(s)}
                style={{ background: 'transparent', border: `1px solid ${C.border}`, borderRadius: 10, padding: '7px 11px', fontSize: 11.5, color: C.sub, cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left', transition: 'all 0.15s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = C.accent + '70'; e.currentTarget.style.color = C.accent; e.currentTarget.style.background = C.accent + '0A' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.sub; e.currentTarget.style.background = 'transparent' }}>
                {s}
              </button>
            ))}
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div style={{ padding: '10px 12px 12px', borderTop: `1px solid ${C.border}`, flexShrink: 0 }}>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <input
            value={question}
            onChange={e => setQuestion(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && ask()}
            placeholder="Search financial topics…"
            style={{ flex: 1, background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)', border: `1px solid ${C.border}`, borderRadius: 20, padding: '9px 14px', fontSize: 12, color: C.text, outline: 'none', fontFamily: 'inherit' }}
          />
          <button onClick={ask} disabled={!question.trim() || loading}
            style={{ width: 36, height: 36, borderRadius: '50%', background: question.trim() && !loading ? C.accent : C.dim, border: 'none', cursor: question.trim() && !loading ? 'pointer' : 'default', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'background 0.15s', color: '#fff', fontSize: 16, fontWeight: 700 }}>
            ↑
          </button>
        </div>
        <div style={{ fontSize: 9, color: C.sub, marginTop: 6, textAlign: 'center', opacity: 0.7 }}>Client-side search · no API · no tracking · educational only</div>
      </div>

      <style>{`@keyframes sbPulse { 0%,100%{opacity:0.3;transform:scale(0.8)} 50%{opacity:1;transform:scale(1.1)} }`}</style>
    </div>
  )
}


// ─── RESOURCES PAGE ───────────────────────────────────────────────────────────
function ResourcesPage() {
  const C = useC()
  return (
    <div style={{ maxWidth: 900, margin: '0 auto' }}>
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
          <BookOpen size={20} color={C.blue} />
          <h1 style={{ fontFamily: "'Sora',sans-serif", fontSize: 24, fontWeight: 800, margin: 0 }}>Investment Resources</h1>
        </div>
        <p style={{ fontSize: 14, color: C.sub, margin: 0 }}>Curated professional tools and platforms trusted by active investors and traders.</p>
        <div style={{ height: 3, background: `linear-gradient(90deg, ${C.blue}, ${C.accent})`, marginTop: 16, borderRadius: 2, width: 120 }} />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 14 }}>
        {RESOURCES.map(r => (
          <a key={r.name} href={r.url} target="_blank" rel="noreferrer noopener" style={{ textDecoration: 'none', display: 'block' }}>
            <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: 18, transition: 'border-color 0.15s, background 0.15s', height: '100%', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = r.color + '80'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.transform = 'translateY(0)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <div style={{ width: 40, height: 40, borderRadius: 11, background: r.color + '22', border: `1px solid ${r.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>{r.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 15, fontWeight: 800, color: C.text }}>{r.name}</div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: r.color, letterSpacing: '0.05em' }}>{r.category}</div>
                </div>
                <ExternalLink size={13} color={C.sub} />
              </div>
              <div style={{ fontSize: 13, color: C.sub, lineHeight: 1.75 }}>{r.desc}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

// ─── TIER HELPERS ─────────────────────────────────────────────────────────────
const TIERS = { free: 0, premium: 1, pro: 2 }
const TIER_META = {
  free:    { label: 'Free',    price: '$0',  color: '#6B7280', badge: 'FREE'    },
  premium: { label: 'Premium', price: '$9',  color: '#2563EB', badge: 'PREMIUM' },
  pro:     { label: 'Pro',     price: '$29', color: '#7C3AED', badge: 'PRO'     },
}
const hasTier = (userTier, required) => TIERS[userTier] >= TIERS[required]

// ─── PAYWALL GATE ─────────────────────────────────────────────────────────────
function PaywallGate({ required = 'premium', userTier = 'free', feature = '', setPage, children }) {
  const C = useC()
  if (hasTier(userTier, required)) return children

  const meta = TIER_META[required]
  const isDark = C.name !== 'daytime'

  return (
    <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 16, padding: '40px 32px', textAlign: 'center', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}>
      <div style={{ width: 56, height: 56, borderRadius: '50%', background: meta.color + '20', border: `2px solid ${meta.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
        <Lock size={22} color={meta.color} />
      </div>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: meta.color, marginBottom: 8 }}>{meta.badge} FEATURE</div>
      <div style={{ fontFamily: "'Sora',sans-serif", fontSize: 20, fontWeight: 800, color: C.text, marginBottom: 8 }}>{feature}</div>
      <div style={{ fontSize: 13, color: C.sub, lineHeight: 1.7, maxWidth: 380, margin: '0 auto 24px' }}>
        This feature requires a <strong style={{ color: meta.color }}>{meta.label}</strong> subscription ({meta.price}/mo).
        Upgrade to unlock this and everything else included in {meta.label}.
      </div>
      <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
        <button onClick={() => setPage('account')}
          style={{ background: meta.color, color: '#fff', border: 'none', borderRadius: 10, padding: '11px 24px', fontSize: 14, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>
          Upgrade to {meta.label} →
        </button>
        <button onClick={() => setPage('home')}
          style={{ background: 'transparent', color: C.sub, border: `1px solid ${C.border}`, borderRadius: 10, padding: '11px 20px', fontSize: 14, cursor: 'pointer', fontFamily: 'inherit' }}>
          Back to Home
        </button>
      </div>
    </div>
  )
}

// ─── ACCOUNT PAGE (Test Mode) ────────────────────────────────────────────────
function AccountPage({ user, tier, setTier, setPage }) {
  const C = useC()
  const isDark = C.name !== 'daytime'

  const plans = [
    {
      id: 'free', label: 'Free', price: '$0/mo', color: '#6B7280',
      desc: 'Explore FintelligenceIQ at no cost',
      features: ['Dashboard & financial news', 'FIQ Search Assistant', 'Market & economic data', '3 FIQ Insights articles/month', 'Compound Interest Calculator', 'First 2 lessons per academy'],
      locked: ['Stock Analyzer', 'Mortgage, Retirement & Debt Calculators', 'Full academy access', 'Unlimited FIQ Insights'],
    },
    {
      id: 'premium', label: 'Premium', price: '$9/mo', color: '#2563EB', popular: true,
      desc: 'Full financial education suite',
      features: ['Everything in Free', 'Full Stock Analyzer', 'All 4 financial calculators', 'Unlimited FIQ Insights', 'Financial Academy — 147 units', 'Crypto Academy — 120 units', 'Monthly FIQ market briefing'],
      locked: ['Trading Academy', 'Portfolio tracker', 'Weekly Pro trade setups'],
    },
    {
      id: 'pro', label: 'Pro', price: '$29/mo', color: '#7C3AED',
      desc: 'For active traders and investors',
      features: ['Everything in Premium', 'Trading Academy — 115 units', 'Advanced stock screener', 'Portfolio tracker + alerts', 'Weekly educational trade setups', 'Downloadable strategy guides', 'Discord community access'],
      locked: [],
    },
  ]

  const currentMeta = TIER_META[tier] || TIER_META.free

  return (
    <div style={{ maxWidth: 860, margin: '0 auto' }}>

      {/* Header */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
          <User size={20} color={C.accent} />
          <h1 style={{ fontFamily: "'Sora',sans-serif", fontSize: 24, fontWeight: 800, margin: 0 }}>Manage Account</h1>
        </div>
        <div style={{ height: 3, background: `linear-gradient(90deg,${C.gradA},${C.gradB})`, marginTop: 14, borderRadius: 2, width: 120 }} />
      </div>

      {/* Test mode banner */}
      <div style={{ background: isDark ? 'rgba(251,191,36,0.12)' : 'rgba(251,191,36,0.15)', border: '1px solid rgba(251,191,36,0.4)', borderRadius: 12, padding: '12px 18px', marginBottom: 22, display: 'flex', alignItems: 'center', gap: 10 }}>
        <AlertCircle size={16} color="#D97706" />
        <div style={{ fontSize: 13, color: isDark ? '#FCD34D' : '#92400E' }}>
          <strong>Test mode</strong> — Stripe payments are not connected. Use the buttons below to switch tiers and test the paywall experience. Your selection is saved in your browser.
        </div>
      </div>

      {/* Current plan */}
      <div style={{ background: C.card, border: `2px solid ${currentMeta.color}50`, borderRadius: 14, padding: '16px 20px', marginBottom: 22, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 40, height: 40, borderRadius: '50%', background: currentMeta.color + '20', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {tier === 'pro' ? <Crown size={18} color={currentMeta.color} /> : tier === 'premium' ? <Star size={18} color={currentMeta.color} /> : <User size={18} color={currentMeta.color} />}
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: currentMeta.color, letterSpacing: '0.08em' }}>CURRENT PLAN</div>
            <div style={{ fontFamily: "'Sora',sans-serif", fontSize: 17, fontWeight: 800, color: C.text }}>{currentMeta.label} — {currentMeta.price}</div>
          </div>
        </div>
        <div style={{ background: currentMeta.color + '18', color: currentMeta.color, borderRadius: 20, padding: '5px 14px', fontSize: 11, fontWeight: 800, display: 'flex', alignItems: 'center', gap: 5 }}>
          <CheckCircle size={12} /> Active
        </div>
      </div>

      {/* Plan cards */}
      <div style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 14 }}>Choose a plan</div>
      <div className="mobile-stack" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 14, marginBottom: 28 }}>
        {plans.map(plan => {
          const isCurrent = tier === plan.id
          const isUpgrade = TIERS[plan.id] > TIERS[tier]
          return (
            <div key={plan.id} style={{ background: C.card, border: `${isCurrent ? '2px' : '1px'} solid ${isCurrent ? plan.color : plan.popular ? plan.color + '50' : C.border}`, borderRadius: 16, padding: '18px 16px', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', display: 'flex', flexDirection: 'column', position: 'relative' }}>
              {plan.popular && !isCurrent && (
                <div style={{ position: 'absolute', top: -11, left: '50%', transform: 'translateX(-50%)', background: plan.color, color: '#fff', fontSize: 10, fontWeight: 800, padding: '3px 12px', borderRadius: 20, whiteSpace: 'nowrap' }}>MOST POPULAR</div>
              )}
              {isCurrent && (
                <div style={{ position: 'absolute', top: -11, left: '50%', transform: 'translateX(-50%)', background: plan.color, color: '#fff', fontSize: 10, fontWeight: 800, padding: '3px 12px', borderRadius: 20, whiteSpace: 'nowrap' }}>YOUR PLAN</div>
              )}
              <div style={{ fontSize: 11, fontWeight: 700, color: plan.color, letterSpacing: '0.08em', marginBottom: 4 }}>{plan.label.toUpperCase()}</div>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 22, fontWeight: 700, color: C.text, marginBottom: 4 }}>{plan.price}</div>
              <div style={{ fontSize: 12, color: C.sub, marginBottom: 14 }}>{plan.desc}</div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 5, marginBottom: 16 }}>
                {plan.features.map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 7, fontSize: 12, color: C.text }}>
                    <CheckCircle size={12} color={plan.color} style={{ flexShrink: 0, marginTop: 2 }} />{f}
                  </div>
                ))}
                {plan.locked.map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 7, fontSize: 12, color: C.sub, opacity: 0.55 }}>
                    <Lock size={11} style={{ flexShrink: 0, marginTop: 2 }} />{f}
                  </div>
                ))}
              </div>
              <button onClick={() => !isCurrent && setTier(plan.id)} disabled={isCurrent}
                style={{ width: '100%', background: isCurrent ? C.dim : plan.color, color: isCurrent ? C.sub : '#fff', border: 'none', borderRadius: 10, padding: '10px 0', fontSize: 13, fontWeight: 700, cursor: isCurrent ? 'default' : 'pointer', fontFamily: 'inherit' }}>
                {isCurrent ? 'Current plan' : isUpgrade ? `Switch to ${plan.label}` : `Switch to ${plan.label}`}
              </button>
            </div>
          )
        })}
      </div>

      {/* Account info */}
      <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: '18px 20px', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: C.text, marginBottom: 14 }}>Account details</div>
        <div className="mobile-stack" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {[
            { label: 'Email',        value: user?.emailAddresses?.[0]?.emailAddress || '—' },
            { label: 'Name',         value: `${user?.firstName || ''} ${user?.lastName || ''}`.trim() || '—' },
            { label: 'Member since', value: user?.createdAt ? new Date(user.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : '—' },
            { label: 'Plan',         value: currentMeta.label },
          ].map(({ label, value }) => (
            <div key={label} style={{ background: C.dim, borderRadius: 10, padding: '10px 14px' }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: C.sub, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>{label}</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: C.text, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{value}</div>
            </div>
          ))}
        </div>
      </div>

      <p style={{ fontSize: 11, color: C.sub, textAlign: 'center', marginTop: 18, lineHeight: 1.7 }}>
        Test mode — tier changes are stored in your browser only and reset on sign-out.<br />
        Stripe payments will be connected when you are ready to go live.
      </p>
    </div>
  )
}


const NAV = [
  { id: 'home',       label: 'Home',               icon: BarChart2  },
  { id: 'analyzer',   label: 'Stock Analyzer',      icon: TrendingUp },
  { id: 'calculators',label: 'Calculators',         icon: Calculator },
  { id: 'markets',    label: 'Market & Economic',   icon: Globe      },
  { id: 'resources',  label: 'Investment Resources', icon: BookOpen   },
  { id: 'insights',   label: 'FIQ Insights',        icon: Zap        },
]

// ─── DASHBOARD ────────────────────────────────────────────────────────────────
export default function Dashboard() {
  const { isLoaded, isSignedIn, user } = useUser()
  const { signOut } = useClerk()
  const [tier, setTierState] = useState('free')
  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('fiq_test_tier') : null
    setTierState(saved || user?.publicMetadata?.tier || 'free')
  }, [user])
  const setTier = (t) => {
    setTierState(t)
    if (typeof window !== 'undefined') localStorage.setItem('fiq_test_tier', t)
  }
  const router = useRouter()
  const [page, setPage] = useState('home')
  const [insightsTab, setInsightsTab] = useState('all')
  const [isMobile, setIsMobile] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const [themeName, setThemeName] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('fiq_theme')
      return (stored === 'aurora' ? 'midnight' : stored) || 'midnight'
    }
    return 'midnight'
  })
  const CT = THEMES[themeName] || THEMES.midnight
  const S = getS(CT)
  const toggleTheme = () => {
    const next = themeName === 'midnight' ? 'daytime' : 'midnight'
    setThemeName(next)
    if (typeof window !== 'undefined') localStorage.setItem('fiq_theme', next)
  }

  useEffect(() => { if (isLoaded && !isSignedIn) router.push('/sign-in') }, [isLoaded, isSignedIn, router])

  if (!isLoaded) return (
    <div style={{ minHeight: '100vh', background: '#02060F', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ color: CT.sub, fontSize: 14, fontFamily: 'Manrope,sans-serif' }}>Loading…</div>
    </div>
  )
  if (!isSignedIn) return null

  const current = NAV.find(n => n.id === page)

  return (
    <ThemeCtx.Provider value={CT}>
    <>
      <Head>
        <title>Dashboard — FintelligenceIQ</title>
        <meta name="robots" content="noindex" />
      </Head>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@700;800&family=Manrope:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: ${CT.bg}; color: ${CT.text}; }
        ::-webkit-scrollbar { width: 6px; height: 6px; }
        ::-webkit-scrollbar-track { background: ${CT.surface}; }
        ::-webkit-scrollbar-thumb { background: ${CT.sub}50; border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: ${CT.sub}; }
        input[type=range] { -webkit-appearance: none; appearance: none; height: 3px; background: ${CT.dim}; border-radius: 2px; outline: none; cursor: pointer; }
        input[type=range]::-webkit-slider-thumb { -webkit-appearance: none; width: 15px; height: 15px; background: ${CT.accent}; border-radius: 50%; cursor: pointer; border: 2px solid ${CT.bg}; }
        input[type=number]::-webkit-inner-spin-button { opacity: 0.5; }
        @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
        a { color: inherit; }
      `}</style>

      <div style={{ display: 'flex', height: '100vh', background: CT.bg, fontFamily: "'Manrope',system-ui,sans-serif", color: CT.text, overflow: 'hidden' }}>

        {/* ── Sidebar ── */}
        <div className="dash-sidebar" style={{ width: 230, flexShrink: 0, background: CT.name === 'daytime' ? 'rgba(255,255,255,0.94)' : 'rgba(10,14,28,0.90)', borderRight: `1px solid ${CT.border}`, display: 'flex', flexDirection: 'column', position: 'relative', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
          {/* Sidebar subtle glow + dot pattern */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 180, background: `radial-gradient(ellipse 130% 60% at 50% 0%, ${CT.accent}18, transparent 70%)`, pointerEvents: 'none', zIndex: 0 }} />
          <div style={{ position: 'absolute', inset: 0, backgroundImage: `radial-gradient(circle, ${CT.accent}12 1px, transparent 1px)`, backgroundSize: '20px 20px', pointerEvents: 'none', opacity: 0.3, zIndex: 0 }} />
          <div style={{ padding: '18px 16px', borderBottom: `1px solid ${CT.border}`, display: 'flex', alignItems: 'center', gap: 10, position: 'relative', zIndex: 1 }}>
            <div style={{ width: 30, height: 30, background: CT.accent, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <TrendingUp size={16} color="#fff" />
            </div>
            <span style={{ fontFamily: "'Sora',sans-serif", fontWeight: 800, fontSize: 15, color: CT.text }}>FintelligenceIQ</span>
          </div>

          {user && (
            <div style={{ padding: '14px 16px', borderBottom: `1px solid ${CT.border}`, display: 'flex', alignItems: 'center', gap: 10 }}>
              <UserButton afterSignOutUrl="/" />
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 700, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{user.firstName || user.emailAddresses[0]?.emailAddress}</div>
                <div style={{ display:'flex', alignItems:'center', gap:6, marginTop:2 }}>
                  <span style={{background: tier==='pro' ? 'linear-gradient(135deg,#7C3AED,#A78BFA)' : tier==='premium' ? 'linear-gradient(135deg,#2563EB,#3D8EFF)' : CT.dim, color: tier==='free' ? CT.sub : '#fff', fontSize:9, fontWeight:800, padding:'2px 8px', borderRadius:8, letterSpacing:'0.04em'}}>{(tier||'free').toUpperCase()}</span>
                  <button onClick={() => setPage('account')} style={{ fontSize:10, color: CT.accent, background:'none', border:'none', cursor:'pointer', padding:0, fontFamily:'inherit', fontWeight:600, display:'flex', alignItems:'center', gap:3 }}>Settings ⚙</button>
                </div>
              </div>
            </div>
          )}

          <nav style={{ flex: 1, padding: '10px 8px', overflowY: 'auto', position: 'relative', zIndex: 1 }}>
            {NAV.map(({ id, label, icon: Icon }) => (
              <div key={id}>
                <button onClick={() => { setPage(id); if (id !== 'insights') setInsightsTab('all') }}
                  style={{ display: 'flex', alignItems: 'center', gap: 10, width: '100%', padding: '10px 12px', borderRadius: 9, border: 'none', cursor: 'pointer', background: page === id ? `${CT.accent}20` : 'transparent', color: page === id ? CT.accent : CT.text, fontSize: 13, fontWeight: page === id ? 700 : 600, marginBottom: 2, textAlign: 'left', fontFamily: 'inherit', transition: 'all 0.15s' }}>
                  <Icon size={15} style={{ color: page === id ? CT.accent : CT.text, opacity: page === id ? 1 : 0.75 }} />
                  {label}
                  {id === 'insights' && <span style={{ marginLeft: 'auto', fontSize: 10, color: CT.sub, transform: page === 'insights' ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }}>›</span>}
                  {page === id && id !== 'insights' && <ChevronRight size={12} style={{ marginLeft: 'auto' }} />}
                </button>

                {/* ── Insights subtabs — shown only when insights is active ── */}
                {id === 'insights' && page === 'insights' && (
                  <div style={{ marginLeft: 14, marginBottom: 4, borderLeft: `2px solid ${CT.accent}40`, paddingLeft: 8 }}>
                    {INSIGHT_TABS.map(tab => (
                      <button key={tab.id}
                        onClick={() => setInsightsTab(tab.id)}
                        style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%', padding: '7px 10px', borderRadius: 7, border: 'none', cursor: 'pointer', background: insightsTab === tab.id ? `${CT.accent}25` : 'transparent', color: insightsTab === tab.id ? CT.accent : CT.sub, fontSize: 12, fontWeight: insightsTab === tab.id ? 700 : 500, marginBottom: 1, textAlign: 'left', fontFamily: 'inherit', transition: 'all 0.15s' }}>
                        <span style={{ fontSize: 12 }}>{tab.emoji}</span>
                        {tab.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* ── Academies — colored gradient cards ── */}
            <div style={{ height: 1, background: `${CT.accent}25`, margin: '12px 8px 10px' }} />
            <div style={{ padding: '0 4px 6px', fontSize: 10, fontWeight: 700, color: CT.sub, letterSpacing: '0.08em', textTransform: 'uppercase', paddingLeft: 12 }}>Academies</div>

            <a href="/academy" style={{ textDecoration: 'none', display: 'block', marginBottom: 6, padding: '0 4px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 9, background: 'linear-gradient(135deg, #7C3AED20, #FF6B3520)', border: '1px solid #7C3AED50', borderRadius: 10, padding: '9px 11px', cursor: 'pointer', transition: 'border-color 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = '#A78BFA80'}
                onMouseLeave={e => e.currentTarget.style.borderColor = '#7C3AED50'}>
                <GraduationCap size={14} color="#A78BFA" />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: '#A78BFA' }}>Financial Academy</div>
                  <div style={{ fontSize: 10, color: '#6B8DB5' }}>30+ lessons · 4 subjects</div>
                </div>
                <ChevronRight size={11} color="#A78BFA" />
              </div>
            </a>

            <a href="/crypto-academy" style={{ textDecoration: 'none', display: 'block', marginBottom: 6, padding: '0 4px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 9, background: 'linear-gradient(135deg, #F7931A20, #FFD16620)', border: '1px solid #F7931A50', borderRadius: 10, padding: '9px 11px', cursor: 'pointer', transition: 'border-color 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = '#F7931A80'}
                onMouseLeave={e => e.currentTarget.style.borderColor = '#F7931A50'}>
                <span style={{ fontSize: 14 }}>₿</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: '#F7931A' }}>Crypto Academy</div>
                  <div style={{ fontSize: 10, color: CT.sub }}>DeFi · Trading · Security</div>
                </div>
                <ChevronRight size={11} color="#F7931A" />
              </div>
            </a>

            <a href="/trading-academy" style={{ textDecoration: 'none', display: 'block', marginBottom: 4, padding: '0 4px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 9, background: 'linear-gradient(135deg, #8B5CF620, #6D28D920)', border: '1px solid #8B5CF650', borderRadius: 10, padding: '9px 11px', cursor: 'pointer', transition: 'border-color 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = '#8B5CF680'}
                onMouseLeave={e => e.currentTarget.style.borderColor = '#8B5CF650'}>
                <span style={{ fontSize: 14 }}>📈</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: '#8B5CF6' }}>Trading Academy</div>
                  <div style={{ fontSize: 10, color: CT.sub }}>115 lessons · 5 subjects</div>
                </div>
                <ChevronRight size={11} color="#8B5CF6" />
              </div>
            </a>
          </nav>

          <div style={{ padding: '12px 16px', borderTop: `1px solid ${CT.border}`, position: 'relative', zIndex: 1 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: CT.sub, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8, opacity: 0.7 }}>Legal</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {[
                { href: '/privacy',       label: 'Privacy Policy'   },
                { href: '/refund',        label: 'Refund Policy'    },
                { href: '/terms',         label: 'Terms of Service' },
                { href: '/disclaimer',    label: 'Disclaimer'       },
                { href: '/cookie-policy', label: 'Cookie Policy'    },
              ].map(({ href, label }) => (
                <a key={href} href={href} style={{ textDecoration: 'none' }}>
                  <div style={{ fontSize: 11, color: CT.sub, padding: '5px 4px', borderRadius: 6, cursor: 'pointer', transition: 'color 0.15s' }}
                    onMouseEnter={e => e.currentTarget.style.color = CT.accent}
                    onMouseLeave={e => e.currentTarget.style.color = CT.sub}>
                    {label}
                  </div>
                </a>
              ))}
            </div>
            <div style={{ fontSize: 10, color: CT.sub, marginTop: 10, lineHeight: 1.7, opacity: 0.5 }}>Educational use only.<br />Not investment advice.</div>
          </div>
        </div>

        {/* ── Main ── */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', background: CT.bg, position: 'relative' }}>
          {/* ── Full-bleed background photo — changes per page ── */}
          {[{
            home:        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=25',
            analyzer:    'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1920&q=25',
            calculators: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1920&q=25',
            markets:     'https://images.unsplash.com/photo-1642790551116-18e150f248e3?auto=format&fit=crop&w=1920&q=25',
            insights:    'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1920&q=25',
          }].map(imgs => imgs[page] ? (
            <div key={page} style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
              <img
                src={imgs[page]}
                alt=""
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                onError={e => { e.target.style.display = 'none' }}
              />
              {/* Overlay that adjusts by theme */}
              <div style={{ position: 'absolute', inset: 0, background: CT.name === 'daytime'
                ? 'linear-gradient(135deg, rgba(240,244,250,0.88) 0%, rgba(224,234,245,0.82) 100%)'
                : 'linear-gradient(135deg, rgba(2,6,15,0.88) 0%, rgba(10,22,40,0.84) 100%)'
              }} />
            </div>
          ) : null)}
          {/* Dot-grid pattern on top of image */}
          <div style={{ position: 'absolute', inset: 0, backgroundImage: `radial-gradient(circle, ${CT.accent}18 1px, transparent 1px)`, backgroundSize: '28px 28px', pointerEvents: 'none', opacity: 0.35, zIndex: 1 }} />

          {/* Header */}
          <div className="dash-header" style={{ padding: '14px 24px', borderBottom: `1px solid ${CT.border}`, background: CT.name === 'daytime' ? 'rgba(255,255,255,0.92)' : 'rgba(10,14,28,0.88)', display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0, position: 'relative', zIndex: 2, backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}>
            {current && <current.icon size={16} color={CT.accent} />}
            <span style={{ fontSize: 15, fontWeight: 800, fontFamily: "'Sora',sans-serif", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 200 }}>{current?.label}</span>
            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8 }}>
              <button onClick={toggleTheme} title="Switch theme"
                style={{ background: CT.dim, border: `1px solid ${CT.border}`, borderRadius: 20, padding: '5px 14px', cursor: 'pointer', fontFamily: 'inherit', display: 'flex', alignItems: 'center', gap: 7, transition: 'all 0.2s' }}>
                <span style={{ fontSize: 14 }}>{themeName === 'midnight' ? '🌙' : '☀️'}</span>
                <span style={{ fontSize: 11, fontWeight: 700, color: CT.text }}>{themeName === 'midnight' ? 'Midnight' : 'Daytime'}</span>
                <div style={{ width: 32, height: 16, background: CT.dim, border: `1px solid ${CT.accent}60`, borderRadius: 10, position: 'relative', transition: 'background 0.2s' }}>
                  <div style={{ position: 'absolute', top: 2, left: themeName === 'daytime' ? 18 : 2, width: 12, height: 12, borderRadius: '50%', background: CT.accent, transition: 'left 0.25s cubic-bezier(0.4,0,0.2,1)' }} />
                </div>
              </button>
            </div>
          </div>


          {/* Content */}
          <div className="dash-content-area" style={{ flex: 1, overflowY: 'auto', padding: 24, background: 'transparent', position: 'relative', zIndex: 2 }}>
            {/* Cityscape watermark — sits fixed at bottom of viewport, behind content */}
            <div style={{ position: 'fixed', bottom: 0, left: 230, right: 0, height: 200, pointerEvents: 'none', zIndex: 0, opacity: CT.name === 'daytime' ? 0.06 : 0.04 }}>
              <svg viewBox="0 0 1200 200" preserveAspectRatio="xMidYMax meet" style={{ width: '100%', height: '100%' }}>
                {/* Financial district skyline silhouette */}
                <g fill={CT.name === 'daytime' ? '#2563EB' : CT.accent}>
                  {/* Far background buildings */}
                  <rect x="0" y="140" width="60" height="60"/>
                  <rect x="65" y="110" width="45" height="90"/>
                  <rect x="115" y="130" width="35" height="70"/>
                  <rect x="155" y="90" width="50" height="110"/>
                  {/* Antenna on tall building */}
                  <rect x="178" y="70" width="4" height="20"/>
                  <rect x="200" y="120" width="40" height="80"/>
                  <rect x="245" y="100" width="55" height="100"/>
                  <rect x="305" y="130" width="30" height="70"/>
                  <rect x="340" y="80" width="65" height="120"/>
                  {/* Stepped skyscraper */}
                  <rect x="345" y="60" width="55" height="20"/>
                  <rect x="350" y="40" width="45" height="20"/>
                  <rect x="355" y="25" width="35" height="15"/>
                  <rect x="410" y="110" width="45" height="90"/>
                  <rect x="460" y="95" width="70" height="105"/>
                  <rect x="465" y="75" width="60" height="20"/>
                  <rect x="470" y="58" width="50" height="17"/>
                  <rect x="535" y="125" width="38" height="75"/>
                  <rect x="578" y="100" width="55" height="100"/>
                  <rect x="638" y="85" width="48" height="115"/>
                  <rect x="690" y="115" width="35" height="85"/>
                  <rect x="730" y="70" width="60" height="130"/>
                  <rect x="734" y="50" width="52" height="20"/>
                  <rect x="737" y="33" width="46" height="17"/>
                  <rect x="795" y="105" width="42" height="95"/>
                  <rect x="842" y="120" width="38" height="80"/>
                  <rect x="885" y="90" width="55" height="110"/>
                  <rect x="945" y="130" width="40" height="70"/>
                  <rect x="990" y="100" width="50" height="100"/>
                  <rect x="1045" y="115" width="35" height="85"/>
                  <rect x="1085" y="80" width="60" height="120"/>
                  <rect x="1090" y="60" width="50" height="20"/>
                  <rect x="1150" y="125" width="50" height="75"/>
                  {/* Windows — tiny rectangle grid on some buildings */}
                  <rect x="345" y="65" width="3" height="3" opacity="0.4"/>
                  <rect x="352" y="65" width="3" height="3" opacity="0.4"/>
                  <rect x="359" y="65" width="3" height="3" opacity="0.4"/>
                  <rect x="730" y="80" width="3" height="3" opacity="0.4"/>
                  <rect x="738" y="80" width="3" height="3" opacity="0.4"/>
                  <rect x="746" y="80" width="3" height="3" opacity="0.4"/>
                  <rect x="730" y="90" width="3" height="3" opacity="0.4"/>
                  <rect x="738" y="90" width="3" height="3" opacity="0.4"/>
                </g>
              </svg>
            </div>
            {page === 'home' && <DashboardHome user={user} setPage={setPage} setInsightsTab={setInsightsTab} tier={tier} />}
            {page === 'insights' && <InsightsPage activeTab={insightsTab} tier={tier} setPage={setPage} />}
            {page === 'analyzer' && <PaywallGate required='premium' userTier={tier} feature='Stock Analyzer' setPage={setPage}><StockAnalyzer /></PaywallGate>}
            {page === 'calculators' && <Calculators tier={tier} setPage={setPage} />}
            {page === 'markets' && <MarketData />}
            {page === 'trading-gate' && <PaywallGate required='pro' userTier={tier} feature='Trading Academy — 115 Lessons' setPage={setPage}><div></div></PaywallGate>}
            {page === 'resources' && <ResourcesPage />}
            {page === 'account' && <AccountPage user={user} tier={tier} setTier={setTier} setPage={setPage} />}
          </div>
        </div>
      </div>

      {/* ── Mobile Bottom Navigation + More Drawer ── */}
      {isMobile && (
        <>
          {/* More drawer backdrop */}
          {mobileMenuOpen && (
            <div onClick={() => setMobileMenuOpen(false)}
              style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.55)', zIndex: 198, backdropFilter: 'blur(4px)' }} />
          )}

          {/* More drawer — slides up from bottom */}
          <div style={{
            position: 'fixed', left: 0, right: 0, bottom: mobileMenuOpen ? 58 : '-100%',
            zIndex: 199, background: CT.name === 'daytime' ? 'rgba(255,255,255,0.97)' : 'rgba(8,14,28,0.97)',
            backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
            borderTop: `1px solid ${CT.border}`, borderRadius: '20px 20px 0 0',
            padding: '16px 16px 8px', transition: 'bottom 0.3s cubic-bezier(0.4,0,0.2,1)',
          }}>
            {/* Drag handle */}
            <div style={{ width: 40, height: 4, background: CT.border, borderRadius: 2, margin: '0 auto 16px' }} />

            {/* Academy links */}
            <div style={{ marginBottom: 14 }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: CT.sub, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 10, paddingLeft: 4 }}>Academies</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
                {[
                  { href: '/academy',         label: 'Financial Academy', color: '#A78BFA', icon: '🎓' },
                  { href: '/crypto-academy',  label: 'Crypto Academy', color: '#F7931A', icon: '₿' },
                  { href: '/trading-academy', label: 'Trading Academy', color: '#8B5CF6', icon: '📈' },
                ].map(({ href, label, color, icon }) => (
                  <a key={href} href={href} style={{ textDecoration: 'none' }}>
                    <div style={{ background: `${color}15`, border: `1px solid ${color}40`, borderRadius: 12, padding: '12px 8px', textAlign: 'center', cursor: 'pointer' }}>
                      <div style={{ fontSize: 22, marginBottom: 4 }}>{icon}</div>
                      <div style={{ fontSize: 10, fontWeight: 700, color, lineHeight: 1.3, textAlign: 'center' }}>{label}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* More nav items */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 14 }}>
              {[
                { id: 'calculators', icon: '🧮', label: 'Calculators'         },
                { id: 'resources',   icon: '📚', label: 'Inv. Resources'      },
              ].map(({ id, icon, label }) => (
                <button key={id} onClick={() => { setPage(id); setMobileMenuOpen(false) }}
                  style={{ background: page === id ? `${CT.accent}20` : CT.dim, border: `1px solid ${page === id ? CT.accent + '50' : CT.border}`, borderRadius: 12, padding: '12px 8px', cursor: 'pointer', fontFamily: 'inherit', display: 'flex', alignItems: 'center', gap: 8, color: page === id ? CT.accent : CT.text, fontWeight: 600, fontSize: 13 }}>
                  <span style={{ fontSize: 18 }}>{icon}</span>{label}
                </button>
              ))}
            </div>

            {/* Sign out */}
            <button onClick={() => signOut({ redirectUrl: '/' })}
              style={{ width: '100%', background: 'rgba(220,38,38,0.12)', border: '1px solid rgba(220,38,38,0.35)', borderRadius: 12, padding: '13px 16px', cursor: 'pointer', fontFamily: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, color: '#DC2626', fontWeight: 700, fontSize: 14, marginBottom: 4 }}>
              <span style={{ fontSize: 16 }}>🚪</span> Sign Out
            </button>
          </div>

          {/* Primary bottom tab bar */}
          <div className="dash-bottom-nav" style={{
            background: CT.name === 'daytime' ? 'rgba(255,255,255,0.95)' : 'rgba(3,8,15,0.93)',
            borderColor: CT.border,
          }}>
            {[
              { id: 'home',     icon: '🏠', label: 'Home'    },
              { id: 'analyzer', icon: '📊', label: 'Stocks'  },
              { id: 'markets',  icon: '📉', label: 'Markets' },
              { id: 'insights', icon: '⚡', label: 'Insights'},
            ].map(({ id, icon, label }) => (
              <button key={id} onClick={() => { setPage(id); setInsightsTab('all'); setMobileMenuOpen(false) }}
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, color: page === id ? CT.accent : CT.sub, flex: 1, padding: '6px 0', fontSize: 10, fontWeight: page === id ? 700 : 500, borderTop: page === id ? `2px solid ${CT.accent}` : '2px solid transparent', transition: 'all 0.15s' }}>
                <span style={{ fontSize: 18, lineHeight: 1 }}>{icon}</span>
                {label}
              </button>
            ))}
            {/* More tab */}
            <button onClick={() => setMobileMenuOpen(o => !o)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, color: mobileMenuOpen ? CT.accent : CT.sub, flex: 1, padding: '6px 0', fontSize: 10, fontWeight: mobileMenuOpen ? 700 : 500, borderTop: mobileMenuOpen ? `2px solid ${CT.accent}` : '2px solid transparent', transition: 'all 0.15s' }}>
              <span style={{ fontSize: 18, lineHeight: 1 }}>☰</span>
              More
            </button>
          </div>
        </>
      )}
    </>
    </ThemeCtx.Provider>
  )
}

export async function getServerSideProps() { return { props: {} } }
