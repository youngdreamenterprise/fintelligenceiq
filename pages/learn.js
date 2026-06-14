import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { ArrowRight, Check } from 'lucide-react'

const C = { navy:'#0A1628', deep:'#060E1C', card:'#0C1A2E', border:'#162845', orange:'#FF6B35', emerald:'#00C896', text:'#EEF4FF', sub:'#6B8DB5' }

const TOPICS = [
  {
    id:'investing', icon:'📈', title:'Investing Basics',
    desc:'A complete introduction to how financial markets work, what different investment vehicles are, and how to think about building wealth over time.',
    articles:[
      { title:'How the Stock Market Works', desc:'What stocks are, how exchanges function, how prices are determined, and what drives a share price up or down.' },
      { title:'Stocks vs Bonds vs ETFs', desc:'The differences between equity, debt, and fund-based investing — risk profiles, expected returns, and when each is typically used.' },
      { title:'Understanding P/E Ratios', desc:'What the price-to-earnings ratio tells you about a stock, how to compare it across companies, and what high vs low P/E means.' },
      { title:'Dollar-Cost Averaging', desc:'The strategy of investing fixed amounts at regular intervals and why it reduces the risk of poor market timing.' },
      { title:'Reading a Balance Sheet', desc:'How to interpret assets, liabilities, and equity — and what these numbers reveal about a company\'s financial health.' },
    ],
    free:['All introductory articles','Concept explainers','Financial glossary access','Interactive definitions'],
    premium:['Deep-dive research guides','Downloadable reference sheets','Video walkthroughs','Advanced topic modules'],
  },
  {
    id:'sma', icon:'🏦', title:'SMAs & Managed Accounts',
    desc:'Separately managed accounts are one of the least understood but most powerful investment vehicles for self-directed investors. This section explains everything.',
    articles:[
      { title:'What Is a Separately Managed Account?', desc:'How SMAs differ from mutual funds and ETFs, what direct ownership means, and who typically uses them.' },
      { title:'SMA Minimums & How to Access Them', desc:'Traditional minimums, direct indexing platforms with lower thresholds, and how to access SMAs without a full-service broker.' },
      { title:'Tax-Loss Harvesting in SMAs', desc:'Why owning individual securities (vs fund shares) creates tax-loss harvesting opportunities and how to take advantage of them.' },
      { title:'Growth SMAs vs Income SMAs', desc:'The difference between growth-tilted and income-focused strategies, typical allocations, and who each is suited for.' },
      { title:'SMA Fees & Cost Comparison', desc:'How SMA management fees compare to mutual fund expense ratios and ETF fees across different platforms.' },
    ],
    free:['All SMA explainer articles','Platform comparison guides','Fee calculator tool','Glossary of SMA terms'],
    premium:['Platform deep-dive reviews','Side-by-side comparisons','Tax efficiency analysis','Strategy breakdowns'],
  },
  {
    id:'retirement', icon:'🏖️', title:'Retirement Planning',
    desc:'Everything you need to understand the US retirement system — from contribution limits to withdrawal strategies to Social Security optimization.',
    articles:[
      { title:'401(k) vs IRA vs Roth IRA', desc:'How each account type is taxed, contribution limits, income thresholds, and which makes sense for different situations.' },
      { title:'How Social Security Works', desc:'How benefits are calculated, when to claim, and strategies for maximizing lifetime benefits.' },
      { title:'The 4% Withdrawal Rule', desc:'The research behind the rule, how it applies to retirement income planning, and when it may not hold.' },
      { title:'Required Minimum Distributions', desc:'What RMDs are, when they start, how they are calculated, and the tax implications.' },
      { title:'Roth Conversion Strategy', desc:'When converting traditional IRA funds to Roth makes sense and how to calculate the tax impact.' },
    ],
    free:['All retirement articles','Retirement calculator','RMD calculator','Social Security explainer'],
    premium:['Personalized retirement roadmap','Scenario comparison tools','Tax bracket optimizer','Medicare guide'],
  },
  {
    id:'tax', icon:'📋', title:'Tax Planning',
    desc:'How the US tax system works for investors and earners — from understanding brackets to reducing what you owe legally.',
    articles:[
      { title:'How Tax Brackets Work', desc:'Marginal vs effective tax rates, how income moves through brackets, and why earning more rarely means taking home less.' },
      { title:'Capital Gains Tax Explained', desc:'Short-term vs long-term capital gains rates, the 0% capital gains bracket, and strategies to minimize taxes on investment profits.' },
      { title:'Tax-Loss Harvesting', desc:'How to use investment losses to offset gains, the wash-sale rule, and how to implement this strategy.' },
      { title:'Standard vs Itemized Deductions', desc:'When itemizing makes sense, what qualifies, and how the standard deduction compares for most filers.' },
      { title:'Roth Conversions & Tax Planning', desc:'Using low-income years to convert traditional IRA funds at lower tax rates and build a tax-free retirement pool.' },
    ],
    free:['All tax education articles','Tax bracket calculator','Capital gains estimator','Deduction explainers'],
    premium:['Roth conversion calculator','Tax scenario modeling','Year-end tax planning guide','CPA referral directory'],
  },
  {
    id:'estate', icon:'📜', title:'Estate Planning',
    desc:'How to understand the documents, accounts, and strategies that ensure your assets go where you intend when you pass.',
    articles:[
      { title:'Wills vs Trusts', desc:'The difference between a will and a revocable living trust, when each is appropriate, and how they work with probate.' },
      { title:'Beneficiary Designations', desc:'Why beneficiary designations on retirement accounts and insurance policies override your will — and how to keep them updated.' },
      { title:'Power of Attorney Explained', desc:'Financial and medical POA — what each covers, how to grant them, and why everyone should have them.' },
      { title:'How Trusts Distribute Assets', desc:'How revocable and irrevocable trusts work, how trustees are appointed, and how assets pass to beneficiaries.' },
      { title:'Estate Tax Basics', desc:'Federal and state estate tax thresholds, how the unified credit works, and basic strategies used to reduce taxable estates.' },
    ],
    free:['All estate planning articles','Beneficiary checklist','Document guide','Glossary of legal terms'],
    premium:['Trust type comparison guide','State-specific estate guides','Document vault (coming soon)','Attorney referral directory'],
  },
]

export default function LearnPage() {
  return (
    <>
      <Head>
        <title>Financial Education Hub — FintelligenceIQ</title>
        <meta name="description" content="Free financial education covering investing basics, SMAs, retirement planning, tax strategy, and estate planning. Plain language, no jargon." />
      </Head>
      <Nav />

      <div style={{ background:C.deep, borderBottom:`1px solid ${C.border}`, padding:'56px 5% 48px' }}>
        <div style={{ maxWidth:900, margin:'0 auto' }}>
          <div style={{ fontSize:11, color:C.orange, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:14 }}>Education</div>
          <h1 style={{ fontFamily:"'Sora',sans-serif", fontSize:'clamp(26px,5vw,42px)', fontWeight:800, letterSpacing:'-.02em', marginBottom:14 }}>Financial Education Hub</h1>
          <p style={{ fontSize:15, color:C.sub, lineHeight:1.7, maxWidth:580, marginBottom:24 }}>
            Deep-dive guides on every aspect of personal finance — plain language, no jargon, no agenda. Free with a FintelligenceIQ account.
          </p>
          <Link href="/sign-up">
            <button style={{ background:C.orange, color:'#fff', border:'none', borderRadius:9, padding:'12px 24px', fontWeight:700, fontSize:14, cursor:'pointer', fontFamily:'inherit', display:'inline-flex', alignItems:'center', gap:8 }}>
              Start Learning Free <ArrowRight size={15} />
            </button>
          </Link>
        </div>
      </div>

      {/* Quick nav */}
      <div style={{ background:C.navy, borderBottom:`1px solid ${C.border}`, padding:'16px 5%', position:'sticky', top:64, zIndex:10 }}>
        <div style={{ maxWidth:900, margin:'0 auto', display:'flex', gap:20, flexWrap:'wrap' }}>
          {TOPICS.map(t => (
            <a key={t.id} href={`#${t.id}`} style={{ fontSize:13, color:C.sub, textDecoration:'none', fontWeight:600, transition:'color 0.15s', display:'flex', alignItems:'center', gap:6 }}>
              <span>{t.icon}</span> {t.title}
            </a>
          ))}
        </div>
      </div>

      <div style={{ padding:'56px 5% 80px' }}>
        <div style={{ maxWidth:900, margin:'0 auto', display:'flex', flexDirection:'column', gap:56 }}>
          {TOPICS.map(({ id, icon, title, desc, articles, free, premium }) => (
            <div key={id} id={id}>
              <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:14 }}>
                <span style={{ fontSize:32 }}>{icon}</span>
                <h2 style={{ fontFamily:"'Sora',sans-serif", fontSize:26, fontWeight:800 }}>{title}</h2>
              </div>
              <p style={{ fontSize:14, color:C.sub, lineHeight:1.8, marginBottom:24, maxWidth:700 }}>{desc}</p>

              <div style={{ display:'flex', flexDirection:'column', gap:10, marginBottom:24 }}>
                {articles.map(({ title: t, desc: d }) => (
                  <Link key={t} href="/sign-up" style={{ textDecoration:'none' }}>
                    <div style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:10, padding:'16px 20px', cursor:'pointer', display:'flex', alignItems:'flex-start', gap:14, transition:'border-color 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.borderColor=`${C.orange}44`}
                      onMouseLeave={e => e.currentTarget.style.borderColor=C.border}>
                      <div style={{ width:28, height:28, background:`${C.orange}18`, borderRadius:7, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, marginTop:1 }}>
                        <span style={{ fontSize:13 }}>📖</span>
                      </div>
                      <div>
                        <div style={{ fontSize:14, fontWeight:700, color:C.text, marginBottom:4 }}>{t}</div>
                        <div style={{ fontSize:12, color:C.sub, lineHeight:1.6 }}>{d}</div>
                      </div>
                      <ArrowRight size={14} color={C.sub} style={{ flexShrink:0, marginTop:4 }} />
                    </div>
                  </Link>
                ))}
              </div>

              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14 }}>
                <div style={{ background:'#060E1C', border:`1px solid ${C.border}`, borderRadius:10, padding:18 }}>
                  <div style={{ fontSize:11, color:C.emerald, fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:10 }}>Free Account Includes</div>
                  {free.map(f => (
                    <div key={f} style={{ display:'flex', alignItems:'center', gap:8, marginBottom:7 }}>
                      <Check size={12} color={C.emerald} /><span style={{ fontSize:12, color:C.sub }}>{f}</span>
                    </div>
                  ))}
                </div>
                <div style={{ background:`${C.orange}0d`, border:`1px solid ${C.orange}30`, borderRadius:10, padding:18 }}>
                  <div style={{ fontSize:11, color:C.orange, fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:10 }}>Premium Adds</div>
                  {premium.map(f => (
                    <div key={f} style={{ display:'flex', alignItems:'center', gap:8, marginBottom:7 }}>
                      <Check size={12} color={C.orange} /><span style={{ fontSize:12, color:C.sub }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginTop:18, display:'flex', gap:12 }}>
                <Link href="/sign-up">
                  <button style={{ background:C.orange, color:'#fff', border:'none', borderRadius:8, padding:'9px 18px', fontWeight:700, fontSize:13, cursor:'pointer', fontFamily:'inherit', display:'inline-flex', alignItems:'center', gap:7 }}>
                    Read Free <ArrowRight size={13} />
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
