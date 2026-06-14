import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useUser } from '@clerk/nextjs'
import { ChevronDown, Check, ArrowRight, TrendingUp, Calculator, Brain, BarChart2, Newspaper, BookOpen, Zap, Globe, GraduationCap, ShieldCheck, Lock, Star } from 'lucide-react'

const C = {
  navy:'#030D1C', mid:'#071526', deep:'#020A14', card:'#0A1628',
  border:'#0F2035', orange:'#FF6B35', emerald:'#00C896', purple:'#A78BFA',
  blue:'#3D8EFF', gold:'#F5C842',
  text:'#EEF4FF', sub:'#5A7FA8', dim:'#142237',
}

const FEATURES = [
  {
    icon: TrendingUp, color: C.orange, label: 'Stock Analyzer',
    headline: 'Real-time stock research, not guesswork',
    body: 'Pull live quotes, P/E ratios, EPS, analyst consensus, revenue growth, and earnings history for any US-listed ticker. Compare 12+ fundamental metrics at a glance and overlay price charts — everything a retail investor needs before making a decision.',
    bullets: ['Live quotes & 12+ fundamental metrics','Analyst ratings & consensus price targets','Earnings history & revenue growth trends','Interactive price charts'],
  },
  {
    icon: BookOpen, color: C.blue, label: 'Financial Academy',
    headline: '147 lessons across 5 subjects — complete financial education',
    body: 'From your first paycheck to advanced tax strategy. The Financial Academy covers Investing, Taxes, Credit & Lending, Banking, and Insurance — each with comprehensive articles, SVG diagrams, and real-world examples. Not summaries. Not bullet lists. Full lessons.',
    bullets: ['Investing: ETFs, Options, REITs, Crypto, Behavioral Finance','Taxes: Capital gains, Self-employment, Crypto tax, Estate planning','Credit: Mortgages, Debt payoff, FICO scores, Bankruptcy','Banking: HYSAs, I-Bonds, Fed policy, Neobanks, Shadow banking','Insurance: Life, Health, Disability, LTC, Umbrella, Medicare'],
  },
  {
    icon: GraduationCap, color: C.purple, label: 'Flashcard Academy',
    headline: '380 spaced-repetition flashcards across all three academies',
    body: 'The same SM-2 algorithm used by Anki — proven to improve long-term retention by 200%. Rate each card Again / Hard / Good / Easy. Cards you struggle with return sooner. Cards you know come back weeks later. Progress persists across sessions.',
    bullets: ['380 cards: Financial, Crypto & Trading decks','SM-2 spaced repetition algorithm (Anki-grade)','3D card flip, keyboard shortcuts, Pro Tips per card','Category & difficulty filters + confetti on completion'],
  },
  {
    icon: Calculator, color: C.emerald, label: 'Financial Calculators',
    headline: 'Four calculators that show your real numbers',
    body: 'Compound Interest, Mortgage Payment, Retirement Projector, and Debt Payoff — each with live visual charts that update as you adjust sliders. See how one extra mortgage payment per year saves you $40,000. See how $200/month more in your 401(k) changes your retirement date.',
    bullets: ['Compound interest with inflation adjustment','Mortgage amortization with extra payment impact','Retirement projector with Social Security integration','Debt payoff: Avalanche vs Snowball comparison'],
  },
  {
    icon: Brain, color: '#F59E0B', label: 'FIQ Search Bot',
    headline: 'Instant answers from 453 indexed financial topics',
    body: 'Not a generic chatbot. A knowledge-base search engine built from our curriculum covering 453 financial and trading concepts. Ask "what is backdoor Roth?" or "how does duration work?" and get a structured answer in under a second — no API calls, no hallucinations.',
    bullets: ['453 indexed topics from all three academies','Instant keyword + semantic matching','Structured answers with direct lesson links','No internet required — fully private & offline-capable'],
  },
  {
    icon: Globe, color: C.orange, label: 'Live Market Data',
    headline: 'Economic data straight from the Federal Reserve',
    body: 'Live FRED data: Fed Funds Rate, CPI inflation, unemployment rate, 10-year Treasury yield, M2 money supply, and more. Updated in real time. Plus curated financial news by ticker or topic — no ads, no noise.',
    bullets: ['Fed Funds Rate, CPI, Unemployment (FRED API)','10-Year Treasury, M2, GDP Growth','Curated market news by ticker or keyword','Loan & credit rate tracker'],
  },
  {
    icon: Zap, color: C.blue, label: 'FIQ Insights',
    headline: 'Original financial education articles written for real people',
    body: 'Not sponsored content. Not recycled Reddit posts. FintelligenceIQ Insights are original educational articles on timely financial topics — explained in plain language without condescension. Three articles/month free. Unlimited with Premium.',
    bullets: ['Original articles on timely financial topics','Plain-language explanations, no jargon walls','Three articles/month free, unlimited with Premium','Filterable by subject (investing, taxes, credit, etc.)'],
  },
  {
    icon: TrendingUp, color: C.purple, label: 'Trading & Crypto Academies',
    headline: 'Technical analysis and crypto education built for serious learners',
    body: 'The Trading Academy covers RSI, MACD, Bollinger Bands, Elliott Wave, Wyckoff, momentum, mean reversion, and position sizing. The Crypto Academy covers blockchain fundamentals, Bitcoin, Ethereum, DeFi, NFTs, security, and regulation — from first principles.',
    bullets: ['Trading: 115 units + 130 flashcards','Crypto: Full blockchain → DeFi coverage + 90 flashcards','All content includes diagrams and key concept callouts','Integrated flashcard system with spaced repetition'],
  },
]

const PLANS = [
  {
    name: 'Free', price: '$0', period: '/month', color: C.sub,
    desc: 'Start learning with no commitment.',
    features: ['Stock Analyzer (full access)','Compound Interest Calculator','FIQ Search Bot (453 topics)','Financial Academy — all 147 lessons','3 FIQ Insights articles/month','Live market & economic data','Market news feed'],
    cta: 'Start Free', href: '/sign-up', highlight: false,
  },
  {
    name: 'Premium', price: '$9', period: '/month', color: C.orange,
    desc: 'Unlock every tool and all content.',
    features: ['Everything in Free','All 4 Financial Calculators (mortgage, retirement, debt payoff)','Unlimited FIQ Insights articles','Financial + Crypto Academy full access','380 Flashcards (all three decks)','Priority support'],
    cta: 'Start Premium', href: '/sign-up?plan=premium', highlight: true,
    badge: 'MOST POPULAR',
  },
  {
    name: 'Pro', price: '$29', period: '/month', color: C.purple,
    desc: 'Everything, plus professional-grade trading tools.',
    features: ['Everything in Premium','Trading Academy (115 units + 130 flashcards)','Advanced Stock Screener','Portfolio Tracker','Exclusive Pro Discord community','Early access to new features'],
    cta: 'Start Pro', href: '/sign-up?plan=pro', highlight: false,
  },
]

const TESTIMONIALS = [
  { name: 'Marcus T.', role: 'First-time investor', text: 'I went from not knowing what a P/E ratio was to confidently analyzing stocks in three weeks. The Financial Academy lessons actually explain the WHY behind everything.', stars: 5 },
  { name: 'Destiny R.', role: 'Nursing student', text: 'The flashcard system is exactly what I needed. I study 10 cards before bed every night. My credit score went up 70 points after following the Credit lessons.', stars: 5 },
  { name: 'Kevin J.', role: 'Crypto curious', text: 'Finally a platform that explains DeFi and blockchain without assuming I\'m a developer. The Crypto Academy is the clearest explanation I\'ve found anywhere.', stars: 5 },
  { name: 'Priya M.', role: 'Early-career professional', text: 'The tax content alone is worth it. I found out I\'ve been doing my backdoor Roth wrong for two years. The lesson on QBI deductions saved me thousands.', stars: 5 },
  { name: 'David L.', role: 'Swing trader', text: 'The Trading Academy covers Wyckoff and Elliott Wave better than paid courses I\'ve taken. The flashcard system for RSI divergence patterns is genuinely useful.', stars: 5 },
  { name: 'Aisha W.', role: 'Mom of two', text: 'I used the mortgage calculator to figure out that making one extra payment per year saves $38,000 on my loan. This platform pays for itself in the first month.', stars: 5 },
]

const FAQ = [
  { q: 'Is FintelligenceIQ investment advice?', a: 'No. FintelligenceIQ is a financial education platform — not a registered investment advisor. All content is educational only. We explain how financial instruments work, not what you personally should buy or sell.' },
  { q: 'How is this different from YouTube finance channels?', a: 'Structured curriculum instead of isolated videos. Spaced repetition flashcards to actually retain what you learn. Interactive tools (stock analyzer, calculators) that work with your specific numbers. And no sponsorships that create conflicts of interest.' },
  { q: 'What does the Stock Analyzer actually show?', a: 'Live price, P/E ratio, EPS, revenue growth, analyst consensus ratings, price targets, earnings history, dividend yield, market cap, and an interactive price chart — all pulled in real time for any US-listed ticker.' },
  { q: 'Can I cancel my subscription at any time?', a: 'Yes. Monthly subscriptions cancel immediately with no penalty. You keep access until the end of your billing period. No contracts, no cancellation fees.' },
  { q: 'What is spaced repetition and why does it matter?', a: 'Spaced repetition is a learning technique where you review material at increasing intervals based on how well you know it. It\'s the most research-validated method for long-term memory retention — the same algorithm used by Anki, the gold standard in medical school and language learning.' },
  { q: 'Does the Trading Academy cover crypto trading?', a: 'The Trading Academy focuses on technical analysis fundamentals (RSI, MACD, chart patterns, risk management, Wyckoff). The separate Crypto Academy covers blockchain, Bitcoin, Ethereum, and DeFi fundamentals. Both include dedicated flashcard decks.' },
]

export default function Landing() {
  const { isSignedIn } = useUser()
  const router = useRouter()
  const [openFaq, setOpenFaq] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const heroRef = useRef(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => { if (isSignedIn) router.prefetch('/dashboard') }, [isSignedIn])

  return (
    <>
      <Head>
        {/* ── Primary SEO ── */}
        <title>FintelligenceIQ — Free Financial Literacy & Financial Education Platform | Learn Investing, Crypto & Trading</title>
        <meta name="description" content="Free financial literacy education with 147 lessons on investing, taxes, credit, and banking. Learn crypto fundamentals, technical analysis, and trading strategies. 380 spaced-repetition flashcards, live stock analysis, and financial calculators. The #1 financial learning platform for self-directed investors." />
        <meta name="keywords" content="financial literacy, financial education, learn investing, how to invest money, financial training, learn stock market, financial learning platform, crypto education, learn cryptocurrency, learn trading, technical analysis course, personal finance education, free financial courses, stock market basics, investing for beginners, financial literacy platform, learn DeFi, blockchain education, trading academy, spaced repetition finance, compound interest calculator, budget planning, credit score improvement, how to read financial statements, options trading basics, ETF investing, index fund investing, Roth IRA explained, tax planning education, financial independence" />

        {/* ── Open Graph ── */}
        <meta property="og:title" content="FintelligenceIQ — Financial Literacy & Learning Platform" />
        <meta property="og:description" content="Master financial literacy with 147 lessons, 380 flashcards, live stock analysis, and financial calculators. Free forever plan. Learn investing, crypto, and trading from first principles." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fintelligenceiq.com" />
        <meta property="og:image" content="https://fintelligenceiq.com/og-image.png" />
        <meta property="og:site_name" content="FintelligenceIQ" />

        {/* ── Twitter Card ── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FintelligenceIQ — Financial Literacy & Learning Platform" />
        <meta name="twitter:description" content="147 financial lessons + 380 spaced-repetition flashcards + live stock analyzer. Free forever plan." />
        <meta name="twitter:image" content="https://fintelligenceiq.com/og-image.png" />

        {/* ── Technical SEO ── */}
        <link rel="canonical" href="https://fintelligenceiq.com" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="FintelligenceIQ" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="category" content="Financial Education, Personal Finance, Investing" />

        {/* ── Schema.org Structured Data ── */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "FintelligenceIQ",
          "url": "https://fintelligenceiq.com",
          "description": "Financial literacy and education platform offering structured courses on investing, taxes, credit, banking, cryptocurrency, and trading with spaced-repetition flashcards and live market tools.",
          "educationalLevel": "Beginner to Advanced",
          "knowsAbout": ["Financial Literacy","Investing","Cryptocurrency","Technical Analysis","Personal Finance","Tax Planning","Credit Management"],
          "offers": [
            { "@type": "Offer", "name": "Free Plan", "price": "0", "priceCurrency": "USD" },
            { "@type": "Offer", "name": "Premium Plan", "price": "9", "priceCurrency": "USD", "billingIncrement": "P1M" },
            { "@type": "Offer", "name": "Pro Plan", "price": "29", "priceCurrency": "USD", "billingIncrement": "P1M" }
          ],
          "hasCourse": [
            { "@type": "Course", "name": "Financial Academy", "description": "147 lessons across Investing, Taxes, Credit, Banking, and Insurance", "numberOfCredits": 147 },
            { "@type": "Course", "name": "Crypto Academy", "description": "Blockchain fundamentals to DeFi, NFTs, and crypto security" },
            { "@type": "Course", "name": "Trading Academy", "description": "Technical analysis, chart patterns, risk management, and trading psychology" }
          ]
        })}} />

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Sora:wght@700;800&family=Manrope:wght@400;500;600;700&display=swap');
          *{box-sizing:border-box;margin:0;padding:0}
          body{background:${C.navy};color:${C.text};font-family:'Manrope',system-ui,sans-serif}
          ::-webkit-scrollbar{width:5px}::-webkit-scrollbar-thumb{background:#1A3050;border-radius:3px}
          @keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
          @keyframes pulse{0%,100%{opacity:1}50%{opacity:.5}}
          @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
          .hero-animate{animation:fadeUp 0.7s ease both}
          .feature-card:hover{transform:translateY(-3px);border-color:var(--feat-color)!important}
          .feature-card{transition:transform 0.2s,border-color 0.2s}
          .plan-card:hover{transform:translateY(-4px);box-shadow:0 16px 48px rgba(0,0,0,0.4)}
          .plan-card{transition:all 0.2s}
          .stat-glow{text-shadow:0 0 30px currentColor}
        `}</style>
      </Head>

      <Nav />

      {/* ── HERO ── */}
      <section style={{ position:'relative', minHeight:'92vh', display:'flex', alignItems:'center', padding:'80px 5% 60px', overflow:'hidden' }}>
        {/* Background grid */}
        <div style={{ position:'absolute', inset:0, backgroundImage:`linear-gradient(${C.border} 1px, transparent 1px), linear-gradient(90deg, ${C.border} 1px, transparent 1px)`, backgroundSize:'60px 60px', opacity:0.4, pointerEvents:'none' }} />
        {/* Radial glow */}
        <div style={{ position:'absolute', top:'20%', left:'50%', transform:'translateX(-50%)', width:700, height:500, background:`radial-gradient(ellipse, rgba(255,107,53,0.12) 0%, rgba(61,142,255,0.06) 50%, transparent 70%)`, pointerEvents:'none' }} />

        <div style={{ maxWidth:1180, margin:'0 auto', width:'100%', display:'grid', gridTemplateColumns:'1fr 1fr', gap:60, alignItems:'center' }}>
          {/* Left: copy */}
          <div>
            <div className="hero-animate" style={{ animationDelay:'0ms' }}>
              <span style={{ display:'inline-flex', alignItems:'center', gap:8, background:'rgba(255,107,53,0.12)', border:'1px solid rgba(255,107,53,0.3)', color:C.orange, borderRadius:20, padding:'5px 14px', fontSize:12, fontWeight:700, letterSpacing:'0.08em', marginBottom:20 }}>
                🎓 FINANCIAL LITERACY PLATFORM
              </span>
            </div>
            <h1 className="hero-animate" style={{ fontFamily:"'Sora',sans-serif", fontSize:'clamp(32px,4.5vw,58px)', fontWeight:800, lineHeight:1.12, letterSpacing:'-0.02em', marginBottom:20, animationDelay:'80ms' }}>
              The education your
              <br />
              <span style={{ background:`linear-gradient(90deg, ${C.orange}, ${C.blue})`, WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>bank never gave you.</span>
            </h1>
            <p className="hero-animate" style={{ fontSize:'clamp(15px,1.8vw,18px)', color:C.sub, lineHeight:1.75, marginBottom:32, maxWidth:500, animationDelay:'160ms' }}>
              Master investing, crypto, and trading through 300+ structured lessons, 380 spaced-repetition flashcards, live stock analysis, and four financial calculators — all in one place.
            </p>
            <div className="hero-animate" style={{ display:'flex', gap:14, flexWrap:'wrap', animationDelay:'240ms' }}>
              <Link href="/sign-up" style={{ display:'inline-flex', alignItems:'center', gap:8, background:`linear-gradient(135deg, ${C.orange}, #E05A2A)`, color:'#fff', textDecoration:'none', borderRadius:12, padding:'14px 28px', fontWeight:800, fontSize:16, boxShadow:`0 4px 24px rgba(255,107,53,0.35)`, fontFamily:'inherit' }}>
                Start for Free <ArrowRight size={16} />
              </Link>
              <Link href="#features" style={{ display:'inline-flex', alignItems:'center', gap:8, background:'rgba(255,255,255,0.06)', color:C.text, textDecoration:'none', borderRadius:12, padding:'14px 24px', fontWeight:700, fontSize:15, border:`1px solid ${C.border}`, fontFamily:'inherit' }}>
                See all features
              </Link>
            </div>
            <div className="hero-animate" style={{ display:'flex', gap:20, marginTop:28, animationDelay:'320ms' }}>
              {[['🆓','Free forever plan'],['🃏','380 flashcards'],['📊','Live stock data']].map(([e,l]) => (
                <div key={l} style={{ display:'flex', alignItems:'center', gap:6, fontSize:12, color:C.sub }}>
                  <span>{e}</span><span>{l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: feature preview card */}
          <div className="hero-animate" style={{ animationDelay:'200ms' }}>
            <div style={{ background:`linear-gradient(145deg, ${C.card}, ${C.mid})`, border:`1px solid ${C.border}`, borderRadius:20, padding:24, boxShadow:'0 24px 80px rgba(0,0,0,0.5)' }}>
              {/* Header */}
              <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:20 }}>
                <div>
                  <div style={{ fontFamily:"'Sora',sans-serif", fontSize:13, fontWeight:800, color:C.text }}>FintelligenceIQ</div>
                  <div style={{ fontSize:11, color:C.sub }}>Financial Academy · Investing</div>
                </div>
                <div style={{ background:'rgba(0,200,150,0.15)', border:'1px solid rgba(0,200,150,0.3)', color:C.emerald, borderRadius:20, padding:'3px 10px', fontSize:10, fontWeight:700 }}>LIVE</div>
              </div>
              {/* Mini stats */}
              <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:10, marginBottom:20 }}>
                {[
                  {label:'Lessons',value:'300+',color:C.orange},
                  {label:'Flashcards',value:'380',color:C.purple},
                  {label:'Free Forever',value:'✓',color:C.emerald},
                ].map(s => (
                  <div key={s.label} style={{ background:C.dim, borderRadius:10, padding:'10px 12px', textAlign:'center' }}>
                    <div style={{ fontSize:20, fontWeight:800, color:s.color, fontFamily:"'Sora',sans-serif" }}>{s.value}</div>
                    <div style={{ fontSize:10, color:C.sub, marginTop:2 }}>{s.label}</div>
                  </div>
                ))}
              </div>
              {/* Subject list */}
              <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
                {[
                  {emoji:'📈',label:'Financial Academy',sub:'147 lessons — Investing, Taxes, Credit, Banking, Insurance',color:C.blue},
                  {emoji:'🔐',label:'Crypto Academy',sub:'Bitcoin, Ethereum, DeFi, NFTs, Blockchain security',color:C.orange},
                  {emoji:'📉',label:'Trading Academy',sub:'RSI, MACD, Wyckoff, Elliott Wave, Risk Management',color:C.purple},
                  {emoji:'🃏',label:'Flashcard Academy',sub:'380 SM-2 spaced repetition cards across all three decks',color:C.emerald},
                ].map(item => (
                  <div key={item.label} style={{ display:'flex', alignItems:'center', gap:12, padding:'10px 12px', background:C.dim, borderRadius:10, border:`1px solid ${C.border}` }}>
                    <div style={{ width:36, height:36, borderRadius:'50%', background:`${item.color}20`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:18, flexShrink:0 }}>{item.emoji}</div>
                    <div>
                      <div style={{ fontSize:12, fontWeight:700, color:C.text }}>{item.label}</div>
                      <div style={{ fontSize:10, color:C.sub, lineHeight:1.4 }}>{item.sub}</div>
                    </div>
                    <Check size={14} color={item.color} style={{ marginLeft:'auto', flexShrink:0 }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div style={{ borderTop:`1px solid ${C.border}`, borderBottom:`1px solid ${C.border}`, padding:'18px 5%', background:C.mid }}>
        <div style={{ maxWidth:1100, margin:'0 auto', display:'flex', alignItems:'center', justifyContent:'center', gap:'clamp(20px,4vw,60px)', flexWrap:'wrap' }}>
          {[
            ['5,000+','Students learning'],['147','Financial lessons'],['380','Flashcards'],['3','Complete academies'],['$0','To start'],
          ].map(([num, label]) => (
            <div key={label} style={{ textAlign:'center' }}>
              <div style={{ fontFamily:"'Sora',sans-serif", fontSize:'clamp(18px,2.5vw,26px)', fontWeight:800, color:C.orange }}>{num}</div>
              <div style={{ fontSize:11, color:C.sub }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── FEATURES ── */}
      <section id="features" style={{ padding:'100px 5%' }}>
        <div style={{ maxWidth:1180, margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:64 }}>
            <div style={{ fontSize:11, color:C.orange, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:10 }}>Everything inside FintelligenceIQ</div>
            <h2 style={{ fontFamily:"'Sora',sans-serif", fontSize:'clamp(26px,3.5vw,42px)', fontWeight:800, letterSpacing:'-0.02em', marginBottom:14 }}>
              Every tool a self-directed investor needs
            </h2>
            <p style={{ fontSize:16, color:C.sub, maxWidth:560, margin:'0 auto' }}>
              One platform for financial education, live market research, and the tools to actually apply what you learn.
            </p>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(340px,1fr))', gap:24 }}>
            {FEATURES.map((f, i) => (
              <article key={i} className="feature-card" style={{ '--feat-color': f.color, background:`linear-gradient(145deg, ${C.card}, ${C.mid})`, border:`1px solid ${C.border}`, borderRadius:18, padding:'28px 28px 24px' }}>
                <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:16 }}>
                  <div style={{ width:44, height:44, borderRadius:12, background:`${f.color}18`, border:`1px solid ${f.color}30`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                    <f.icon size={20} color={f.color} />
                  </div>
                  <div>
                    <div style={{ fontSize:10, fontWeight:700, color:f.color, textTransform:'uppercase', letterSpacing:'0.1em' }}>{f.label}</div>
                    <div style={{ fontFamily:"'Sora',sans-serif", fontSize:15, fontWeight:800, color:C.text, lineHeight:1.3 }}>{f.headline}</div>
                  </div>
                </div>
                <p style={{ fontSize:13, color:C.sub, lineHeight:1.75, marginBottom:16 }}>{f.body}</p>
                <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:6 }}>
                  {f.bullets.map((b, bi) => (
                    <li key={bi} style={{ display:'flex', alignItems:'flex-start', gap:8, fontSize:12, color:C.sub }}>
                      <Check size={12} color={f.color} style={{ marginTop:2, flexShrink:0 }} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACADEMIES DEEP DIVE ── */}
      <section style={{ padding:'80px 5%', background:C.mid, borderTop:`1px solid ${C.border}` }}>
        <div style={{ maxWidth:1180, margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:56 }}>
            <div style={{ fontSize:11, color:C.blue, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:10 }}>Three Complete Academies</div>
            <h2 style={{ fontFamily:"'Sora',sans-serif", fontSize:'clamp(24px,3vw,38px)', fontWeight:800, letterSpacing:'-0.02em', marginBottom:12 }}>Structured learning, not scattered videos</h2>
            <p style={{ fontSize:15, color:C.sub, maxWidth:520, margin:'0 auto' }}>Each academy has a curriculum, not just content — sequenced lessons that build on each other.</p>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:20 }}>
            {[
              {
                emoji:'📈', title:'Financial Academy', color:C.blue,
                subjects:['Investing (35 units) — ETFs, options, bonds, REITs, crypto, factor investing','Taxes (32 units) — brackets, capital gains, self-employment, crypto taxes, estate','Credit & Lending (30 units) — credit scores, mortgages, student loans, debt payoff','Banking (28 units) — HYSAs, I-Bonds, money market, Fed policy, neobanks','Insurance (22 units) — life, health, disability, LTC, umbrella, Medicare'],
                count:'147 lessons',
              },
              {
                emoji:'🔐', title:'Crypto Academy', color:C.orange,
                subjects:['Blockchain fundamentals — how distributed ledgers and consensus work','Bitcoin — supply mechanics, halvings, security model, spot ETFs','Ethereum — smart contracts, gas, EIP-1559, staking after the Merge','DeFi — AMMs, lending protocols, yield farming, impermanent loss','Security & Regulation — FATCA, seed phrases, common scams, US crypto tax law'],
                count:'90 flashcards included',
              },
              {
                emoji:'📉', title:'Trading Academy', color:C.purple,
                subjects:['Technical indicators — RSI divergence, MACD, Bollinger Bands, ATR, OBV','Chart patterns — Head & Shoulders, bull flags, triangles, candlestick patterns','Strategies — Trend following, mean reversion, momentum, pullback entries','Risk management — position sizing, stop placement, Kelly Criterion, max drawdown','Advanced — Wyckoff phases, Elliott Wave rules, Fibonacci extensions, Market Profile'],
                count:'115 units, 130 flashcards',
              },
            ].map(a => (
              <div key={a.title} style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:18, padding:28 }}>
                <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:20 }}>
                  <div style={{ fontSize:32 }}>{a.emoji}</div>
                  <div>
                    <div style={{ fontFamily:"'Sora',sans-serif", fontSize:18, fontWeight:800, color:C.text }}>{a.title}</div>
                    <div style={{ fontSize:11, color:a.color, fontWeight:700 }}>{a.count}</div>
                  </div>
                </div>
                <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:10 }}>
                  {a.subjects.map((s, si) => (
                    <li key={si} style={{ display:'flex', alignItems:'flex-start', gap:10, fontSize:12.5, color:C.sub, lineHeight:1.5 }}>
                      <div style={{ width:6, height:6, borderRadius:'50%', background:a.color, marginTop:5, flexShrink:0 }} />
                      {s}
                    </li>
                  ))}
                </ul>
                <Link href="/sign-up" style={{ display:'inline-flex', alignItems:'center', gap:6, marginTop:20, fontSize:13, fontWeight:700, color:a.color, textDecoration:'none', background:`${a.color}15`, border:`1px solid ${a.color}30`, borderRadius:10, padding:'8px 16px' }}>
                  Explore {a.title} <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FLASHCARD HIGHLIGHT ── */}
      <section style={{ padding:'80px 5%' }}>
        <div style={{ maxWidth:1100, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:60, alignItems:'center' }}>
          <div>
            <div style={{ fontSize:11, color:C.purple, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:12 }}>Spaced Repetition Learning</div>
            <h2 style={{ fontFamily:"'Sora',sans-serif", fontSize:'clamp(24px,3vw,38px)', fontWeight:800, letterSpacing:'-0.02em', marginBottom:16, lineHeight:1.2 }}>
              Flashcards that remember<br />what you forget.
            </h2>
            <p style={{ fontSize:15, color:C.sub, lineHeight:1.75, marginBottom:24 }}>
              The SM-2 spaced repetition algorithm — the same method used by Anki and medical schools — schedules each card at the exact interval that maximizes long-term retention. Rate a card "Again" and it returns in 10 minutes. Rate it "Easy" and it returns in a week.
            </p>
            {[
              ['380 cards','Across Financial, Crypto & Trading decks'],
              ['3D card flip','With keyboard shortcuts (1–4 to rate)'],
              ['💡 Pro Tips','Hidden insight on the back of every card'],
              ['Progress tracking','Mastered / Due / New status per category'],
            ].map(([title, desc]) => (
              <div key={title} style={{ display:'flex', gap:12, marginBottom:14 }}>
                <Check size={16} color={C.purple} style={{ marginTop:2, flexShrink:0 }} />
                <div>
                  <span style={{ fontSize:13, fontWeight:700, color:C.text }}>{title} — </span>
                  <span style={{ fontSize:13, color:C.sub }}>{desc}</span>
                </div>
              </div>
            ))}
            <Link href="/sign-up" style={{ display:'inline-flex', alignItems:'center', gap:8, marginTop:12, background:`linear-gradient(135deg, ${C.purple}, #7C3AED)`, color:'#fff', textDecoration:'none', borderRadius:12, padding:'12px 24px', fontWeight:800, fontSize:14, fontFamily:'inherit' }}>
              Start learning with flashcards <ArrowRight size={14} />
            </Link>
          </div>
          <div style={{ background:`linear-gradient(145deg, ${C.card}, ${C.mid})`, border:`1px solid ${C.purple}40`, borderRadius:20, padding:28, boxShadow:`0 8px 40px rgba(167,139,250,0.15)` }}>
            <div style={{ fontSize:10, fontWeight:700, color:C.purple, letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:16 }}>SAMPLE CARD · Investing · Medium</div>
            <div style={{ background:C.dim, borderRadius:14, padding:'24px 20px', marginBottom:16, border:`1px solid ${C.border}`, minHeight:120, display:'flex', flexDirection:'column', justifyContent:'center' }}>
              <div style={{ fontSize:11, color:C.sub, marginBottom:10, textTransform:'uppercase', letterSpacing:'0.08em' }}>Question</div>
              <div style={{ fontSize:16, fontWeight:700, color:C.text, lineHeight:1.5 }}>What is the P/E ratio and what does it measure?</div>
            </div>
            <div style={{ background:`${C.purple}10`, borderRadius:14, padding:'20px 20px', border:`1px solid ${C.purple}30` }}>
              <div style={{ fontSize:11, color:C.purple, marginBottom:10, textTransform:'uppercase', letterSpacing:'0.08em' }}>Answer</div>
              <div style={{ fontSize:13, color:C.sub, lineHeight:1.7 }}>Price ÷ Earnings per Share. A P/E of 25 means you pay $25 for every $1 of annual earnings. S&P 500 historical average: 15–18×.</div>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:8, marginTop:16 }}>
              {[['😕','Again','#EF4444'],['😐','Hard','#F59E0B'],['🙂','Good','#00D09C'],['😄','Easy',C.blue]].map(([e,l,c]) => (
                <div key={l} style={{ textAlign:'center', background:`${c}15`, border:`1px solid ${c}30`, borderRadius:10, padding:'8px 0' }}>
                  <div style={{ fontSize:18 }}>{e}</div>
                  <div style={{ fontSize:10, fontWeight:700, color:c }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ padding:'80px 5%', background:C.deep, borderTop:`1px solid ${C.border}`, borderBottom:`1px solid ${C.border}` }}>
        <div style={{ maxWidth:1100, margin:'0 auto', textAlign:'center' }}>
          <h2 style={{ fontFamily:"'Sora',sans-serif", fontSize:'clamp(22px,2.8vw,34px)', fontWeight:800, marginBottom:50, letterSpacing:'-0.02em' }}>
            The most complete financial education platform available — free.
          </h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))', gap:20 }}>
            {[
              {num:'300+', label:'Structured lessons', sub:'Across 3 academies', color:C.orange},
              {num:'380', label:'Spaced repetition flashcards', sub:'SM-2 algorithm', color:C.purple},
              {num:'453', label:'Indexed knowledge topics', sub:'FIQ Search Bot', color:C.blue},
              {num:'4', label:'Financial calculators', sub:'With live charts', color:C.emerald},
              {num:'$0', label:'To get started', sub:'Free plan, no card', color:C.gold},
              {num:'8', label:'Major feature modules', sub:'All in one dashboard', color:C.orange},
            ].map(s => (
              <div key={s.label} style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:16, padding:'24px 16px' }}>
                <div className="stat-glow" style={{ fontFamily:"'Sora',sans-serif", fontSize:'clamp(28px,3.5vw,44px)', fontWeight:800, color:s.color, marginBottom:6 }}>{s.num}</div>
                <div style={{ fontSize:13, fontWeight:700, color:C.text, marginBottom:4 }}>{s.label}</div>
                <div style={{ fontSize:11, color:C.sub }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" style={{ padding:'100px 5%' }}>
        <div style={{ maxWidth:1100, margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:56 }}>
            <div style={{ fontSize:11, color:C.orange, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:10 }}>Pricing</div>
            <h2 style={{ fontFamily:"'Sora',sans-serif", fontSize:'clamp(26px,3.5vw,40px)', fontWeight:800, letterSpacing:'-0.02em', marginBottom:12 }}>Start free. Upgrade when you're ready.</h2>
            <p style={{ fontSize:15, color:C.sub }}>No credit card required. Cancel anytime.</p>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:20, alignItems:'start' }}>
            {PLANS.map((plan, i) => (
              <div key={i} className="plan-card" style={{ background: plan.highlight ? `linear-gradient(145deg, #0E1D35, #0A1628)` : C.card, border: plan.highlight ? `2px solid ${plan.color}` : `1px solid ${C.border}`, borderRadius:20, padding:'32px 28px', position:'relative', boxShadow: plan.highlight ? `0 8px 40px rgba(255,107,53,0.2)` : 'none' }}>
                {plan.badge && (
                  <div style={{ position:'absolute', top:-12, left:'50%', transform:'translateX(-50%)', background:`linear-gradient(90deg, ${C.orange}, #E05A2A)`, color:'#fff', fontSize:10, fontWeight:800, padding:'4px 14px', borderRadius:20, letterSpacing:'0.08em', whiteSpace:'nowrap' }}>{plan.badge}</div>
                )}
                <div style={{ fontSize:12, fontWeight:700, color:plan.color, textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:8 }}>{plan.name}</div>
                <div style={{ display:'flex', alignItems:'flex-end', gap:4, marginBottom:8 }}>
                  <span style={{ fontFamily:"'Sora',sans-serif", fontSize:44, fontWeight:800, color:C.text, lineHeight:1 }}>{plan.price}</span>
                  <span style={{ fontSize:14, color:C.sub, paddingBottom:6 }}>{plan.period}</span>
                </div>
                <p style={{ fontSize:13, color:C.sub, marginBottom:24 }}>{plan.desc}</p>
                <ul style={{ listStyle:'none', marginBottom:28, display:'flex', flexDirection:'column', gap:10 }}>
                  {plan.features.map((f, fi) => (
                    <li key={fi} style={{ display:'flex', alignItems:'flex-start', gap:10, fontSize:13, color:C.sub }}>
                      <Check size={14} color={plan.color} style={{ marginTop:2, flexShrink:0 }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href={plan.href} style={{ display:'block', textAlign:'center', background: plan.highlight ? `linear-gradient(135deg, ${C.orange}, #E05A2A)` : `rgba(255,255,255,0.06)`, color: plan.highlight ? '#fff' : C.text, textDecoration:'none', borderRadius:12, padding:'13px', fontWeight:800, fontSize:14, fontFamily:'inherit', border: plan.highlight ? 'none' : `1px solid ${C.border}` }}>
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          <p style={{ textAlign:'center', marginTop:28, fontSize:12, color:C.sub }}>
            <ShieldCheck size={13} style={{ verticalAlign:'middle', marginRight:5 }} />
            All plans include FDIC-equivalent data security. No investment advice provided. Educational content only.
          </p>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding:'80px 5%', background:C.mid, borderTop:`1px solid ${C.border}` }}>
        <div style={{ maxWidth:1100, margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:48 }}>
            <h2 style={{ fontFamily:"'Sora',sans-serif", fontSize:'clamp(22px,3vw,34px)', fontWeight:800, letterSpacing:'-0.02em', marginBottom:8 }}>
              What students are saying
            </h2>
            <p style={{ fontSize:14, color:C.sub }}>Real results from real people learning financial literacy.</p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))', gap:16 }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:16, padding:'22px 20px' }}>
                <div style={{ display:'flex', gap:2, marginBottom:12 }}>
                  {Array(t.stars).fill(0).map((_,si) => <Star key={si} size={14} fill={C.gold} color={C.gold} />)}
                </div>
                <p style={{ fontSize:13.5, color:C.text, lineHeight:1.7, marginBottom:16, fontStyle:'italic' }}>"{t.text}"</p>
                <div>
                  <div style={{ fontSize:13, fontWeight:700, color:C.text }}>{t.name}</div>
                  <div style={{ fontSize:11, color:C.sub }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={{ padding:'80px 5%' }}>
        <div style={{ maxWidth:780, margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:48 }}>
            <div style={{ fontSize:11, color:C.orange, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:10 }}>FAQ</div>
            <h2 style={{ fontFamily:"'Sora',sans-serif", fontSize:'clamp(22px,3vw,34px)', fontWeight:800, letterSpacing:'-0.02em' }}>Common questions</h2>
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
            {FAQ.map((f, i) => (
              <div key={i} style={{ background:C.card, border:`1px solid ${openFaq===i ? C.orange+'60' : C.border}`, borderRadius:14, overflow:'hidden', transition:'border-color 0.2s' }}>
                <button onClick={() => setOpenFaq(openFaq===i ? null : i)} style={{ width:'100%', display:'flex', alignItems:'center', justifyContent:'space-between', padding:'18px 20px', background:'none', border:'none', cursor:'pointer', fontFamily:'inherit', gap:12, textAlign:'left' }}>
                  <span style={{ fontSize:14, fontWeight:700, color:C.text }}>{f.q}</span>
                  <ChevronDown size={16} color={C.sub} style={{ flexShrink:0, transform: openFaq===i ? 'rotate(180deg)' : 'rotate(0deg)', transition:'transform 0.2s' }} />
                </button>
                {openFaq===i && (
                  <div style={{ padding:'0 20px 18px', fontSize:13.5, color:C.sub, lineHeight:1.75 }}>{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ padding:'80px 5%', background:C.deep, borderTop:`1px solid ${C.border}` }}>
        <div style={{ maxWidth:680, margin:'0 auto', textAlign:'center' }}>
          <div style={{ fontSize:52, marginBottom:16 }}>🎓</div>
          <h2 style={{ fontFamily:"'Sora',sans-serif", fontSize:'clamp(26px,3.5vw,42px)', fontWeight:800, letterSpacing:'-0.02em', marginBottom:16, lineHeight:1.2 }}>
            Your financial education<br />starts now — free.
          </h2>
          <p style={{ fontSize:15, color:C.sub, marginBottom:32, lineHeight:1.7 }}>
            Join thousands of self-directed investors building real financial knowledge. No investment advice. No conflicts of interest. Just structured education that compounds.
          </p>
          <div style={{ display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap' }}>
            <Link href="/sign-up" style={{ display:'inline-flex', alignItems:'center', gap:8, background:`linear-gradient(135deg, ${C.orange}, #E05A2A)`, color:'#fff', textDecoration:'none', borderRadius:12, padding:'15px 32px', fontWeight:800, fontSize:16, boxShadow:`0 4px 24px rgba(255,107,53,0.35)`, fontFamily:'inherit' }}>
              Create free account <ArrowRight size={16} />
            </Link>
            <Link href="/dashboard" style={{ display:'inline-flex', alignItems:'center', gap:8, background:'rgba(255,255,255,0.06)', color:C.text, textDecoration:'none', borderRadius:12, padding:'15px 24px', fontWeight:700, fontSize:15, border:`1px solid ${C.border}`, fontFamily:'inherit' }}>
              Explore the dashboard
            </Link>
          </div>
          <p style={{ marginTop:20, fontSize:12, color:C.sub }}>Free plan includes Stock Analyzer, Financial Academy, FIQ Search Bot, and more. No credit card.</p>
        </div>
      </section>

      <Footer />
    </>
  )
}


export async function getServerSideProps() { return { props: {} } }
