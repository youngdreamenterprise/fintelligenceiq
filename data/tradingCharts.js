// ── Trading Academy Chart Library ────────────────────────────────────────────
// Each chart is a function returning an SVG string.
// Referenced by name (chart: 'key') in learn content data.

const BG = "#061018", CARD = "#081525", BORDER = "#0D2035"
const TEXT = "#E8F4FF", SUB = "#4A7AA0"
const GREEN = "#00D09C", RED = "#FF4560", ORANGE = "#FF6B35"
const BLUE = "#3B82F6", GOLD = "#F7931A"

// ── Helper: simple line chart ─────────────────────────────────────────────────
function lineChart(pts, color) {
  return "M " + pts.map(([x,y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" L ")
}

export const TRADING_CHARTS = {

  // ── 1. Candlestick Anatomy ──────────────────────────────────────────────────
  candlestick_anatomy: () => `
<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg" style="background:${BG};border-radius:12px;display:block;width:100%;font-family:ui-monospace,monospace">
  <text x="340" y="26" fill="${TEXT}" font-size="14" font-weight="bold" text-anchor="middle">Candlestick Anatomy</text>
  <line x1="340" y1="40" x2="340" y2="260" stroke="${BORDER}" stroke-width="1" stroke-dasharray="4,4"/>
  <text x="170" y="52" fill="${GREEN}" font-size="12" font-weight="bold" text-anchor="middle">BULLISH (Green)</text>
  <text x="510" y="52" fill="${RED}" font-size="12" font-weight="bold" text-anchor="middle">BEARISH (Red)</text>
  <line x1="170" y1="68" x2="170" y2="95" stroke="${GREEN}" stroke-width="2"/>
  <rect x="145" y="95" width="50" height="110" fill="${GREEN}" rx="2"/>
  <line x1="170" y1="205" x2="170" y2="250" stroke="${GREEN}" stroke-width="2"/>
  <line x1="240" y1="72" x2="185" y2="82" stroke="${GREEN}" stroke-width="1" marker-end="none"/>
  <text x="245" y="72" fill="${GREEN}" font-size="10">High (top of upper wick)</text>
  <text x="245" y="100" fill="${GREEN}" font-size="10">Close (top of green body)</text>
  <text x="245" y="155" fill="${GREEN}" font-size="10">Body (Close &gt; Open)</text>
  <text x="245" y="210" fill="${GREEN}" font-size="10">Open (bottom of green body)</text>
  <text x="245" y="252" fill="${GREEN}" font-size="10">Low (bottom of lower wick)</text>
  <line x1="510" y1="68" x2="510" y2="95" stroke="${RED}" stroke-width="2"/>
  <rect x="485" y="95" width="50" height="110" fill="${RED}" rx="2"/>
  <line x1="510" y1="205" x2="510" y2="250" stroke="${RED}" stroke-width="2"/>
  <text x="390" y="72" fill="${RED}" font-size="10" text-anchor="end">High</text>
  <text x="390" y="100" fill="${RED}" font-size="10" text-anchor="end">Open (top of red body)</text>
  <text x="390" y="155" fill="${RED}" font-size="10" text-anchor="end">Body (Open &gt; Close)</text>
  <text x="390" y="210" fill="${RED}" font-size="10" text-anchor="end">Close (bottom of red body)</text>
  <text x="390" y="252" fill="${RED}" font-size="10" text-anchor="end">Low</text>
  <rect x="30" y="272" width="620" height="38" fill="${CARD}" rx="8" stroke="${BORDER}"/>
  <text x="340" y="287" fill="${GOLD}" font-size="10" font-weight="bold" text-anchor="middle">THE STORY EACH CANDLE TELLS</text>
  <text x="340" y="302" fill="${TEXT}" font-size="10" text-anchor="middle">Body size = conviction · Long wicks = rejected extremes · Doji (equal open/close) = market indecision</text>
</svg>`,

  // ── 2. Key Candlestick Patterns ─────────────────────────────────────────────
  key_patterns: () => `
<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg" style="background:${BG};border-radius:12px;display:block;width:100%;font-family:ui-monospace,monospace">
  <text x="340" y="22" fill="${TEXT}" font-size="13" font-weight="bold" text-anchor="middle">5 Key Candlestick Patterns</text>
  <text x="68" y="48" fill="${GREEN}" font-size="10" font-weight="bold" text-anchor="middle">HAMMER</text>
  <text x="68" y="60" fill="${SUB}" font-size="9" text-anchor="middle">Bullish reversal</text>
  <line x1="68" y1="66" x2="68" y2="76" stroke="${GREEN}" stroke-width="2"/>
  <rect x="55" y="76" width="26" height="18" fill="${GREEN}" rx="2"/>
  <line x1="68" y1="94" x2="68" y2="138" stroke="${GREEN}" stroke-width="2"/>
  <text x="68" y="152" fill="${SUB}" font-size="9" text-anchor="middle">Long lower wick at</text>
  <text x="68" y="163" fill="${SUB}" font-size="9" text-anchor="middle">downtrend lows</text>
  <text x="204" y="48" fill="${RED}" font-size="10" font-weight="bold" text-anchor="middle">SHOOTING STAR</text>
  <text x="204" y="60" fill="${SUB}" font-size="9" text-anchor="middle">Bearish reversal</text>
  <line x1="204" y1="66" x2="204" y2="110" stroke="${RED}" stroke-width="2"/>
  <rect x="191" y="110" width="26" height="18" fill="${RED}" rx="2"/>
  <line x1="204" y1="128" x2="204" y2="138" stroke="${RED}" stroke-width="2"/>
  <text x="204" y="152" fill="${SUB}" font-size="9" text-anchor="middle">Long upper wick at</text>
  <text x="204" y="163" fill="${SUB}" font-size="9" text-anchor="middle">uptrend highs</text>
  <text x="340" y="48" fill="${GOLD}" font-size="10" font-weight="bold" text-anchor="middle">DOJI</text>
  <text x="340" y="60" fill="${SUB}" font-size="9" text-anchor="middle">Indecision</text>
  <line x1="340" y1="66" x2="340" y2="102" stroke="${GOLD}" stroke-width="2"/>
  <line x1="320" y1="104" x2="360" y2="104" stroke="${GOLD}" stroke-width="3"/>
  <line x1="340" y1="106" x2="340" y2="138" stroke="${GOLD}" stroke-width="2"/>
  <text x="340" y="152" fill="${SUB}" font-size="9" text-anchor="middle">Open = Close</text>
  <text x="340" y="163" fill="${SUB}" font-size="9" text-anchor="middle">Signals exhaustion</text>
  <text x="476" y="48" fill="${GREEN}" font-size="10" font-weight="bold" text-anchor="middle">BULL ENGULFING</text>
  <text x="476" y="60" fill="${SUB}" font-size="9" text-anchor="middle">Momentum shift</text>
  <rect x="454" y="84" width="18" height="38" fill="${RED}" rx="2"/>
  <rect x="475" y="74" width="22" height="64" fill="${GREEN}" rx="2"/>
  <text x="476" y="152" fill="${SUB}" font-size="9" text-anchor="middle">Large green candle</text>
  <text x="476" y="163" fill="${SUB}" font-size="9" text-anchor="middle">engulfs prior red</text>
  <text x="612" y="48" fill="${ORANGE}" font-size="10" font-weight="bold" text-anchor="middle">MORNING STAR</text>
  <text x="612" y="60" fill="${SUB}" font-size="9" text-anchor="middle">3-bar reversal</text>
  <rect x="576" y="80" width="18" height="48" fill="${RED}" rx="2"/>
  <rect x="597" y="110" width="14" height="10" fill="${GOLD}" rx="2"/>
  <rect x="614" y="82" width="18" height="56" fill="${GREEN}" rx="2"/>
  <text x="612" y="152" fill="${SUB}" font-size="9" text-anchor="middle">Big red, small doji,</text>
  <text x="612" y="163" fill="${SUB}" font-size="9" text-anchor="middle">big green = reversal</text>
  <rect x="30" y="180" width="620" height="50" fill="${CARD}" rx="8" stroke="${BORDER}"/>
  <text x="340" y="196" fill="${ORANGE}" font-size="10" font-weight="bold" text-anchor="middle">CONTEXT RULE — All patterns require location and confirmation</text>
  <text x="340" y="212" fill="${TEXT}" font-size="10" text-anchor="middle">A hammer at major support after a downtrend = HIGH PROBABILITY. The same pattern at a random mid-trend price = LOW PROBABILITY.</text>
  <text x="340" y="225" fill="${TEXT}" font-size="10" text-anchor="middle">Always wait for the next candle to confirm the reversal before entering.</text>
</svg>`,

  // ── 3. Support and Resistance ───────────────────────────────────────────────
  support_resistance: () => `
<svg viewBox="0 0 680 290" xmlns="http://www.w3.org/2000/svg" style="background:${BG};border-radius:12px;display:block;width:100%;font-family:ui-monospace,monospace">
  <text x="340" y="22" fill="${TEXT}" font-size="13" font-weight="bold" text-anchor="middle">Support, Resistance and Role Reversal</text>
  <line x1="40" y1="105" x2="635" y2="105" stroke="${RED}" stroke-width="1.5" stroke-dasharray="6,3" stroke-opacity="0.7"/>
  <text x="638" y="109" fill="${RED}" font-size="10" font-weight="bold">RESISTANCE</text>
  <line x1="40" y1="185" x2="635" y2="185" stroke="${BLUE}" stroke-width="1.5" stroke-dasharray="6,3" stroke-opacity="0.7"/>
  <text x="638" y="189" fill="${BLUE}" font-size="10" font-weight="bold">SUPPORT</text>
  <line x1="420" y1="105" x2="635" y2="105" stroke="${GREEN}" stroke-width="2"/>
  <text x="480" y="96" fill="${GREEN}" font-size="9" font-weight="bold">ROLE REVERSAL</text>
  <text x="480" y="107" fill="${GREEN}" font-size="8">(now support)</text>
  <polyline points="40,240 75,218 110,230 148,200 180,215 215,175 255,192 290,155 330,170 368,135 400,150 438,108 460,120 490,105 520,118 555,95 590,105 620,88" fill="none" stroke="${TEXT}" stroke-width="2" stroke-opacity="0.8"/>
  <text x="150" y="222" fill="${GREEN}" font-size="14">↑</text>
  <text x="230" y="200" fill="${GREEN}" font-size="14">↑</text>
  <text x="310" y="178" fill="${GREEN}" font-size="14">↑</text>
  <text x="388" y="158" fill="${RED}" font-size="14">↓</text>
  <text x="454" y="118" fill="${RED}" font-size="14">↓</text>
  <circle cx="492" cy="107" r="12" fill="none" stroke="${GOLD}" stroke-width="2"/>
  <text x="516" y="84" fill="${GOLD}" font-size="9" font-weight="bold">BREAKOUT</text>
  <circle cx="560" cy="110" r="8" fill="none" stroke="${GREEN}" stroke-width="2"/>
  <text x="558" y="130" fill="${GREEN}" font-size="8" text-anchor="middle">Bounce</text>
  <text x="558" y="141" fill="${GREEN}" font-size="8" text-anchor="middle">from old</text>
  <text x="558" y="152" fill="${GREEN}" font-size="8" text-anchor="middle">resistance</text>
  <rect x="30" y="255" width="620" height="28" fill="${CARD}" rx="8" stroke="${BORDER}"/>
  <text x="340" y="268" fill="${GOLD}" font-size="10" font-weight="bold" text-anchor="middle">ROLE REVERSAL LAW</text>
  <text x="340" y="278" fill="${TEXT}" font-size="10" text-anchor="middle">Broken resistance becomes new support · Broken support becomes new resistance · More tests = stronger level</text>
</svg>`,

  // ── 4. Head and Shoulders ───────────────────────────────────────────────────
  head_shoulders: () => `
<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg" style="background:${BG};border-radius:12px;display:block;width:100%;font-family:ui-monospace,monospace">
  <text x="340" y="22" fill="${TEXT}" font-size="13" font-weight="bold" text-anchor="middle">Head and Shoulders — Classic Reversal Pattern</text>
  <line x1="40" y1="90" x2="640" y2="90" stroke="${BORDER}" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="40" y1="155" x2="640" y2="155" stroke="${BORDER}" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="40" y1="210" x2="640" y2="210" stroke="${BORDER}" stroke-width="1" stroke-dasharray="3,3"/>
  <polyline points="40,250 90,225 130,250" fill="none" stroke="${TEXT}" stroke-width="1.5" stroke-opacity="0.4"/>
  <polyline points="130,250 165,145 200,250" fill="none" stroke="${ORANGE}" stroke-width="2.5"/>
  <polyline points="200,250 240,175 285,78 330,175 370,250" fill="none" stroke="${ORANGE}" stroke-width="2.5"/>
  <polyline points="370,250 410,152 450,250" fill="none" stroke="${ORANGE}" stroke-width="2.5"/>
  <polyline points="450,250 510,265 570,285 630,305" fill="none" stroke="${RED}" stroke-width="2.5"/>
  <line x1="130" y1="250" x2="640" y2="258" stroke="${GOLD}" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="644" y="262" fill="${GOLD}" font-size="10" font-weight="bold">NECKLINE</text>
  <text x="165" y="140" fill="${ORANGE}" font-size="10" font-weight="bold" text-anchor="middle">Left</text>
  <text x="165" y="152" fill="${ORANGE}" font-size="10" text-anchor="middle">Shoulder</text>
  <text x="285" y="73" fill="${RED}" font-size="11" font-weight="bold" text-anchor="middle">HEAD</text>
  <text x="285" y="86" fill="${SUB}" font-size="9" text-anchor="middle">(highest peak)</text>
  <text x="410" y="147" fill="${ORANGE}" font-size="10" font-weight="bold" text-anchor="middle">Right</text>
  <text x="410" y="159" fill="${ORANGE}" font-size="10" text-anchor="middle">Shoulder</text>
  <text x="410" y="171" fill="${SUB}" font-size="9" text-anchor="middle">(lower than left)</text>
  <line x1="285" y1="80" x2="285" y2="250" stroke="${RED}" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="300" y="168" fill="${RED}" font-size="10">Dist D</text>
  <circle cx="480" cy="254" r="12" fill="none" stroke="${RED}" stroke-width="2"/>
  <text x="480" y="235" fill="${RED}" font-size="10" text-anchor="middle" font-weight="bold">SELL</text>
  <line x1="555" y1="260" x2="555" y2="310" stroke="${RED}" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="570" y="290" fill="${RED}" font-size="10">Target</text>
  <text x="570" y="302" fill="${RED}" font-size="10">= D below</text>
  <text x="570" y="314" fill="${RED}" font-size="10">neckline</text>
  <rect x="30" y="265" width="415" height="28" fill="${CARD}" rx="6" stroke="${BORDER}"/>
  <text x="222" y="278" fill="${TEXT}" font-size="10" text-anchor="middle">Volume should DECLINE at right shoulder vs left shoulder</text>
  <text x="222" y="289" fill="${TEXT}" font-size="10" text-anchor="middle">and SURGE on the neckline breakdown to confirm</text>
</svg>`,

  // ── 5. Bull Flag ─────────────────────────────────────────────────────────────
  bull_flag: () => `
<svg viewBox="0 0 680 270" xmlns="http://www.w3.org/2000/svg" style="background:${BG};border-radius:12px;display:block;width:100%;font-family:ui-monospace,monospace">
  <text x="340" y="22" fill="${TEXT}" font-size="13" font-weight="bold" text-anchor="middle">Bull Flag — High-Probability Continuation Pattern</text>
  <polyline points="60,235 80,218 100,195 118,168 135,138 152,108 168,82" fill="none" stroke="${GREEN}" stroke-width="3"/>
  <polyline points="168,82 192,95 212,88 235,100 255,93 278,105 298,98 320,108" fill="none" stroke="${ORANGE}" stroke-width="2"/>
  <line x1="168" y1="82" x2="340" y2="100" stroke="${ORANGE}" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="168" y1="102" x2="340" y2="122" stroke="${ORANGE}" stroke-width="1" stroke-dasharray="4,3"/>
  <polyline points="320,108 345,98 368,78 392,55 415,32" fill="none" stroke="${GREEN}" stroke-width="3"/>
  <text x="90" y="180" fill="${GREEN}" font-size="11" font-weight="bold">FLAGPOLE</text>
  <text x="90" y="193" fill="${GREEN}" font-size="10">Sharp impulse rally</text>
  <text x="90" y="206" fill="${GREEN}" font-size="10">on high volume</text>
  <line x1="44" y1="84" x2="44" y2="233" stroke="${SUB}" stroke-width="1"/>
  <line x1="40" y1="84" x2="48" y2="84" stroke="${SUB}" stroke-width="1"/>
  <line x1="40" y1="233" x2="48" y2="233" stroke="${SUB}" stroke-width="1"/>
  <text x="28" y="162" fill="${SUB}" font-size="9" text-anchor="middle" transform="rotate(-90,28,162)">Height H</text>
  <text x="242" y="68" fill="${ORANGE}" font-size="11" font-weight="bold" text-anchor="middle">FLAG</text>
  <text x="242" y="80" fill="${ORANGE}" font-size="10" text-anchor="middle">Orderly pullback</text>
  <text x="242" y="92" fill="${ORANGE}" font-size="10" text-anchor="middle">against trend</text>
  <circle cx="330" cy="105" r="11" fill="none" stroke="${GREEN}" stroke-width="2"/>
  <text x="348" y="84" fill="${GREEN}" font-size="10" font-weight="bold">BUY</text>
  <text x="348" y="97" fill="${GREEN}" font-size="10">breakout</text>
  <line x1="400" y1="32" x2="400" y2="232" stroke="${GREEN}" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="415" y="132" fill="${GREEN}" font-size="10">Target</text>
  <text x="415" y="144" fill="${GREEN}" font-size="10">= H from</text>
  <text x="415" y="156" fill="${GREEN}" font-size="10">breakout</text>
  <rect x="430" y="165" width="230" height="90" fill="${CARD}" rx="8" stroke="${BORDER}"/>
  <text x="545" y="182" fill="${GOLD}" font-size="10" font-weight="bold" text-anchor="middle">VOLUME PATTERN</text>
  <text x="545" y="196" fill="${GREEN}" font-size="10" text-anchor="middle">Flagpole: HIGH volume ↑↑</text>
  <text x="545" y="210" fill="${ORANGE}" font-size="10" text-anchor="middle">Flag: LOW volume ↓ (healthy)</text>
  <text x="545" y="224" fill="${GREEN}" font-size="10" text-anchor="middle">Breakout: SURGE volume ↑↑↑</text>
  <text x="545" y="238" fill="${SUB}" font-size="9" text-anchor="middle">Low-vol flag = institutional accumulation</text>
  <rect x="30" y="245" width="390" height="20" fill="${CARD}" rx="6" stroke="${BORDER}"/>
  <text x="225" y="258" fill="${TEXT}" font-size="10" text-anchor="middle">Target = Flagpole length added to the breakout point · Tighter flags = stronger continuation</text>
</svg>`,

  // ── 6. Moving Averages Golden Cross ─────────────────────────────────────────
  moving_averages: () => {
    const pts50 = [], pts200 = [], ptsp = []
    for (let i = 0; i < 55; i++) {
      const x = 40 + i * 11.2
      ptsp.push([x, 200 - i*2.2 + 18*Math.sin(i*0.38)])
      pts50.push([x, 210 - i*1.9 + 7*Math.sin(i*0.28)])
      pts200.push([x, 225 - i*1.4])
    }
    const p = a => "M "+a.map(([x,y])=>`${x.toFixed(1)},${y.toFixed(1)}`).join(" L ")
    return `
<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg" style="background:${BG};border-radius:12px;display:block;width:100%;font-family:ui-monospace,monospace">
  <text x="340" y="22" fill="${TEXT}" font-size="13" font-weight="bold" text-anchor="middle">Moving Averages — Golden Cross and 200-Day Rule</text>
  <line x1="40" y1="80" x2="640" y2="80" stroke="${BORDER}" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="40" y1="145" x2="640" y2="145" stroke="${BORDER}" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="40" y1="210" x2="640" y2="210" stroke="${BORDER}" stroke-width="1" stroke-dasharray="3,3"/>
  <path d="${p(ptsp)}" fill="none" stroke="${TEXT}" stroke-width="1.5" stroke-opacity="0.5"/>
  <path d="${p(pts50)}" fill="none" stroke="${GREEN}" stroke-width="2.5"/>
  <path d="${p(pts200)}" fill="none" stroke="${RED}" stroke-width="2.5"/>
  <circle cx="408" cy="135" r="16" fill="none" stroke="${GOLD}" stroke-width="2.5"/>
  <text x="432" y="120" fill="${GOLD}" font-size="11" font-weight="bold">GOLDEN CROSS</text>
  <text x="432" y="133" fill="${GOLD}" font-size="10">SMA50 crosses above SMA200</text>
  <text x="432" y="146" fill="${GREEN}" font-size="10" font-weight="bold">→ Major bullish signal</text>
  <text x="150" y="200" fill="${RED}" font-size="11" font-weight="bold">DEATH CROSS</text>
  <text x="150" y="213" fill="${RED}" font-size="10">SMA50 below SMA200</text>
  <text x="150" y="226" fill="${RED}" font-size="10">→ Bearish condition</text>
  <rect x="30" y="255" width="620" height="38" fill="${CARD}" rx="8" stroke="${BORDER}"/>
  <text x="340" y="268" fill="${GOLD}" font-size="10" font-weight="bold" text-anchor="middle">THE 200-DAY RULE (most important MA filter)</text>
  <text x="340" y="282" fill="${TEXT}" font-size="10" text-anchor="middle">Price ABOVE 200-day MA → only take LONG signals on lower timeframes</text>
  <text x="340" y="292" fill="${TEXT}" font-size="10" text-anchor="middle">Price BELOW 200-day MA → only take SHORT signals · This single filter improves win rates 15-25%</text>
  <line x1="50" y1="246" x2="85" y2="246" stroke="${GREEN}" stroke-width="2.5"/>
  <text x="93" y="250" fill="${GREEN}" font-size="10">SMA 50 (fast MA)</text>
  <line x1="230" y1="246" x2="265" y2="246" stroke="${RED}" stroke-width="2.5"/>
  <text x="273" y="250" fill="${RED}" font-size="10">SMA 200 (trend filter)</text>
  <line x1="430" y1="246" x2="465" y2="246" stroke="${TEXT}" stroke-width="1.5" stroke-opacity="0.5"/>
  <text x="473" y="250" fill="${TEXT}" font-size="10" opacity="0.7">Price</text>
</svg>`
  },

  // ── 7. RSI ──────────────────────────────────────────────────────────────────
  rsi: () => {
    const priceP = [], rsiP = []
    for (let i = 0; i < 52; i++) {
      const x = 42 + i * 11.5
      priceP.push([x, 140 - i*0.4 + 32*Math.sin(i*0.19)])
      const rsiRaw = 50 + 28*Math.sin(i*0.19 - 0.2) - i*0.3
      rsiP.push([x, Math.max(215, Math.min(285, 250 - rsiRaw*0.9))])
    }
    const p = a => "M "+a.map(([x,y])=>`${x.toFixed(1)},${y.toFixed(1)}`).join(" L ")
    return `
<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg" style="background:${BG};border-radius:12px;display:block;width:100%;font-family:ui-monospace,monospace">
  <text x="340" y="20" fill="${TEXT}" font-size="13" font-weight="bold" text-anchor="middle">RSI (14) — Signals, Divergence, and the ADX Filter</text>
  <text x="46" y="42" fill="${SUB}" font-size="10" font-weight="bold">PRICE</text>
  <line x1="42" y1="47" x2="638" y2="47" stroke="${BORDER}" stroke-width="1"/>
  <line x1="42" y1="185" x2="638" y2="185" stroke="${BORDER}" stroke-width="1"/>
  <path d="${p(priceP)}" fill="none" stroke="${BLUE}" stroke-width="2"/>
  <text x="46" y="205" fill="${SUB}" font-size="10" font-weight="bold">RSI (14)</text>
  <line x1="42" y1="210" x2="638" y2="210" stroke="${BORDER}" stroke-width="1"/>
  <rect x="42" y="210" width="596" height="25" fill="${RED}" fill-opacity="0.07"/>
  <line x1="42" y1="235" x2="638" y2="235" stroke="${RED}" stroke-width="1" stroke-dasharray="5,3" stroke-opacity="0.7"/>
  <text x="632" y="233" fill="${RED}" font-size="9" text-anchor="end">70 — Overbought</text>
  <line x1="42" y1="252" x2="638" y2="252" stroke="${SUB}" stroke-width="1" stroke-dasharray="2,4"/>
  <text x="632" y="250" fill="${SUB}" font-size="9" text-anchor="end">50</text>
  <rect x="42" y="265" width="596" height="25" fill="${GREEN}" fill-opacity="0.07"/>
  <line x1="42" y1="265" x2="638" y2="265" stroke="${GREEN}" stroke-width="1" stroke-dasharray="5,3" stroke-opacity="0.7"/>
  <text x="632" y="263" fill="${GREEN}" font-size="9" text-anchor="end">30 — Oversold</text>
  <path d="${p(rsiP)}" fill="none" stroke="${ORANGE}" stroke-width="2"/>
  <circle cx="190" cy="228" r="11" fill="none" stroke="${RED}" stroke-width="1.5"/>
  <text x="190" y="210" fill="${RED}" font-size="9" text-anchor="middle" font-weight="bold">OVERBOUGHT</text>
  <text x="190" y="221" fill="${RED}" font-size="8" text-anchor="middle">RSI &gt; 70 in range</text>
  <circle cx="490" cy="263" r="11" fill="none" stroke="${GREEN}" stroke-width="1.5"/>
  <text x="490" y="286" fill="${GREEN}" font-size="9" text-anchor="middle" font-weight="bold">OVERSOLD</text>
  <text x="490" y="297" fill="${GREEN}" font-size="8" text-anchor="middle">RSI &lt; 30 → buy zone</text>
  <text x="340" y="62" fill="${GOLD}" font-size="10" font-weight="bold" text-anchor="middle">⚠ BEARISH DIVERGENCE: Price makes new high → RSI makes LOWER high</text>
  <text x="340" y="74" fill="${SUB}" font-size="9" text-anchor="middle">This warns that buying momentum is fading even as price continues higher</text>
  <rect x="30" y="305" width="620" height="30" fill="${CARD}" rx="8" stroke="${BORDER}"/>
  <text x="340" y="318" fill="${GOLD}" font-size="10" font-weight="bold" text-anchor="middle">ADX FILTER — The most important RSI improvement</text>
  <text x="340" y="330" fill="${TEXT}" font-size="10" text-anchor="middle">ADX &gt; 25 (trending): RSI pullback to 40-50 = buy in uptrends · ADX &lt; 20 (ranging): RSI below 30 = buy, above 70 = sell</text>
</svg>`
  },

  // ── 8. MACD ──────────────────────────────────────────────────────────────────
  macd: () => {
    const macdP = [], sigP = [], histBars = []
    for (let i = 0; i < 52; i++) {
      const x = 42 + i * 11.5
      const mv = 8*Math.sin(i*0.22) - i*0.06
      const sv = 6*Math.sin(i*0.22 - 0.32) - i*0.05
      macdP.push([x, 236 - mv*7])
      sigP.push([x, 236 - sv*7])
      const h = mv - sv
      histBars.push({x, h, color: h > 0 ? GREEN : RED})
    }
    const p = a => "M "+a.map(([x,y])=>`${x.toFixed(1)},${y.toFixed(1)}`).join(" L ")
    const bars = histBars.map(({x,h,color}) => {
      const bh = Math.abs(h)*7, by = h>0 ? 236-bh : 236
      return `<rect x="${(x-4).toFixed(1)}" y="${by.toFixed(1)}" width="8" height="${bh.toFixed(1)}" fill="${color}" fill-opacity="0.55" rx="1"/>`
    }).join('')
    return `
<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg" style="background:${BG};border-radius:12px;display:block;width:100%;font-family:ui-monospace,monospace">
  <text x="340" y="20" fill="${TEXT}" font-size="13" font-weight="bold" text-anchor="middle">MACD — Moving Average Convergence Divergence</text>
  <text x="46" y="42" fill="${SUB}" font-size="10" font-weight="bold">PRICE (simplified)</text>
  <polyline points="42,145 100,130 158,115 216,122 274,100 332,116 390,88 448,78 506,86 564,68 622,56" fill="none" stroke="${BLUE}" stroke-width="2"/>
  <line x1="42" y1="165" x2="638" y2="165" stroke="${BORDER}" stroke-width="1"/>
  <text x="46" y="185" fill="${SUB}" font-size="10" font-weight="bold">MACD</text>
  <line x1="42" y1="190" x2="638" y2="190" stroke="${BORDER}" stroke-width="1"/>
  <line x1="42" y1="236" x2="638" y2="236" stroke="${SUB}" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="630" y="234" fill="${SUB}" font-size="8" text-anchor="end">Zero</text>
  ${bars}
  <path d="${p(macdP)}" fill="none" stroke="${BLUE}" stroke-width="2.5"/>
  <path d="${p(sigP)}" fill="none" stroke="${ORANGE}" stroke-width="2" stroke-dasharray="6,3"/>
  <circle cx="155" cy="232" r="13" fill="none" stroke="${GREEN}" stroke-width="2"/>
  <text x="155" y="215" fill="${GREEN}" font-size="9" text-anchor="middle" font-weight="bold">BULL CROSS</text>
  <text x="155" y="225" fill="${GREEN}" font-size="8" text-anchor="middle">MACD crosses</text>
  <text x="155" y="268" fill="${GREEN}" font-size="9" text-anchor="middle">BUY SIGNAL</text>
  <circle cx="352" cy="238" r="13" fill="none" stroke="${RED}" stroke-width="2"/>
  <text x="352" y="220" fill="${RED}" font-size="9" text-anchor="middle" font-weight="bold">BEAR CROSS</text>
  <text x="352" y="230" fill="${RED}" font-size="8" text-anchor="middle">MACD crosses</text>
  <text x="352" y="268" fill="${RED}" font-size="9" text-anchor="middle">SELL SIGNAL</text>
  <line x1="50" y1="294" x2="82" y2="294" stroke="${BLUE}" stroke-width="2.5"/>
  <text x="90" y="298" fill="${BLUE}" font-size="10">MACD Line (12 EMA - 26 EMA)</text>
  <line x1="300" y1="294" x2="332" y2="294" stroke="${ORANGE}" stroke-width="2" stroke-dasharray="6,3"/>
  <text x="340" y="298" fill="${ORANGE}" font-size="10">Signal Line (9 EMA of MACD)</text>
  <rect x="30" y="306" width="620" height="10" rx="4"/>
  <text x="340" y="312" fill="${SUB}" font-size="9" text-anchor="middle">Histogram = MACD minus Signal · Bars growing = momentum building · Bars shrinking = momentum fading</text>
</svg>`
  },

  // ── 9. Bollinger Bands ───────────────────────────────────────────────────────
  bollinger_bands: () => {
    const uP = [], lP = [], mP = [], pP = []
    for (let i = 0; i < 52; i++) {
      const x = 42 + i * 11.5
      const v = 0.7 + 0.55*Math.abs(Math.sin(i*0.18))
      const avg = 165 + 18*Math.sin(i*0.14)
      const band = 26*v
      pP.push([x, avg + 28*Math.sin(i*0.22)])
      uP.push([x, avg - band])
      lP.push([x, avg + band])
      mP.push([x, avg])
    }
    const p = a => "M "+a.map(([x,y])=>`${x.toFixed(1)},${y.toFixed(1)}`).join(" L ")
    const bandFill = "M "+uP.map(([x,y])=>`${x.toFixed(1)},${y.toFixed(1)}`).join(" L ")+" L "+[...lP].reverse().map(([x,y])=>`${x.toFixed(1)},${y.toFixed(1)}`).join(" L ")+" Z"
    return `
<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg" style="background:${BG};border-radius:12px;display:block;width:100%;font-family:ui-monospace,monospace">
  <text x="340" y="22" fill="${TEXT}" font-size="13" font-weight="bold" text-anchor="middle">Bollinger Bands — Volatility, Squeeze, and Band Walk</text>
  <path d="${bandFill}" fill="${BLUE}" fill-opacity="0.06"/>
  <path d="${p(uP)}" fill="none" stroke="${BLUE}" stroke-width="1.5" stroke-dasharray="5,3"/>
  <path d="${p(lP)}" fill="none" stroke="${BLUE}" stroke-width="1.5" stroke-dasharray="5,3"/>
  <path d="${p(mP)}" fill="none" stroke="${ORANGE}" stroke-width="2" stroke-dasharray="4,4"/>
  <path d="${p(pP)}" fill="none" stroke="${GREEN}" stroke-width="2"/>
  <text x="630" y="88" fill="${BLUE}" font-size="9" text-anchor="end">Upper Band (+2σ)</text>
  <text x="630" y="160" fill="${ORANGE}" font-size="9" text-anchor="end">Middle (SMA 20)</text>
  <text x="630" y="235" fill="${BLUE}" font-size="9" text-anchor="end">Lower Band (-2σ)</text>
  <rect x="50" y="145" width="72" height="52" fill="none" stroke="${GOLD}" stroke-width="1.5" stroke-dasharray="3,2" rx="4"/>
  <text x="86" y="213" fill="${GOLD}" font-size="9" text-anchor="middle" font-weight="bold">SQUEEZE</text>
  <text x="86" y="224" fill="${GOLD}" font-size="9" text-anchor="middle">Bands narrow</text>
  <text x="86" y="235" fill="${GOLD}" font-size="9" text-anchor="middle">= big move coming</text>
  <circle cx="288" cy="218" r="9" fill="none" stroke="${GREEN}" stroke-width="2"/>
  <text x="288" y="235" fill="${GREEN}" font-size="9" text-anchor="middle" font-weight="bold">↑ BUY</text>
  <text x="288" y="246" fill="${GREEN}" font-size="8" text-anchor="middle">lower band touch</text>
  <text x="288" y="257" fill="${SUB}" font-size="8" text-anchor="middle">in ranging market</text>
  <circle cx="508" cy="105" r="9" fill="none" stroke="${RED}" stroke-width="2"/>
  <text x="508" y="92" fill="${RED}" font-size="9" text-anchor="middle">↓ CAUTION</text>
  <text x="508" y="82" fill="${SUB}" font-size="8" text-anchor="middle">upper band touch</text>
  <rect x="30" y="255" width="620" height="20" fill="${CARD}" rx="6" stroke="${BORDER}"/>
  <text x="340" y="268" fill="${TEXT}" font-size="10" text-anchor="middle">RANGING: fade upper/lower band touches · TRENDING: price can "walk" the band for extended periods · Use ADX to determine which applies</text>
</svg>`
  },

  // ── 10. Fibonacci ────────────────────────────────────────────────────────────
  fibonacci: () => `
<svg viewBox="0 0 680 295" xmlns="http://www.w3.org/2000/svg" style="background:${BG};border-radius:12px;display:block;width:100%;font-family:ui-monospace,monospace">
  <text x="340" y="22" fill="${TEXT}" font-size="13" font-weight="bold" text-anchor="middle">Fibonacci Retracement — The Golden Ratio in Markets</text>
  <polyline points="60,255 100,238 140,218 182,198 222,172 262,145 302,115 342,88 382,68" fill="none" stroke="${GREEN}" stroke-width="2.5"/>
  <polyline points="382,68 422,92 462,122 502,140 532,157" fill="none" stroke="${ORANGE}" stroke-width="2" stroke-dasharray="5,3"/>
  <polyline points="532,157 562,132 600,108 638,78" fill="none" stroke="${GREEN}" stroke-width="2" stroke-dasharray="4,4"/>
  <line x1="382" y1="68" x2="638" y2="68" stroke="${GREEN}" stroke-width="1.5"/>
  <text x="644" y="72" fill="${GREEN}" font-size="10" font-weight="bold">0%</text>
  <line x1="382" y1="112" x2="638" y2="112" stroke="${SUB}" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="644" y="116" fill="${SUB}" font-size="10">23.6%</text>
  <line x1="382" y1="140" x2="638" y2="140" stroke="${GOLD}" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="644" y="144" fill="${GOLD}" font-size="10" font-weight="bold">38.2%</text>
  <line x1="382" y1="162" x2="638" y2="162" stroke="${ORANGE}" stroke-width="2" stroke-dasharray="4,3"/>
  <text x="644" y="166" fill="${ORANGE}" font-size="10" font-weight="bold">50.0%</text>
  <line x1="382" y1="184" x2="638" y2="184" stroke="${GOLD}" stroke-width="2.5"/>
  <text x="644" y="188" fill="${GOLD}" font-size="11" font-weight="bold">61.8% ★</text>
  <text x="644" y="200" fill="${GOLD}" font-size="8">Golden Ratio</text>
  <line x1="382" y1="255" x2="638" y2="255" stroke="${RED}" stroke-width="1.5"/>
  <text x="644" y="259" fill="${RED}" font-size="10" font-weight="bold">100%</text>
  <circle cx="532" cy="157" r="13" fill="none" stroke="${GOLD}" stroke-width="2"/>
  <text x="512" y="200" fill="${GOLD}" font-size="10" text-anchor="middle" font-weight="bold">↑ 61.8% holds</text>
  <text x="512" y="212" fill="${GOLD}" font-size="9" text-anchor="middle">as support</text>
  <text x="232" y="105" fill="${GREEN}" font-size="10" text-anchor="middle" font-weight="bold">Up-Swing</text>
  <text x="450" y="110" fill="${ORANGE}" font-size="10" text-anchor="middle">Retracement</text>
  <text x="612" y="98" fill="${GREEN}" font-size="10" text-anchor="middle">Resumption</text>
  <rect x="30" y="265" width="620" height="24" fill="${CARD}" rx="6" stroke="${BORDER}"/>
  <text x="340" y="278" fill="${GOLD}" font-size="10" font-weight="bold" text-anchor="middle">HOW TO DRAW: Swing low to swing high (uptrend) · Swing high to swing low (downtrend)</text>
  <text x="340" y="285" fill="${TEXT}" font-size="9" text-anchor="middle">38.2% = shallow correction · 50% = moderate · 61.8% (Golden Ratio) = deepest common retracement before trend resumes</text>
</svg>`,

  // ── 11. Options Payoff ──────────────────────────────────────────────────────
  options_payoff: () => `
<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg" style="background:${BG};border-radius:12px;display:block;width:100%;font-family:ui-monospace,monospace">
  <text x="340" y="22" fill="${TEXT}" font-size="13" font-weight="bold" text-anchor="middle">Options Payoff at Expiration</text>
  <text x="170" y="48" fill="${GREEN}" font-size="12" font-weight="bold" text-anchor="middle">LONG CALL</text>
  <text x="170" y="61" fill="${SUB}" font-size="10" text-anchor="middle">Right to BUY at strike price</text>
  <line x1="55" y1="195" x2="305" y2="195" stroke="${BORDER}" stroke-width="1.5"/>
  <line x1="55" y1="80" x2="55" y2="215" stroke="${BORDER}" stroke-width="1.5"/>
  <text x="45" y="199" fill="${SUB}" font-size="8" text-anchor="end">$0</text>
  <polyline points="55,213 165,213 225,148 305,88" fill="none" stroke="${GREEN}" stroke-width="3"/>
  <polygon points="55,195 165,195 165,213 55,213" fill="${RED}" fill-opacity="0.12"/>
  <polygon points="165,195 225,148 305,88 305,195 165,195" fill="${GREEN}" fill-opacity="0.12"/>
  <line x1="165" y1="78" x2="165" y2="215" stroke="${GOLD}" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="165" y="227" fill="${GOLD}" font-size="9" text-anchor="middle">Strike</text>
  <circle cx="195" cy="195" r="4" fill="${ORANGE}"/>
  <text x="210" y="240" fill="${ORANGE}" font-size="9" text-anchor="middle">Break-even</text>
  <text x="210" y="251" fill="${ORANGE}" font-size="8" text-anchor="middle">Strike + Premium</text>
  <text x="70" y="212" fill="${RED}" font-size="9">Max loss</text>
  <text x="70" y="222" fill="${RED}" font-size="8">= Premium paid</text>
  <text x="268" y="100" fill="${GREEN}" font-size="9">Unlimited</text>
  <text x="268" y="111" fill="${GREEN}" font-size="9">upside</text>
  <text x="510" y="48" fill="${RED}" font-size="12" font-weight="bold" text-anchor="middle">LONG PUT</text>
  <text x="510" y="61" fill="${SUB}" font-size="10" text-anchor="middle">Right to SELL at strike price</text>
  <line x1="375" y1="195" x2="625" y2="195" stroke="${BORDER}" stroke-width="1.5"/>
  <line x1="625" y1="80" x2="625" y2="215" stroke="${BORDER}" stroke-width="1.5"/>
  <text x="370" y="199" fill="${SUB}" font-size="8">$0</text>
  <polyline points="375,88 435,148 510,195 625,213" fill="none" stroke="${RED}" stroke-width="3"/>
  <polygon points="375,88 435,148 510,195 375,195" fill="${RED}" fill-opacity="0.15"/>
  <polygon points="510,195 625,195 625,213 510,213" fill="${RED}" fill-opacity="0.05"/>
  <line x1="510" y1="78" x2="510" y2="215" stroke="${GOLD}" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="510" y="227" fill="${GOLD}" font-size="9" text-anchor="middle">Strike</text>
  <circle cx="478" cy="195" r="4" fill="${ORANGE}"/>
  <text x="458" y="240" fill="${ORANGE}" font-size="9" text-anchor="middle">Break-even</text>
  <text x="458" y="251" fill="${ORANGE}" font-size="8" text-anchor="middle">Strike - Premium</text>
  <text x="390" y="100" fill="${GREEN}" font-size="9">Profit as</text>
  <text x="390" y="111" fill="${GREEN}" font-size="9">price falls</text>
  <text x="570" y="212" fill="${RED}" font-size="9">Max loss</text>
  <text x="570" y="222" fill="${RED}" font-size="8">= Premium</text>
  <rect x="30" y="258" width="620" height="18" fill="${CARD}" rx="6" stroke="${BORDER}"/>
  <text x="340" y="270" fill="${TEXT}" font-size="10" text-anchor="middle">Long options: DEFINED maximum loss (premium paid) · UNLIMITED profit potential for calls · Option SELLERS have the opposite profile</text>
</svg>`,

  // ── 12. Iron Condor ─────────────────────────────────────────────────────────
  iron_condor: () => `
<svg viewBox="0 0 680 270" xmlns="http://www.w3.org/2000/svg" style="background:${BG};border-radius:12px;display:block;width:100%;font-family:ui-monospace,monospace">
  <text x="340" y="22" fill="${TEXT}" font-size="13" font-weight="bold" text-anchor="middle">Iron Condor — Profit When Market Stays in Range</text>
  <line x1="55" y1="190" x2="625" y2="190" stroke="${BORDER}" stroke-width="1.5"/>
  <line x1="55" y1="80" x2="55" y2="210" stroke="${BORDER}" stroke-width="1.5"/>
  <text x="45" y="194" fill="${SUB}" font-size="8" text-anchor="end">$0</text>
  <polyline points="55,228 150,228 240,148 480,148 565,228 625,228" fill="none" stroke="${ORANGE}" stroke-width="3"/>
  <polygon points="240,148 240,190 480,190 480,148" fill="${GREEN}" fill-opacity="0.18"/>
  <polygon points="55,190 150,190 240,148 240,190" fill="${RED}" fill-opacity="0.12"/>
  <polygon points="480,148 480,190 625,190 625,228" fill="${RED}" fill-opacity="0.12"/>
  <line x1="150" y1="78" x2="150" y2="210" stroke="${RED}" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="150" y="222" fill="${RED}" font-size="8" text-anchor="middle">Long Put</text>
  <line x1="240" y1="78" x2="240" y2="210" stroke="${GOLD}" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="240" y="222" fill="${GOLD}" font-size="8" text-anchor="middle">Short Put</text>
  <line x1="360" y1="78" x2="360" y2="210" stroke="${GREEN}" stroke-width="1.5"/>
  <text x="360" y="222" fill="${GREEN}" font-size="8" text-anchor="middle">Current Price</text>
  <line x1="480" y1="78" x2="480" y2="210" stroke="${GOLD}" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="480" y="222" fill="${GOLD}" font-size="8" text-anchor="middle">Short Call</text>
  <line x1="565" y1="78" x2="565" y2="210" stroke="${RED}" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="565" y="222" fill="${RED}" font-size="8" text-anchor="middle">Long Call</text>
  <text x="360" y="132" fill="${GREEN}" font-size="11" font-weight="bold" text-anchor="middle">MAX PROFIT ZONE</text>
  <text x="360" y="146" fill="${GREEN}" font-size="9" text-anchor="middle">Price stays between short strikes</text>
  <text x="360" y="158" fill="${GREEN}" font-size="9" text-anchor="middle">→ Keep ALL premium collected</text>
  <text x="95" y="168" fill="${RED}" font-size="9" text-anchor="middle">Max Loss</text>
  <text x="95" y="180" fill="${RED}" font-size="9" text-anchor="middle">(width - credit)</text>
  <text x="595" y="168" fill="${RED}" font-size="9" text-anchor="middle">Max Loss</text>
  <text x="595" y="180" fill="${RED}" font-size="9" text-anchor="middle">(width - credit)</text>
  <rect x="30" y="240" width="620" height="24" fill="${CARD}" rx="6" stroke="${BORDER}"/>
  <text x="340" y="253" fill="${GOLD}" font-size="10" font-weight="bold" text-anchor="middle">BEST CONDITIONS: Low volatility ranging market · Sell when Implied Volatility is HIGH (options are expensive)</text>
  <text x="340" y="260" fill="${TEXT}" font-size="9" text-anchor="middle">Profit from TIME DECAY (theta) as long as price stays between the short strikes through expiration</text>
</svg>`,

  // ── 13. Volatility Structure ─────────────────────────────────────────────────
  vol_structure: () => `
<svg viewBox="0 0 680 265" xmlns="http://www.w3.org/2000/svg" style="background:${BG};border-radius:12px;display:block;width:100%;font-family:ui-monospace,monospace">
  <text x="340" y="22" fill="${TEXT}" font-size="13" font-weight="bold" text-anchor="middle">Implied Volatility — Term Structure and Volatility Skew</text>
  <text x="180" y="48" fill="${BLUE}" font-size="11" font-weight="bold" text-anchor="middle">IV Term Structure</text>
  <text x="180" y="61" fill="${SUB}" font-size="9" text-anchor="middle">IV across expiration dates</text>
  <line x1="55" y1="185" x2="305" y2="185" stroke="${BORDER}" stroke-width="1.5"/>
  <line x1="55" y1="75" x2="55" y2="195" stroke="${BORDER}" stroke-width="1.5"/>
  <text x="305" y="200" fill="${SUB}" font-size="9" text-anchor="middle">Expiration →</text>
  <text x="42" y="82" fill="${SUB}" font-size="8" text-anchor="end">High IV</text>
  <text x="42" y="190" fill="${SUB}" font-size="8" text-anchor="end">Low IV</text>
  <polyline points="65,148 100,142 140,132 180,124 220,120 260,118 298,117" fill="none" stroke="${GREEN}" stroke-width="2.5" stroke-dasharray="5,3"/>
  <text x="252" y="112" fill="${GREEN}" font-size="9">Normal (Contango)</text>
  <polyline points="65,88 100,100 140,112 180,122 220,126 260,118 298,117" fill="none" stroke="${RED}" stroke-width="2.5"/>
  <text x="70" y="84" fill="${RED}" font-size="9">Inverted (Crisis)</text>
  <text x="70" y="95" fill="${RED}" font-size="8">Near-term fear spike</text>
  <text x="520" y="48" fill="${ORANGE}" font-size="11" font-weight="bold" text-anchor="middle">Volatility Smile / Skew</text>
  <text x="520" y="61" fill="${SUB}" font-size="9" text-anchor="middle">IV across strike prices</text>
  <line x1="375" y1="185" x2="625" y2="185" stroke="${BORDER}" stroke-width="1.5"/>
  <line x1="625" y1="75" x2="625" y2="195" stroke="${BORDER}" stroke-width="1.5"/>
  <text x="500" y="200" fill="${SUB}" font-size="9" text-anchor="middle">Strike Price →</text>
  <polyline points="385,96 418,116 455,136 500,152 545,150 582,140 618,128" fill="none" stroke="${ORANGE}" stroke-width="2.5"/>
  <line x1="500" y1="75" x2="500" y2="195" stroke="${GOLD}" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="500" y="207" fill="${GOLD}" font-size="8" text-anchor="middle">ATM (current price)</text>
  <text x="398" y="92" fill="${RED}" font-size="8">OTM Puts:</text>
  <text x="398" y="102" fill="${RED}" font-size="8">Expensive IV</text>
  <text x="398" y="112" fill="${RED}" font-size="7">(crash hedging)</text>
  <text x="590" y="122" fill="${GREEN}" font-size="8">OTM Calls:</text>
  <text x="590" y="132" fill="${GREEN}" font-size="8">Cheaper IV</text>
  <rect x="30" y="228" width="620" height="30" fill="${CARD}" rx="8" stroke="${BORDER}"/>
  <text x="340" y="241" fill="${GOLD}" font-size="10" font-weight="bold" text-anchor="middle">TRADING THE SKEW</text>
  <text x="340" y="253" fill="${TEXT}" font-size="10" text-anchor="middle">Sell high-IV puts (expensive) · Buy cheap calls · Or sell put spreads to harvest the skew premium systematically</text>
</svg>`,

  // ── 14. Trend Structure ──────────────────────────────────────────────────────
  trend_structure: () => `
<svg viewBox="0 0 680 265" xmlns="http://www.w3.org/2000/svg" style="background:${BG};border-radius:12px;display:block;width:100%;font-family:ui-monospace,monospace">
  <text x="340" y="22" fill="${TEXT}" font-size="13" font-weight="bold" text-anchor="middle">Trend Structure — Higher Highs and Higher Lows</text>
  <line x1="40" y1="78" x2="638" y2="78" stroke="${BORDER}" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="40" y1="148" x2="638" y2="148" stroke="${BORDER}" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="40" y1="218" x2="638" y2="218" stroke="${BORDER}" stroke-width="1" stroke-dasharray="3,3"/>
  <polyline points="55,235 95,208 135,228 175,188 225,212 265,162 315,182 355,138 408,158 450,112 502,130 545,88 592,106 638,68" fill="none" stroke="${GREEN}" stroke-width="2.5"/>
  <line x1="55" y1="235" x2="638" y2="88" stroke="${GREEN}" stroke-width="1.5" stroke-dasharray="5,4" stroke-opacity="0.5"/>
  <text x="638" y="82" fill="${GREEN}" font-size="9" text-anchor="end">Rising Trendline</text>
  <text x="95" y="202" fill="${GREEN}" font-size="10" font-weight="bold" text-anchor="middle">HH1</text>
  <text x="265" y="157" fill="${GREEN}" font-size="10" font-weight="bold" text-anchor="middle">HH2</text>
  <text x="450" y="106" fill="${GREEN}" font-size="10" font-weight="bold" text-anchor="middle">HH3</text>
  <text x="630" y="63" fill="${GREEN}" font-size="10" font-weight="bold" text-anchor="middle">HH4</text>
  <text x="140" y="238" fill="${BLUE}" font-size="10" font-weight="bold" text-anchor="middle">HL1</text>
  <text x="322" y="195" fill="${BLUE}" font-size="10" font-weight="bold" text-anchor="middle">HL2</text>
  <text x="508" y="143" fill="${BLUE}" font-size="10" font-weight="bold" text-anchor="middle">HL3</text>
  <rect x="35" y="242" width="295" height="18" fill="${CARD}" rx="6" stroke="${GREEN}"/>
  <text x="182" y="254" fill="${GREEN}" font-size="10" text-anchor="middle" font-weight="bold">UPTREND = Higher Highs + Higher Lows</text>
  <rect x="348" y="242" width="295" height="18" fill="${CARD}" rx="6" stroke="${RED}"/>
  <text x="495" y="254" fill="${RED}" font-size="10" text-anchor="middle" font-weight="bold">TREND CHANGE = First Lower Low breaks structure</text>
</svg>`,

  // ── 15. Volume Analysis ──────────────────────────────────────────────────────
  volume_analysis: () => {
    const bars = [], prices = []
    for (let i = 0; i < 38; i++) {
      const x = 55 + i * 15.8
      const price = 155 + 28*Math.sin(i*0.26) + i*0.9
      const volBase = 28 + 18*Math.abs(Math.sin(i*0.26 + 0.4))
      const color = Math.sin(i*0.26) > Math.sin((i-1)*0.26) ? GREEN : RED
      bars.push({x, price, volBase, color})
      prices.push([x, price])
    }
    const priceP = "M "+prices.map(([x,y])=>`${x.toFixed(1)},${y.toFixed(1)}`).join(" L ")
    const volBars = bars.map(({x,volBase,color}) => {
      const by = 282 - volBase
      return `<rect x="${(x-5.5).toFixed(1)}" y="${by.toFixed(1)}" width="11" height="${volBase.toFixed(1)}" fill="${color}" fill-opacity="0.65" rx="1"/>`
    }).join('')
    return `
<svg viewBox="0 0 680 310" xmlns="http://www.w3.org/2000/svg" style="background:${BG};border-radius:12px;display:block;width:100%;font-family:ui-monospace,monospace">
  <text x="340" y="20" fill="${TEXT}" font-size="13" font-weight="bold" text-anchor="middle">Volume Analysis — Confirming Price with Volume</text>
  <text x="50" y="42" fill="${SUB}" font-size="10" font-weight="bold">PRICE</text>
  <line x1="50" y1="47" x2="638" y2="47" stroke="${BORDER}" stroke-width="1"/>
  <line x1="50" y1="190" x2="638" y2="190" stroke="${BORDER}" stroke-width="1"/>
  <path d="${priceP}" fill="none" stroke="${BLUE}" stroke-width="2"/>
  <text x="50" y="212" fill="${SUB}" font-size="10" font-weight="bold">VOLUME</text>
  <line x1="50" y1="218" x2="638" y2="218" stroke="${BORDER}" stroke-width="1"/>
  ${volBars}
  <line x1="55" y1="258" x2="638" y2="258" stroke="${ORANGE}" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="632" y="256" fill="${ORANGE}" font-size="8" text-anchor="end">Avg</text>
  <text x="180" y="40" fill="${GREEN}" font-size="9" font-weight="bold" text-anchor="middle">High volume + Up price</text>
  <text x="180" y="51" fill="${GREEN}" font-size="8" text-anchor="middle">= Strong institutional buying</text>
  <text x="500" y="40" fill="${RED}" font-size="9" font-weight="bold" text-anchor="middle">High volume + Down price</text>
  <text x="500" y="51" fill="${RED}" font-size="8" text-anchor="middle">= Strong institutional selling</text>
  <rect x="30" y="288" width="620" height="18" fill="${CARD}" rx="6" stroke="${BORDER}"/>
  <text x="340" y="300" fill="${TEXT}" font-size="10" text-anchor="middle">Rising price + Rising volume = Valid trend · Rising price + Falling volume = Weak rally likely to reverse · Volume confirms the move</text>
</svg>`
  },
}

export const CHART_CAPTIONS = {
  candlestick_anatomy: "Candlestick anatomy: body shows who won the period, wicks show rejected extremes. Green = buyers won; Red = sellers won.",
  key_patterns: "Five essential candlestick reversal patterns — effectiveness depends on location (key support/resistance) and confirmation on the following candle.",
  support_resistance: "Support and resistance with role reversal: former resistance becomes new support after a confirmed breakout on above-average volume.",
  head_shoulders: "Head and shoulders: three-peak reversal pattern with the middle peak highest. Sell signal on neckline break; target = head-to-neckline distance projected down.",
  bull_flag: "Bull flag continuation pattern: sharp flagpole, orderly low-volume flag consolidation, then high-volume breakout resuming the prior trend.",
  moving_averages: "SMA 50 and SMA 200 with golden cross signal. The 200-day moving average is the most important single trend filter in technical analysis.",
  rsi: "RSI(14) showing overbought/oversold levels with bearish divergence warning. Use ADX to determine the correct RSI interpretation for current market regime.",
  macd: "MACD with signal line crossovers (bullish and bearish) and momentum histogram. Histogram shrinking before the crossover gives early warning of signal.",
  bollinger_bands: "Bollinger Bands showing squeeze (low volatility = coming expansion) and band walks in trending markets. ADX determines fade vs. follow strategy.",
  fibonacci: "Fibonacci retracement from swing low to swing high. The 61.8% golden ratio is the most important level — often the last line of defense before trend reversal.",
  options_payoff: "Long call and long put payoff diagrams. Maximum loss equals premium paid; profit is theoretically unlimited for calls and substantial for puts.",
  iron_condor: "Iron condor payoff: maximum profit in the central zone between short strikes. Best used in low-volatility ranging markets when implied volatility is elevated.",
  vol_structure: "Implied volatility term structure (left) and volatility skew across strikes (right). Equity skew means OTM puts trade at a premium to OTM calls.",
  trend_structure: "Uptrend defined by higher highs (HH) and higher lows (HL). The first lower low breaks the trend structure and signals potential reversal.",
  volume_analysis: "Volume confirming price: rising price needs rising volume for sustainability. Low-volume rallies warn of weak buying interest and potential reversal.",
}
