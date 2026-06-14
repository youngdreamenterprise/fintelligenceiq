export const TRADING_LEARN_EXT_1 = {
  'ta-u2': {
    id: 'ta-u2', title: 'Chart Patterns: The Complete Strategy Guide',
    subtitle: 'Head and shoulders, double bottoms, and flags - exact entry, stop, and target rules with visual examples',
    readTime: '12 min', hero: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
    sections: [
      { heading: 'Head and Shoulders - The Most Reliable Reversal Pattern', body: `The Head and Shoulders is the most well-studied reversal pattern in technical analysis, with documented completion rates above 80% when all conditions are met. It forms at the end of uptrends when buyer momentum is exhausted.

THREE PEAKS: Left shoulder (first rally), HEAD (higher peak - buyers made one last push), and right shoulder (lower than head - buyers could not get back to the high). The lower right shoulder is the critical tell.

THE NECKLINE: Draw a line connecting the two troughs (lows) between the three peaks. This is your entry trigger level.

VOLUME SIGNATURE: Volume should be highest on the left shoulder, lower on the head, and lowest on the right shoulder. Volume MUST spike on the breakdown - that confirms institutional selling.

ENTRY RULE: Short when price CLOSES below the neckline on above-average volume. Do not short on a touch - wait for the full candle close. False breaks below the neckline without a close are common and trap early sellers.

STOP PLACEMENT: Above the right shoulder high. If price recovers above the right shoulder, the pattern has completely failed and the bullish trend may be resuming.

PROFIT TARGET: Measure the distance from the HEAD to the neckline (call it D). Project D downward from your breakout entry. This gives your minimum target.

COMPLETE EXAMPLE: Stock peaks at 100 (head). Neckline is at 85. Right shoulder peaks at 92.
- Entry: Short when price closes below 85
- Stop: 93 (above right shoulder)
- Target: 85 minus 15 = 70
- Risk per share: 8 dollars. Reward: 15 dollars. R:R = 1:1.9`, callout: { type: 'warning', text: `If the right shoulder forms HIGHER than the left shoulder, the bearish case is weakening. A right shoulder that breaks above the left shoulder high signals buyers are gaining strength - exit any short bias immediately. Only trade this pattern when the right shoulder clearly shows a lower high than the left shoulder.` },
      svg: `<svg viewBox="0 0 720 310" xmlns="http://www.w3.org/2000/svg" style="background:#061018;border-radius:12px;display:block;width:100%;font-family:ui-monospace,monospace">
  <text x="360" y="20" fill="#E8F4FF" font-size="13" font-weight="bold" text-anchor="middle">Head and Shoulders — Complete Trade Setup</text>
  <!-- Price path -->
  <polyline points="40,255 90,225 130,255 175,155 225,250 275,140 340,90 400,140 445,250 490,160 530,255 570,255 630,280 700,300" fill="none" stroke="#E8F4FF" stroke-width="2.5" stroke-opacity="0.8"/>
  <!-- Neckline -->
  <line x1="130" y1="255" x2="700" y2="263" stroke="#F7931A" stroke-width="2" stroke-dasharray="6,4"/>
  <text x="570" y="250" fill="#F7931A" font-size="10" font-weight="bold">NECKLINE (Entry Zone)</text>
  <!-- Pattern labels -->
  <text x="175" y="148" fill="#FF6B35" font-size="10" font-weight="bold" text-anchor="middle">LEFT</text>
  <text x="175" y="160" fill="#FF6B35" font-size="10" text-anchor="middle">SHOULDER</text>
  <text x="340" y="83" fill="#FF4560" font-size="11" font-weight="bold" text-anchor="middle">HEAD</text>
  <text x="490" y="153" fill="#FF6B35" font-size="10" font-weight="bold" text-anchor="middle">RIGHT</text>
  <text x="490" y="165" fill="#FF6B35" font-size="10" text-anchor="middle">SHOULDER</text>
  <text x="490" y="177" fill="#4A7AA0" font-size="9" text-anchor="middle">(lower = weaker buyers)</text>
  <!-- Distance D marker -->
  <line x1="340" y1="92" x2="340" y2="255" stroke="#FF4560" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="355" y="178" fill="#FF4560" font-size="9">D</text>
  <!-- SELL entry arrow -->
  <polygon points="620,270 614,260 626,260" fill="#FF4560"/>
  <line x1="620" y1="270" x2="620" y2="240" stroke="#FF4560" stroke-width="2"/>
  <rect x="598" y="226" width="44" height="14" fill="#FF4560" fill-opacity="0.2" rx="4" stroke="#FF4560" stroke-width="1"/>
  <text x="620" y="236" fill="#FF4560" font-size="9" text-anchor="middle" font-weight="bold">SHORT ENTRY</text>
  <!-- STOP loss line -->
  <line x1="40" y1="172" x2="700" y2="172" stroke="#FF4560" stroke-width="1.5" stroke-dasharray="4,3" stroke-opacity="0.7"/>
  <text x="48" y="168" fill="#FF4560" font-size="9" font-weight="bold">STOP → Above right shoulder high</text>
  <!-- TARGET line -->
  <line x1="600" y1="255" x2="700" y2="255" stroke="#00D09C" stroke-width="1"/>
  <line x1="600" y1="318" x2="700" y2="318" stroke="#00D09C" stroke-width="1"/>
  <line x1="620" y1="255" x2="620" y2="318" stroke="#00D09C" stroke-width="1.5" stroke-dasharray="3,2"/>
  <text x="635" y="291" fill="#00D09C" font-size="9">TARGET</text>
  <text x="635" y="302" fill="#00D09C" font-size="9">= D below</text>
  <text x="635" y="313" fill="#00D09C" font-size="9">neckline</text>
  <!-- Rules box -->
  <rect x="30" y="278" width="480" height="28" fill="#081525" rx="6" stroke="#0D2035"/>
  <text x="245" y="290" fill="#F7931A" font-size="9" font-weight="bold" text-anchor="middle">ENTRY RULE</text>
  <text x="245" y="300" fill="#E8F4FF" font-size="9" text-anchor="middle">Short when price CLOSES below neckline on high volume · Stop above right shoulder · Target = Head-to-neckline distance projected down</text>
</svg>`,
      svgCaption: 'H and S complete setup: short below neckline close, stop above right shoulder, target = head-to-neckline distance projected down' },
      { heading: 'Double Bottom - The Classic Recovery Pattern', body: `The Double Bottom forms when sellers attempt to push price to new lows twice and fail both times. Two failures at the same price level confirms strong buying interest there.

VALID PATTERN REQUIREMENTS:
- Two distinct lows within 3% of each other (nearly equal depth)
- A clear rally between the two lows that reaches the neckline
- Second bottom forms on LOWER volume than the first (sellers exhausting)
- Breakout above neckline on HIGH volume (buyers take control)

THE NECKLINE: The peak price between the two lows. This is your buy trigger.

ENTRY RULE: Buy ONLY when price closes ABOVE the neckline. Never buy at the second bottom hoping it holds - many patterns test the lows a third time before the real reversal. The neckline close is your confirmation.

STOP PLACEMENT: Below both lows (not just the second low). If price breaks below both lows, the pattern has completely failed.

PROFIT TARGET: Pattern depth (neckline to bottom = D). Add D to the neckline breakout.

COMPLETE EXAMPLE: Stock hits lows of 40 dollars twice. Neckline at 50 dollars. D = 10 dollars.
- Entry: Buy when price closes above 50
- Stop: Below 39 (below both lows)
- Target: 50 plus 10 = 60 dollars
- Risk: 11 dollars. Reward: 10 dollars.
Move stop to breakeven once price reaches 55 (halfway to target).`, callout: { type: 'key', text: `Volume at the second bottom compared to the first bottom is the quality filter. If the second bottom forms on EQUAL or HIGHER volume than the first, sellers are still aggressive - the pattern is lower quality. You want to see volume clearly contract at the second bottom, showing sellers are giving up. Then you want to see volume explode on the neckline breakout.` },
      svg: `<svg viewBox="0 0 720 300" xmlns="http://www.w3.org/2000/svg" style="background:#061018;border-radius:12px;display:block;width:100%;font-family:ui-monospace,monospace">
  <text x="360" y="20" fill="#E8F4FF" font-size="13" font-weight="bold" text-anchor="middle">Double Bottom — Complete Trade Setup</text>
  <!-- Downtrend into first bottom -->
  <polyline points="40,80 90,105 140,130 190,165 240,200 290,225 340,240 390,218 440,245 490,215" fill="none" stroke="#E8F4FF" stroke-width="2" stroke-opacity="0.4"/>
  <!-- The pattern: two bottoms and rally -->
  <polyline points="340,240 365,220 390,218 415,200 440,245 465,225 490,215 530,185 570,155 620,110 680,70" fill="none" stroke="#E8F4FF" stroke-width="2.5"/>
  <!-- Resistance / neckline -->
  <line x1="340" y1="218" x2="700" y2="218" stroke="#F7931A" stroke-width="2" stroke-dasharray="6,4"/>
  <text x="545" y="210" fill="#F7931A" font-size="10" font-weight="bold" text-anchor="middle">NECKLINE — Entry Level</text>
  <!-- Bottom labels -->
  <text x="360" y="255" fill="#3B82F6" font-size="10" font-weight="bold" text-anchor="middle">BOTTOM 1</text>
  <text x="450" y="260" fill="#3B82F6" font-size="10" font-weight="bold" text-anchor="middle">BOTTOM 2</text>
  <text x="450" y="272" fill="#00D09C" font-size="9" text-anchor="middle">must hold above Bottom 1</text>
  <!-- Height D -->
  <line x1="395" y1="240" x2="395" y2="218" stroke="#3B82F6" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="404" y="230" fill="#3B82F6" font-size="9">D</text>
  <!-- BUY entry arrow -->
  <polygon points="530,182 524,195 536,195" fill="#00D09C"/>
  <line x1="530" y1="182" x2="530" y2="215" stroke="#00D09C" stroke-width="2"/>
  <rect x="508" y="166" width="44" height="14" fill="#00D09C" fill-opacity="0.2" rx="4" stroke="#00D09C" stroke-width="1"/>
  <text x="530" y="176" fill="#00D09C" font-size="9" text-anchor="middle" font-weight="bold">BUY ENTRY</text>
  <!-- Stop -->
  <line x1="40" y1="248" x2="530" y2="248" stroke="#FF4560" stroke-width="1.5" stroke-dasharray="4,3" stroke-opacity="0.7"/>
  <text x="48" y="244" fill="#FF4560" font-size="9" font-weight="bold">STOP → Below both bottoms</text>
  <!-- Target -->
  <line x1="580" y1="218" x2="680" y2="218" stroke="#00D09C" stroke-width="1"/>
  <line x1="580" y1="155" x2="680" y2="155" stroke="#00D09C" stroke-width="1"/>
  <line x1="620" y1="218" x2="620" y2="155" stroke="#00D09C" stroke-width="1.5" stroke-dasharray="3,2"/>
  <text x="638" y="192" fill="#00D09C" font-size="9">TARGET</text>
  <text x="638" y="202" fill="#00D09C" font-size="9">= D above</text>
  <text x="638" y="212" fill="#00D09C" font-size="9">neckline</text>
  <!-- Rule box -->
  <rect x="30" y="272" width="480" height="22" fill="#081525" rx="6" stroke="#0D2035"/>
  <text x="245" y="287" fill="#E8F4FF" font-size="9" text-anchor="middle">Enter on CLOSE above neckline · Both bottoms at similar price level · Volume should increase on breakout · Stop below both lows</text>
</svg>`,
      svgCaption: 'Double Bottom: buy the neckline close, stop below both lows, target = pattern depth added to neckline' },
      { heading: 'Bull and Bear Flags - Trading With the Trend', body: `Flags are continuation patterns forming when a strong directional move (the pole) pauses in an orderly channel before resuming. They are highest-probability because they trade WITH established momentum.

BULL FLAG ANATOMY:
1. FLAGPOLE: A sharp, near-vertical rally on high volume in a short period (5-15 candles typically)
2. FLAG: An orderly declining channel on declining volume (the pause and regroup)
3. BREAKOUT: Break above the upper channel line on expanding volume (trend resumes)

WHY DECLINING VOLUME DURING THE FLAG IS CRITICAL: Declining volume during the flag means there is no real selling pressure - just profit-taking. Big buyers are either holding or adding at lower prices. If volume stays high or increases during the flag, it means real sellers are unloading and the pattern becomes suspect.

ENTRY RULE: Buy when price CLOSES above the upper line of the flag channel. Volume must expand significantly on the breakout candle. If breakout volume is less than 1.5x the flag average, the breakout is suspect.

STOP PLACEMENT: Below the lowest candle of the flag. A close below the entire flag means the pattern has failed.

TARGET: Measure the flagpole from bottom to top. Add that length to your entry point.

EXAMPLE: Stock rallies from 50 to 70 (pole = 20 dollars). Flag consolidates from 70 down to 66. Entry at 70 breakout. Stop at 65. Target: 70 plus 20 = 90.

BEAR FLAG: Exactly mirrored. Sharp down pole, orderly bounce flag on low volume, breakdown below flag channel on high volume. Short the breakdown. Stop above flag high.`, callout: { type: 'warning', text: `The single most common mistake with bull flags: buying during the flag consolidation before the breakout. The flag can extend significantly lower before resolving. Entering early means sitting through more volatility with a worse entry. The breakout close confirmation is what transforms this from a hope trade into a pattern trade with defined rules and statistics.` },
      svg: `<svg viewBox="0 0 720 290" xmlns="http://www.w3.org/2000/svg" style="background:#061018;border-radius:12px;display:block;width:100%;font-family:ui-monospace,monospace">
  <text x="360" y="20" fill="#E8F4FF" font-size="13" font-weight="bold" text-anchor="middle">Bull Flag — Complete Trade Execution Guide</text>
  <!-- Flagpole: sharp rally -->
  <polyline points="60,250 78,232 95,208 112,180 128,150 144,118 160,88 175,70" fill="none" stroke="#00D09C" stroke-width="3.5"/>
  <text x="100" y="170" fill="#00D09C" font-size="10" font-weight="bold">FLAGPOLE</text>
  <text x="100" y="183" fill="#00D09C" font-size="9">(strong impulse rally)</text>
  <text x="100" y="196" fill="#4A7AA0" font-size="9">Vol: HIGH ↑↑</text>
  <!-- Flag: consolidation channel -->
  <polyline points="175,70 194,84 214,78 234,90 254,84 274,96 294,90 314,101" fill="none" stroke="#FF6B35" stroke-width="2.5"/>
  <line x1="175" y1="70" x2="340" y2="90" stroke="#FF6B35" stroke-width="1.5" stroke-dasharray="5,3"/>
  <line x1="175" y1="90" x2="340" y2="112" stroke="#FF6B35" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="253" y="60" fill="#FF6B35" font-size="10" font-weight="bold" text-anchor="middle">FLAG</text>
  <text x="253" y="73" fill="#FF6B35" font-size="9" text-anchor="middle">(orderly pullback)</text>
  <text x="253" y="85" fill="#4A7AA0" font-size="9" text-anchor="middle">Vol: LOW ↓ (healthy)</text>
  <!-- Breakout -->
  <polyline points="314,101 334,92 356,74 378,52 400,32 420,15" fill="none" stroke="#00D09C" stroke-width="3.5"/>
  <!-- BUY arrow at breakout -->
  <polygon points="325,91 319,104 331,104" fill="#00D09C"/>
  <line x1="325" y1="91" x2="325" y2="108" stroke="#00D09C" stroke-width="2"/>
  <rect x="303" y="108" width="44" height="14" fill="#00D09C" fill-opacity="0.25" rx="4" stroke="#00D09C" stroke-width="1"/>
  <text x="325" y="118" fill="#00D09C" font-size="9" text-anchor="middle" font-weight="bold">BUY ENTRY</text>
  <!-- Stop line -->
  <line x1="40" y1="115" x2="400" y2="115" stroke="#FF4560" stroke-width="1.5" stroke-dasharray="4,3" stroke-opacity="0.8"/>
  <text x="48" y="111" fill="#FF4560" font-size="9" font-weight="bold">STOP → Below bottom of flag channel</text>
  <!-- Flagpole height H marker -->
  <line x1="44" y1="72" x2="44" y2="250" stroke="#4A7AA0" stroke-width="1"/>
  <text x="12" y="163" fill="#4A7AA0" font-size="9" transform="rotate(-90,12,163)">H (pole height)</text>
  <!-- Target markers -->
  <line x1="420" y1="15" x2="420" y2="92" stroke="#00D09C" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="380" y1="15" x2="440" y2="15" stroke="#00D09C" stroke-width="1.5"/>
  <line x1="380" y1="92" x2="440" y2="92" stroke="#00D09C" stroke-width="1.5"/>
  <text x="448" y="35" fill="#00D09C" font-size="9" font-weight="bold">TARGET</text>
  <text x="448" y="47" fill="#00D09C" font-size="9">= Flagpole</text>
  <text x="448" y="59" fill="#00D09C" font-size="9">height (H)</text>
  <text x="448" y="71" fill="#00D09C" font-size="9">added from</text>
  <text x="448" y="83" fill="#00D09C" font-size="9">breakout pt</text>
  <!-- Key rules -->
  <rect x="30" y="260" width="660" height="26" fill="#081525" rx="6" stroke="#0D2035"/>
  <text x="360" y="273" fill="#F7931A" font-size="9" font-weight="bold" text-anchor="middle">3 RULES FOR A VALID FLAG: (1) Strong prior uptrend (flagpole) · (2) Pullback on declining volume in tight channel · (3) Breakout above upper channel on expanding volume</text>
</svg>`,
      svgCaption: 'Bull flag: entry at flag channel breakout close, stop below flag low, target = flagpole length from breakout point' }
    ],
    keyPoints: ['Head and Shoulders: three-peak reversal - short on neckline close, stop above right shoulder, target = head-to-neckline distance below neckline', 'Double bottom: two equal lows after a downtrend - buy on neckline close, stop below both lows, target = pattern depth above neckline', 'Bull flag: sharp rally + declining-volume pullback + expanding-volume breakout above channel - target equals the flagpole length', 'Volume must confirm every pattern: low volume at second test, high volume at breakout - without volume confirmation the pattern is low quality', 'Never enter chart pattern trades before the key level confirms on a candle close - confirmation eliminates the majority of false signals']
  },
  'ta-u3': {
    id: 'ta-u3', title: 'Moving Averages: Complete Trading Strategy',
    subtitle: 'The 200-day rule, EMA 9/21 crossover system, and pullback entries - exact rules a beginner can execute today',
    readTime: '11 min', hero: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
    sections: [
      { heading: 'The 200-Day Moving Average: The Most Important Line on Any Chart', body: `The 200-day simple moving average (SMA) is the single most important moving average in professional trading. Institutional investors managing trillions watch it universally. That collective attention creates real support and resistance at this level.

THE CORE RULE: Price above the 200-day MA = long-term uptrend. Only take LONG (buy) trades. Price below the 200-day MA = long-term downtrend. Only take SHORT trades or stay out entirely.

This single rule, applied consistently, historically improves win rates on nearly any other trading strategy by 15-25% by eliminating counter-trend trades.

THE THREE-MA TREND SYSTEM: Use 20-EMA, 50-EMA, and 200-SMA together.
- All three aligned upward (20 above 50 above 200): strong uptrend, take long signals aggressively
- All three aligned downward (20 below 50 below 200): strong downtrend, take short signals or stand aside
- Mixed alignment: no clear directional edge, reduce position size or stand aside

EMA vs SMA: Exponential Moving Averages weight recent prices more, making them faster. Use EMA for trading entries (20-EMA, 50-EMA). Use SMA for long-term trend filter (200-SMA). This combination gives responsive signals within a stable trend framework.

READING MOVING AVERAGES AS DYNAMIC SUPPORT: In an uptrend, the rising 20-EMA acts as support. Price regularly pulls back to touch it before bouncing higher. The 50-EMA acts as deeper support in stronger trends. The 200-SMA is the ultimate support line in major bull markets. When price pulls back to a rising MA, that is not a sell signal - it is a potential buying opportunity.`, callout: { type: 'key', text: `The 200-day MA works because EVERYBODY uses it. When Bitcoin falls toward its 200-day MA in a bull market, millions of traders simultaneously see the same support level and place buy orders. That collective buying creates real, measurable support. Technical levels become self-fulfilling when enough participants use them simultaneously - and no level has more universal institutional attention than the 200-day MA.` },
      svg: `<svg viewBox="0 0 720 300" xmlns="http://www.w3.org/2000/svg" style="background:#061018;border-radius:12px;display:block;width:100%;font-family:ui-monospace,monospace">
  <text x="360" y="20" fill="#E8F4FF" font-size="13" font-weight="bold" text-anchor="middle">EMA 9 / EMA 21 Crossover Strategy — With Entry, Stop, Target</text>
  <!-- Price line -->
  <polyline points="40,220 70,215 100,225 130,218 160,200 185,210 210,190 235,198 260,175 285,182 310,165 335,155 360,142 385,135 410,118 435,110 460,105 485,95 510,88 535,80 560,72 590,68 620,60 660,52" fill="none" stroke="#E8F4FF" stroke-width="1.5" stroke-opacity="0.6"/>
  <!-- EMA 21 (slow) -->
  <polyline points="40,235 70,232 100,230 130,228 160,222 185,218 210,208 235,202 260,192 285,185 310,175 335,165 360,158 385,150 410,140 435,130 460,120 485,110 510,102 535,94 560,86 590,80 620,73 660,65" fill="none" stroke="#FF4560" stroke-width="2.5"/>
  <!-- EMA 9 (fast) -->
  <polyline points="40,228 70,225 100,230 130,222 160,205 185,212 210,195 235,200 260,180 285,185 310,168 335,158 360,145 385,138 410,122 435,114 460,108 485,98 510,90 535,82 560,74 590,70 620,62 660,54" fill="none" stroke="#00D09C" stroke-width="2.5"/>
  <!-- Golden cross zone -->
  <line x1="235" y1="40" x2="235" y2="260" stroke="#F7931A" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="245" y="52" fill="#F7931A" font-size="9" font-weight="bold">GOLDEN CROSS</text>
  <text x="245" y="63" fill="#F7931A" font-size="9">EMA9 crosses above EMA21</text>
  <!-- BUY arrow -->
  <polygon points="258,195 252,208 264,208" fill="#00D09C"/>
  <line x1="258" y1="195" x2="258" y2="212" stroke="#00D09C" stroke-width="2"/>
  <rect x="238" y="212" width="40" height="14" fill="#00D09C" fill-opacity="0.25" rx="4" stroke="#00D09C" stroke-width="1"/>
  <text x="258" y="222" fill="#00D09C" font-size="9" text-anchor="middle" font-weight="bold">BUY</text>
  <!-- Stop: below EMA21 -->
  <line x1="40" y1="240" x2="360" y2="240" stroke="#FF4560" stroke-width="1.5" stroke-dasharray="4,3" stroke-opacity="0.7"/>
  <text x="48" y="236" fill="#FF4560" font-size="9" font-weight="bold">STOP → Candle CLOSES below EMA 21</text>
  <!-- Legend -->
  <line x1="48" y1="272" x2="76" y2="272" stroke="#00D09C" stroke-width="2.5"/>
  <text x="83" y="276" fill="#00D09C" font-size="10">EMA 9 (fast)</text>
  <line x1="180" y1="272" x2="208" y2="272" stroke="#FF4560" stroke-width="2.5"/>
  <text x="215" y="276" fill="#FF4560" font-size="10">EMA 21 (slow)</text>
  <line x1="330" y1="272" x2="358" y2="272" stroke="#E8F4FF" stroke-width="1.5" stroke-opacity="0.6"/>
  <text x="365" y="276" fill="#E8F4FF" font-size="10" opacity="0.7">Price</text>
  <!-- Exit annotation -->
  <rect x="30" y="282" width="660" height="14" fill="#081525" rx="4" stroke="#0D2035"/>
  <text x="360" y="292" fill="#E8F4FF" font-size="9" text-anchor="middle">Exit Rule: Sell when EMA9 crosses BACK BELOW EMA21 (death cross) — do not use fixed targets, let the cross signal your exit</text>
</svg>`,
      svgCaption: 'EMA 9/21 crossover: buy golden cross with ADX above 25 and price above 200-day MA. Exit on death cross or EMA21 close violation.' },
      { heading: 'Strategy: The EMA 9/21 Crossover System - Complete Rules', body: `The EMA 9/21 crossover system generates clear, objective signals with no subjective interpretation. Every rule is defined precisely.

BEFORE EVERY TRADE - CHECK ALL THREE:
1. Price is above the 200-day SMA (for longs) or below it (for shorts)
2. ADX is above 25 (confirms this is a trending market, not a range)
3. The MACD histogram is positive (optional but confirms momentum)

BUY SIGNAL - THE GOLDEN CROSS:
When EMA 9 crosses ABOVE EMA 21 while price is above the 200-day MA and ADX is above 25:
- Enter at the CLOSE of the candle where the crossover occurs
- Do not enter early during the candle - wait for the close to confirm

STOP LOSS:
- Exit any long if a candle CLOSES below the EMA 21
- Intraday dips below EMA 21 that recover by close do not require exit
- Only the closing violation triggers exit

TAKE PROFIT / EXIT:
- EMA 9 crosses back BELOW EMA 21 (Death Cross) = exit
- Do NOT use a fixed profit target - let the trend run until the cross reverses
- In strong trends this approach captures 3-5 times more profit than a fixed target

SHORT SIGNAL - THE DEATH CROSS:
EMA 9 crosses below EMA 21 while price is below 200-day MA and ADX is above 25.

TIMEFRAME GUIDE:
- Weekly chart EMA 9/21: major position trades lasting months
- Daily chart EMA 9/21: swing trades lasting days to weeks (recommended starting point)
- 4-hour chart EMA 9/21: shorter trades lasting hours to days
- 1-hour and below: too many false signals in most markets`, callout: { type: 'warning', text: `The EMA crossover fails completely in ranging markets. When ADX is below 20, the two EMAs cross back and forth repeatedly generating a series of small losses. This death-by-a-thousand-cuts is the most common way traders blow their account using EMA crossovers. ADX above 25 is not optional - it is the filter that makes the entire system work. Never take an EMA crossover trade without checking ADX first.` } },
      { heading: 'Pullback-to-MA Strategy: The Better Risk/Reward Entry', body: `Buying breakouts means entering after price has already moved significantly. Risk is poor. The pullback-to-MA strategy waits for price to retrace to a rising moving average, giving a much better entry price and dramatically superior risk/reward.

STEP 1: CONFIRM THE TREND
- Price clearly above 200-day SMA
- Clear higher highs and higher lows on the chart
- ADX above 25

STEP 2: WAIT FOR THE PULLBACK
After a strong rally, price will pull back toward the rising 20-EMA or 50-EMA. Do not buy during the pullback. Just watch.

STEP 3: LOOK FOR THE REVERSAL SIGNAL AT THE MA
When price reaches the moving average, watch for:
- Hammer candle: long lower wick, small body near top, at the MA level
- Bullish engulfing: large green candle fully covers the prior red candle at the MA
Volume should be declining during the pullback and spike on the reversal candle

STEP 4: ENTER AT THE REVERSAL CANDLE CLOSE
Buy at the close of the reversal candlestick. Not as price approaches the MA - on the close.

STEP 5: STOP LOSS
Just below the LOW of the reversal candle. Tight stop.

STEP 6: TARGET
Previous swing high as minimum. Hold for the continuation of the trend.

RISK/REWARD COMPARISON:
Buying the breakout at 110 after a rally from 80: stop at 95, risk = 15 dollars, target = 130, R:R = 1.3:1
Buying the pullback to 20-EMA at 100: stop at 96, risk = 4 dollars, target = 130, R:R = 7.5:1
Same trade. Dramatically better risk/reward from the pullback entry.`, callout: { type: 'key', text: `Which MA to use for pullback entries depends on trend strength. Very fast, aggressive trends respect the 20-EMA for pullbacks - price barely touches it before bouncing. Steady moderate trends pull back to the 50-EMA before resuming. Major secular moves in stocks or crypto pull back to the 200-SMA at major corrections. Watch historically which MA has acted as support to identify which one the market is currently respecting.` } }
    ],
    keyPoints: ['The 200-day SMA is the single most important MA - only take long trades when price is above it, only shorts when below. This one filter improves win rates 15-25% on any strategy.', 'EMA 9/21 crossover: buy the golden cross with ADX above 25 and price above the 200-day MA. Exit on the death cross. Do not use fixed targets.', 'ADX must be above 25 before trading any EMA crossover - in ranging markets the crossovers are noise and generate repeated small losses', 'Pullback-to-MA entries give far better risk/reward than breakout entries - often 5:1 to 8:1 versus a breakout entry at 1:1 to 2:1', 'Stop on pullback trades goes just below the reversal candle low - tight stop that lets you risk very little while targeting the entire next trend leg']
  },
  'ta-u5': {
    id: 'ta-u5', title: 'Fibonacci Retracement: Complete Execution Guide',
    subtitle: 'How to draw it correctly, why the 61.8% level matters most, and the step-by-step strategy with exact entry rules',
    readTime: '10 min', hero: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
    sections: [
      { heading: 'Why Fibonacci Levels Work and How to Draw Them Correctly', body: `Fibonacci retracement levels work because enough traders use them that they become self-fulfilling. When institutional traders collectively expect a bounce at the 61.8% level and place buy orders there, price bounces there. The 61.8% level - the Golden Ratio - appears throughout nature and has been observed acting as support and resistance in financial markets for over a century.

HOW TO DRAW FIBONACCI RETRACEMENT CORRECTLY:

IN AN UPTREND (finding a pullback entry to buy):
1. Identify the most recent significant SWING LOW (the bottom of the prior move up)
2. Identify the most recent significant SWING HIGH (the top of the current move)
3. In your charting tool: click the swing low FIRST, drag to the swing high
4. The tool automatically draws levels at 23.6%, 38.2%, 50%, 61.8%, 78.6%

IN A DOWNTREND (finding bounce entry to sell short):
1. Click the swing HIGH first, drag down to the swing LOW
2. Levels flip - the 61.8% level is now 61.8% of the way up from the low

WHAT COUNTS AS A VALID SWING POINT:
A valid swing low is a candle low that is clearly lower than the candles on both sides - at least 2-3 candles that are visibly higher on each side. Do NOT use minor intraday wiggles. Use the obvious, clear price extremes that any chart reader would immediately identify.

THE FIVE KEY LEVELS AND THEIR MEANING:
- 23.6%: Very shallow retracement - only in extremely strong trends
- 38.2%: Shallow retracement - strong trend that barely paused
- 50.0%: Moderate retracement - the most common in most markets
- 61.8%: The Golden Ratio - most powerful, deepest valid retracement in an uptrend
- 78.6%: Very deep - if price reaches here the trend may be weakening`, callout: { type: 'key', text: `Fibonacci confluence is the most powerful setup: when the 61.8% level also aligns with a prior support zone from a previous chart level, a rising moving average passing through the same price, and a round number price - you have three independent technical reasons for buyers to appear at that exact level. Each confluence factor multiplies the probability that price will hold there.` },
      svg: `<svg viewBox="0 0 720 300" xmlns="http://www.w3.org/2000/svg" style="background:#061018;border-radius:12px;display:block;width:100%;font-family:ui-monospace,monospace">
  <text x="360" y="20" fill="#E8F4FF" font-size="13" font-weight="bold" text-anchor="middle">Fibonacci Retracement — Step-by-Step Trade Execution</text>
  <!-- Upswing (draw from bottom to top) -->
  <polyline points="60,255 100,240 140,220 180,198 220,172 260,148 300,118 340,92 380,72" fill="none" stroke="#00D09C" stroke-width="3"/>
  <!-- Retracement -->
  <polyline points="380,72 415,92 450,120 490,142 520,158" fill="none" stroke="#FF6B35" stroke-width="2.5" stroke-dasharray="5,3"/>
  <!-- Resume -->
  <polyline points="520,158 555,140 592,115 628,85 665,60" fill="none" stroke="#00D09C" stroke-width="3" stroke-dasharray="4,4"/>
  <!-- Fib levels (low=255, high=72, range=183) -->
  <!-- 0% = 72 -->
  <line x1="380" y1="72" x2="680" y2="72" stroke="#00D09C" stroke-width="1.5"/>
  <text x="684" y="76" fill="#00D09C" font-size="10" font-weight="bold">0% — Swing High</text>
  <!-- 23.6% = 72 + 43 = 115 -->
  <line x1="380" y1="115" x2="680" y2="115" stroke="#4A7AA0" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="684" y="119" fill="#4A7AA0" font-size="9">23.6%</text>
  <!-- 38.2% = 72 + 70 = 142 -->
  <line x1="380" y1="142" x2="680" y2="142" stroke="#F7931A" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="684" y="146" fill="#F7931A" font-size="10" font-weight="bold">38.2%</text>
  <!-- 50% = 72 + 91.5 = 163 -->
  <line x1="380" y1="163" x2="680" y2="163" stroke="#FF6B35" stroke-width="2" stroke-dasharray="4,3"/>
  <text x="684" y="167" fill="#FF6B35" font-size="10" font-weight="bold">50.0%</text>
  <!-- 61.8% = 72 + 113 = 185 -->
  <line x1="380" y1="185" x2="680" y2="185" stroke="#F7931A" stroke-width="2.5"/>
  <text x="684" y="189" fill="#F7931A" font-size="11" font-weight="bold">61.8% ★ KEY</text>
  <!-- 100% = 255 -->
  <line x1="380" y1="255" x2="680" y2="255" stroke="#FF4560" stroke-width="1.5"/>
  <text x="684" y="259" fill="#FF4560" font-size="10" font-weight="bold">100% — Swing Low</text>
  <!-- Price bounces at 61.8% and we enter -->
  <circle cx="520" cy="158" r="12" fill="none" stroke="#F7931A" stroke-width="2"/>
  <!-- BUY arrow -->
  <polygon points="555,136 549,150 561,150" fill="#00D09C"/>
  <line x1="555" y1="136" x2="555" y2="155" stroke="#00D09C" stroke-width="2"/>
  <text x="555" y="128" fill="#00D09C" font-size="9" text-anchor="middle" font-weight="bold">BUY</text>
  <text x="555" y="119" fill="#4A7AA0" font-size="8" text-anchor="middle">(at 61.8% level)</text>
  <!-- Stop below 78.6% -->
  <line x1="380" y1="216" x2="680" y2="216" stroke="#FF4560" stroke-width="1.5" stroke-dasharray="3,2" stroke-opacity="0.8"/>
  <text x="384" y="212" fill="#FF4560" font-size="9" font-weight="bold">STOP → Below 78.6% level</text>
  <!-- Steps -->
  <rect x="30" y="268" width="660" height="28" fill="#081525" rx="6" stroke="#0D2035"/>
  <text x="360" y="281" fill="#F7931A" font-size="9" font-weight="bold" text-anchor="middle">HOW TO DRAW: (1) Find clear swing low → (2) Find swing high → (3) Tool draws levels automatically</text>
  <text x="360" y="292" fill="#E8F4FF" font-size="9" text-anchor="middle">Buy at 61.8% bounce in uptrend · Stop below 78.6% · Target = prior swing high (0% level) for minimum 2:1 R:R</text>
</svg>`,
      svgCaption: 'Fibonacci drawn from swing low to swing high. Entry at 61.8% reversal candle. Stop below 78.6%. Target at 0% (prior swing high).' },
      { heading: 'The Complete Fibonacci 61.8% Strategy - Step by Step', body: `Here is the complete strategy executed in order. Do not skip steps.

STEP 1: CONFIRM THE TREND DIRECTION
- Price must be above the 200-day MA for long trades
- Clear structure of higher highs and higher lows visible on the chart
- ADX should be above 20

STEP 2: IDENTIFY THE SWING POINTS
- Find the most recent clear swing low and the subsequent swing high
- These must be the obvious major price extremes on your timeframe
- Use only clearly visible swings - not minor wiggles

STEP 3: DRAW THE LEVELS AND IDENTIFY THE ENTRY ZONE
- Draw Fibonacci from swing low to swing high
- Focus on the 61.8% level as your primary entry zone
- Check for additional confluence at that level (prior support, moving average, round number)
- More confluence = higher probability setup

STEP 4: WAIT FOR PRICE TO REACH THE LEVEL
- Do NOT buy as price falls toward the Fibonacci levels
- Be patient. Let price come to you.
- Many retracements overshoot or fail before reaching your level

STEP 5: WAIT FOR A REVERSAL CANDLESTICK AT THE LEVEL
- Hammer: long lower wick, small body near top, AT the 61.8% level
- Bullish engulfing: green candle fully covers prior red candle at the level
- Morning star: three-candle pattern at the level
- Volume should decline during the retracement and increase on the reversal candle

STEP 6: ENTER ON THE CANDLE CLOSE
- Buy at the CLOSE of the reversal candlestick
- Not when price touches the level - on the CLOSE of the reversal signal

STEP 7: PLACE YOUR STOP
- Stop goes below the 78.6% Fibonacci level
- If price closes below 78.6%, the retracement is too deep and the trend may be failing

STEP 8: SET YOUR TARGET
- Minimum target: the 0% level (the prior swing high)
- Risk/reward example: if swing went from 50 to 80 (range = 30), entry at 61.8% = 61.46, stop at 78.6% = 56.42, target at 80. Risk = 5.04 dollars. Reward = 18.54 dollars. R:R = 3.7:1`, callout: { type: 'warning', text: `In very strong trends, price often only retraces to the 38.2% level before resuming. If you are waiting for 61.8% in a very strong trend you may miss the trade entirely. Start by trading 61.8% entries exclusively until you are comfortable. Then learn to read 38.2% entries for stronger trends. The trade-off: the 38.2% entry is earlier with a worse price but less time in the market exposed to reversal risk.` } },
      { heading: 'The Six Fibonacci Mistakes That Cost Most Beginners Money', body: `MISTAKE 1: Drawing from minor price wiggles instead of major swing points
This produces Fibonacci levels that carry no statistical significance. Always use the most obvious, clearly visible price extremes on your chosen timeframe.

MISTAKE 2: Buying as price touches the level without a reversal signal
Price can slice through the 61.8% level and continue falling. The reversal CANDLESTICK is your buy signal. Not the level itself. Enter on the close of the hammer or engulfing candle at the level.

MISTAKE 3: Using Fibonacci as a reversal trade against the major trend
Fibonacci retracement is a CONTINUATION tool. It gives you a better entry price in the direction of the prevailing trend. Buying a 61.8% retracement of a major bear market hoping for a full reversal is a completely different, much lower probability trade.

MISTAKE 4: Entering without confluence
A 61.8% level with no other technical significance is average quality. The same 61.8% level aligned with prior support, a rising 50-EMA, and a round number price is exceptional quality. Always check for at least two independent reasons before entering.

MISTAKE 5: Moving stop to breakeven before price reaches the first target
Move the stop to breakeven only after price CLOSES above the 0% level (prior swing high) - not before. Until then keep the stop below 78.6%. Normal volatility routinely tests the entry area before resolving to the target.

MISTAKE 6: Redrawing levels after entry to make the trade look better
After you enter, the levels are fixed. Do not redraw them if price does not immediately go your direction. The integrity of the strategy depends on fixed anchor points.`, callout: { type: 'key', text: `In crypto markets, Fibonacci levels work particularly well on Bitcoin and Ethereum on the daily chart. The 61.8% retracement has acted as major support during multiple bull market corrections. In lower-liquidity altcoins, Fibonacci levels are less reliable because fewer institutional participants are watching and acting on them simultaneously - the self-fulfilling mechanism requires sufficient participant volume to work reliably.` } }
    ],
    keyPoints: ['Draw from swing low to swing high (uptrend) using only major, clearly visible price extremes - not minor intraday wiggles', 'The 61.8% Golden Ratio level is the primary entry zone - wait for a reversal candlestick at this level before entering', 'Stop goes below 78.6% - this gives the trade room to breathe while invalidating the setup if the retracement goes too deep', 'Target: 0% level (prior swing high) gives approximately 3.5:1 to 4:1 risk/reward from the 61.8% entry - excellent baseline', 'Confluence multiplies probability: 61.8% + prior support + moving average + round number at the same price = highest quality setups']
  },
  'ta-u7': {
    id: 'ta-u7', title: 'Multi-Timeframe Analysis: The Professional Approach',
    subtitle: 'Why top-down analysis produces better trades and the exact step-by-step process for aligning timeframes',
    readTime: '10 min', hero: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
    sections: [
      { heading: 'Why Multi-Timeframe Analysis Gives You an Edge', body: `Most beginner traders look at only one timeframe. They see a buy signal on the 15-minute chart and enter - without knowing that the daily chart is in a downtrend and the 4-hour chart is at resistance. The trade is doomed before it starts.

Professional traders use a top-down approach: start with the highest timeframe to establish context and direction, then step down to lower timeframes to find precise entries. This alignment of multiple timeframes in the same direction is one of the most powerful edge-creators in trading.

THE THREE-TIMEFRAME FRAMEWORK:
- HIGH TIMEFRAME (HTF): Establishes the trend direction. For swing traders: weekly or daily. For day traders: daily or 4-hour. This is the authority timeframe - it tells you WHICH direction to trade.
- MEDIUM TIMEFRAME (MTF): Confirms the setup and identifies the key price level. For swing traders: daily or 4-hour. For day traders: 1-hour or 15-minute.
- LOW TIMEFRAME (LTF): Provides the precise entry trigger. For swing traders: 4-hour or 1-hour. For day traders: 15-minute or 5-minute.

THE RULE: ONLY take trades in the direction the HIGH TIMEFRAME dictates.

If the weekly chart shows an uptrend (higher highs, higher lows, price above 200-week MA): only look for long entries on daily and 4-hour charts. Ignore short signals on those timeframes entirely.

If the daily chart shows a downtrend: only look for short entries on 4-hour and 1-hour charts.

WHY THIS WORKS: Institutional traders (banks, hedge funds) make directional decisions based on weekly and monthly charts. Their orders are so large that they drive the primary trend. When you trade in the direction of institutional positioning, you have the largest market participants on your side.`, callout: { type: 'key', text: `The 200-period moving average on the HIGHER timeframe is the most powerful trend filter in multi-timeframe analysis. Price above the 200-period MA on the weekly chart means the decade-scale trend is up. Price above the 200-period MA on the daily chart means the year-scale trend is up. Align your trades with both and you are trading with institutional-level tailwinds.` } },
      { heading: 'The Step-by-Step Multi-Timeframe Trade Process', body: `Here is the exact process for executing multi-timeframe analysis on every trade:

STEP 1: START WITH THE WEEKLY CHART
- What is the primary trend? Higher highs and higher lows (up) or lower highs and lower lows (down)?
- Is price above or below the 200-week MA?
- Are there any major support or resistance levels nearby?
- DECISION: Am I bullish (only long trades) or bearish (only short trades) this week?

STEP 2: MOVE TO THE DAILY CHART
- Does the daily chart CONFIRM the weekly trend? It should show the same direction.
- Where are the key daily support and resistance levels?
- What is the current price location relative to those levels?
- Is price pulling back toward support (good entry opportunity) or extended away from it (poor entry timing)?
- DECISION: Is there a potential entry setup forming? Or am I waiting?

STEP 3: MOVE TO THE 4-HOUR (or 1-HOUR) CHART
- Find the precise entry trigger - the specific candlestick signal or pattern at the identified daily support level
- This is where you look for the hammer, engulfing, or breakout that triggers your entry
- Confirm volume is appropriate (increasing on reversal, decreasing on pullback)
- DECISION: Is there an entry signal NOW? What is the exact entry price?

STEP 4: EXECUTE THE TRADE
- Entry: at the close of the 4-hour reversal signal
- Stop: based on the 4-hour chart structure (below the 4-hour swing low)
- Target: based on the DAILY chart resistance level (the next significant daily resistance)
- Position size: based on the stop distance (risk 1-2% of account)

EXAMPLE TRADE: Weekly uptrend. Daily chart shows a pullback to rising 50-day EMA. 4-hour chart shows a hammer candle forming right at the 50-day EMA. Buy at the 4-hour hammer close. Stop below the 4-hour hammer low. Target: next daily resistance level.`, callout: { type: 'warning', text: `When higher and lower timeframes conflict - when the weekly chart is bearish but the 1-hour chart shows a buy signal - the correct response is DO NOTHING. The absence of timeframe alignment is itself important information. No trade is often the best trade. Professional traders pass on dozens of potential setups for every one they actually take - the ones they take have clear alignment across all three timeframes.` } },
      { heading: 'Applying Multi-Timeframe Analysis to Every Trade Type', body: `SWING TRADING (hold 3-15 days):
- HTF: Weekly chart for direction
- MTF: Daily chart for setup identification and key levels
- LTF: 4-hour chart for entry trigger
- Stop based on 4-hour structure. Target at daily resistance.

DAY TRADING (hold minutes to hours):
- HTF: Daily chart for direction
- MTF: 1-hour chart for setup identification
- LTF: 15-minute or 5-minute for entry trigger
- Stop based on 15-minute structure. Target at 1-hour resistance.

MULTI-TIMEFRAME CONFIRMATION CHECKLIST (check before every trade):
1. What is the weekly trend? Am I trading in that direction?
2. What is the daily trend? Does it confirm the weekly?
3. Is the 4-hour chart at a key support or resistance level?
4. Is there an entry signal on the 4-hour or 1-hour chart at that level?
5. Is volume appropriate for the setup?
6. What is the exact entry, stop, and target BEFORE entering?

COMMON MISTAKE: Many traders analyze the higher timeframe AFTER they already want to take a trade on the lower timeframe. This is backwards - you look at the higher timeframe FIRST to determine direction, then look at the lower timeframe only for entries in that direction. Never let a lower timeframe signal lead you to rationalize a higher timeframe trade.

TIMEFRAME RATIOS: Good timeframe pairs maintain a ratio of approximately 4:1 to 6:1 between each level. Weekly/Daily (5:1), Daily/4-hour (6:1), 4-hour/1-hour (4:1), 1-hour/15-minute (4:1). This ratio provides enough difference to see distinct information at each level.`, callout: { type: 'key', text: `Multi-timeframe analysis is the single most impactful improvement most developing traders can make. Taking a trade that is aligned across all three timeframes historically shows 15-30% higher win rates than single-timeframe trades. The additional analysis time (5 minutes per trade to check all three timeframes) is the highest-return time investment in trading.` } }
    ],
    keyPoints: ['Start with the HIGHEST timeframe to establish direction - only trade in the direction the weekly or daily chart dictates', 'Three-timeframe hierarchy: HTF for direction, MTF for setup identification and key levels, LTF for precise entry trigger', 'Stop is based on LTF structure. Target is based on the next MTF resistance level. Position size is based on stop distance.', 'When timeframes conflict - weekly bullish, daily bearish - do nothing. Timeframe conflict means no edge. Wait for alignment.', 'Timeframe pairs should maintain a 4:1 to 6:1 ratio - weekly/daily, daily/4-hour, 4-hour/1-hour are the standard swing trading set']
  },
  'ta-u8': {
    id: 'ta-u8', title: 'Supply and Demand Zones: Institutional Order Flow',
    subtitle: 'Where big money places its orders, how to find those zones on a chart, and the exact entry and exit rules',
    readTime: '11 min', hero: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
    sections: [
      { heading: 'Why Supply and Demand Zones Work', body: `Supply and demand zones are areas on a chart where significant institutional buying or selling occurred. They are superior to traditional support and resistance because they identify the SPECIFIC price area where institutional orders were placed - not just general areas of historical price reaction.

WHY THEY FORM:
Large institutional orders (worth millions or billions of dollars) cannot be filled all at once without moving the market significantly against the institution. If a fund wants to buy 50 million dollars of a stock, buying all at once would drive the price up before they finish buying.

Instead, institutions place orders at a specific price level and wait for price to come to them. When price first visits that level, their orders get partially filled. They often have MORE orders waiting at the same level. When price returns to that level a second time, those remaining orders absorb the selling and cause price to bounce again - creating the zone.

SUPPLY ZONE: An area where the price fell sharply. Price was at that level, institutions were SELLING aggressively, and price dropped rapidly away. When price returns to that area, those institutional sell orders may still be waiting.

DEMAND ZONE: An area where the price rose sharply. Price was at that level, institutions were BUYING aggressively, and price rallied rapidly away. When price returns, those institutional buy orders may still be waiting.

THE KEY VISUAL CLUE: Look for areas where price MOVED FAST and FAR in one direction. The faster and farther the move from a price level, the more institutional order flow was concentrated at that level - and the more order flow may be waiting there on the next visit.`, callout: { type: 'key', text: `The strength of a zone is proportional to the strength of the move that created it. A price level that produced a 5% move away in 3 days is a much weaker zone than a level that produced a 20% move in 2 days. The speed and magnitude of the initial move tells you how much institutional order flow was concentrated at that level.` },
      svg: `<svg viewBox="0 0 720 300" xmlns="http://www.w3.org/2000/svg" style="background:#061018;border-radius:12px;display:block;width:100%;font-family:ui-monospace,monospace">
  <text x="360" y="20" fill="#E8F4FF" font-size="13" font-weight="bold" text-anchor="middle">Supply and Demand Zone Trade — Finding and Entering</text>
  <!-- Sharp drop (supply zone) -->
  <polyline points="60,80 80,75 100,70 120,72 140,78 160,95 185,120 210,145 240,165 265,182" fill="none" stroke="#E8F4FF" stroke-width="2"/>
  <!-- Supply zone box (area where price fell from) -->
  <rect x="60" y="65" width="130" height="28" fill="#FF4560" fill-opacity="0.12" rx="4" stroke="#FF4560" stroke-width="1.5" stroke-dasharray="4,2"/>
  <text x="125" y="57" fill="#FF4560" font-size="10" font-weight="bold" text-anchor="middle">SUPPLY ZONE</text>
  <text x="125" y="48" fill="#FF4560" font-size="9" text-anchor="middle">(Institutions were SELLING here)</text>
  <!-- Rally up, into demand zone, sharp fall -->
  <polyline points="265,182 285,170 305,155 325,138 345,120 365,105 380,90 400,80 420,75 438,72 456,78 470,88 490,108 510,128 530,150 550,168" fill="none" stroke="#E8F4FF" stroke-width="2"/>
  <!-- Demand zone (area where rally started) -->
  <rect x="255" y="170" width="110" height="28" fill="#00D09C" fill-opacity="0.12" rx="4" stroke="#00D09C" stroke-width="1.5" stroke-dasharray="4,2"/>
  <text x="310" y="215" fill="#00D09C" font-size="10" font-weight="bold" text-anchor="middle">DEMAND ZONE</text>
  <text x="310" y="227" fill="#00D09C" font-size="9" text-anchor="middle">(Institutions were BUYING here)</text>
  <!-- SELL at retest of supply zone -->
  <polyline points="550,168 565,155 580,140 595,118 608,95 618,78 625,75" fill="none" stroke="#E8F4FF" stroke-width="2" stroke-dasharray="4,3"/>
  <!-- Supply zone revisit + short entry -->
  <polygon points="618,82 612,68 624,68" fill="#FF4560"/>
  <line x1="618" y1="82" x2="618" y2="65" stroke="#FF4560" stroke-width="2"/>
  <rect x="597" y="50" width="42" height="14" fill="#FF4560" fill-opacity="0.25" rx="4" stroke="#FF4560" stroke-width="1"/>
  <text x="618" y="60" fill="#FF4560" font-size="9" text-anchor="middle" font-weight="bold">SHORT</text>
  <text x="648" y="60" fill="#4A7AA0" font-size="8">On retest of</text>
  <text x="648" y="71" fill="#4A7AA0" font-size="8">supply zone</text>
  <!-- Stop -->
  <line x1="540" y1="60" x2="680" y2="60" stroke="#FF4560" stroke-width="1.5" stroke-dasharray="4,3" stroke-opacity="0.7"/>
  <text x="548" y="56" fill="#FF4560" font-size="9" font-weight="bold">STOP → Above top of supply zone</text>
  <!-- How to identify -->
  <rect x="30" y="260" width="660" height="36" fill="#081525" rx="6" stroke="#0D2035"/>
  <text x="360" y="273" fill="#F7931A" font-size="10" font-weight="bold" text-anchor="middle">HOW TO IDENTIFY A ZONE: Look for a sharp, fast move AWAY from a price area</text>
  <text x="360" y="285" fill="#E8F4FF" font-size="9" text-anchor="middle">Supply zone = price area BEFORE a sharp DROP · Demand zone = price area BEFORE a sharp RALLY</text>
  <text x="360" y="297" fill="#E8F4FF" font-size="9" text-anchor="middle">These are where unfilled institutional orders still wait — high probability when price returns to test them</text>
</svg>`,
      svgCaption: 'Supply zone at top of sharp drop. Demand zone at bottom of sharp rally. Short on return to supply zone. Buy on return to demand zone.' },
      { heading: 'How to Identify Supply and Demand Zones on a Chart', body: `STEP-BY-STEP ZONE IDENTIFICATION:

FINDING DEMAND ZONES (where to look for buys):
1. Look for a sharp, fast RALLY on the chart - a move of at least 5-10% happening in a short time period
2. Scroll left to where that rally ORIGINATED - the base from which it launched
3. The base (usually 2-5 candles of consolidation or a single reversal candle) is your DEMAND ZONE
4. Draw a rectangle from the high of the base to the low of the base
5. The zone extends from approximately the 50% level of those candles to their low

FINDING SUPPLY ZONES (where to look for sells):
1. Look for a sharp, fast DROP - a move of at least 5-10% in a short period
2. Scroll left to where that drop ORIGINATED - the base before it fell
3. Draw a rectangle around those base candles
4. This rectangle is your SUPPLY ZONE

ZONE QUALITY CRITERIA:
- Strong zone: Price moved at least 7-10% away from the zone quickly (large institutional presence)
- The zone has been TESTED only once or twice (unfilled orders still waiting)
- The zone was created by a clear momentum move (not a slow grind)
- The zone aligns with a significant level (round number, prior major support/resistance)

WEAK ZONE INDICATORS (lower probability):
- Zone has been tested 4 or more times (most institutional orders have been filled)
- Slow, gradual move away from the zone rather than sharp move
- Zone is very wide (unclear where institutional orders are concentrated)
- Multiple zones are stacked on top of each other without clear separation`, callout: { type: 'warning', text: `Fresh zones are FAR more powerful than old zones. The first or second retest of a zone is the highest probability trade. After 3 or more tests, most of the institutional orders at that level have been filled and the zone loses its significance. Prioritize fresh zones that have only been tested once or twice. Mark tested zones differently so you know their quality level.` } },
      { heading: 'Complete Supply and Demand Trade Execution', body: `THE COMPLETE DEMAND ZONE TRADE (long):

SETUP CRITERIA:
- Price is in a clear uptrend on the higher timeframe (above 200-day MA, higher highs and higher lows)
- A fresh demand zone exists below current price (created by a sharp move up, tested only 1-2 times)
- Current price is declining toward that demand zone

WAITING:
- Do NOT buy as price falls toward the zone
- Wait for price to reach the zone

ENTRY TRIGGER:
When price enters the demand zone area, watch for one of:
a) Hammer candle: long lower wick, small body near the top of the zone
b) Bullish engulfing: green candle fully covering the prior red candle, within the zone
c) Price wick into the zone and snap back out aggressively (rejecting the level)

Enter at the CLOSE of the signal candle.

STOP PLACEMENT:
Below the LOWEST point of the demand zone. If price closes below the entire zone, it has failed.

PROFIT TARGET:
The nearest supply zone above price. Or the prior swing high. Minimum R:R of 2:1 required before taking any demand zone trade.

THE COMPLETE SUPPLY ZONE TRADE (short):
Exact mirror - wait for price to return to supply zone, look for bearish rejection candle (shooting star, bearish engulfing), enter short at close, stop above the supply zone high, target the nearest demand zone below.`, callout: { type: 'key', text: `Multi-timeframe zone alignment is the most powerful supply/demand setup. When a daily chart demand zone aligns with a weekly chart support level and a monthly chart Fibonacci retracement level, you have institutional order flow from three completely different time horizons converging at the same price. These confluent zones produce the most reliable and powerful reversals.` } }
    ],
    keyPoints: ['Demand zones form where price rallied sharply - institutions placed buy orders there and more may be waiting on the next visit', 'Supply zones form where price dropped sharply - institutional sell orders were concentrated there and may remain on return', 'Zone strength is proportional to the speed and distance of the move away from it - bigger moves = more institutional order flow = stronger zone', 'Fresh zones (tested 1-2 times) are far more reliable than mature zones (tested 4+ times) - prioritize fresh zones', 'Entry: reversal candlestick within the zone (hammer in demand, shooting star in supply). Stop: beyond the far edge of the zone. Target: next opposing zone.']
  }
}
