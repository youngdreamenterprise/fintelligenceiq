import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Terms() {
  const sections = [
    { id:'acceptance', title:'1. Acceptance of Terms',
      content:`By accessing or using FintelligenceIQ ("the Platform"), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not access the Platform.` },
    { id:'description', title:'2. Description of Service',
      content:`FintelligenceIQ provides financial education content, interactive tools, market data displays, and academy courses covering personal finance, cryptocurrency, and trading. All content is provided for educational purposes only and does not constitute investment, financial, legal, or tax advice.` },
    { id:'accounts', title:'3. User Accounts',
      content:`You must create an account to access premium features. You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account. You must provide accurate and complete information when creating your account. You may not use another user's account without permission.` },
    { id:'subscriptions', title:'4. Subscriptions and Payments',
      content:`FintelligenceIQ offers Free, Premium ($9/month), and Pro ($29/month) subscription tiers. Payments are processed securely through Stripe. Subscriptions renew automatically at the end of each billing period. You may cancel at any time through your account settings. Cancellation takes effect at the end of the current billing period. We do not offer prorated refunds for mid-period cancellations unless required by law. Please review our Refund Policy for full details.` },
    { id:'conduct', title:'5. Acceptable Use',
      content:`You agree not to:\n• Use the Platform for any unlawful purpose\n• Reproduce, redistribute, or resell any content without written permission\n• Attempt to reverse-engineer, scrape, or extract data from the Platform\n• Interfere with the Platform's security or performance\n• Use the Platform to transmit spam or harmful content\n• Share your account credentials with others` },
    { id:'ip', title:'6. Intellectual Property',
      content:`All content on FintelligenceIQ — including text, graphics, logos, course materials, and software — is owned by or licensed to FintelligenceIQ and is protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or create derivative works without our express written consent.` },
    { id:'disclaimer', title:'7. Educational Disclaimer',
      content:`All content on FintelligenceIQ is provided for educational and informational purposes only. Nothing on the Platform constitutes personalized financial, investment, tax, or legal advice. Market data displayed is for educational illustration and may be delayed or inaccurate. Past performance of any investment strategy discussed does not guarantee future results. Always consult a qualified financial advisor before making investment decisions.` },
    { id:'limitation', title:'8. Limitation of Liability',
      content:`To the fullest extent permitted by law, FintelligenceIQ shall not be liable for any indirect, incidental, special, consequential, or punitive damages — including loss of profits, data, or goodwill — arising from your use of or inability to use the Platform, even if advised of the possibility of such damages. Our total liability for any claim arising under these terms shall not exceed the amount you paid us in the three months preceding the claim.` },
    { id:'termination', title:'9. Termination',
      content:`We reserve the right to suspend or terminate your account at any time for violation of these Terms of Service, without prior notice. Upon termination, your right to use the Platform ceases immediately. Provisions that by their nature should survive termination — including intellectual property, disclaimer, and limitation of liability — will survive.` },
    { id:'changes', title:'10. Changes to Terms',
      content:`We may update these Terms of Service from time to time. We will notify users of material changes via email or a prominent notice on the Platform. Continued use of the Platform after changes take effect constitutes your acceptance of the revised terms.` },
    { id:'governing', title:'11. Governing Law',
      content:`These Terms of Service are governed by and construed in accordance with the laws of the United States. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts located in the United States.` },
    { id:'contact', title:'12. Contact',
      content:`If you have questions about these Terms of Service, please contact us at support@fintelligenceiq.com.` },
  ]

  return (
    <>
      <Head>
        <title>Terms of Service – FintelligenceIQ</title>
        <meta name="description" content="Terms of Service for FintelligenceIQ financial education platform." />
      </Head>
      <Nav />
      <main style={{ maxWidth: 820, margin: '0 auto', padding: '60px 24px 100px', fontFamily: "'Inter',sans-serif" }}>
        <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 8 }}>Terms of Service</h1>
        <p style={{ color: '#6B7280', marginBottom: 48 }}>Last updated: June 2025</p>

        {/* TOC */}
        <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 12, padding: '20px 24px', marginBottom: 56 }}>
          <p style={{ fontWeight: 700, marginBottom: 12, fontSize: 14 }}>Contents</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, columns: 2, columnGap: 24 }}>
            {sections.map(s => (
              <li key={s.id} style={{ marginBottom: 6 }}>
                <a href={`#${s.id}`} style={{ color: '#6D28D9', fontSize: 13, textDecoration: 'none' }}>{s.title}</a>
              </li>
            ))}
          </ul>
        </div>

        {sections.map(s => (
          <div key={s.id} id={s.id} style={{ marginBottom: 40 }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>{s.title}</h2>
            <p style={{ color: '#374151', lineHeight: 1.85, whiteSpace: 'pre-line', fontSize: 15 }}>{s.content}</p>
          </div>
        ))}
      </main>
      <Footer />
    </>
  )
}

export async function getServerSideProps() { return { props: {} } }
