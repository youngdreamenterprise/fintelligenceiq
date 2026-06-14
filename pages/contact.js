import { useState } from 'react'
import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Mail, MessageSquare, HelpCircle, CreditCard, Bug, Clock, ArrowRight, Check } from 'lucide-react'

const C = {
  navy:'#0A1628', deep:'#060E1C', card:'#0C1A2E', mid:'#0D1E38',
  border:'#162845', orange:'#FF6B35', orangeD:'#E85520',
  emerald:'#00C896', text:'#EEF4FF', sub:'#6B8DB5', dim:'#1A3050',
}

const TOPICS = [
  { id:'general',   label:'General Question',       icon:HelpCircle, desc:'Questions about the platform or how things work'  },
  { id:'billing',   label:'Billing & Subscription', icon:CreditCard, desc:'Subscription changes, invoices, refund requests'  },
  { id:'technical', label:'Technical Support',      icon:Bug,        desc:'Bug reports, errors, or tool not working properly'},
  { id:'feedback',  label:'Feature Request',        icon:MessageSquare, desc:'Suggestions or ideas for new features'        },
  { id:'press',     label:'Press & Media',          icon:Mail,       desc:'Media inquiries, partnerships, or press kit'     },
  { id:'privacy',   label:'Privacy Request',        icon:HelpCircle, desc:'Data deletion, GDPR/CCPA requests, privacy questions'},
]

const FAQ_QUICK = [
  { q: 'How do I cancel my subscription?', a: 'Log in → Account Settings → Subscription → Cancel. Your access continues until the end of your current billing period.' },
  { q: 'How do I request a refund?', a: 'Premium and Pro plans come with a 30-day money-back guarantee. Email billing@fintelligenceiq.com or use the form on our Refund Policy page.' },
  { q: "My API data isn't loading — what do I do?", a: "Check that your Finnhub or FRED API key is entered correctly in Settings. Free tier keys have rate limits — if you're hitting them, wait 60 seconds and try again." },
  { q: 'How do I delete my account?', a: 'Email privacy@fintelligenceiq.com with "Account Deletion Request" in the subject line. We process deletions within 30 days.' },
]

export default function Contact() {
  const [topic,     setTopic]     = useState('')
  const [name,      setName]      = useState('')
  const [email,     setEmail]     = useState('')
  const [subject,   setSubject]   = useState('')
  const [message,   setMessage]   = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading,   setLoading]   = useState(false)
  const [error,     setError]     = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!name || !email || !message) { setError('Please fill in all required fields.'); return }
    setLoading(true); setError('')
    // Simulate form submission — replace with your actual API endpoint
    await new Promise(r => setTimeout(r, 1200))
    setSubmitted(true); setLoading(false)
  }

  const inputStyle = {
    background: C.mid, border: `1px solid ${C.border}`, borderRadius: 8,
    color: C.text, padding: '12px 16px', fontSize: 14, outline: 'none',
    fontFamily: 'inherit', width: '100%', transition: 'border-color 0.2s',
  }

  return (
    <>
      <Head>
        <title>Contact Us — FintelligenceIQ</title>
        <meta name="description" content="Get in touch with FintelligenceIQ. We respond to all inquiries within 24–48 hours. Support for billing, technical issues, and general questions." />
      </Head>
      <Nav />

      {/* Header */}
      <div style={{ background: C.deep, borderBottom: `1px solid ${C.border}`, padding: '56px 5% 48px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ fontSize: 11, color: C.orange, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 14 }}>Support</div>
          <h1 style={{ fontFamily: "'Sora',sans-serif", fontSize: 'clamp(28px,5vw,44px)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 14 }}>Contact Us</h1>
          <p style={{ fontSize: 16, color: C.sub, lineHeight: 1.7, maxWidth: 560 }}>
            We read every message and respond within 24–48 business hours. For faster answers, check the quick FAQ below.
          </p>
          <div style={{ display: 'flex', gap: 24, marginTop: 20, flexWrap: 'wrap' }}>
            {[
              { icon: Clock, label: '24–48 hr response time' },
              { icon: Mail,  label: 'support@fintelligenceiq.com' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Icon size={15} color={C.orange} />
                <span style={{ fontSize: 13, color: C.sub }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ padding: '56px 5% 80px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 380px', gap: 48, alignItems: 'start' }}>

          {/* Contact Form */}
          <div>
            {!submitted ? (
              <>
                <h2 style={{ fontFamily: "'Sora',sans-serif", fontSize: 22, fontWeight: 700, marginBottom: 24 }}>Send us a message</h2>

                {/* Topic selector */}
                <div style={{ marginBottom: 24 }}>
                  <div style={{ fontSize: 11, color: C.sub, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>What can we help you with?</div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 10 }}>
                    {TOPICS.map(({ id, label, icon: Icon, desc }) => (
                      <button key={id} onClick={() => setTopic(id)} style={{
                        background: topic === id ? `${C.orange}18` : C.card,
                        border: `${topic===id?2:1}px solid ${topic===id?C.orange:C.border}`,
                        borderRadius: 10, padding: '12px 14px', cursor: 'pointer',
                        textAlign: 'left', fontFamily: 'inherit', transition: 'all 0.15s',
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                          <Icon size={14} color={topic===id?C.orange:C.sub} />
                          <span style={{ fontSize: 13, fontWeight: 700, color: topic===id?C.orange:C.text }}>{label}</span>
                        </div>
                        <div style={{ fontSize: 11, color: C.sub, lineHeight: 1.4 }}>{desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div>
                      <label style={{ fontSize: 11, color: C.sub, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8, display: 'block' }}>
                        Full Name <span style={{ color: C.orange }}>*</span>
                      </label>
                      <input value={name} onChange={e => setName(e.target.value)} placeholder="Jane Smith" style={inputStyle}
                        onFocus={e => e.target.style.borderColor = C.orange} onBlur={e => e.target.style.borderColor = C.border} />
                    </div>
                    <div>
                      <label style={{ fontSize: 11, color: C.sub, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8, display: 'block' }}>
                        Email Address <span style={{ color: C.orange }}>*</span>
                      </label>
                      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="jane@email.com" style={inputStyle}
                        onFocus={e => e.target.style.borderColor = C.orange} onBlur={e => e.target.style.borderColor = C.border} />
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: 11, color: C.sub, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8, display: 'block' }}>Subject</label>
                    <input value={subject} onChange={e => setSubject(e.target.value)} placeholder="Brief summary of your question" style={inputStyle}
                      onFocus={e => e.target.style.borderColor = C.orange} onBlur={e => e.target.style.borderColor = C.border} />
                  </div>

                  <div>
                    <label style={{ fontSize: 11, color: C.sub, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8, display: 'block' }}>
                      Message <span style={{ color: C.orange }}>*</span>
                    </label>
                    <textarea value={message} onChange={e => setMessage(e.target.value)}
                      placeholder="Please describe your question or issue in detail. For billing issues, include the email address associated with your account."
                      rows={6}
                      style={{ ...inputStyle, resize: 'vertical', minHeight: 140, lineHeight: 1.6 }}
                      onFocus={e => e.target.style.borderColor = C.orange}
                      onBlur={e => e.target.style.borderColor = C.border}
                    />
                  </div>

                  {error && (
                    <div style={{ background: '#FF456018', border: '1px solid #FF456044', borderRadius: 8, padding: '10px 14px', fontSize: 13, color: '#FF4560' }}>{error}</div>
                  )}

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
                    <p style={{ fontSize: 12, color: C.sub, lineHeight: 1.6, maxWidth: 360 }}>
                      By submitting this form, you agree to our <a href="/privacy" style={{ color: C.orange }}>Privacy Policy</a>. We use your information only to respond to your inquiry.
                    </p>
                    <button type="submit" className="btn-orange" disabled={loading} style={{ opacity: loading ? 0.7 : 1, flexShrink: 0 }}>
                      {loading ? 'Sending…' : <><span>Send Message</span> <ArrowRight size={16} /></>}
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div style={{ background: `${C.emerald}18`, border: `1px solid ${C.emerald}44`, borderRadius: 16, padding: '40px 32px', textAlign: 'center' }}>
                <div style={{ width: 56, height: 56, background: `${C.emerald}22`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  <Check size={28} color={C.emerald} />
                </div>
                <h2 style={{ fontFamily: "'Sora',sans-serif", fontSize: 22, fontWeight: 800, marginBottom: 10, color: C.emerald }}>Message Sent!</h2>
                <p style={{ fontSize: 15, color: C.sub, lineHeight: 1.7, marginBottom: 6 }}>
                  Thanks for reaching out, <strong style={{ color: C.text }}>{name}</strong>.
                </p>
                <p style={{ fontSize: 14, color: C.sub, lineHeight: 1.7 }}>
                  We'll reply to <strong style={{ color: C.text }}>{email}</strong> within 24–48 business hours.
                  {topic === 'billing' && ' For billing issues, responses are typically within a few hours.'}
                </p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* Quick FAQ */}
            <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: 24 }}>
              <div style={{ fontFamily: "'Sora',sans-serif", fontSize: 16, fontWeight: 700, marginBottom: 18 }}>Quick Answers</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {FAQ_QUICK.map(({ q, a }, i) => (
                  <div key={i} style={{ padding: '14px 0', borderBottom: i < FAQ_QUICK.length - 1 ? `1px solid ${C.border}` : 'none' }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: C.text, marginBottom: 5, lineHeight: 1.4 }}>{q}</div>
                    <div style={{ fontSize: 12, color: C.sub, lineHeight: 1.65 }}>{a}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct emails */}
            <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: 24 }}>
              <div style={{ fontFamily: "'Sora',sans-serif", fontSize: 15, fontWeight: 700, marginBottom: 14 }}>Direct Contacts</div>
              {[
                { label: 'General Support', email: 'support@fintelligenceiq.com' },
                { label: 'Billing & Refunds', email: 'billing@fintelligenceiq.com' },
                { label: 'Privacy & Data', email: 'privacy@fintelligenceiq.com' },
                { label: 'Press & Partnerships', email: 'press@fintelligenceiq.com' },
              ].map(({ label, email }) => (
                <div key={label} style={{ padding: '10px 0', borderBottom: `1px solid ${C.border}` }}>
                  <div style={{ fontSize: 11, color: C.sub, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 3 }}>{label}</div>
                  <a href={`mailto:${email}`} style={{ fontSize: 13, color: C.orange, fontWeight: 600 }}>{email}</a>
                </div>
              ))}
            </div>

            {/* Response times */}
            <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: 24 }}>
              <div style={{ fontFamily: "'Sora',sans-serif", fontSize: 15, fontWeight: 700, marginBottom: 14 }}>Response Times</div>
              {[
                { type: 'Billing & Refunds', time: 'Within a few hours' },
                { type: 'Technical Issues', time: '24 hours' },
                { type: 'General Questions', time: '24–48 hours' },
                { type: 'Privacy Requests', time: 'Within 30 days (by law)' },
                { type: 'Press Inquiries', time: '48–72 hours' },
              ].map(({ type, time }) => (
                <div key={type} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: `1px solid ${C.border}`, gap: 8 }}>
                  <span style={{ fontSize: 12, color: C.sub }}>{type}</span>
                  <span style={{ fontSize: 12, color: C.text, fontWeight: 600, textAlign: 'right' }}>{time}</span>
                </div>
              ))}
              <p style={{ fontSize: 11, color: C.dim, marginTop: 12, lineHeight: 1.6 }}>Business hours: Mon–Fri, 9am–6pm ET. Weekend responses may be delayed.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export async function getServerSideProps() { return { props: {} } }
