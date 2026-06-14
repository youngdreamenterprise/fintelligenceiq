import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function CookiePolicy() {
  return (
    <>
      <Head>
        <title>Cookie Policy – FintelligenceIQ</title>
        <meta name="description" content="Cookie Policy for FintelligenceIQ." />
      </Head>
      <Nav />
      <main style={{ maxWidth: 820, margin: '0 auto', padding: '60px 24px 100px', fontFamily: "'Inter',sans-serif" }}>
        <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 8 }}>Cookie Policy</h1>
        <p style={{ color: '#6B7280', marginBottom: 48 }}>Last updated: June 2025</p>

        {[
          { title: 'What Are Cookies?',
            body: `Cookies are small text files placed on your device by a website when you visit it. They are widely used to make websites work efficiently and to provide information to the site's owners. Cookies do not access or alter files on your device.` },
          { title: 'How We Use Cookies',
            body: `FintelligenceIQ uses cookies for three purposes:\n\n• Essential cookies — required for the website to function. These enable features like logging in, maintaining your session, and securing your account. You cannot opt out of essential cookies.\n\n• Functional cookies — remember your preferences such as your chosen theme (Midnight or Aurora) and calculator settings, so you don't have to reset them each visit.\n\n• Analytics cookies — we use Google Analytics with IP anonymization enabled to understand how visitors use our site in aggregate. This helps us improve the Platform. You can opt out at any time by installing the Google Analytics Opt-out Browser Add-on at tools.google.com/dlpage/gaoptout.` },
          { title: 'What We Do NOT Use Cookies For',
            body: `FintelligenceIQ does not use advertising cookies, retargeting cookies, or third-party tracking cookies. We do not participate in advertising networks. We do not sell your data to third parties.` },
          { title: 'Third-Party Cookies',
            body: `Our authentication provider (Clerk) and payment processor (Stripe) may set their own cookies as part of providing their services. These cookies are governed by their respective privacy policies:\n\n• Clerk: clerk.com/privacy\n• Stripe: stripe.com/privacy` },
          { title: 'Managing Cookies',
            body: `You can control and delete cookies through your browser settings. Most browsers allow you to:\n\n• View cookies currently stored\n• Block cookies from specific or all websites\n• Delete cookies when you close the browser\n\nPlease note that disabling essential cookies may prevent you from logging in or using key features of FintelligenceIQ.` },
          { title: 'Changes to This Policy',
            body: `We may update this Cookie Policy from time to time. We will post any changes on this page. Continued use of the Platform after changes are posted constitutes your acceptance of the updated policy.` },
          { title: 'Contact',
            body: `For questions about this Cookie Policy, contact us at support@fintelligenceiq.com.` },
        ].map(({ title, body }) => (
          <div key={title} style={{ marginBottom: 40 }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>{title}</h2>
            <p style={{ color: '#374151', lineHeight: 1.85, whiteSpace: 'pre-line', fontSize: 15 }}>{body}</p>
          </div>
        ))}
      </main>
      <Footer />
    </>
  )
}

export async function getServerSideProps() { return { props: {} } }
