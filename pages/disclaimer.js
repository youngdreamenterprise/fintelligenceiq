import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Disclaimer() {
  return (
    <>
      <Head>
        <title>Disclaimer – FintelligenceIQ</title>
        <meta name="description" content="Disclaimer for FintelligenceIQ financial education platform." />
      </Head>
      <Nav />
      <main style={{ maxWidth: 820, margin: '0 auto', padding: '60px 24px 100px', fontFamily: "'Inter',sans-serif" }}>
        <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 8 }}>Disclaimer</h1>
        <p style={{ color: '#6B7280', marginBottom: 48 }}>Last updated: June 2025</p>

        {[
          { title: 'Educational Purpose Only',
            body: `All content published on FintelligenceIQ — including articles, courses, videos, tools, market data displays, and any other materials — is provided solely for general educational and informational purposes. Nothing on this Platform constitutes or should be interpreted as personalized financial advice, investment advice, trading recommendations, tax advice, or legal advice.` },
          { title: 'Not a Financial Advisor',
            body: `FintelligenceIQ is not a registered investment advisor, broker-dealer, financial planner, or any other type of licensed financial professional. The content we provide reflects educational explanations of financial concepts and does not account for your individual financial situation, goals, risk tolerance, or needs.` },
          { title: 'No Guarantee of Results',
            body: `Any trading strategies, investment approaches, or financial concepts discussed on FintelligenceIQ are presented for educational purposes only. Past performance of any strategy, market, or investment does not guarantee or predict future results. All investing involves risk, including the possible loss of principal. You should never invest money you cannot afford to lose.` },
          { title: 'Market Data Accuracy',
            body: `Market data, prices, rates, and other financial figures displayed on FintelligenceIQ are sourced from third-party providers and may be delayed, inaccurate, or incomplete. This data is provided for educational illustration only. Do not rely on any data from this Platform for real-time trading decisions or financial transactions.` },
          { title: 'Third-Party Content',
            body: `FintelligenceIQ may link to or reference third-party websites, resources, or tools. We do not control, endorse, or guarantee the accuracy of third-party content. These links are provided for informational convenience only.` },
          { title: 'Cryptocurrency Risk',
            body: `Cryptocurrency markets are highly volatile and speculative. Content related to cryptocurrency on this Platform is for educational purposes only. Cryptocurrency investments can lose significant value rapidly. FintelligenceIQ does not recommend purchasing, selling, or holding any specific cryptocurrency.` },
          { title: 'Consult a Professional',
            body: `Before making any financial, investment, or tax decisions, we strongly encourage you to consult with a qualified and licensed financial advisor, tax professional, or legal counsel who can assess your specific situation and provide personalized guidance.` },
          { title: 'Limitation of Liability',
            body: `To the fullest extent permitted by applicable law, FintelligenceIQ, its owners, operators, employees, and affiliates shall not be liable for any financial losses, damages, or other consequences resulting from your use of or reliance on information provided on this Platform.` },
          { title: 'Contact',
            body: `Questions about this disclaimer? Contact us at support@fintelligenceiq.com.` },
        ].map(({ title, body }) => (
          <div key={title} style={{ marginBottom: 40 }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>{title}</h2>
            <p style={{ color: '#374151', lineHeight: 1.85, fontSize: 15 }}>{body}</p>
          </div>
        ))}
      </main>
      <Footer />
    </>
  )
}

export async function getServerSideProps() { return { props: {} } }
