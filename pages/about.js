import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { ArrowRight, Check } from 'lucide-react'

const C = { navy:'#0A1628', deep:'#060E1C', card:'#0C1A2E', border:'#162845', orange:'#FF6B35', emerald:'#00C896', text:'#EEF4FF', sub:'#6B8DB5' }

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About — FintelligenceIQ</title>
        <meta name="description" content="Learn about FintelligenceIQ — a free financial education platform with real market data, interactive tools, and AI-powered explanations. No investment advice." />
      </Head>
      <Nav />

      <div style={{ background:C.deep, borderBottom:`1px solid ${C.border}`, padding:'56px 5% 48px' }}>
        <div style={{ maxWidth:800, margin:'0 auto' }}>
          <div style={{ fontSize:11, color:C.orange, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:14 }}>Company</div>
          <h1 style={{ fontFamily:"'Sora',sans-serif", fontSize:'clamp(26px,5vw,42px)', fontWeight:800, letterSpacing:'-.02em', marginBottom:16 }}>About FintelligenceIQ</h1>
          <p style={{ fontSize:16, color:C.sub, lineHeight:1.75, maxWidth:620 }}>
            We built FintelligenceIQ because financial education should be free, unbiased, and accessible to everyone — not locked behind an advisor relationship or a subscription paywall.
          </p>
        </div>
      </div>

      <div style={{ padding:'56px 5% 80px' }}>
        <div style={{ maxWidth:800, margin:'0 auto' }}>

          {/* Mission */}
          <div style={{ marginBottom:56 }}>
            <h2 style={{ fontFamily:"'Sora',sans-serif", fontSize:24, fontWeight:800, marginBottom:14 }}>Our Mission</h2>
            <p style={{ fontSize:14, color:C.sub, lineHeight:1.85, marginBottom:14 }}>
              Most people interact with the financial system their entire lives without ever truly understanding how it works. They pay advisors they cannot evaluate, make decisions based on headlines they cannot interpret, and miss opportunities they never knew existed.
            </p>
            <p style={{ fontSize:14, color:C.sub, lineHeight:1.85, marginBottom:14 }}>
              FintelligenceIQ exists to change that. We provide the same data, tools, and educational resources that financial professionals use — in plain language, completely free, with no investment advice and no hidden agenda.
            </p>
            <p style={{ fontSize:14, color:C.sub, lineHeight:1.85 }}>
              We do not manage your money. We do not sell your data. We do not tell you what to buy or sell. We explain how things work so you can make better decisions — alone, or with a professional you can now actually evaluate.
            </p>
          </div>

          {/* How it works */}
          <div id="how" style={{ marginBottom:56 }}>
            <h2 style={{ fontFamily:"'Sora',sans-serif", fontSize:24, fontWeight:800, marginBottom:14 }}>How It Works</h2>
            <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
              {[
                { step:'01', title:'Create a free account', desc:'Sign up with your name and email. No credit card required. Access is instant.' },
                { step:'02', title:'Add your API keys (optional)', desc:'For live stock data, add a free Finnhub key. For economic data, add a free FRED key. Both take under 2 minutes to get.' },
                { step:'03', title:'Use the tools', desc:'Analyze stocks, run calculators, explore economic data, ask the AI, read the news, and work through education guides — all from your dashboard.' },
                { step:'04', title:'Upgrade if you want more', desc:'Free accounts get full access to all core tools. Premium and Pro plans add saved sessions, export capabilities, and advanced features.' },
              ].map(({ step, title, desc }) => (
                <div key={step} style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:12, padding:'20px 24px', display:'flex', gap:20, alignItems:'flex-start' }}>
                  <div style={{ width:36, height:36, background:`${C.orange}18`, borderRadius:8, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, fontFamily:"'Sora',sans-serif", fontWeight:800, fontSize:14, color:C.orange }}>{step}</div>
                  <div>
                    <div style={{ fontFamily:"'Sora',sans-serif", fontSize:16, fontWeight:700, marginBottom:5 }}>{title}</div>
                    <div style={{ fontSize:13, color:C.sub, lineHeight:1.7 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Data sources */}
          <div id="sources" style={{ marginBottom:56 }}>
            <h2 style={{ fontFamily:"'Sora',sans-serif", fontSize:24, fontWeight:800, marginBottom:14 }}>Data Sources</h2>
            <p style={{ fontSize:14, color:C.sub, lineHeight:1.85, marginBottom:20 }}>
              All data displayed on FintelligenceIQ comes from publicly available APIs. We do not create, adjust, or editorialize any financial data. Everything is sourced directly from the provider and displayed as-is.
            </p>
            <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
              {[
                { name:'Finnhub', role:'Stock quotes, company profiles, financial metrics, analyst ratings, price targets, and company news.', url:'finnhub.io', free:true },
                { name:'Federal Reserve FRED', role:'Economic indicators including Fed Funds Rate, unemployment, CPI, GDP, Treasury yields, and commodity prices.', url:'fred.stlouisfed.org', free:true },
                { name:'SEC EDGAR', role:'Company filings, 10-K annual reports, 10-Q quarterly reports, 8-K current reports, and insider trading disclosures.', url:'sec.gov/edgar', free:true },
                { name:'Benzinga / Marketaux', role:'Financial news headlines sourced from thousands of publishers, filterable by ticker symbol or topic.', url:'marketaux.com', free:true },
                { name:'Anthropic Claude', role:'Powers the AI Financial Q&A feature. All conversations are educational only and restricted to financial concepts.', url:'anthropic.com', free:false },
              ].map(({ name, role, url, free }) => (
                <div key={name} style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:10, padding:'16px 20px', display:'flex', justifyContent:'space-between', alignItems:'flex-start', gap:16 }}>
                  <div>
                    <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:5 }}>
                      <span style={{ fontFamily:"'Sora',sans-serif", fontSize:15, fontWeight:700 }}>{name}</span>
                      {free && <span style={{ background:`${C.emerald}20`, color:C.emerald, fontSize:10, fontWeight:700, padding:'2px 7px', borderRadius:20 }}>Public API</span>}
                    </div>
                    <div style={{ fontSize:12, color:C.sub, lineHeight:1.6 }}>{role}</div>
                  </div>
                  <div style={{ fontSize:12, color:C.orange, flexShrink:0 }}>{url}</div>
                </div>
              ))}
            </div>
          </div>

          {/* What we are not */}
          <div style={{ background:`${C.orange}0d`, border:`1px solid ${C.orange}30`, borderRadius:14, padding:28, marginBottom:40 }}>
            <h2 style={{ fontFamily:"'Sora',sans-serif", fontSize:18, fontWeight:800, marginBottom:14, color:C.orange }}>What FintelligenceIQ Is Not</h2>
            <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
              {[
                'An investment advisor — we never tell you what to buy, sell, or hold',
                'A brokerage — we do not execute trades or hold any funds',
                'A bank — we do not hold deposits or offer lending products',
                'A data vendor — we do not sell your personal or financial data',
                'SEC or FINRA registered — because we provide education, not advice',
              ].map(item => (
                <div key={item} style={{ display:'flex', alignItems:'flex-start', gap:10 }}>
                  <div style={{ width:18, height:18, background:`${C.orange}22`, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, marginTop:1 }}>
                    <Check size={11} color={C.orange} />
                  </div>
                  <span style={{ fontSize:13, color:C.sub, lineHeight:1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ textAlign:'center' }}>
            <Link href="/sign-up">
              <button style={{ background:C.orange, color:'#fff', border:'none', borderRadius:9, padding:'13px 28px', fontWeight:700, fontSize:15, cursor:'pointer', fontFamily:'inherit', display:'inline-flex', alignItems:'center', gap:8 }}>
                Create Free Account <ArrowRight size={16} />
              </button>
            </Link>
            <div style={{ marginTop:12, fontSize:13, color:C.sub }}>No credit card · No investment advice · Cancel anytime</div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export async function getServerSideProps() { return { props: {} } }
