import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { TrendingUp, Calculator, Brain, BarChart2, Newspaper, ArrowRight, Check } from 'lucide-react'

const C = { navy:'#0A1628', deep:'#060E1C', card:'#0C1A2E', border:'#162845', orange:'#FF6B35', emerald:'#00C896', text:'#EEF4FF', sub:'#6B8DB5', dim:'#1A3050' }

const TOOLS = [
  {
    id:'analyzer', icon:TrendingUp, title:'Stock Analyzer',
    desc:'Enter any US-listed ticker and instantly see real-time price quotes, 12+ key financial metrics (P/E, EPS, P/B, margins, ROE), historical price charts from 1 month to 3 years, analyst buy/hold/sell consensus from covering analysts, analyst price targets (high, low, mean), recent company news, and a full company profile including market cap, sector, and business description.',
    free:['Real-time & delayed quotes','12 key financial metrics','1M–3Y price charts','Analyst consensus ratings'],
    premium:['Saved watchlists','Portfolio comparison','Advanced screener filters','Email alerts on tickers']},
  {
    id:'calculators', icon:Calculator, title:'Financial Calculators',
    desc:'Four fully interactive calculators that run entirely in your browser — your numbers never leave your device. All calculations update live as you adjust sliders, making it easy to explore different scenarios. Results include visual charts showing growth over time so you can see not just the answer but how you get there.',
    free:['Compound Interest Calculator','Mortgage Payment Calculator','Retirement Savings Projector','Debt Payoff — Avalanche vs Snowball'],
    premium:['Save and recall sessions','Export results to PDF','Compare multiple scenarios','Personalized projections']},
  {
    id:'ai-qa', icon:Brain, title:'AI Financial Q&A',
    desc:'Ask any financial question in plain English and receive a clear, educational explanation. The AI covers investing concepts, economic indicators, financial instruments, account types, tax concepts, and much more. Every response is educational only — the AI never gives personalized investment advice or tells you what to buy or sell.',
    free:['Unlimited questions','Plain-language explanations','Covers all major finance topics','Suggested starter questions'],
    premium:['Priority response speed','Conversation history saved','Export Q&A transcripts','Deeper analysis mode']},
  {
    id:'economic', icon:BarChart2, title:'Economic Data',
    desc:'Live economic indicators sourced directly from the Federal Reserve FRED API — the same data used by economists, central bankers, and financial professionals. Each indicator includes a historical chart, the latest reading, the change from the prior period, and a plain-language explanation of what the number means for consumers, investors, and the broader economy.',
    free:['Fed Funds Rate','Unemployment Rate','CPI Inflation Index','10-Year Treasury Yield','GDP (Billions USD)','WTI Crude Oil Price'],
    premium:['20-year historical charts','Custom indicator dashboard','Rate change alerts','Downloadable data (CSV)']},
  {
    id:'news', icon:Newspaper, title:'Market News',
    desc:'Curated financial headlines sourced from thousands of financial publishers worldwide via the Finnhub news API. Filter by specific ticker symbol to see news relevant to any stock you are researching, or browse general market news covering equities, fixed income, commodities, and macroeconomic developments.',
    free:['Live general market news','Filter by ticker symbol','Source and date displayed','Links to full articles'],
    premium:['Saved news feeds','Custom ticker watchlist news','Sentiment indicators','Breaking news alerts']},
]

export default function ToolsPage() {
  return (
    <>
      <Head>
        <title>Financial Tools — FintelligenceIQ</title>
        <meta name="description" content="Free financial tools including stock analyzer, calculators, AI Q&A, economic data, and market news. Sign up free to access all tools." />
      </Head>
      <Nav />

      <div style={{ background:'#060E1C', borderBottom:`1px solid ${C.border}`, padding:'56px 5% 48px' }}>
        <div style={{ maxWidth:900, margin:'0 auto' }}>
          <div style={{ fontSize:11, color:C.orange, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:14 }}>Platform</div>
          <h1 style={{ fontFamily:"'Sora',sans-serif", fontSize:'clamp(26px,5vw,42px)', fontWeight:800, letterSpacing:'-.02em', marginBottom:14 }}>Financial Tools</h1>
          <p style={{ fontSize:15, color:C.sub, lineHeight:1.7, maxWidth:600, marginBottom:24 }}>
            Six powerful research and education tools — all free with a FintelligenceIQ account. No investment advice, no hidden fees, no data sold.
          </p>
          <Link href="/sign-up">
            <button style={{ background:C.orange, color:'#fff', border:'none', borderRadius:9, padding:'12px 24px', fontWeight:700, fontSize:14, cursor:'pointer', fontFamily:'inherit', display:'inline-flex', alignItems:'center', gap:8 }}>
              Create Free Account <ArrowRight size={15} />
            </button>
          </Link>
        </div>
      </div>

      <div style={{ padding:'56px 5% 80px' }}>
        <div style={{ maxWidth:900, margin:'0 auto', display:'flex', flexDirection:'column', gap:48 }}>
          {TOOLS.map(({ id, icon:Icon, title, desc, free, premium }) => (
            <div key={id} id={id} style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:16, padding:32 }}>
              <div style={{ display:'flex', alignItems:'center', gap:14, marginBottom:18 }}>
                <div style={{ width:44, height:44, background:`${C.orange}18`, borderRadius:10, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, color:C.orange }}>
                  <Icon size={22} />
                </div>
                <h2 style={{ fontFamily:"'Sora',sans-serif", fontSize:22, fontWeight:800 }}>{title}</h2>
              </div>
              <p style={{ fontSize:14, color:C.sub, lineHeight:1.8, marginBottom:24 }}>{desc}</p>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:20 }}>
                <div style={{ background:'#060E1C', borderRadius:10, padding:18 }}>
                  <div style={{ fontSize:11, color:C.emerald, fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:12 }}>Free Plan Includes</div>
                  <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
                    {free.map(f => (
                      <div key={f} style={{ display:'flex', alignItems:'flex-start', gap:9 }}>
                        <div style={{ width:17, height:17, background:`${C.emerald}20`, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, marginTop:1 }}>
                          <Check size={10} color={C.emerald} />
                        </div>
                        <span style={{ fontSize:13, color:C.sub }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ background:`${C.orange}0d`, border:`1px solid ${C.orange}30`, borderRadius:10, padding:18 }}>
                  <div style={{ fontSize:11, color:C.orange, fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:12 }}>Premium Adds</div>
                  <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
                    {premium.map(f => (
                      <div key={f} style={{ display:'flex', alignItems:'flex-start', gap:9 }}>
                        <div style={{ width:17, height:17, background:`${C.orange}22`, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, marginTop:1 }}>
                          <Check size={10} color={C.orange} />
                        </div>
                        <span style={{ fontSize:13, color:C.sub }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div style={{ marginTop:20, display:'flex', gap:12 }}>
                <Link href="/sign-up">
                  <button style={{ background:C.orange, color:'#fff', border:'none', borderRadius:8, padding:'9px 18px', fontWeight:700, fontSize:13, cursor:'pointer', fontFamily:'inherit', display:'inline-flex', alignItems:'center', gap:7 }}>
                    Access Free <ArrowRight size={13} />
                  </button>
                </Link>
                <Link href="/#pricing">
                  <button style={{ background:'transparent', color:C.sub, border:`1px solid ${C.border}`, borderRadius:8, padding:'9px 18px', fontWeight:600, fontSize:13, cursor:'pointer', fontFamily:'inherit' }}>
                    See Premium Features
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  )
}

export async function getServerSideProps() { return { props: {} } }
