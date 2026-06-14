import { useState } from 'react'
import Link from 'next/link'
import { TrendingUp, Menu, X } from 'lucide-react'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const C = {
  navy: '#0A1628', border: '#162845', orange: '#FF6B35',
  text: '#EEF4FF', sub: '#6B8DB5', card: '#0C1A2E',
}

export default function Nav() {
  const [open, setOpen] = useState(false)

  const links = [
    { label: 'Tools',         href: '/#tools'    },
    { label: 'Economic Data', href: '/#economic' },
    { label: 'Learn',         href: '/#learn'    },
    { label: 'Pricing',       href: '/#pricing'  },
    { label: 'About',         href: '/about'     },
  ]

  return (
    <>
      <nav style={{ position:'sticky', top:0, zIndex:100, background:`${C.navy}ee`, backdropFilter:'blur(12px)', borderBottom:`1px solid ${C.border}`, padding:'0 5%' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', display:'flex', alignItems:'center', justifyContent:'space-between', height:64 }}>

          <Link href="/" style={{ display:'flex', alignItems:'center', gap:10 }}>
            <div style={{ width:32, height:32, background:C.orange, borderRadius:8, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
              <TrendingUp size={18} color="#fff" />
            </div>
            <span style={{ fontFamily:"'Sora',sans-serif", fontWeight:800, fontSize:17, color:C.text }}>FintelligenceIQ</span>
          </Link>

          <div style={{ display:'flex', gap:24, alignItems:'center' }}>
            {links.map(l => (
              <Link key={l.label} href={l.href} style={{ fontSize:13, color:C.sub, fontWeight:500, textDecoration:'none', transition:'color 0.15s' }}
                onMouseEnter={e => e.target.style.color=C.text} onMouseLeave={e => e.target.style.color=C.sub}>
                {l.label}
              </Link>
            ))}
          </div>

          <div style={{ display:'flex', gap:10, alignItems:'center' }}>
            <Link href="/contact" style={{ fontSize:13, color:C.sub, textDecoration:'none' }}>Contact</Link>

            <SignedOut>
              <Link href="/sign-in">
                <button style={{ background:'transparent', color:C.text, border:`1px solid ${C.border}`, borderRadius:8, padding:'8px 16px', fontWeight:600, fontSize:13, cursor:'pointer', fontFamily:'inherit' }}>
                  Sign In / Sign Up
                </button>
              </Link>
              <Link href="/sign-up">
                <button style={{ background:C.orange, color:'#fff', border:'none', borderRadius:8, padding:'9px 18px', fontWeight:700, fontSize:13, cursor:'pointer', fontFamily:'inherit' }}>
                  Get Free Access
                </button>
              </Link>
            </SignedOut>

            <SignedIn>
              <Link href="/dashboard">
                <button style={{ background:C.orange, color:'#fff', border:'none', borderRadius:8, padding:'9px 18px', fontWeight:700, fontSize:13, cursor:'pointer', fontFamily:'inherit' }}>
                  My Dashboard
                </button>
              </Link>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>

            <button onClick={() => setOpen(!open)} style={{ background:'none', border:'none', color:C.sub, cursor:'pointer', display:'flex', padding:4 }}>
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <div style={{ position:'fixed', top:64, left:0, right:0, zIndex:99, background:C.card, borderBottom:`1px solid ${C.border}`, padding:'20px 5%' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', display:'flex', flexDirection:'column', gap:14 }}>
            {links.map(l => (
              <Link key={l.label} href={l.href} onClick={() => setOpen(false)}
                style={{ fontSize:15, fontWeight:600, color:C.text, padding:'8px 0', borderBottom:`1px solid ${C.border}`, textDecoration:'none' }}>
                {l.label}
              </Link>
            ))}
            <div style={{ paddingTop:4, display:'flex', gap:16 }}>
              <Link href="/privacy" style={{ fontSize:13, color:C.sub, textDecoration:'none' }}>Privacy</Link>
              <Link href="/refund"  style={{ fontSize:13, color:C.sub, textDecoration:'none' }}>Refunds</Link>
              <Link href="/contact" style={{ fontSize:13, color:C.sub, textDecoration:'none' }}>Contact</Link>
              <Link href="/about"   style={{ fontSize:13, color:C.sub, textDecoration:'none' }}>About</Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
