import Head from 'next/head'
import Link from 'next/link'
import { TrendingUp } from 'lucide-react'

export default function NotFound() {
  return (
    <>
      <Head><title>404 — Page Not Found | FintelligenceIQ</title></Head>
      <div style={{ minHeight:"100vh", background:"#040b18", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", fontFamily:"Manrope,system-ui,sans-serif", color:"#EEF4FF", padding:"24px", textAlign:"center" }}>
        <Link href="/" style={{ textDecoration:"none", marginBottom:"40px", display:"flex", alignItems:"center", gap:"10px" }}>
          <div style={{ width:32, height:32, background:"#FF6B35", borderRadius:8, display:"flex", alignItems:"center", justifyContent:"center" }}>
            <TrendingUp size={18} color="#fff" />
          </div>
          <span style={{ fontFamily:"Sora,sans-serif", fontWeight:800, fontSize:18, color:"#EEF4FF" }}>FintelligenceIQ</span>
        </Link>
        <div style={{ fontSize:80, fontWeight:800, color:"#102030", fontFamily:"Sora,sans-serif", lineHeight:1 }}>404</div>
        <div style={{ fontSize:22, fontWeight:700, marginTop:16, marginBottom:10 }}>Page not found</div>
        <div style={{ fontSize:14, color:"#6B8DB5", marginBottom:32 }}>The page you're looking for doesn't exist or has been moved.</div>
        <Link href="/">
          <button style={{ background:"#FF6B35", color:"#fff", border:"none", borderRadius:9, padding:"12px 28px", fontWeight:700, fontSize:14, cursor:"pointer", fontFamily:"inherit" }}>
            Back to Home
          </button>
        </Link>
      </div>
    </>
  )
}
