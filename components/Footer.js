import Link from 'next/link'
import { TrendingUp } from 'lucide-react'

const C = { deep:'#060E1C', border:'#162845', orange:'#FF6B35', text:'#EEF4FF', sub:'#6B8DB5', dim:'#1A3050' }

const cols = [
  { title:'Tools', links:[
    { label:'Stock Analyzer',  href:'/tools#analyzer'    },
    { label:'Calculators',     href:'/tools#calculators' },
    { label:'AI Q&A',          href:'/tools#ai-qa'       },
    { label:'Economic Data',   href:'/tools#economic'    },
    { label:'Market News',     href:'/tools#news'        },
  ]},
  { title:'Learn', links:[
    { label:'Investing Basics', href:'/learn#investing'  },
    { label:'SMAs Explained',   href:'/learn#sma'        },
    { label:'Retirement 101',   href:'/learn#retirement' },
    { label:'Tax Planning',     href:'/learn#tax'        },
    { label:'Estate Planning',  href:'/learn#estate'     },
  ]},
  { title:'Company', links:[
    { label:'About Us',       href:'/about'         },
    { label:'How It Works',   href:'/about#how'     },
    { label:'Data Sources',   href:'/about#sources' },
    { label:'Contact Us',     href:'/contact'       },
    { label:'Pricing',        href:'/#pricing'      },
  ]},
  { title:'Legal', links:[
    { label:'Privacy Policy',   href:'/privacy'             },
    { label:'Refund Policy',    href:'/refund'              },
    { label:'Terms of Service', href:'/privacy#terms'       },
    { label:'Disclaimer',       href:'/privacy#disclaimer'  },
    { label:'Cookie Policy',    href:'/privacy#cookies'     },
  ]},
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{ background:C.deep, borderTop:`1px solid ${C.border}`, padding:'52px 5% 26px' }}>
      <div style={{ maxWidth:1100, margin:'0 auto' }}>
        <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr 1fr', gap:44, marginBottom:44 }}>
          <div>
            <Link href="/" style={{ display:'flex', alignItems:'center', gap:10, marginBottom:14, textDecoration:'none' }}>
              <div style={{ width:30, height:30, background:C.orange, borderRadius:7, display:'flex', alignItems:'center', justifyContent:'center' }}>
                <TrendingUp size={16} color="#fff" />
              </div>
              <span style={{ fontFamily:"'Sora',sans-serif", fontWeight:800, fontSize:16, color:C.text }}>FintelligenceIQ</span>
            </Link>
            <p style={{ fontSize:13, color:C.sub, lineHeight:1.8, maxWidth:260, marginBottom:16 }}>
              Financial education for everyone. Free tools, real data, and AI-powered explanations — always informational, never investment advice.
            </p>
            <div style={{ display:'flex', gap:14, flexWrap:'wrap' }}>
              {[{l:'Privacy',h:'/privacy'},{l:'Refunds',h:'/refund'},{l:'Contact',h:'/contact'},{l:'About',h:'/about'}].map(({l,h}) => (
                <Link key={l} href={h} style={{ fontSize:12, color:C.dim, textDecoration:'none' }}>{l}</Link>
              ))}
            </div>
          </div>
          {cols.map(({ title, links }) => (
            <div key={title}>
              <div style={{ fontSize:11, color:C.text, fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:14 }}>{title}</div>
              <div style={{ display:'flex', flexDirection:'column', gap:9 }}>
                {links.map(({ label, href }) => (
                  <Link key={label} href={href} style={{ fontSize:13, color:C.sub, textDecoration:'none' }}>{label}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ borderTop:`1px solid ${C.border}`, paddingTop:22, display:'flex', flexWrap:'wrap', justifyContent:'space-between', alignItems:'flex-start', gap:14 }}>
          <div style={{ fontSize:12, color:C.dim }}>© {year} FintelligenceIQ. All rights reserved.</div>
          <div style={{ fontSize:11, color:C.dim, maxWidth:620, lineHeight:1.7 }}>
            ⚠️ <strong style={{ color:C.sub }}>Disclaimer:</strong> FintelligenceIQ is a financial education platform. All content is for informational purposes only and does not constitute personalized investment, legal, or tax advice. Always consult a licensed financial advisor before making financial decisions.
          </div>
        </div>
      </div>
    </footer>
  )
}
