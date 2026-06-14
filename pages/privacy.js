import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const C = {
  navy:'#0A1628', deep:'#060E1C', card:'#0C1A2E',
  border:'#162845', orange:'#FF6B35', text:'#EEF4FF', sub:'#6B8DB5',
}

const LAST_UPDATED = 'May 15, 2026'

const sections = [
  {
    id:'overview', title:'1. Overview',
    content:`FintelligenceIQ ("we," "us," or "our") operates the website fintelligenceiq.com (the "Service"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this policy carefully. If you disagree with its terms, please discontinue use of the site.

We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy or our practices with regard to your personal information, please contact us at privacy@fintelligenceiq.com.`
  },
  {
    id:'collect', title:'2. Information We Collect',
    subsections:[
      {title:'Information You Provide Voluntarily', content:`We collect information you voluntarily provide when you:
• Register for an account (name, email address, password)
• Subscribe to a paid plan (email address, billing information processed by our payment processor)
• Submit a contact form (name, email address, message)
• Sign up for our email newsletter (email address)
• Correspond with us by email or other means

We do not collect, store, or transmit any of your financial data, brokerage account information, social security numbers, bank account details, or investment account credentials at any time.`},
      {title:'Information Collected Automatically', content:`When you visit our Service, we automatically collect certain information including:
• Log data: IP address, browser type and version, pages visited, time and date of visit, time spent on pages, referring URLs
• Device data: device type, operating system, screen resolution
• Usage data: features used, calculator inputs (processed locally in your browser — not transmitted to our servers), search queries on the platform
• Cookies and similar tracking technologies (see Section 7 for details)`},
      {title:'Information from Third Parties', content:`We receive financial market data from third-party APIs including Finnhub, the Federal Reserve FRED API, SEC EDGAR, and Benzinga. This data is publicly available financial information and is not associated with your personal identity.`},
    ]
  },
  {
    id:'use', title:'3. How We Use Your Information',
    content:`We use the information we collect to:
• Create and manage your account
• Process your subscription and payments
• Send you transactional emails (account confirmation, billing receipts, password resets)
• Send you newsletter and marketing communications (only if you have opted in)
• Respond to your inquiries and support requests
• Improve our website, tools, and user experience
• Monitor usage patterns and analyze trends to improve the Service
• Enforce our Terms of Service
• Comply with legal obligations
• Detect and prevent fraud or abuse

We do not use your information to make financial decisions on your behalf. We do not sell, trade, rent, or otherwise transfer your personally identifiable information to third parties for their marketing purposes.`
  },
  {
    id:'share', title:'4. How We Share Your Information',
    content:`We may share your information in the following circumstances:

Service Providers: We share information with trusted third-party vendors who assist us in operating our website and delivering the Service, including:
• Stripe — payment processing (subject to Stripe's Privacy Policy)
• Vercel — website hosting and infrastructure
• Google Analytics — website usage analytics (anonymized)
• Resend / SendGrid — transactional email delivery

We require all service providers to maintain appropriate security measures and to use your information only for the purposes we specify.

Legal Requirements: We may disclose your information if required by law, court order, or other legal process, or if we believe disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request.

Business Transfers: If FintelligenceIQ is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you via email and/or prominent notice on our website before your information becomes subject to a different privacy policy.

We do not sell your personal information. We do not share your personal information with third-party advertisers for targeted advertising purposes.`
  },
  {
    id:'calculator', title:'5. Calculator & Tool Data',
    content:`All financial calculators (compound interest, mortgage, retirement, debt payoff) and the AI Q&A feature operate primarily in your web browser. Inputs you enter into calculators — such as income, savings amounts, loan balances, and investment figures — are processed locally and are not transmitted to or stored on our servers.

When you use the AI Q&A feature, your question is sent to Anthropic's API to generate a response. Anthropic's use of this data is governed by Anthropic's Privacy Policy. We do not store the content of AI conversations on our servers beyond the current browser session. We do not associate your questions with your account or personal identity.

If you use our Stock Analyzer with a third-party API key (e.g., Finnhub), that key is stored only in your browser session memory and is cleared when you close the tab. We never transmit your API keys to our servers.`
  },
  {
    id:'retention', title:'6. Data Retention',
    content:`We retain your personal information for as long as your account is active or as needed to provide you the Service. If you delete your account, we will delete or anonymize your personal information within 30 days, except where we are required to retain it for legal or regulatory purposes (such as billing records, which we retain for 7 years as required by tax law).

Analytics data is retained in anonymized form. Log data is retained for up to 90 days for security and debugging purposes.`
  },
  {
    id:'cookies', title:'7. Cookies & Tracking Technologies',
    content:`We use cookies and similar tracking technologies to:
• Keep you logged in to your account (essential cookies)
• Remember your preferences (functional cookies)
• Analyze site usage and performance (analytics cookies via Google Analytics)

Essential cookies: Required for the website to function. You cannot opt out of these.
Functional cookies: Remember your preferences (dark/light mode, calculator defaults). You can clear these via your browser settings.
Analytics cookies: We use Google Analytics with IP anonymization enabled. You can opt out of Google Analytics tracking at any time by installing the Google Analytics Opt-out Browser Add-on (tools.google.com/dlpage/gaoptout).

We do not use advertising cookies or third-party retargeting cookies. We do not participate in advertising networks.

You can control cookies through your browser settings. Note that disabling cookies may affect some features of the Service.`
  },
  {
    id:'rights', title:'8. Your Privacy Rights',
    subsections:[
      {title:'For All Users', content:`Regardless of location, you have the right to:
• Access: Request a copy of the personal information we hold about you
• Correction: Request that we correct inaccurate information
• Deletion: Request that we delete your personal information (subject to legal retention requirements)
• Portability: Request your data in a portable format
• Opt-out: Unsubscribe from marketing emails at any time via the unsubscribe link in any email

To exercise these rights, email privacy@fintelligenceiq.com. We will respond within 30 days.`},
      {title:'California Residents (CCPA)', content:`If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):
• Right to Know: Request disclosure of the categories and specific pieces of personal information we have collected about you
• Right to Delete: Request deletion of personal information we have collected from you
• Right to Opt-Out of Sale: We do not sell personal information. There is nothing to opt out of.
• Right to Non-Discrimination: We will not discriminate against you for exercising your CCPA rights

To submit a CCPA request, contact us at privacy@fintelligenceiq.com or call us at the number listed on our Contact page. We will verify your identity before processing your request.`},
      {title:'European Users (GDPR)', content:`If you are located in the European Economic Area (EEA), United Kingdom, or Switzerland, you have rights under the General Data Protection Regulation (GDPR):
• Right of access, rectification, and erasure
• Right to restrict or object to processing
• Right to data portability
• Right to withdraw consent at any time (where processing is based on consent)
• Right to lodge a complaint with your local supervisory authority

Our legal basis for processing your data is:
• Contractual necessity: To provide the Service you have signed up for
• Legitimate interests: To improve our Service and prevent fraud
• Consent: For marketing emails (you may withdraw consent at any time)
• Legal obligation: For billing and tax records`},
    ]
  },
  {
    id:'security', title:'9. Data Security',
    content:`We implement industry-standard security measures to protect your personal information, including:
• HTTPS/TLS encryption for all data in transit
• Encrypted storage of passwords (bcrypt hashing — we never store plaintext passwords)
• Access controls limiting employee access to personal data on a need-to-know basis
• Regular security reviews and vulnerability assessments

No method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security. In the event of a data breach that affects your personal information, we will notify you as required by applicable law.`
  },
  {
    id:'children', title:'10. Children\'s Privacy',
    content:`FintelligenceIQ is not directed to children under the age of 13 (or 16 in the EEA). We do not knowingly collect personal information from children. If we become aware that a child under 13 has provided us personal information, we will delete it immediately. If you believe we have collected information from a child, please contact us at privacy@fintelligenceiq.com.`
  },
  {
    id:'third', title:'11. Third-Party Links & Services',
    content:`Our website may contain links to third-party websites and services. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services. We encourage you to review the privacy policy of every website you visit.

Third-party services we integrate include: Finnhub (finnhub.io/privacy), Federal Reserve (federalreserve.gov), SEC EDGAR (sec.gov), Anthropic (anthropic.com/privacy), Stripe (stripe.com/privacy).`
  },
  {
    id:'changes', title:'12. Changes to This Policy',
    content:`We may update this Privacy Policy from time to time. We will notify you of significant changes by:
• Posting the new Privacy Policy on this page with an updated "Last Updated" date
• Sending an email notification to registered users (for material changes)
• Displaying a prominent notice on our website

Your continued use of the Service after any changes constitutes your acceptance of the updated Privacy Policy. We encourage you to review this page periodically.`
  },
  {
    id:'contact-privacy', title:'13. Contact Us',
    content:`If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:

Email: privacy@fintelligenceiq.com
Mailing Address: FintelligenceIQ, [Your Address], [City, State, ZIP]
Response time: We respond to all privacy inquiries within 30 days.

For general support, visit our Contact page.`
  },
]

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy — FintelligenceIQ</title>
        <meta name="description" content="FintelligenceIQ Privacy Policy. Learn how we collect, use, and protect your personal information. GDPR and CCPA compliant." />
        <meta name="robots" content="noindex" />
      </Head>
      <Nav />

      <div style={{ background: C.deep, borderBottom: `1px solid ${C.border}`, padding: '56px 5% 48px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ fontSize: 11, color: C.orange, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 14 }}>Legal</div>
          <h1 style={{ fontFamily: "'Sora',sans-serif", fontSize: 'clamp(28px,5vw,44px)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 16 }}>Privacy Policy</h1>
          <p style={{ fontSize: 15, color: C.sub, lineHeight: 1.7 }}>
            Last updated: <strong style={{ color: C.text }}>{LAST_UPDATED}</strong> · Effective immediately upon posting
          </p>
          <p style={{ fontSize: 14, color: C.sub, marginTop: 12, lineHeight: 1.7 }}>
            FintelligenceIQ is committed to protecting your privacy. This policy covers our website at fintelligenceiq.com and all associated services. We do not sell your personal information.
          </p>
        </div>
      </div>

      <div style={{ padding: '48px 5% 80px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', display: 'grid', gridTemplateColumns: '200px 1fr', gap: 48, alignItems: 'start' }}>

          {/* Sidebar TOC */}
          <div style={{ position: 'sticky', top: 80 }}>
            <div style={{ fontSize: 11, color: C.sub, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14 }}>Contents</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {sections.map(s => (
                <a key={s.id} href={`#${s.id}`} style={{ fontSize: 13, color: C.sub, transition: 'color 0.15s', lineHeight: 1.4 }}
                  onMouseEnter={e => e.target.style.color = C.orange}
                  onMouseLeave={e => e.target.style.color = C.sub}>
                  {s.title}
                </a>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="legal-section">
            {sections.map(s => (
              <div key={s.id} id={s.id} style={{ marginBottom: 48 }}>
                <h2>{s.title}</h2>
                {s.content && s.content.split('\n\n').map((p, i) => (
                  <p key={i} style={{ whiteSpace: 'pre-line' }}>{p}</p>
                ))}
                {s.subsections && s.subsections.map(sub => (
                  <div key={sub.title}>
                    <h3>{sub.title}</h3>
                    {sub.content.split('\n\n').map((p, i) => (
                      <p key={i} style={{ whiteSpace: 'pre-line' }}>{p}</p>
                    ))}
                  </div>
                ))}
              </div>
            ))}

            <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: 24, marginTop: 16 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 8 }}>Have a privacy question?</div>
              <p style={{ fontSize: 13, color: C.sub, marginBottom: 14, lineHeight: 1.7 }}>We take privacy seriously and respond to all inquiries within 30 days.</p>
              <Link href="/contact"><button className="btn-orange" style={{ fontSize: 14, padding: '10px 20px' }}>Contact Us</button></Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export async function getServerSideProps() { return { props: {} } }
