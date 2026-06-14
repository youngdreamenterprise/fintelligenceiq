// FintelligenceIQ — Learn Section Content
// Rich educational articles with SVG diagrams and images for each unit

// ─── SVG Diagrams ─────────────────────────────────────────────────────────────

const SVG_COMPOUND = `<svg viewBox="0 0 680 310" xmlns="http://www.w3.org/2000/svg">
  <rect width="680" height="310" fill="#06101F" rx="14"/>
  <rect x="72" y="20" width="578" height="244" fill="#081525" rx="8"/>
  <line x1="72" y1="80" x2="650" y2="80" stroke="#0D2035" stroke-width="1" stroke-dasharray="4,4"/>
  <line x1="72" y1="130" x2="650" y2="130" stroke="#0D2035" stroke-width="1" stroke-dasharray="4,4"/>
  <line x1="72" y1="180" x2="650" y2="180" stroke="#0D2035" stroke-width="1" stroke-dasharray="4,4"/>
  <line x1="72" y1="230" x2="650" y2="230" stroke="#0D2035" stroke-width="1" stroke-dasharray="4,4"/>
  <text x="64" y="83" text-anchor="end" fill="#4A7AA0" font-size="10" font-family="Manrope,sans-serif">$15k</text>
  <text x="64" y="133" text-anchor="end" fill="#4A7AA0" font-size="10" font-family="Manrope,sans-serif">$10k</text>
  <text x="64" y="183" text-anchor="end" fill="#4A7AA0" font-size="10" font-family="Manrope,sans-serif">$5k</text>
  <text x="64" y="233" text-anchor="end" fill="#4A7AA0" font-size="10" font-family="Manrope,sans-serif">$1k</text>
  <text x="72"  y="274" text-anchor="middle" fill="#4A7AA0" font-size="10" font-family="Manrope,sans-serif">0</text>
  <text x="216" y="274" text-anchor="middle" fill="#4A7AA0" font-size="10" font-family="Manrope,sans-serif">10 yrs</text>
  <text x="360" y="274" text-anchor="middle" fill="#4A7AA0" font-size="10" font-family="Manrope,sans-serif">20 yrs</text>
  <text x="505" y="274" text-anchor="middle" fill="#4A7AA0" font-size="10" font-family="Manrope,sans-serif">30 yrs</text>
  <text x="650" y="274" text-anchor="middle" fill="#4A7AA0" font-size="10" font-family="Manrope,sans-serif">40 yrs</text>
  <polyline points="72,230 216,229 360,228 505,227 650,226" fill="none" stroke="#4A7AA0" stroke-width="2" stroke-dasharray="5,3" opacity="0.7"/>
  <polyline points="72,230 216,224 360,214 505,200 650,180" fill="none" stroke="#3D8EFF" stroke-width="2.5"/>
  <polyline points="72,230 216,216 360,190 505,150 650,84" fill="none" stroke="#00D09C" stroke-width="3"/>
  <polyline points="72,230 216,206 360,163 505,88 650,26" fill="none" stroke="#F5C842" stroke-width="3"/>
  <circle cx="650" cy="226" r="4" fill="#4A7AA0"/>
  <circle cx="650" cy="180" r="4" fill="#3D8EFF"/>
  <circle cx="650" cy="84"  r="4" fill="#00D09C"/>
  <circle cx="650" cy="26"  r="4" fill="#F5C842"/>
  <rect x="80" y="28" width="215" height="90" fill="#0A1628" rx="8" stroke="#0D2035" stroke-width="1"/>
  <line x1="92" y1="47" x2="112" y2="47" stroke="#4A7AA0" stroke-width="2" stroke-dasharray="4,2"/>
  <text x="118" y="51" fill="#E8F4FF" font-size="10" font-family="Manrope,sans-serif">0.5% Savings  →  $1,221</text>
  <line x1="92" y1="63" x2="112" y2="63" stroke="#3D8EFF" stroke-width="2.5"/>
  <text x="118" y="67" fill="#E8F4FF" font-size="10" font-family="Manrope,sans-serif">4% Bonds      →  $4,801</text>
  <line x1="92" y1="79" x2="112" y2="79" stroke="#00D09C" stroke-width="3"/>
  <text x="118" y="83" fill="#E8F4FF" font-size="10" font-family="Manrope,sans-serif">7% S&amp;P 500   →  $14,974</text>
  <line x1="92" y1="95" x2="112" y2="95" stroke="#F5C842" stroke-width="3"/>
  <text x="118" y="99" fill="#E8F4FF" font-size="10" font-family="Manrope,sans-serif">10% Growth    →  $45,259</text>
  <text x="360" y="294" text-anchor="middle" fill="#4A7AA0" font-size="11" font-family="Manrope,sans-serif">$1,000 invested — growth over 40 years</text>
</svg>`

const SVG_STOCKS_FLOW = `<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg">
  <rect width="680" height="220" fill="#06101F" rx="14"/>
  <rect x="20" y="80" width="120" height="60" rx="12" fill="#0C1A2E" stroke="#3D8EFF" stroke-width="2"/>
  <text x="80" y="105" text-anchor="middle" fill="#E8F4FF" font-size="12" font-family="Manrope,sans-serif" font-weight="700">🏢 Company</text>
  <text x="80" y="123" text-anchor="middle" fill="#4A7AA0" font-size="10" font-family="Manrope,sans-serif">Needs capital</text>
  <rect x="180" y="80" width="120" height="60" rx="12" fill="#0C1A2E" stroke="#FF6B35" stroke-width="2"/>
  <text x="240" y="105" text-anchor="middle" fill="#E8F4FF" font-size="12" font-family="Manrope,sans-serif" font-weight="700">📋 IPO</text>
  <text x="240" y="123" text-anchor="middle" fill="#4A7AA0" font-size="10" font-family="Manrope,sans-serif">Issues shares</text>
  <rect x="340" y="80" width="120" height="60" rx="12" fill="#0C1A2E" stroke="#00D09C" stroke-width="2"/>
  <text x="400" y="105" text-anchor="middle" fill="#E8F4FF" font-size="12" font-family="Manrope,sans-serif" font-weight="700">🏛️ Exchange</text>
  <text x="400" y="123" text-anchor="middle" fill="#4A7AA0" font-size="10" font-family="Manrope,sans-serif">NYSE / Nasdaq</text>
  <rect x="500" y="80" width="160" height="60" rx="12" fill="#0C1A2E" stroke="#F5C842" stroke-width="2"/>
  <text x="580" y="105" text-anchor="middle" fill="#E8F4FF" font-size="12" font-family="Manrope,sans-serif" font-weight="700">👤 You (Investor)</text>
  <text x="580" y="123" text-anchor="middle" fill="#4A7AA0" font-size="10" font-family="Manrope,sans-serif">Part-owner of company</text>
  <line x1="140" y1="110" x2="180" y2="110" stroke="#3D8EFF" stroke-width="2" marker-end="url(#arr)"/>
  <line x1="300" y1="110" x2="340" y2="110" stroke="#FF6B35" stroke-width="2" marker-end="url(#arr)"/>
  <line x1="460" y1="110" x2="500" y2="110" stroke="#00D09C" stroke-width="2" marker-end="url(#arr)"/>
  <defs><marker id="arr" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#E8F4FF"/></marker></defs>
  <text x="160" y="75" text-anchor="middle" fill="#4A7AA0" font-size="9" font-family="Manrope,sans-serif">raises money</text>
  <text x="320" y="75" text-anchor="middle" fill="#4A7AA0" font-size="9" font-family="Manrope,sans-serif">lists shares</text>
  <text x="480" y="75" text-anchor="middle" fill="#4A7AA0" font-size="9" font-family="Manrope,sans-serif">buys shares</text>
  <text x="580" y="170" text-anchor="middle" fill="#F5C842" font-size="11" font-family="Manrope,sans-serif" font-weight="700">Dividends + Price appreciation</text>
  <path d="M580,165 Q580,145 460,145 Q340,145 340,138" fill="none" stroke="#F5C842" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="340" y="200" text-anchor="middle" fill="#4A7AA0" font-size="10" font-family="Manrope,sans-serif">Secondary market: investors trade among themselves — company gets no money from these trades</text>
</svg>`

const SVG_TAX_BRACKETS = `<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg">
  <rect width="680" height="300" fill="#06101F" rx="14"/>
  <text x="340" y="30" text-anchor="middle" fill="#E8F4FF" font-size="13" font-family="Manrope,sans-serif" font-weight="700">How a $80,000 Income Is Taxed (Single Filer, 2025)</text>
  <rect x="60" y="50" width="80" height="25" rx="4" fill="#3B82F6"/>
  <text x="100" y="67" text-anchor="middle" fill="#fff" font-size="10" font-family="Manrope,sans-serif" font-weight="700">10%</text>
  <rect x="60" y="79" width="220" height="25" rx="4" fill="#6366F1"/>
  <text x="170" y="96" text-anchor="middle" fill="#fff" font-size="10" font-family="Manrope,sans-serif" font-weight="700">12%</text>
  <rect x="60" y="108" width="100" height="25" rx="4" fill="#8B5CF6"/>
  <text x="110" y="125" text-anchor="middle" fill="#fff" font-size="10" font-family="Manrope,sans-serif" font-weight="700">22%</text>
  <line x1="400" y1="50" x2="400" y2="140" stroke="#0D2035" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="60"  y="153" fill="#4A7AA0" font-size="10" font-family="Manrope,sans-serif">$0</text>
  <text x="138" y="153" fill="#4A7AA0" font-size="10" font-family="Manrope,sans-serif">$11,925</text>
  <text x="278" y="153" fill="#4A7AA0" font-size="10" font-family="Manrope,sans-serif">$48,475</text>
  <text x="380" y="153" fill="#4A7AA0" font-size="10" font-family="Manrope,sans-serif">$65k</text>
  <rect x="60" y="50" width="180" height="25" rx="4" fill="#1E40AF" opacity="0.3"/>
  <text x="149" y="67" text-anchor="middle" fill="#93C5FD" font-size="9" font-family="Manrope,sans-serif">Standard Deduction ($15k) — not taxed</text>
  <rect x="80" y="175" width="30" height="30" rx="4" fill="#3B82F6"/>
  <text x="116" y="196" fill="#E8F4FF" font-size="11" font-family="Manrope,sans-serif">10% bracket: $11,925 × 10% = <tspan font-weight="700" fill="#3B82F6">$1,193</tspan></text>
  <rect x="80" y="215" width="30" height="30" rx="4" fill="#6366F1"/>
  <text x="116" y="236" fill="#E8F4FF" font-size="11" font-family="Manrope,sans-serif">12% bracket: $36,550 × 12% = <tspan font-weight="700" fill="#6366F1">$4,386</tspan></text>
  <rect x="80" y="255" width="30" height="30" rx="4" fill="#8B5CF6"/>
  <text x="116" y="276" fill="#E8F4FF" font-size="11" font-family="Manrope,sans-serif">22% bracket: $16,525 × 22% = <tspan font-weight="700" fill="#8B5CF6">$3,636</tspan></text>
  <rect x="400" y="175" width="260" height="110" rx="10" fill="#0C1A2E" stroke="#0D2035" stroke-width="1"/>
  <text x="530" y="200" text-anchor="middle" fill="#4A7AA0" font-size="11" font-family="Manrope,sans-serif">Total Federal Tax</text>
  <text x="530" y="228" text-anchor="middle" fill="#F5C842" font-size="26" font-family="Manrope,sans-serif" font-weight="800">$9,215</text>
  <text x="530" y="250" text-anchor="middle" fill="#4A7AA0" font-size="10" font-family="Manrope,sans-serif">Marginal rate: 22%</text>
  <text x="530" y="268" text-anchor="middle" fill="#00D09C" font-size="11" font-family="Manrope,sans-serif" font-weight="700">Effective rate: 11.5% ✓</text>
</svg>`

const SVG_FICO = `<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg">
  <rect width="680" height="260" fill="#06101F" rx="14"/>
  <text x="340" y="28" text-anchor="middle" fill="#E8F4FF" font-size="13" font-family="Manrope,sans-serif" font-weight="700">The 5 Factors of Your FICO Credit Score</text>
  <rect x="40" y="50" width="600" height="34" rx="8" fill="#0C1A2E"/>
  <rect x="40" y="50" width="210" height="34" rx="8" fill="#3D8EFF"/>
  <text x="145" y="72" text-anchor="middle" fill="#fff" font-size="11" font-family="Manrope,sans-serif" font-weight="700">Payment History — 35%</text>
  <rect x="40" y="94" width="600" height="30" rx="8" fill="#0C1A2E"/>
  <rect x="40" y="94" width="180" height="30" rx="8" fill="#00D09C"/>
  <text x="130" y="114" text-anchor="middle" fill="#fff" font-size="11" font-family="Manrope,sans-serif" font-weight="700">Amounts Owed — 30%</text>
  <rect x="40" y="134" width="600" height="30" rx="8" fill="#0C1A2E"/>
  <rect x="40" y="134" width="90" height="30" rx="8" fill="#FFB830"/>
  <text x="85" y="154" text-anchor="middle" fill="#fff" font-size="11" font-family="Manrope,sans-serif" font-weight="700">History — 15%</text>
  <rect x="40" y="174" width="600" height="30" rx="8" fill="#0C1A2E"/>
  <rect x="40" y="174" width="60" height="30" rx="8" fill="#8B5CF6"/>
  <text x="70" y="194" text-anchor="middle" fill="#fff" font-size="10" font-family="Manrope,sans-serif" font-weight="700">Mix 10%</text>
  <rect x="40" y="214" width="600" height="30" rx="8" fill="#0C1A2E"/>
  <rect x="40" y="214" width="60" height="30" rx="8" fill="#FF4560"/>
  <text x="70" y="234" text-anchor="middle" fill="#fff" font-size="10" font-family="Manrope,sans-serif" font-weight="700">New 10%</text>
  <text x="258" y="72"  fill="#4A7AA0" font-size="10" font-family="Manrope,sans-serif">Do you pay on time, every time? Most critical factor.</text>
  <text x="228" y="114" fill="#4A7AA0" font-size="10" font-family="Manrope,sans-serif">Credit utilization — keep below 30%, ideally under 10%.</text>
  <text x="138" y="154" fill="#4A7AA0" font-size="10" font-family="Manrope,sans-serif">Length of credit history. Older accounts = higher score.</text>
  <text x="108" y="194" fill="#4A7AA0" font-size="10" font-family="Manrope,sans-serif">Having both revolving (cards) and installment (loans) credit.</text>
  <text x="108" y="234" fill="#4A7AA0" font-size="10" font-family="Manrope,sans-serif">Recent hard inquiries. Multiple applications lower your score.</text>
</svg>`

const SVG_CREDIT_SCORE_RANGES = `<svg viewBox="0 0 680 140" xmlns="http://www.w3.org/2000/svg">
  <rect width="680" height="140" fill="#06101F" rx="14"/>
  <defs>
    <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   stop-color="#FF4560"/>
      <stop offset="35%"  stop-color="#FF8C42"/>
      <stop offset="55%"  stop-color="#FFB830"/>
      <stop offset="75%"  stop-color="#00D09C"/>
      <stop offset="100%" stop-color="#00A878"/>
    </linearGradient>
  </defs>
  <rect x="40" y="40" width="600" height="28" rx="14" fill="url(#scoreGrad)"/>
  <text x="40"  y="35" fill="#FF4560"  font-size="10" font-family="Manrope,sans-serif" font-weight="700">300</text>
  <text x="167" y="35" fill="#FF8C42"  font-size="10" font-family="Manrope,sans-serif" font-weight="700">580</text>
  <text x="248" y="35" fill="#FFB830"  font-size="10" font-family="Manrope,sans-serif" font-weight="700">670</text>
  <text x="348" y="35" fill="#00D09C"  font-size="10" font-family="Manrope,sans-serif" font-weight="700">740</text>
  <text x="466" y="35" fill="#00A878"  font-size="10" font-family="Manrope,sans-serif" font-weight="700">800</text>
  <text x="628" y="35" fill="#00A878"  font-size="10" font-family="Manrope,sans-serif" font-weight="700">850</text>
  <line x1="167" y1="38" x2="167" y2="68" stroke="#06101F" stroke-width="2"/>
  <line x1="248" y1="38" x2="248" y2="68" stroke="#06101F" stroke-width="2"/>
  <line x1="348" y1="38" x2="348" y2="68" stroke="#06101F" stroke-width="2"/>
  <line x1="466" y1="38" x2="466" y2="68" stroke="#06101F" stroke-width="2"/>
  <text x="103" y="88" text-anchor="middle" fill="#FF4560"  font-size="11" font-family="Manrope,sans-serif" font-weight="700">Poor</text>
  <text x="207" y="88" text-anchor="middle" fill="#FF8C42"  font-size="11" font-family="Manrope,sans-serif" font-weight="700">Fair</text>
  <text x="297" y="88" text-anchor="middle" fill="#FFB830"  font-size="11" font-family="Manrope,sans-serif" font-weight="700">Good</text>
  <text x="406" y="88" text-anchor="middle" fill="#00D09C"  font-size="11" font-family="Manrope,sans-serif" font-weight="700">Very Good</text>
  <text x="547" y="88" text-anchor="middle" fill="#00A878"  font-size="11" font-family="Manrope,sans-serif" font-weight="700">Exceptional</text>
  <text x="340" y="120" text-anchor="middle" fill="#4A7AA0" font-size="10" font-family="Manrope,sans-serif">Moving from Good→Very Good saves ~$50,000+ on a 30-year mortgage</text>
</svg>`

const SVG_APR_COST = `<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg">
  <rect width="680" height="260" fill="#06101F" rx="14"/>
  <text x="340" y="26" text-anchor="middle" fill="#E8F4FF" font-size="13" font-family="Manrope,sans-serif" font-weight="700">The True Cost of Credit Card Minimum Payments</text>
  <text x="340" y="44" text-anchor="middle" fill="#4A7AA0" font-size="11" font-family="Manrope,sans-serif">$5,000 balance at 22% APR — paying minimum vs. fixed $200/month</text>
  <rect x="40" y="60" width="280" height="160" rx="12" fill="#0C1A2E" stroke="#FF4560" stroke-width="2"/>
  <text x="180" y="85"  text-anchor="middle" fill="#FF4560"  font-size="13" font-family="Manrope,sans-serif" font-weight="700">💀 Minimum Payment (~2%)</text>
  <text x="180" y="108" text-anchor="middle" fill="#4A7AA0"  font-size="11" font-family="Manrope,sans-serif">Time to pay off:</text>
  <text x="180" y="128" text-anchor="middle" fill="#FF4560"  font-size="22" font-family="Manrope,sans-serif" font-weight="800">32 Years</text>
  <text x="180" y="152" text-anchor="middle" fill="#4A7AA0"  font-size="11" font-family="Manrope,sans-serif">Total interest paid:</text>
  <text x="180" y="172" text-anchor="middle" fill="#FF4560"  font-size="22" font-family="Manrope,sans-serif" font-weight="800">$10,202</text>
  <text x="180" y="196" text-anchor="middle" fill="#4A7AA0"  font-size="10" font-family="Manrope,sans-serif">Total repaid: $15,202 for $5,000 borrowed</text>
  <rect x="360" y="60" width="280" height="160" rx="12" fill="#0C1A2E" stroke="#00D09C" stroke-width="2"/>
  <text x="500" y="85"  text-anchor="middle" fill="#00D09C"  font-size="13" font-family="Manrope,sans-serif" font-weight="700">✅ Fixed $200/Month</text>
  <text x="500" y="108" text-anchor="middle" fill="#4A7AA0"  font-size="11" font-family="Manrope,sans-serif">Time to pay off:</text>
  <text x="500" y="128" text-anchor="middle" fill="#00D09C"  font-size="22" font-family="Manrope,sans-serif" font-weight="800">2.7 Years</text>
  <text x="500" y="152" text-anchor="middle" fill="#4A7AA0"  font-size="11" font-family="Manrope,sans-serif">Total interest paid:</text>
  <text x="500" y="172" text-anchor="middle" fill="#00D09C"  font-size="22" font-family="Manrope,sans-serif" font-weight="800">$1,488</text>
  <text x="500" y="196" text-anchor="middle" fill="#4A7AA0"  font-size="10" font-family="Manrope,sans-serif">Total repaid: $6,488 for $5,000 borrowed</text>
  <text x="340" y="240" text-anchor="middle" fill="#F5C842"  font-size="12" font-family="Manrope,sans-serif" font-weight="700">Paying $200/month instead of minimum saves $8,714 and 29 years</text>
</svg>`

const SVG_SAVINGS_COMPARE = `<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg">
  <rect width="680" height="280" fill="#06101F" rx="14"/>
  <text x="340" y="26" text-anchor="middle" fill="#E8F4FF" font-size="13" font-family="Manrope,sans-serif" font-weight="700">$20,000 Emergency Fund — 5 Years of Growth</text>
  <rect x="80"  y="50" width="180" height="180" rx="10" fill="#0C1A2E" stroke="#4A7AA0" stroke-width="1"/>
  <rect x="420" y="50" width="180" height="180" rx="10" fill="#0C1A2E" stroke="#00D09C" stroke-width="2"/>
  <text x="170" y="75"  text-anchor="middle" fill="#4A7AA0" font-size="12" font-family="Manrope,sans-serif" font-weight="700">Big Bank Savings</text>
  <text x="510" y="75"  text-anchor="middle" fill="#00D09C" font-size="12" font-family="Manrope,sans-serif" font-weight="700">High-Yield Savings</text>
  <text x="170" y="100" text-anchor="middle" fill="#4A7AA0" font-size="11" font-family="Manrope,sans-serif">APY: 0.01%</text>
  <text x="510" y="100" text-anchor="middle" fill="#00D09C" font-size="11" font-family="Manrope,sans-serif">APY: 4.75%</text>
  <rect x="130" y="160" width="80" height="55" rx="6" fill="#0A1628"/>
  <rect x="470" y="60" width="80" height="155" rx="6" fill="#00D09C" opacity="0.3"/>
  <text x="170" y="180" text-anchor="middle" fill="#4A7AA0" font-size="11" font-family="Manrope,sans-serif">Balance after</text>
  <text x="170" y="200" text-anchor="middle" fill="#4A7AA0" font-size="20" font-family="Manrope,sans-serif" font-weight="800">$20,010</text>
  <text x="170" y="218" text-anchor="middle" fill="#4A7AA0" font-size="10" font-family="Manrope,sans-serif">Earned: $10</text>
  <text x="510" y="130" text-anchor="middle" fill="#E8F4FF" font-size="11" font-family="Manrope,sans-serif">Balance after</text>
  <text x="510" y="158" text-anchor="middle" fill="#00D09C" font-size="20" font-family="Manrope,sans-serif" font-weight="800">$25,233</text>
  <text x="510" y="180" text-anchor="middle" fill="#00D09C" font-size="10" font-family="Manrope,sans-serif">Earned: $5,233</text>
  <text x="340" y="254" text-anchor="middle" fill="#F5C842" font-size="13" font-family="Manrope,sans-serif" font-weight="700">The switch earns you $5,223 more — for zero additional risk</text>
</svg>`

const SVG_FRACTIONAL_BANKING = `<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg">
  <rect width="680" height="240" fill="#06101F" rx="14"/>
  <text x="340" y="24" text-anchor="middle" fill="#E8F4FF" font-size="13" font-family="Manrope,sans-serif" font-weight="700">How Fractional Reserve Banking Creates Money</text>
  <rect x="20"  y="44" width="110" height="50" rx="10" fill="#0C1A2E" stroke="#8B5CF6" stroke-width="2"/>
  <text x="75"  y="65" text-anchor="middle" fill="#E8F4FF" font-size="11" font-family="Manrope,sans-serif" font-weight="700">You Deposit</text>
  <text x="75"  y="83" text-anchor="middle" fill="#8B5CF6" font-size="14" font-family="Manrope,sans-serif" font-weight="800">$1,000</text>
  <rect x="170" y="44" width="130" height="50" rx="10" fill="#0C1A2E" stroke="#3D8EFF" stroke-width="2"/>
  <text x="235" y="62" text-anchor="middle" fill="#E8F4FF" font-size="10" font-family="Manrope,sans-serif" font-weight="700">Bank Keeps Reserve</text>
  <text x="235" y="78" text-anchor="middle" fill="#3D8EFF" font-size="13" font-family="Manrope,sans-serif" font-weight="800">$100 (10%)</text>
  <text x="235" y="92" text-anchor="middle" fill="#4A7AA0" font-size="9" font-family="Manrope,sans-serif">lends out $900</text>
  <rect x="350" y="44" width="130" height="50" rx="10" fill="#0C1A2E" stroke="#FF6B35" stroke-width="2"/>
  <text x="415" y="62" text-anchor="middle" fill="#E8F4FF" font-size="10" font-family="Manrope,sans-serif" font-weight="700">Borrower Spends</text>
  <text x="415" y="78" text-anchor="middle" fill="#FF6B35" font-size="13" font-family="Manrope,sans-serif" font-weight="800">$900</text>
  <text x="415" y="92" text-anchor="middle" fill="#4A7AA0" font-size="9" font-family="Manrope,sans-serif">deposited elsewhere</text>
  <rect x="530" y="44" width="130" height="50" rx="10" fill="#0C1A2E" stroke="#00D09C" stroke-width="2"/>
  <text x="595" y="62" text-anchor="middle" fill="#E8F4FF" font-size="10" font-family="Manrope,sans-serif" font-weight="700">Next Bank Lends</text>
  <text x="595" y="78" text-anchor="middle" fill="#00D09C" font-size="13" font-family="Manrope,sans-serif" font-weight="800">$810</text>
  <text x="595" y="92" text-anchor="middle" fill="#4A7AA0" font-size="9" font-family="Manrope,sans-serif">and so on...</text>
  <line x1="130" y1="69" x2="170" y2="69" stroke="#8B5CF6" stroke-width="2" marker-end="url(#arr2)"/>
  <line x1="300" y1="69" x2="350" y2="69" stroke="#3D8EFF" stroke-width="2" marker-end="url(#arr2)"/>
  <line x1="480" y1="69" x2="530" y2="69" stroke="#FF6B35" stroke-width="2" marker-end="url(#arr2)"/>
  <defs><marker id="arr2" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#E8F4FF"/></marker></defs>
  <rect x="20" y="130" width="640" height="70" rx="12" fill="#0C1A2E" stroke="#0D2035" stroke-width="1"/>
  <text x="340" y="152" text-anchor="middle" fill="#F5C842" font-size="13" font-family="Manrope,sans-serif" font-weight="700">Your $1,000 deposit ultimately supports ~$10,000 in economic activity</text>
  <text x="340" y="172" text-anchor="middle" fill="#4A7AA0" font-size="11" font-family="Manrope,sans-serif">This is why FDIC insurance matters — your $1,000 deposit is lent out many times over.</text>
  <text x="340" y="192" text-anchor="middle" fill="#4A7AA0" font-size="11" font-family="Manrope,sans-serif">If depositors all withdraw at once, the bank can fail (a "bank run") — FDIC prevents the panic.</text>
</svg>`

// ─── Learn Content ─────────────────────────────────────────────────────────────

export const LEARN_CONTENT = {

  // ═══════════════════════════════════════════════════════════
  //  INVESTING
  // ═══════════════════════════════════════════════════════════

  'inv-u1': {
    title: 'Why Invest?',
    subtitle: 'Understanding the fundamental case for growing your wealth over time',
    readTime: '14 min read',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
    imageCaption: 'Financial markets represent millions of investment decisions made daily.',
    sections: [
      {
        heading: 'The Silent Thief: Inflation',
        body: `Imagine you put $10,000 under your mattress in 1990. It's safe. Nothing can take it. Fast forward 35 years — your $10,000 is still there, all ten thousand dollars of it. But here's the cruel reality: that $10,000 now buys roughly what $4,100 bought in 1990. You "saved" your money, and lost nearly 60% of its real value. You were robbed in slow motion by inflation.

Inflation is the gradual rise in prices across the economy. The Federal Reserve targets 2% annual inflation — that means prices roughly double every 35 years. A coffee that costs $5 today will cost $10 in 2060. Your savings need to grow at least as fast as inflation just to stay in place.

The average savings account at a big bank pays around 0.01% to 0.5% annually. With 3% inflation, you're losing purchasing power every year. You're running a race but walking backwards.`,
      },
      {
        heading: 'The Power of Compound Returns',
        body: `Albert Einstein (may or may not have) called compound interest "the eighth wonder of the world." Whether he said it or not, the math is undeniably magical. Compound interest means you earn returns not just on your original investment, but on all the gains you've already accumulated.

Consider $1,000 invested at 7% (roughly the historical average return of the S&P 500 after inflation). In year one, you earn $70. In year two, you earn 7% on $1,070 — that's $74.90. In year three, 7% on $1,144.90 — $80.14. Each year the gains get slightly bigger. The growth starts small, then gradually accelerates into something extraordinary.

Over 40 years, that $1,000 becomes $14,974. You invested $1,000 and created nearly $14,000 in new wealth. Over 50 years? $29,457. The longer the time horizon, the more dramatic the compounding effect becomes.`,
        svg: SVG_COMPOUND,
        svgCaption: '$1,000 invested at different returns over 40 years. Note how the curves accelerate in the later years — this is compounding at work.',
      },
      {
        heading: 'Time Is Your Most Valuable Asset',
        body: `The most important variable in investing is not which stock you pick or when you buy — it's how long your money stays invested. Time is the engine that powers compound growth.

Consider two investors: Alice invests $5,000 per year from age 22 to 32 — just 10 years — then stops forever. Bob doesn't start until age 32, but invests $5,000 per year for the next 30 years. Alice invests $50,000 total. Bob invests $150,000 total — three times as much money.

At retirement (age 67) at 7% returns: Alice has approximately $602,070. Bob has approximately $540,741. Alice wins — despite investing a third as much money — because her investments had 10 extra years to compound.

This is the single most important reason to start investing as early as possible, even in small amounts. Time in the market beats timing the market.`,
        keyPoints: [
          'Starting 10 years earlier can outweigh investing 3× as much total',
          'Missing the 10 best market days each decade dramatically reduces returns',
          'The last decade of a 40-year investment often generates more wealth than the first 30 years combined',
          'Even $50/month starting at 22 becomes ~$175,000 by age 62 at 7% returns',
        ],
      },
      {
        heading: 'What Returns Can You Realistically Expect?',
        body: `Historical US stock market data gives us a solid anchor for expectations. The S&P 500 has returned approximately 10% annually (nominal) or about 7% after inflation since 1926. But these averages hide enormous year-to-year swings — the market fell 50% in 2008-09, gained 100%+ from 2009-2010, fell 34% in 30 days in early 2020, then roared back to new highs within months.

Different asset classes offer different risk-reward profiles. US Treasury bills (essentially "risk-free") return about 3-4% currently. Investment-grade bonds return 4-5%. The S&P 500 historically returns ~10% but with significant volatility. Small-cap stocks have returned slightly more over very long periods with even higher volatility. International stocks offer similar long-term returns with different risk characteristics.

The key insight: higher expected returns always come with higher risk (variability of outcomes). There is no investment that offers high returns with low risk — if one appears to, it's likely hiding the risk or is fraudulent.`,
        keyPoints: [
          'S&P 500: ~10% nominal, ~7% real (after inflation) historically since 1926',
          'Bonds: ~4-5% with significantly lower volatility than stocks',
          'Risk and return are permanently linked — you cannot get one without the other',
          'Diversification is the only "free lunch" in finance — same return, less risk',
        ],
      },
      {
        heading: 'Overcoming the Fear of Starting',
        body: `The most common reason people don't invest is fear — of losing money, of making the wrong choice, of a complex system they don't fully understand. These fears are understandable but costly.

Market crashes are inevitable. The S&P 500 drops 10% or more about every 16 months on average. It falls 20%+ (a "bear market") roughly every 3-5 years. The 2008 financial crisis wiped out 57% of the market's value over 17 months. But the market fully recovered by 2013 and went on to new highs. Every single market crash in history has eventually recovered and exceeded its previous peak.

The fear you should really have is not of market volatility — it's of not investing. The average American who keeps their savings in a low-yield account loses tens of thousands of dollars in potential wealth over their working years. Volatility is the price you pay for superior long-term returns. The price is worth it.`,
        callout: {
          type: 'insight',
          text: '"The stock market is a device for transferring money from the impatient to the patient." — Warren Buffett',
        },
      },
    ],
  },

  'inv-u2': {
    title: 'The Stock Market',
    subtitle: 'How shares work, what moves prices, and how exchanges connect buyers and sellers',
    readTime: '16 min read',
    image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=800&q=80',
    imageCaption: 'Stock tickers represent real companies with real employees, products, and earnings.',
    sections: [
      {
        heading: 'What You Actually Own When You Buy a Stock',
        body: `A stock — also called a "share" or "equity" — represents a fractional ownership stake in a real business. When Apple has 15.5 billion shares outstanding and you own 100 of them, you own 0.000000645% of Apple. That's a tiny fraction, but it's a genuine ownership stake with real legal rights.

As an owner, you benefit when the business grows. If Apple's profits double over 10 years and investors continue to value it similarly relative to earnings, your shares roughly double in value. If Apple pays dividends — cash distributions from profits — you receive your proportional share. In shareholder votes on major corporate decisions, your 100 shares get 100 votes.

You also bear downside risk. If Apple's business deteriorates, competition crushes its margins, or a scandal destroys consumer trust, your shares fall in value. In the extreme case of bankruptcy, common stockholders are last in line to recover anything — after creditors and bondholders. This is why stocks are riskier than bonds in the same company.`,
        svg: SVG_STOCKS_FLOW,
        svgCaption: 'How a company raises money and how shares flow to investors. After the IPO, investors trade shares among themselves — the company receives no additional money from secondary market trading.',
      },
      {
        heading: 'How Stock Prices Are Set',
        body: `Stock prices are not set by accountants or calculated from formulas — they emerge from the collective opinions of millions of investors expressing their views through buy and sell orders. The price you see is simply the most recent price at which a willing buyer and willing seller agreed to transact.

What drives those opinions? Current earnings and growth prospects are the foundation. A company earning $5 per share growing at 20% per year will be valued far higher than one earning $5 per share with flat growth. Interest rates matter enormously — when rates rise, future earnings are "discounted" at a higher rate, making stocks relatively less attractive compared to bonds. Investor sentiment, macroeconomic expectations, sector trends, competitive threats, management quality, and regulatory environment all factor in.

In the short run, stock prices are enormously influenced by emotion, momentum, and narrative. In the long run, prices inevitably converge toward the underlying value of the business's earnings power. This creates the opportunity for patient investors — prices sometimes diverge significantly from fundamental value, creating buying opportunities.`,
        keyPoints: [
          'Price = what buyers and sellers agree it\'s worth at a specific moment',
          'Short-term prices are driven by emotion; long-term prices by business fundamentals',
          'P/E ratio = price per dollar of earnings; average S&P 500 P/E ≈ 16-20×',
          'A stock trading at $100 is not "expensive" — value depends on what you get for the price',
        ],
      },
      {
        heading: 'How Exchanges Work',
        body: `The New York Stock Exchange (NYSE) and Nasdaq are the two primary US stock exchanges. They function as organized marketplaces that match buyers and sellers, provide price transparency, enforce listing requirements, and ensure orderly trading.

When you place a "buy" order through your brokerage, your order routes to an exchange (or an alternative trading system), where it's matched with a sell order. Market makers — financial firms that commit to buying or selling at quoted prices — provide liquidity by standing ready to trade when natural buyers or sellers aren't immediately available. They profit from the "bid-ask spread," the small gap between the price they'll buy at and the price they'll sell at.

For liquid large-cap stocks, this entire process happens in microseconds through electronic systems. Your market order to buy 10 shares of Microsoft is typically executed in under a second. For thinly traded stocks, execution may be slower and the spread wider.`,
        callout: {
          type: 'fact',
          text: 'The NYSE processes approximately $20-30 billion worth of trades on a typical day. The entire US stock market has a total value exceeding $40 trillion.',
        },
      },
      {
        heading: 'Bull Markets, Bear Markets, and Market Cycles',
        body: `Markets move in cycles driven by the economic cycle, investor psychology, and the interplay between the two. Understanding these cycles helps you avoid the costly mistake of panicking at the worst possible time.

A "bull market" is a period of rising prices, typically defined as a 20%+ gain from a recent low. Bull markets average about 2.7 years and gain roughly 112% on average. The longest bull market in history ran from March 2009 to February 2020 — nearly 11 years, gaining approximately 400%.

A "bear market" is a 20%+ decline from a recent high. Bear markets average about 9.5 months and lose roughly 36% on average. They feel devastating when you're in them — but in historical context, they represent temporary setbacks in a long upward trend.

The critical insight: investors who try to "time the market" — moving to cash before drops and buying back in before rises — almost universally underperform those who simply stay invested. Research shows that missing just the 10 best trading days over a 20-year period reduces returns by roughly half.`,
        keyPoints: [
          'Every bear market in history has been followed by a bull market that recovered the losses',
          '"Time in the market beats timing the market" — backed by decades of data',
          'Missing the 10 best market days in a 20-year period roughly halves your total return',
          'Market corrections (10%+ drops) occur about every 16 months on average — they are normal',
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  //  TAXES
  // ═══════════════════════════════════════════════════════════

  'tax-u1': {
    title: 'How the US Tax System Works',
    subtitle: 'Progressive taxation, brackets, and the difference between what people think they pay and what they actually pay',
    readTime: '15 min read',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80',
    imageCaption: 'Tax filing season affects over 150 million American households annually.',
    sections: [
      {
        heading: 'A Brief History of the Income Tax',
        body: `The United States federal income tax is actually quite young in historical terms. Before 1913, the federal government was funded primarily by tariffs (import taxes) and excise taxes. The 16th Amendment to the Constitution, ratified in 1913, gave Congress the power to levy an income tax.

The early income tax was modest — just 1% on income over $3,000 (roughly $88,000 today) with a 6% surtax on the highest incomes. It affected only about 2% of the population. World War I and World War II dramatically expanded the tax's scope and rates, with the top rate reaching 94% in 1944. The modern system of broad-based taxation emerged from the postwar era.

Today, individual income taxes and payroll taxes (Social Security and Medicare) together fund about 86% of federal revenue, supporting everything from national defense to Social Security benefits, Medicare, Medicaid, and the national debt interest.`,
      },
      {
        heading: 'The Progressive Tax System Explained',
        body: `The US uses a "progressive" tax system — higher incomes are taxed at higher rates. But here's the crucial misunderstanding that costs people money and causes unnecessary anxiety: higher rates apply ONLY to income within each bracket, not to your total income.

Think of it as filling buckets. The first bucket (the 10% bracket) fills up first. Once it's full, income spills into the second bucket (12%), then the third (22%), and so on. Your "tax bracket" refers to the highest bucket you've filled — but only the income in that bucket is taxed at that higher rate.

This means a raise can never leave you worse off. If a bonus pushes $1,000 of your income from the 22% bracket into the 24% bracket, you pay an extra $20 in taxes on that $1,000 (the 2% difference). You keep $980 of the extra $1,000. You always benefit from additional income.`,
        svg: SVG_TAX_BRACKETS,
        svgCaption: 'How an $80,000 income is taxed under the 2025 federal tax code for a single filer. Notice that the effective rate (11.5%) is far lower than the marginal rate (22%).',
      },
      {
        heading: 'Marginal Rate vs. Effective Rate',
        body: `These two terms are constantly confused, but understanding the difference is worth real money.

Your marginal tax rate is the rate applied to your next dollar of income — your highest bracket. For someone earning $80,000 as a single filer in 2025, the marginal rate is 22%. This is the rate used to evaluate the tax impact of additional income: a $1,000 bonus, freelance gig, or Roth conversion.

Your effective tax rate is what you actually pay as a percentage of your total income. Because lower income is taxed at lower rates, the effective rate is always lower than the marginal rate. That same $80,000 earner pays about $9,215 in federal income tax — an effective rate of about 11.5%, not 22%.

Why does this matter? When you hear "I'm in the 22% bracket" and assume that person pays 22% of their income in taxes, you're significantly overestimating. Actual federal income tax burdens are much lower than the bracket system implies.`,
        keyPoints: [
          'Marginal rate = the rate on your next dollar — use this to evaluate additional income decisions',
          'Effective rate = total taxes ÷ total income — what you actually pay as a percentage',
          'A $100,000 single filer pays about 15% effective federal income tax, not 22%',
          'The "marriage bonus" occurs because MFJ brackets are often wider, reducing effective rates for couples',
        ],
      },
      {
        heading: 'What the IRS Actually Does',
        body: `The Internal Revenue Service (IRS) is a bureau of the Department of the Treasury. It processes approximately 260 million tax returns and collects over $4 trillion annually, making it one of the world's largest revenue agencies.

The IRS's relationship with taxpayers is often misunderstood. Most interactions are routine and automated — processing returns, issuing refunds, sending notices about discrepancies. Actual audits affect less than 0.5% of individual returns. The audit rate for incomes under $200,000 is roughly 0.2%; it rises sharply for incomes over $1 million (about 2%) and for certain high-risk returns (Schedule C businesses claiming large losses, etc.).

The best protection against IRS problems is straightforward: file accurate returns, keep records supporting your deductions, and respond promptly to any notices. The vast majority of Americans who honestly report their income and reasonable deductions have nothing to fear from the IRS.`,
        callout: {
          type: 'fact',
          text: 'The IRS issues approximately $300 billion in tax refunds annually — an average of about $3,000 per return. A large refund means you over-withheld and gave the government an interest-free loan all year.',
        },
      },
    ],
  },

  'tax-u2': {
    title: 'Filing Your Taxes',
    subtitle: 'Filing status, deductions, credits, and making smart choices that lower your tax bill',
    readTime: '14 min read',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80',
    imageCaption: 'Tax software has made filing accessible to most Americans, though complex situations still benefit from professional guidance.',
    sections: [
      {
        heading: 'Filing Status: Your First Tax Decision',
        body: `Your filing status is the foundation of your tax return. It determines your tax bracket thresholds, standard deduction amount, and eligibility for dozens of credits and deductions. Choosing the wrong status (or not optimizing your status) can cost thousands.

The five filing statuses are: Single, Married Filing Jointly (MFJ), Married Filing Separately (MFS), Head of Household (HoH), and Qualifying Surviving Spouse. Each has very different tax treatment.

Married Filing Jointly is almost always the best choice for married couples. The brackets are wide (designed for two incomes), the standard deduction is highest ($30,000 in 2025), and most valuable credits are only available on a joint return. Filing separately as a married couple often costs significantly more in taxes and triggers restrictions on credits.

Head of Household is designed for single parents and others who maintain a home for dependents. It offers a $22,500 standard deduction (vs $15,000 for Single) and wider brackets — recognizing the higher cost of supporting a household.`,
      },
      {
        heading: 'The Standard Deduction: Simpler and Often Better',
        body: `Every taxpayer must choose between the standard deduction (a fixed, filing-status-based deduction) and itemized deductions (an actual accounting of specific expenses). You take whichever is larger.

The 2025 standard deductions are substantial: $15,000 for single filers, $30,000 for married filing jointly, and $22,500 for head of household. These amounts are indexed for inflation and increased dramatically in 2017 under the Tax Cuts and Jobs Act (TCJA).

As a result, approximately 90% of Americans now take the standard deduction — up from about 70% before TCJA. The old strategy of "collecting receipts for itemizing" is now irrelevant for most people. Unless you have significant mortgage interest, state taxes (up to the $10,000 SALT cap), and charitable donations that together exceed your standard deduction, just take the standard.

Those most likely to benefit from itemizing: homeowners with large mortgages in high-tax states who also give substantially to charity. For everyone else, the standard deduction wins on both simplicity and size.`,
        keyPoints: [
          '90% of Americans take the standard deduction — if you\'re not a homeowner, you likely should too',
          'SALT deduction is capped at $10,000 (state income + property taxes combined)',
          'Mortgage interest is deductible on the first $750,000 of mortgage debt',
          'Charitable contributions to qualified nonprofits are deductible when itemizing',
          'Medical expenses above 7.5% of AGI are deductible — relevant mainly in high-cost-care years',
        ],
      },
      {
        heading: 'Tax Credits: Even Better Than Deductions',
        body: `Tax credits directly reduce your tax bill dollar-for-dollar. A $1,000 tax credit saves you $1,000 in taxes — period, regardless of your bracket. This makes credits far more valuable than deductions, which save you only your marginal rate times the deduction amount.

Some credits are "refundable" — they can reduce your tax liability below zero, generating a refund even if you owe no tax. The Earned Income Tax Credit (EITC) is the country's largest anti-poverty program, providing refundable credits up to $7,830 for qualifying families. The Child Tax Credit provides up to $2,000 per qualifying child (up to $1,700 refundable).

Some credits are "non-refundable" — they can reduce your tax to zero but not below. The American Opportunity Tax Credit (up to $2,500 for first four years of college) is partially refundable (40%). The Lifetime Learning Credit (up to $2,000 for any education) is non-refundable.

Education credits, retirement savers' credits, energy efficiency credits, child care credits, and many others are available to qualifying taxpayers. Many people miss credits they're entitled to — a key reason to at minimum use quality tax software.`,
        callout: {
          type: 'insight',
          text: 'The Earned Income Tax Credit is one of the most underclaimed benefits in the tax code. Approximately 20% of eligible taxpayers fail to claim it each year, leaving billions of dollars unclaimed.',
        },
      },
      {
        heading: 'Above-the-Line Deductions: Hidden Gems',
        body: `"Above-the-line" deductions reduce your Adjusted Gross Income (AGI) — and they're available whether you take the standard deduction or itemize. They're the most universally valuable tax deductions in the code.

Traditional IRA contributions (up to $7,000, or $8,000 if 50+) reduce your AGI dollar-for-dollar if you're eligible. Self-employed health insurance premiums are deductible. Student loan interest (up to $2,500) is deductible if your income is below the phase-out threshold. HSA contributions ($4,300 individual, $8,550 family in 2025) reduce AGI and can be invested and grow tax-free.

Reducing your AGI matters for two reasons: it directly lowers your taxable income, and it can also unlock other benefits that phase out at higher AGI levels (Roth IRA eligibility, various credits, deductible IRA contributions). A $1 reduction in AGI through an above-the-line deduction can sometimes be worth more than $1 in tax savings.`,
        keyPoints: [
          'Traditional 401(k) contributions reduce taxable income — the most powerful AGI reducer for most workers',
          'HSA contributions are triple tax-advantaged: deductible, grows tax-free, withdrawn tax-free for medical expenses',
          'Self-employed individuals have many above-the-line deductions including health insurance and half of SE tax',
          'SEP-IRA contributions for self-employed can be up to 25% of net self-employment income',
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  //  CREDIT & LENDING
  // ═══════════════════════════════════════════════════════════

  'cred-u1': {
    title: 'Credit Score Fundamentals',
    subtitle: 'The three-digit number that shapes your financial life — and exactly how to optimize it',
    readTime: '15 min read',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
    imageCaption: 'Your credit score affects mortgage rates, car loans, apartment rentals, and sometimes even job applications.',
    sections: [
      {
        heading: 'What Credit Actually Is',
        body: `Credit is simply borrowed purchasing power — the ability to buy things now and pay for them later. The concept dates back thousands of years; Mesopotamian merchants were extending credit as early as 2000 BC. But the formalized, numeric credit scoring system is a distinctly modern invention.

Before numeric credit scores, lending decisions were made subjectively by loan officers who knew their customers personally. This created enormous inequality and bias — women were denied credit until the Equal Credit Opportunity Act of 1974, and racial discrimination in lending was rampant. The development of objective, algorithm-based credit scoring was partly a response to this discrimination.

Fair Isaac Corporation (FICO) introduced the first widely used credit scoring model in 1989. Today, over 90% of lending decisions in the US use some form of FICO score. The system is imperfect — it treats everyone identically regardless of circumstance — but it's far more transparent and consistent than the subjective judgments it replaced.`,
      },
      {
        heading: 'The Five Factors of Your FICO Score',
        body: `Your FICO score (300-850) is calculated from five weighted factors. Understanding each factor precisely lets you make targeted improvements rather than guessing.

Payment History (35% weight) is the single most important factor. It tracks whether you pay every account on time. One 30-day late payment can drop a strong score by 50-100 points — and it stays on your report for 7 years. Building a perfect payment history requires consistency over years, which is why automation (autopay for at least the minimum) is so valuable.

Amounts Owed (30%) focuses primarily on your credit utilization ratio — your total credit card balances divided by your total credit limits. A $3,000 balance on a $10,000 limit card = 30% utilization. Experts recommend staying below 30%, ideally below 10%. Utilization is calculated monthly and can be improved quickly by paying down balances or requesting credit limit increases.

Length of Credit History (15%) rewards older accounts. Your oldest account age, average account age, and the age of specific accounts all matter. This is why you should never close your oldest credit card — even if unused, it's valuable to your score.

Credit Mix (10%) rewards having both revolving credit (credit cards) and installment loans (mortgage, auto, student loans). Don't open accounts just for this — the benefit is modest. But if you only have credit cards and you're financing a car anyway, know that the loan will help your score.

New Credit (10%) reflects recent hard inquiries from credit applications. Each inquiry lowers your score slightly (~5 points) for about 12 months. Rate shopping (multiple mortgage or auto loan applications within 14-45 days) typically counts as one inquiry.`,
        svg: SVG_FICO,
        svgCaption: 'FICO score factors and their weights. Payment history and utilization together account for 65% of your score.',
      },
      {
        heading: 'Why Your Score Matters More Than You Think',
        body: `The interest rate difference between a 650 and a 750 credit score sounds abstract until you calculate the dollar impact. Consider a $300,000 30-year mortgage:

At 7.5% (rough rate for 650 score): monthly payment ~$2,098, total paid ~$755,280.
At 6.8% (rough rate for 750 score): monthly payment ~$1,958, total paid ~$705,000.

That $140/month difference adds up to $50,280 over the life of the loan. Your credit score cost (or saved) you $50,000 on a single purchase. Multiply this across car loans, personal loans, and credit card rates over a lifetime, and the cumulative impact of a strong credit score easily reaches six figures.

Beyond interest rates, credit scores affect: whether you're approved for rentals (most landlords check credit), security deposits on utilities, insurance premiums in some states, and even job applications in certain industries (financial services, government security clearances).`,
        svg: SVG_CREDIT_SCORE_RANGES,
        svgCaption: 'Credit score ranges and their real-world implications. The difference between Good and Very Good is worth tens of thousands of dollars over a lifetime of borrowing.',
      },
      {
        heading: 'Building Credit Strategically',
        body: `If you have no credit history (a "thin file"), the credit bureaus can't score you reliably. This creates a frustrating catch-22: you need credit to build credit. Several practical paths break this cycle.

Secured credit cards require a cash deposit (typically $200-500) that becomes your credit limit. Use the card for small regular purchases, pay the balance in full every month, and after 12-18 months of responsible use, the issuer typically upgrades you to an unsecured card and returns your deposit. Capital One and Discover both offer solid secured cards.

Becoming an authorized user on a parent or partner's credit card allows their account history to appear on your credit report — immediately boosting your thin file with years of established credit history. This only helps if the primary cardholder has good credit and responsible habits.

Credit-builder loans offered by many credit unions are designed specifically for building credit. You make monthly payments on a small loan; the funds are held in a savings account until the loan is paid off. You get a small savings balance and a clean installment loan history.`,
        keyPoints: [
          'Never miss a payment — set autopay for at least the minimum on every account',
          'Keep utilization below 30% across all cards; below 10% for the best scores',
          'Don\'t close old accounts — account age is 15% of your score',
          'Check all three credit reports free at AnnualCreditReport.com — errors affect 1 in 5 consumers',
          'Dispute errors in writing via certified mail — bureaus must investigate within 30 days',
        ],
      },
    ],
  },

  'cred-u2': {
    title: 'Credit Cards',
    subtitle: 'How they work, what they cost when misused, and how to use them to your financial advantage',
    readTime: '14 min read',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    imageCaption: 'Credit cards are tools — like all tools, they can build or destroy wealth depending on how you use them.',
    sections: [
      {
        heading: 'How Credit Cards Actually Work',
        body: `A credit card is a revolving line of credit — you borrow up to a set limit, repay some or all of it monthly, and the limit refreshes as you pay down the balance. The entire credit card ecosystem is built around a few key flows of money.

When you swipe your card at a merchant, several things happen simultaneously. Your bank (the "issuer") authorizes the transaction and guarantees payment to the merchant. The payment network (Visa, Mastercard, Amex, Discover) routes the transaction. The merchant's bank (the "acquirer") processes it. The merchant pays an "interchange fee" — typically 1.5-3.5% of the transaction — which is split between the issuer, the network, and the acquirer.

This interchange fee is the economic engine that powers credit card rewards. When a premium travel card offers you 3% cashback, that reward is largely funded by the 3%+ interchange fee the issuer collects from merchants. Merchants effectively subsidize credit card rewards — which is why cash is sometimes cheaper and why small businesses sometimes add credit card surcharges.

If you pay your full statement balance by the due date, you pay zero interest. The issuer makes money only from interchange fees and annual fees on your account. If you carry a balance, the issuer makes additional money from interest — which is where most credit card profits are generated.`,
      },
      {
        heading: 'The True Cost of High APR',
        body: `The average credit card interest rate in 2024-2025 is approximately 21-22% APR. This is extraordinarily expensive debt — higher than almost any other mainstream financial product. Understanding the math helps explain why credit card debt is so destructive.

22% APR divided by 12 months = 1.83% per month. On a $5,000 balance, that's $91.67 in interest every month — just to stand still. If you make only the minimum payment (typically 2% of the balance, or about $100), most of that payment goes to interest, and only a small amount reduces principal. The balance shrinks agonizingly slowly.

The minimum payment trap: at 22% APR, paying only the minimum on a $5,000 balance takes approximately 32 years to pay off and costs over $10,000 in interest — paying back $15,000 for $5,000 borrowed. If you can pay $200/month instead, the same balance is gone in 2.7 years and costs only $1,488 in interest.`,
        svg: SVG_APR_COST,
        svgCaption: 'The devastating math of minimum payments. Paying just $100 more per month saves over $8,700 and 29 years of payments.',
      },
      {
        heading: 'Building Wealth With Credit Cards (If Used Correctly)',
        body: `If you pay your full statement balance every month — eliminating all interest charges — credit cards become powerful financial tools. You get a free 30-day loan with full consumer protections, and you earn rewards on every dollar you spend.

A 2% cashback card on $2,000 per month of spending earns $480 per year. A 3% card on dining/groceries ($800/month) plus 1.5% on everything else ($1,200/month) earns $504/year. Premium travel cards with $550 annual fees often come with $300 in travel credits, $100 hotel credits, TSA PreCheck/Global Entry credits, and lounge access — totaling $1,000+ in annual value if you use the perks.

The key protections credit cards offer beyond rewards: dispute rights (you can challenge fraudulent or incorrect charges), purchase protection (theft/damage coverage on new purchases), extended warranty (adds 1 year to manufacturer warranties), trip delay insurance, rental car coverage, and zero liability for fraud. Debit cards and cash offer far fewer protections.

The iron rule: never carry a balance. 22% APR interest immediately wipes out any rewards earned and then some. Credit card rewards are only valuable if you never pay interest.`,
        keyPoints: [
          'Pay the FULL statement balance every month — never just the minimum',
          'A 2% cashback card earns $480/year on $2,000/month spending',
          'Premium cards with high annual fees often provide more value in perks than they cost',
          'Use autopay set to "full statement balance" — this eliminates interest while ensuring on-time payments',
          'Credit cards have stronger fraud protection than debit cards — zero liability for unauthorized charges',
        ],
      },
      {
        heading: 'Choosing the Right Card for Your Situation',
        body: `With thousands of credit cards available, matching the right card to your spending patterns dramatically increases your return. There's no universally "best" card — the best card depends on your spending, credit score, travel habits, and whether you'll use premium perks.

For beginners with limited credit history: secured cards (Capital One Secured, Discover it Secured) build credit while offering basic rewards. After 12-18 months of responsible use, upgrade to an unsecured card.

For those who want simplicity: flat-rate cards (2% on everything) like the Citi Double Cash or Fidelity Rewards Visa require no tracking of categories. You consistently earn 2% with zero effort.

For travel enthusiasts: premium cards like the Chase Sapphire Preferred/Reserve or Amex Platinum earn transferable points redeemable through airline and hotel partners, often at 2-5 cents per point in value — far exceeding the stated earn rate. The complexity is worth it if you travel frequently.

For cash-back maximizers: rotating category cards (Discover it, Chase Freedom Flex) offer 5% on categories that change quarterly — gas, groceries, restaurants, Amazon — plus 1% on everything else. Requires some attention to categories.`,
        callout: {
          type: 'warning',
          text: 'The golden rule of credit cards: if you cannot pay the full balance every month, do not use a rewards card. Interest charges at 22%+ APR will always exceed any rewards earned. In that case, focus on paying down balances first.',
        },
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  //  BANKING
  // ═══════════════════════════════════════════════════════════

  'bank-u1': {
    title: 'Banking Fundamentals',
    subtitle: 'How banks work, how they make money, and how the FDIC protects your deposits',
    readTime: '14 min read',
    image: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=800&q=80',
    imageCaption: 'Modern banking is both one of the oldest institutions and one of the most technology-driven.',
    sections: [
      {
        heading: 'A Brief History of Modern Banking',
        body: `Banking is one of civilization's oldest institutions. The word "bank" derives from the Italian "banco" — the bench or counter where medieval Italian merchants conducted money-changing and lending operations. By the 14th and 15th centuries, Florentine banking families like the Medici had established sophisticated networks of financial services across Europe.

The fractional reserve banking system — where banks lend out more than they hold in deposits — emerged as bankers discovered that depositors rarely all withdrew their money at the same time. This created enormous economic power, allowing banks to multiply money throughout the economy, but also introduced fragility: if everyone tried to withdraw at once (a "bank run"), the bank would collapse.

The Great Depression witnessed the most catastrophic bank failures in US history — over 9,000 banks failed between 1929 and 1933, wiping out depositors' savings. The Federal Deposit Insurance Corporation (FDIC), created in 1933, fundamentally transformed this equation by guaranteeing deposits, eliminating the rational incentive for depositors to panic-withdraw.`,
      },
      {
        heading: 'How Banks Create Money',
        body: `Banks don't just store money — they create it. This is one of the most counterintuitive and important facts about modern finance. When you deposit $1,000, the bank doesn't simply lock it in a vault. It keeps a small fraction as reserves (historically 10%, though reserve requirements were eliminated in 2020) and lends the rest to borrowers.

The person who borrows $900 from your bank spends it, and the merchant they paid deposits it at another bank. That bank then lends out $810 (keeping 10%). This chain continues — your $1,000 deposit supports approximately $10,000 in total lending across the banking system. Money is created through this lending process.

This is why banking crises are so dangerous: when banks suffer losses and stop lending, money supply contracts, credit dries up, and the broader economy suffers. The Fed's ability to create reserves and inject liquidity is the critical backstop that prevents financial crises from cascading into economic collapses.`,
        svg: SVG_FRACTIONAL_BANKING,
        svgCaption: 'How a single deposit of $1,000 supports $10,000 in economic activity through the lending chain. FDIC insurance prevents the bank runs that could collapse this system.',
      },
      {
        heading: 'Types of Accounts and Their Purposes',
        body: `Understanding which account type serves which purpose prevents costly mistakes — like keeping your emergency fund in a 0.01% checking account when it could be earning 4.5% in a high-yield savings account.

Checking accounts are for transactions — daily spending, bill payment, direct deposit. They offer unlimited transactions and immediate access but pay minimal interest. Think of your checking account as the "hub" of your financial life: money flows in (paycheck) and out (bills, transfers to savings, investments).

Savings accounts are for storing money you don't need immediately. The key insight: not all savings accounts are equal. Traditional big-bank savings accounts pay 0.01-0.5% APY. High-yield savings accounts (HYSAs) at online banks pay 4-5% APY — equally FDIC-insured, equally liquid, but earning 10-50 times more interest. There is no rational reason to keep savings at a big bank paying 0.01%.

Money Market Accounts (MMAs) are hybrids offering higher interest rates than savings accounts with limited check-writing capability. Certificates of Deposit (CDs) offer fixed rates for fixed terms — higher than savings accounts in exchange for locking up your money for the duration.`,
        keyPoints: [
          'Checking: daily transactions; target zero to minimal balance beyond one month\'s expenses',
          'High-yield savings: emergency fund (3-6 months expenses); target 4-5% APY at online banks',
          'CDs: money you won\'t need for a specific period; shop for the best rate for your timeline',
          'Money market: higher yield than savings with some liquidity; useful for larger short-term reserves',
        ],
      },
      {
        heading: 'FDIC Insurance: What It Covers and What It Doesn\'t',
        body: `The Federal Deposit Insurance Corporation (FDIC) was created after the Great Depression to prevent bank runs by guaranteeing depositors wouldn't lose their money if a bank failed. In over 90 years of FDIC history, no insured depositor has ever lost a penny of insured funds — this is an extraordinary track record.

FDIC insurance covers $250,000 per depositor, per FDIC-insured bank, per ownership category. "Ownership categories" are key to understanding how to maximize coverage. A single-account holder at one bank has $250,000 in coverage. Add a joint account with a spouse, and that joint account gets its own $250,000 coverage. Add IRA accounts (separate category), revocable trusts (separate category per beneficiary), and you can have $1 million or more covered at a single bank.

What FDIC does NOT cover: stocks, bonds, mutual funds, ETFs, annuities, or life insurance policies — even if purchased at a bank. Those are investment products sold by the bank or its affiliates, not deposits. The bank will clearly distinguish insured from non-insured products by law.

If a bank fails, the FDIC typically resolves the situation over a weekend. Depositors almost always find their accounts transferred to an acquiring bank on Monday morning without interruption. The 2023 Silicon Valley Bank failure — the largest since 2008 — was resolved over a single weekend, with depositors having full access by Monday.`,
        callout: {
          type: 'warning',
          text: 'Brokerage accounts are protected by SIPC (Securities Investor Protection Corporation), not FDIC. SIPC provides up to $500,000 in protection against broker failure (not investment losses). These are completely separate protections.',
        },
      },
    ],
  },

  'bank-u2': {
    title: 'Maximizing Your Savings',
    subtitle: 'High-yield savings, CDs, I-Bonds, and how the Federal Reserve affects your interest rates',
    readTime: '15 min read',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80',
    imageCaption: 'The right savings strategy ensures your emergency fund earns real returns without sacrificing safety.',
    sections: [
      {
        heading: 'The Hidden Cost of Traditional Savings Accounts',
        body: `The average APY on a traditional savings account at a major US bank is 0.01-0.46%. With inflation running at 2-3%, keeping your money in a traditional savings account means losing 1.5-3% of purchasing power per year. It's a guaranteed loss in real terms.

This is not accidental — it's a business model. Large banks have enormous branch networks, millions of checking account customers, and established brand trust. They don't need to offer competitive savings rates to attract deposits. The $50 billion sitting in JPMorgan's savings accounts at 0.01% is free money for the bank.

Online banks have no physical branches, dramatically lower overhead, and compete primarily on interest rates. They pass much of their cost savings to depositors in the form of higher yields. In 2024-25, online banks like Marcus by Goldman Sachs, SoFi, Ally, and American Express offered 4.5-5.25% APY — 50-500 times the rates of traditional banks — with identical FDIC insurance.`,
        svg: SVG_SAVINGS_COMPARE,
        svgCaption: 'The real dollar cost of keeping your emergency fund in a traditional savings account vs. a high-yield savings account. The switch costs nothing and takes 20 minutes.',
      },
      {
        heading: 'How to Build a CD Ladder',
        body: `A CD ladder is a strategy that balances yield and liquidity by splitting your savings across multiple CDs with different maturity dates. Instead of choosing between a low-yield savings account and locking all your money in a single 5-year CD, a ladder gives you both.

Here's a simple $20,000 example with a 4-rung ladder:
- $5,000 in a 3-month CD (highest liquidity)
- $5,000 in a 6-month CD
- $5,000 in a 12-month CD
- $5,000 in a 24-month CD (highest yield)

Every 3 months, one CD matures. You reinvest it in a new 24-month CD at the best available rate. Within 6 months, your entire ladder is in 24-month CDs maturing every 3 months — giving you near-quarterly liquidity while earning long-term rates.

This works especially well in high-rate environments where you want to "lock in" current rates before they fall. It also protects you in rising-rate environments — you always have a CD maturing soon that can be reinvested at higher rates.`,
        keyPoints: [
          'CD ladders provide better yields than savings accounts with manageable liquidity constraints',
          'Early withdrawal penalties (typically 3-6 months of interest) make breaking CDs costly — plan carefully',
          'No-penalty CDs trade lower rates for the ability to withdraw penalty-free',
          '"Bump-up" CDs allow one rate increase if rates rise during your term',
          'Shop CD rates at multiple banks — rates vary significantly even for the same term',
        ],
      },
      {
        heading: 'I-Bonds: Inflation-Protected Savings',
        body: `Series I Savings Bonds ("I-Bonds") are unique Treasury securities that pay interest tied to inflation. The interest rate adjusts every 6 months based on the Consumer Price Index — if inflation rises, your I-Bond rate rises with it. This makes them one of the few truly inflation-proof savings instruments.

I-Bond rates consist of two components: a fixed rate (set when you buy, stays for 30 years) plus a variable inflation adjustment rate (resets every May and November). In 2022, with inflation running at 8%+, I-Bond rates reached 9.62% — generating enormous public interest and purchase volume.

There are important limitations: you can only buy $10,000 per person per year (plus $5,000 more with your tax refund). You must hold them at least one year. Redeeming before 5 years costs 3 months of interest as a penalty. They can only be purchased directly from TreasuryDirect.gov.

I-Bonds are ideal for the portion of your savings you won't need for 1-5 years and want protected from inflation. They're not good for liquidity needs within the first year or for amounts exceeding $10,000.`,
      },
      {
        heading: 'The Federal Reserve and Your Savings Rate',
        body: `Understanding why savings rates change helps you make better timing decisions about CDs and other fixed-rate products.

The Federal Reserve sets the "federal funds rate" — the benchmark interest rate for the entire economy. When the Fed raises this rate (as it did 11 times from 2022-2023 to fight inflation), the cost of borrowing rises across the economy. Banks can earn more on short-term instruments, and online banks quickly pass these higher rates to depositors.

When the Fed cuts rates (as it began doing in late 2024), savings rates follow down. If you believe rates will continue falling, locking in a multi-year CD at current rates can preserve high yields. If you believe rates will rise further, staying in flexible savings accounts lets you benefit from future rate increases.

No one consistently predicts rate movements accurately — economists, traders, and the Fed itself all frequently miss rate trajectories. The CD ladder strategy (above) hedges this uncertainty by giving you frequent opportunities to adjust as rates change.`,
        callout: {
          type: 'insight',
          text: 'In September 2022, the average online savings rate was 0.5%. By January 2024, it was 5%+. This 10× increase happened in 16 months. Keeping your emergency fund in a 0.5% account during that period cost significant money. Rate changes happen quickly — review your savings account rate quarterly.',
        },
      },
    ],
  },

  'ins-u1': {
    id: 'ins-u1', title: 'Life Insurance Fundamentals',
    subtitle: 'Protect what you have built — for the people who depend on you',
    readTime: '9 min', hero: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
    sections: [
      {
        heading: 'What Life Insurance Actually Does',
        body: `Life insurance is not about money — it is about replacing something irreplaceable: the financial contribution you make to people who depend on you. When you die, your income stops. Your mortgage does not. Your children's tuition does not. Your spouse's retirement savings do not. Life insurance bridges the gap between what your family has and what they need to continue without you.

The death benefit — the lump sum paid to your beneficiaries — is not taxable income to them. A $1 million policy pays $1 million, free and clear. No estate tax (in most cases), no income tax, no delays from probate if you named beneficiaries properly. This makes life insurance one of the cleanest wealth transfers available.`,
        callout: { type: 'key', text: 'Life insurance protects income, not wealth. If no one depends on your income, you may not need it.' }
      },
      {
        heading: 'Term vs. Permanent: The Decision That Matters Most',
        body: `Term insurance is pure protection: you pay a fixed premium for 10, 20, or 30 years. If you die during that period, your beneficiaries receive the death benefit. If you outlive the term, the policy expires with nothing paid out. This simplicity makes term dramatically affordable — a healthy 35-year-old can purchase $1 million in 20-year coverage for $40–$60/month.

Permanent insurance (whole life, universal life, variable life) never expires and builds a cash value component. These policies cost 5–15× more than term for identical death benefits. The cash value grows slowly, is subject to internal fees rarely disclosed upfront, and the death benefit is paid instead of the cash value — not in addition to it. Financial planners overwhelmingly recommend term insurance for most families.`,
        callout: { type: 'warning', text: 'If an insurance agent emphasizes the "investment" aspect of a policy, ask them to run an illustration showing net return on the cash value. It is almost always lower than what index funds deliver.' }
      },
      {
        heading: 'How Much Coverage Do You Need?',
        body: `The DIME method provides a systematic answer: Debt (total non-mortgage debt), Income (10–12× annual salary), Mortgage (full payoff balance), Education (projected college costs for each child). Add these four categories for your coverage target.

A family with $80,000 income, $300,000 mortgage, $30,000 in debt, and two children expecting $60,000 each in education costs needs: $800,000 (income) + $300,000 (mortgage) + $30,000 (debt) + $120,000 (education) = $1,250,000. Subtract existing assets that would cover some needs, and buy enough term insurance to fill the gap. Revisit the calculation every few years as your situation changes.`,
        callout: { type: 'key', text: 'Employer life insurance (typically 1–2× salary) is not enough. It disappears when you change jobs and covers a fraction of what your family actually needs.' }
      },
      {
        heading: 'Buying Smart: The Application Process',
        body: `Life insurance is underwritten — meaning the insurer evaluates your health to price your policy. The process typically involves a medical questionnaire, a paramedical exam (blood pressure, blood draw, urine sample), and a review of your medical records and prescription history. Results determine your rate class: Preferred Plus, Preferred, Standard Plus, Standard, or substandard (table-rated).

Buy as early as possible. A 30-year-old in excellent health qualifies for the best rates. The same person at 45 with even minor health issues pays significantly more. Once issued, premiums are locked — they cannot increase even if your health deteriorates. And if you become uninsurable later (cancer, heart disease), the policy you bought earlier protects your family no matter what.`,
        callout: { type: 'key', text: 'Shop multiple insurers. Rate classes vary — one company may offer Preferred while another offers Standard for the same applicant. A single rate class difference can mean 20–40% in premium savings.' }
      }
    ],
    keyPoints: ['Term insurance is the right choice for most families — 10–15× cheaper than whole life for identical coverage', 'Calculate your need with DIME: Debt + Income (×10) + Mortgage + Education', 'Buy early to lock in the lowest rates while you are young and healthy', 'Name beneficiaries explicitly — policies with named beneficiaries bypass probate', 'Employer coverage disappears when you change jobs and is rarely sufficient']
  },

  'ins-u2': {
    id: 'ins-u2', title: 'Health Insurance Essentials',
    subtitle: 'Navigate premiums, deductibles, and networks to protect your health and finances',
    readTime: '10 min', hero: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80',
    sections: [
      {
        heading: 'The Architecture of a Health Insurance Plan',
        body: `Every health insurance plan has four cost components you pay, plus a fifth number that limits your total exposure. Premium: monthly cost to maintain coverage. Deductible: what you pay before most coverage kicks in. Copay: flat fee per visit ($30 for primary care, $60 for specialist). Coinsurance: your percentage share after the deductible (typically 20–30%). Out-of-pocket maximum: the annual ceiling on what you pay — after this, insurance covers 100%.

Understanding the interaction between these five numbers is more important than any single one. A plan with a $0 deductible but no out-of-pocket maximum could cost you far more than a high-deductible plan with a $7,000 cap if you have a serious illness. Always evaluate total worst-case exposure, not just the monthly premium.`,
        callout: { type: 'key', text: 'The out-of-pocket maximum is your most important protection. Know yours. The 2024 ACA limit is $9,450 for an individual — no ACA plan can expose you to more than this.' }
      },
      {
        heading: 'Plan Types and Their Tradeoffs',
        body: `HMO (Health Maintenance Organization): Lower premiums and out-of-pocket costs. Requires a primary care physician (PCP) as gatekeeper for specialist referrals. No out-of-network coverage except emergencies. Best for: healthy people, low-utilization situations, areas with strong HMO networks.

PPO (Preferred Provider Organization): Higher premiums, maximum flexibility. No referrals needed. Out-of-network coverage available (at higher cost). Best for: people with existing specialist relationships, chronic conditions, or frequent travel. EPO (Exclusive Provider Organization): Like an HMO in network restrictions, like a PPO in lacking a referral requirement. High-Deductible Health Plan (HDHP): Lowest premiums, highest deductibles, qualifies for an HSA. Best for: healthy people who can fund an HSA and absorb a high deductible.`,
        callout: { type: 'warning', text: 'Verify your doctors and hospital are in-network BEFORE enrolling. One out-of-network hospital stay can cost tens of thousands more than an in-network one, even with the same insurance.' }
      },
      {
        heading: 'The HSA: The Most Powerful Account Most People Ignore',
        body: `A Health Savings Account (HSA) paired with an HDHP offers triple tax advantages unmatched by any other account: contributions are pre-tax (reducing taxable income), growth is tax-free, and withdrawals for qualified medical expenses are tax-free. No other account in the US tax code delivers all three benefits.

The 2024 contribution limits are $4,150 (individual) and $8,300 (family). Unlike FSAs, HSA funds roll over indefinitely — there is no "use it or lose it" rule. Invest your HSA in index funds and let it compound. Pay current medical expenses out of pocket if possible, save the receipts, and reimburse yourself from the HSA years later — there is no time limit on reimbursement. A maxed HSA over a career can accumulate $200,000+ in tax-free medical funds for retirement, when healthcare costs peak.`,
        callout: { type: 'key', text: 'After age 65, you can withdraw from your HSA for any purpose (not just medical) and pay only ordinary income tax — just like a Traditional IRA. This makes the HSA function as a bonus retirement account with better tax treatment.' }
      },
      {
        heading: 'Open Enrollment: Getting It Right',
        body: `Open enrollment is your annual window — typically 2–4 weeks in October or November for employer plans, November 1 through January 15 for ACA marketplace plans. Rushing through this decision can cost thousands. The checklist: (1) List your expected medical usage for next year — regular prescriptions, planned procedures, anticipated doctor visits. (2) Verify your providers are in-network on the plans you are considering. (3) Check the formulary for all your regular medications and their cost tier. (4) Calculate total annual cost for each plan: premiums × 12 + estimated out-of-pocket costs. (5) If choosing an HDHP, plan to max your HSA contribution.

If you lose coverage mid-year (job change, divorce, aging off a parent's plan), you qualify for a Special Enrollment Period — 60 days to enroll in a new plan through the marketplace or an employer.`,
        callout: { type: 'key', text: 'Premium tax credits on the ACA marketplace are available up to 400% of the federal poverty line — roughly $58,000 individual income in 2024. Many people who think they do not qualify actually do.' }
      }
    ],
    keyPoints: ['Know all five cost components: premium, deductible, copay, coinsurance, and OOP maximum', 'The out-of-pocket maximum is your most critical protection against catastrophic costs', 'HMOs offer lower costs with restricted networks; PPOs offer flexibility at higher cost', 'HSAs offer triple tax advantages — contribute the maximum if enrolled in an HDHP', 'Always verify your doctors and medications are covered before choosing a plan']
  },

  'ins-u1': {
    id: 'ins-u1', title: 'Life Insurance Fundamentals',
    subtitle: 'Protect what you have built — for the people who depend on you',
    readTime: '9 min', hero: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
    sections: [
      {
        heading: 'What Life Insurance Actually Does',
        body: `Life insurance is not about money — it is about replacing something irreplaceable: the financial contribution you make to people who depend on you. When you die, your income stops. Your mortgage does not. Your children's tuition does not. Life insurance bridges the gap between what your family has and what they need to continue without you.

The death benefit paid to your beneficiaries is not taxable income to them. A $1 million policy pays $1 million, free and clear. No income tax, no delays from probate if you named beneficiaries properly. This makes life insurance one of the cleanest wealth transfers available.`,
        callout: { type: 'key', text: 'Life insurance protects income, not wealth. If no one depends on your income, you may not need it.' }
      },
      {
        heading: 'Term vs. Permanent: The Decision That Matters Most',
        body: `Term insurance is pure protection: you pay a fixed premium for 10, 20, or 30 years. If you die during that period, your beneficiaries receive the death benefit. If you outlive the term, the policy expires with nothing paid out. This simplicity makes term dramatically affordable — a healthy 35-year-old can purchase $1 million in 20-year coverage for $40-$60 per month.

Permanent insurance never expires and builds a cash value component. These policies cost 5-15x more than term for identical death benefits. The cash value grows slowly and the death benefit is paid instead of the cash value — not in addition to it. Financial planners overwhelmingly recommend term insurance for most families.`,
        callout: { type: 'warning', text: 'If an insurance agent emphasizes the investment aspect of a policy, ask them to run an illustration showing net return on the cash value. It is almost always lower than what index funds deliver.' }
      },
      {
        heading: 'How Much Coverage Do You Need?',
        body: `The DIME method provides a systematic answer: Debt (total non-mortgage debt), Income (10-12x annual salary), Mortgage (full payoff balance), Education (projected college costs for each child). Add these four categories for your coverage target.

A family with $80,000 income, $300,000 mortgage, $30,000 in other debt, and two children expecting $60,000 each in education costs needs: $800,000 (income) plus $300,000 (mortgage) plus $30,000 (debt) plus $120,000 (education) = $1,250,000. Subtract existing assets and buy enough term to fill the gap.`,
        callout: { type: 'key', text: 'Employer life insurance typically 1-2x salary is not enough. It disappears when you change jobs and covers a fraction of what your family actually needs.' }
      },
      {
        heading: 'Buying Smart: The Application Process',
        body: `Life insurance is underwritten — the insurer evaluates your health to price your policy. The process involves a medical questionnaire, a paramedical exam (blood pressure, blood draw, urine sample), and a review of your medical records. Results determine your rate class: Preferred Plus, Preferred, Standard Plus, Standard, or table-rated.

Buy as early as possible. A 30-year-old in excellent health qualifies for the best rates. The same person at 45 with even minor health issues pays significantly more. Once issued, premiums are locked — they cannot increase even if your health deteriorates.`,
        callout: { type: 'key', text: 'Shop multiple insurers. Rate classes vary — one company may offer Preferred while another offers Standard for the same applicant. A single rate class difference can mean 20-40% in premium savings.' }
      }
    ],
    keyPoints: ['Term insurance is the right choice for most families — 10-15x cheaper than whole life for identical coverage', 'Calculate your need with DIME: Debt plus Income times 10 plus Mortgage plus Education', 'Buy early to lock in the lowest rates while you are young and healthy', 'Name beneficiaries explicitly — policies with named beneficiaries bypass probate', 'Employer coverage disappears when you change jobs and is rarely sufficient']
  },

  'ins-u2': {
    id: 'ins-u2', title: 'Health Insurance Essentials',
    subtitle: 'Navigate premiums, deductibles, and networks to protect your health and finances',
    readTime: '10 min', hero: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80',
    sections: [
      {
        heading: 'The Architecture of a Health Insurance Plan',
        body: `Every health insurance plan has five cost components. Premium is the monthly cost to maintain coverage. Deductible is what you pay before most coverage kicks in. Copay is a flat fee per visit. Coinsurance is your percentage share after the deductible, typically 20-30%. Out-of-pocket maximum is the annual ceiling on what you pay — after this, insurance covers 100%.

Understanding the interaction between these five numbers is more important than any single one. A plan with a $0 deductible but no out-of-pocket maximum could cost you far more than a high-deductible plan with a $7,000 cap if you have a serious illness. Always evaluate total worst-case exposure, not just the monthly premium.`,
        callout: { type: 'key', text: 'The out-of-pocket maximum is your most important protection. Know yours. The 2024 ACA limit is $9,450 for an individual — no ACA plan can expose you to more than this.' }
      },
      {
        heading: 'Plan Types and Their Tradeoffs',
        body: `HMO plans have lower premiums and out-of-pocket costs but require a primary care physician as gatekeeper for specialist referrals, with no out-of-network coverage except emergencies. Best for healthy people in areas with strong HMO networks.

PPO plans have higher premiums but maximum flexibility — no referrals needed and out-of-network coverage available at higher cost. Best for people with existing specialist relationships or chronic conditions. High-Deductible Health Plans have the lowest premiums and highest deductibles but qualify for Health Savings Accounts with triple tax advantages.`,
        callout: { type: 'warning', text: 'Verify your doctors and hospital are in-network BEFORE enrolling. One out-of-network hospital stay can cost tens of thousands more than an in-network one, even with the same insurance.' }
      },
      {
        heading: 'The HSA: The Most Powerful Account Most People Ignore',
        body: `A Health Savings Account paired with an HDHP offers triple tax advantages unmatched by any other account: contributions are pre-tax, growth is tax-free, and withdrawals for qualified medical expenses are tax-free. No other account in the US tax code delivers all three benefits.

The 2024 contribution limits are $4,150 for individuals and $8,300 for families. Unlike FSAs, HSA funds roll over indefinitely with no use-it-or-lose-it rule. Invest your HSA in index funds and let it compound. After age 65, you can withdraw for any purpose and pay only ordinary income tax — making the HSA function as a bonus retirement account.`,
        callout: { type: 'key', text: 'Pay current medical expenses out of pocket if possible, save the receipts, and reimburse yourself from the HSA years later. There is no time limit on reimbursement.' }
      },
      {
        heading: 'Open Enrollment: Getting It Right',
        body: `Open enrollment is typically 2-4 weeks in October or November for employer plans, and November 1 through January 15 for ACA marketplace plans. The checklist: list your expected medical usage for next year, verify your providers are in-network, check the formulary for all regular medications, calculate total annual cost for each plan (premiums times 12 plus estimated out-of-pocket), and if choosing an HDHP, plan to max your HSA.

If you lose coverage mid-year from a job change, divorce, or aging off a parent plan, you qualify for a Special Enrollment Period — 60 days to enroll in a new plan.`,
        callout: { type: 'key', text: 'Premium tax credits on the ACA marketplace are available up to 400% of the federal poverty line — roughly $58,000 individual income in 2024. Many people who think they do not qualify actually do.' }
      }
    ],
    keyPoints: ['Know all five cost components: premium, deductible, copay, coinsurance, and OOP maximum', 'The out-of-pocket maximum is your most critical protection against catastrophic costs', 'HMOs offer lower costs with restricted networks; PPOs offer flexibility at higher cost', 'HSAs offer triple tax advantages — contribute the maximum if enrolled in an HDHP', 'Always verify your doctors and medications are covered before choosing a plan']
  },
}
