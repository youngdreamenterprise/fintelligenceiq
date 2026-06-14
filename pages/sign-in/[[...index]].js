import { SignIn } from "@clerk/nextjs"
import Head from "next/head"
import Link from "next/link"
import { TrendingUp } from "lucide-react"

export default function SignInPage() {
  return (
    <>
      <Head><title>Sign In — FintelligenceIQ</title></Head>
      <div style={{ minHeight:"100vh", background:"#0A1628", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"24px" }}>
        <Link href="/" style={{ textDecoration:"none", marginBottom:"32px", display:"flex", alignItems:"center", gap:"10px" }}>
          <div style={{ width:32, height:32, background:"#FF6B35", borderRadius:8, display:"flex", alignItems:"center", justifyContent:"center" }}>
            <TrendingUp size={18} color="#fff" />
          </div>
          <span style={{ fontFamily:"Sora,sans-serif", fontWeight:800, fontSize:18, color:"#EEF4FF" }}>FintelligenceIQ</span>
        </Link>
        <SignIn
          fallbackRedirectUrl="/dashboard"
          appearance={{
            variables:{
              colorPrimary:"#FF6B35", colorBackground:"#0C1A2E", colorText:"#EEF4FF",
              colorTextSecondary:"#6B8DB5", colorInputBackground:"#0D1E38",
              colorInputText:"#EEF4FF", borderRadius:"10px"
            },
            elements:{
              card:{ boxShadow:"none", border:"1px solid #162845" },
              formButtonPrimary:{ background:"#FF6B35" },
              footerActionLink:{ color:"#FF6B35" }
            }
          }}
        />
      </div>
    </>
  )
}

// Required: prevents static prerendering at build time. See sign-up page for explanation.
export async function getServerSideProps() {
  return { props: {} }
}
