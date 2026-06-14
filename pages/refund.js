import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Check, X, ArrowRight, Shield, CreditCard, Clock, AlertCircle } from 'lucide-react'

const C = {
  navy:'#0A1628', deep:'#060E1C', card:'#0C1A2E', mid:'#0D1E38',
  border:'#162845', orange:'#FF6B35', emerald:'#00C896',
  coral:'#FF4560', text:'#EEF4FF', sub:'#6B8DB5', dim:'#1A3050',
}

const LAST_UPDATED = 'May 15, 2026'

export default function Refund() {
  return (
    <>
      <Head>
        <title>Refund Policy — FintelligenceIQ</title>
        <meta name="description" content="FintelligenceIQ Refund Policy. 30-day money-back guarantee on all paid plans. Learn how to request a refund or cancel your subscription." />
        <meta name="robots" content="noindex" />
      </Head>
      <Nav />

      {/* Header */}
      <div style={{ background: C.deep, borderBottom: `1px solid ${C.border}`, padding: '56px 5% 48px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{ fontSize: 11, color: C.orange, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 14 }}>Legal</div>
          <h1 style={{ fontFamily: "'Sora',sans-serif", fontSize: 'clamp(28px,5vw,44px)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 14 }}>Refund Policy</h1>
          <p style={{ fontSize: 15, color: C.sub, lineHeight: 1.7, marginBottom: 6 }}>
            Last updated: <strong style={{ color: C.text }}>{LAST_UPDATED}</strong>
          </p>
          <p style={{ fontSize: 14, color: C.sub, lineHeight: 1.7 }}>
            We want you to be completely satisfied with FintelligenceIQ. If you're not happy with a paid plan for any reason, we offer a straightforward 30-day money-back guarantee.
          </p>
        </div>
      </div>

      <div style={{ padding: '56px 5% 80px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>

          {/* Guarantee banner */}
          <div style={{ background: `${C.emerald}14`, border: `1px solid ${C.emerald}44`, borderRadius: 16, padding: 28, marginBottom: 40, display: 'flex', alignItems: 'flex-start', gap: 20 }}>
            <div style={{ width: 52, height: 52, background: `${C.emerald}22`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
              <Shield size={26} color={C.emerald} />
            </div>
            <div>
              <div style={{ fontFamily: "'Sora',sans-serif", fontSize: 20, fontWeight: 800, color: C.emerald, marginBottom: 6 }}>30-Day Money-Back Guarantee</div>
              <p style={{ fontSize: 15, color: C.sub, lineHeight: 1.7 }}>
                All paid plans — Premium ($9/mo) and Pro ($29/mo) — include a full 30-day money-back guarantee. No questions asked. If you're not satisfied within the first 30 days of your subscription, contact us and we will issue a full refund to your original payment method.
              </p>
            </div>
          </div>

          {/* Plan comparison */}
          <h2 style={{ fontFamily: "'Sora',sans-serif", fontSize: 22, fontWeight: 700, marginBottom: 20, color: C.text }}>Refund eligibility by plan</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14, marginBottom: 48 }}>
            {[
              { name:'Free Plan', price:'$0/mo', eligible:null, items:[
                {yes:true,  text:'No charges — nothing to refund'},
                {yes:true,  text:'Cancel anytime, no action needed'},
                {yes:true,  text:'Full access continues indefinitely'},
              ]},
              { name:'Premium Plan', price:'$9/mo', eligible:'30-day guarantee', items:[
                {yes:true,  text:'Full refund within 30 days of purchase'},
                {yes:true,  text:'No questions asked'},
                {yes:true,  text:'Refund to original payment method'},
                {yes:false, text:'No refunds after 30 days'},
                {yes:true,  text:'Cancel anytime to stop future charges'},
              ]},
              { name:'Pro Plan', price:'$29/mo', eligible:'30-day guarantee', items:[
                {yes:true,  text:'Full refund within 30 days of purchase'},
                {yes:true,  text:'No questions asked'},
                {yes:true,  text:'Refund to original payment method'},
                {yes:false, text:'No refunds after 30 days'},
                {yes:true,  text:'Cancel anytime to stop future charges'},
              ]},
            ].map(({ name, price, eligible, items }) => (
              <div key={name} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: 22 }}>
                <div style={{ fontFamily: "'Sora',sans-serif", fontSize: 16, fontWeight: 800, marginBottom: 2 }}>{name}</div>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 14, color: C.orange, marginBottom: 12 }}>{price}</div>
                {eligible && (
                  <div style={{ background: `${C.emerald}18`, border: `1px solid ${C.emerald}44`, borderRadius: 8, padding: '6px 12px', fontSize: 12, color: C.emerald, fontWeight: 700, marginBottom: 14, textAlign: 'center' }}>
                    ✓ {eligible}
                  </div>
                )}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {items.map(({ yes, text }, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                      <div style={{ width: 18, height: 18, borderRadius: '50%', background: yes?`${C.emerald}20`:`${C.coral}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                        {yes ? <Check size={11} color={C.emerald} /> : <X size={11} color={C.coral} />}
                      </div>
                      <span style={{ fontSize: 12, color: C.sub, lineHeight: 1.5 }}>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Policy details */}
          <div className="legal-section">

            <h2>Annual Subscriptions</h2>
            <p>If you purchase an annual plan (billed once per year at a 20% discount), the following applies:</p>
            <ul>
              <li><strong>Within 30 days of purchase:</strong> Full refund of the annual payment, no questions asked.</li>
              <li><strong>After 30 days:</strong> We do not offer prorated refunds for annual plans after the 30-day guarantee period. You will retain access to your paid plan until the end of the annual billing period.</li>
              <li><strong>Cancellation:</strong> You may cancel your annual subscription at any time. Cancellation prevents automatic renewal at the end of the billing period. No refund is issued for the unused portion after 30 days.</li>
            </ul>

            <h2>What Qualifies for a Refund</h2>
            <p>You are eligible for a refund if:</p>
            <ul>
              <li>You are within 30 days of your original subscription purchase date</li>
              <li>You have not previously received a refund on the same account</li>
              <li>Your account is in good standing (no violation of our Terms of Service)</li>
            </ul>
            <p>Refund requests after 30 days will not be honored except in cases of:</p>
            <ul>
              <li>A billing error on our part (duplicate charge, incorrect amount)</li>
              <li>A documented technical failure that prevented you from accessing the Service for more than 7 consecutive days, despite contacting our support team</li>
            </ul>
            <p>We evaluate these exceptional cases individually. Contact us at billing@fintelligenceiq.com with supporting documentation.</p>

            <h2>What Does Not Qualify for a Refund</h2>
            <ul>
              <li>Requests made after the 30-day guarantee period (unless covered by the exceptions above)</li>
              <li>Dissatisfaction with publicly available data (e.g., stock prices or economic data we display but do not control)</li>
              <li>Accounts suspended or terminated for violating our Terms of Service</li>
              <li>Charges you forgot about or did not intend to continue (we send billing reminders before every renewal)</li>
              <li>Partial months or unused days within a billing period</li>
            </ul>

            <h2>How to Request a Refund</h2>
            <p><strong>Step 1:</strong> Email billing@fintelligenceiq.com with the subject line "Refund Request."</p>
            <p><strong>Step 2:</strong> Include in your email: the email address associated with your account, your subscription plan (Premium or Pro), the date of purchase, and optionally, why you'd like a refund (your feedback helps us improve).</p>
            <p><strong>Step 3:</strong> We will confirm your request within 24 hours and process the refund within 5–10 business days.</p>
            <p><strong>Step 4:</strong> Your refund will appear on your original payment method within 5–10 business days after we process it, depending on your bank or card issuer.</p>

            <h2>How to Cancel Your Subscription</h2>
            <p>Canceling stops future charges but does not automatically trigger a refund. You retain access to your paid features until the end of your current billing period.</p>
            <p>To cancel:</p>
            <ul>
              <li><strong>In-app:</strong> Log in → Account Settings → Subscription → Cancel Subscription</li>
              <li><strong>By email:</strong> Email billing@fintelligenceiq.com with "Cancel Subscription" in the subject line</li>
              <li><strong>Via contact form:</strong> Use the form on our <Link href="/contact">Contact page</Link> and select "Billing & Subscription"</li>
            </ul>
            <p>After cancellation, you will receive a confirmation email. If you do not receive one within 24 hours, contact us to confirm your cancellation was processed.</p>

            <h2>Billing Errors</h2>
            <p>If you believe you were charged incorrectly (wrong amount, duplicate charge, charged after cancellation), contact us immediately at billing@fintelligenceiq.com. We investigate all billing disputes within 24 hours and correct errors at no cost to you.</p>
            <p>We use Stripe for payment processing. Stripe handles all card data — we never store your full card number. For disputes about specific charges, you may also contact your card issuer directly, though we encourage you to contact us first so we can resolve it quickly.</p>

            <h2>Free Plan</h2>
            <p>The Free plan is completely free — there are no charges, no credit card required, and no subscription to cancel. You may delete your Free account at any time by contacting privacy@fintelligenceiq.com.</p>

            <h2>Changes to This Policy</h2>
            <p>We reserve the right to modify this Refund Policy at any time. Changes will be posted on this page with an updated "Last Updated" date. For existing subscribers, changes take effect on your next renewal date. We will notify you by email of any material changes to this policy.</p>

            <h2>Contact for Billing Issues</h2>
            <p>
              Email: <a href="mailto:billing@fintelligenceiq.com">billing@fintelligenceiq.com</a><br />
              Response time: Within 24 hours (usually same business day)<br />
              General contact: <Link href="/contact">Contact Us page</Link>
            </p>
          </div>

          {/* CTA */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 48 }}>
            <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: 24 }}>
              <CreditCard size={24} color={C.orange} style={{ marginBottom: 12 }} />
              <div style={{ fontFamily: "'Sora',sans-serif", fontSize: 16, fontWeight: 700, marginBottom: 8 }}>Request a Refund</div>
              <p style={{ fontSize: 13, color: C.sub, lineHeight: 1.65, marginBottom: 16 }}>Within your 30-day window? We'll process your refund promptly — no questions asked.</p>
              <a href="mailto:billing@fintelligenceiq.com?subject=Refund Request"><button className="btn-orange" style={{ fontSize: 13, padding: '10px 18px' }}>Email Billing Team <ArrowRight size={14} /></button></a>
            </div>
            <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: 24 }}>
              <Clock size={24} color={C.sub} style={{ marginBottom: 12 }} />
              <div style={{ fontFamily: "'Sora',sans-serif", fontSize: 16, fontWeight: 700, marginBottom: 8 }}>Cancel Your Subscription</div>
              <p style={{ fontSize: 13, color: C.sub, lineHeight: 1.65, marginBottom: 16 }}>Need to cancel but aren't requesting a refund? You can cancel anytime from your account settings.</p>
              <Link href="/contact"><button className="btn-ghost" style={{ fontSize: 13, padding: '10px 18px' }}>Contact Support</button></Link>
            </div>
          </div>

          <div style={{ background: `${C.orange}10`, border: `1px solid ${C.orange}30`, borderRadius: 12, padding: '16px 20px', marginTop: 24, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
            <AlertCircle size={18} color={C.orange} style={{ flexShrink: 0, marginTop: 1 }} />
            <p style={{ fontSize: 13, color: C.sub, lineHeight: 1.7 }}>
              <strong style={{ color: C.text }}>Reminder:</strong> FintelligenceIQ is a financial education platform. We do not manage your money, execute trades, or hold any funds on your behalf. This refund policy applies solely to subscription fees for access to our educational platform.
            </p>
          </div>

        </div>
      </div>

      <Footer />
    </>
  )
}

export async function getServerSideProps() { return { props: {} } }
