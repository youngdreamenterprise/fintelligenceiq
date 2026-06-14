export const TRADING_LEARN_EXT_2 = {
  'mo-u2': {
    id: 'mo-u2', title: 'Strategy 3 and 4: MACD Crossover Strategy',
    subtitle: 'The most popular momentum indicator - complete strategy with exact entry, stop, and exit rules',
    readTime: '11 min', hero: 'https://images.unsplash.com/photo-1642790595397-7047cd2e64b7?w=800&q=80',
    sections: [
      { heading: 'What MACD Measures and How to Read Every Component', body: `MACD (Moving Average Convergence Divergence) was developed by Gerald Appel in the 1970s. It measures the relationship between two exponential moving averages to show both trend direction and momentum strength.

THE THREE COMPONENTS:

1. MACD LINE (blue/black): The 12-period EMA minus the 26-period EMA. When positive (above zero), the shorter-term average is above the longer-term average - bullish momentum. When negative - bearish momentum.

2. SIGNAL LINE (orange/red dashed): A 9-period EMA of the MACD line itself. Used to generate crossover signals. When MACD crosses above the signal line: bullish. When it crosses below: bearish.

3. HISTOGRAM (bars): MACD line minus the signal line. THIS IS THE MOST IMPORTANT COMPONENT. Growing positive bars (getting taller) = momentum INCREASING. Shrinking positive bars (getting shorter) = momentum DECREASING. The histogram often shows a coming crossover BEFORE the lines cross - giving you early warning.

READING THE HISTOGRAM BEFORE THE CROSSOVER:
If histogram bars are NEGATIVE (below zero) but getting SMALLER (shrinking toward zero), downward momentum is decreasing and a bullish crossover may be forming. This gives you 2-4 candles of advance warning. You can prepare for the entry before the actual crossover occurs.

THE ZERO LINE:
The zero line (where MACD = 0) is critical. A crossover ABOVE the zero line is more bullish than one below it. A crossover BELOW the zero line is a counter-trend signal and lower probability. The best buy signals have the crossover occur ABOVE the zero line - confirming both short-term AND longer-term bullish momentum.`, callout: { type: 'key', text: `MACD divergence: when price makes a new high but MACD makes a lower high, bullish momentum is fading even as price rises. This is bearish divergence - a warning that the trend is losing fuel. Bearish divergence alone is not a trade signal. Wait for the MACD crossover below the signal line to confirm before entering any short position.` },
      svg: `<svg viewBox="0 0 720 330" xmlns="http://www.w3.org/2000/svg" style="background:#061018;border-radius:12px;display:block;width:100%;font-family:ui-monospace,monospace">
  <text x="360" y="20" fill="#E8F4FF" font-size="13" font-weight="bold" text-anchor="middle">MACD Crossover Strategy — Complete Execution Guide</text>
  <!-- Price panel -->
  <text x="46" y="40" fill="#4A7AA0" font-size="10" font-weight="bold">PRICE</text>
  <line x1="40" y1="45" x2="680" y2="45" stroke="#0D2035" stroke-width="1"/>
  <line x1="40" y1="170" x2="680" y2="170" stroke="#0D2035" stroke-width="1"/>
  <!-- Price line -->
  <polyline points="40,155 80,150 120,158 160,145 200,140 235,150 265,142 290,133 325,138 355,128 385,135 415,122 448,115 480,108 515,98 550,88 585,78 620,68 660,58" fill="none" stroke="#E8F4FF" stroke-width="2"/>
  <!-- MACD panel -->
  <text x="46" y="188" fill="#4A7AA0" font-size="10" font-weight="bold">MACD (12,26,9)</text>
  <line x1="40" y1="192" x2="680" y2="192" stroke="#0D2035" stroke-width="1"/>
  <!-- Zero line -->
  <line x1="40" y1="248" x2="680" y2="248" stroke="#4A7AA0" stroke-width="1" stroke-dasharray="2,4"/>
  <text x="672" y="246" fill="#4A7AA0" font-size="8" text-anchor="end">0</text>
  <!-- Histogram bars (simplified) -->
  <rect x="48" y="228" width="8" height="20" fill="#FF4560" fill-opacity="0.6" rx="1"/>
  <rect x="62" y="232" width="8" height="16" fill="#FF4560" fill-opacity="0.6" rx="1"/>
  <rect x="76" y="236" width="8" height="12" fill="#FF4560" fill-opacity="0.6" rx="1"/>
  <rect x="90" y="240" width="8" height="8" fill="#FF4560" fill-opacity="0.4" rx="1"/>
  <rect x="104" y="242" width="8" height="6" fill="#FF4560" fill-opacity="0.3" rx="1"/>
  <rect x="118" y="246" width="8" height="2" fill="#FF4560" fill-opacity="0.2" rx="1"/>
  <!-- Crossover point ~132 -->
  <rect x="132" y="246" width="8" height="2" fill="#00D09C" fill-opacity="0.3" rx="1"/>
  <rect x="146" y="244" width="8" height="4" fill="#00D09C" fill-opacity="0.5" rx="1"/>
  <rect x="160" y="240" width="8" height="8" fill="#00D09C" fill-opacity="0.6" rx="1"/>
  <rect x="174" y="236" width="8" height="12" fill="#00D09C" fill-opacity="0.7" rx="1"/>
  <rect x="188" y="232" width="8" height="16" fill="#00D09C" fill-opacity="0.7" rx="1"/>
  <rect x="202" y="228" width="8" height="20" fill="#00D09C" fill-opacity="0.8" rx="1"/>
  <rect x="216" y="225" width="8" height="23" fill="#00D09C" fill-opacity="0.8" rx="1"/>
  <rect x="230" y="230" width="8" height="18" fill="#00D09C" fill-opacity="0.7" rx="1"/>
  <!-- MACD and signal lines -->
  <polyline points="48,234 76,238 104,244 132,248 160,244 188,236 216,226 244,232 272,238 300,234 330,230 360,238 390,243 420,238 450,232 480,226 510,220 545,215 580,208 615,202 655,196" fill="none" stroke="#3B82F6" stroke-width="2.5"/>
  <polyline points="48,237 76,240 104,245 132,248 160,246 188,240 216,232 244,234 272,238 300,235 330,232 360,237 390,242 420,238 450,233 480,228 510,222 545,217 580,211 615,205 655,199" fill="none" stroke="#FF6B35" stroke-width="2" stroke-dasharray="6,3"/>
  <!-- Crossover annotation -->
  <line x1="135" y1="185" x2="135" y2="310" stroke="#F7931A" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="142" y="200" fill="#F7931A" font-size="9" font-weight="bold">MACD crosses</text>
  <text x="142" y="212" fill="#F7931A" font-size="9">above signal</text>
  <!-- BUY entry on price chart -->
  <polygon points="265,140 259,153 271,153" fill="#00D09C"/>
  <line x1="265" y1="140" x2="265" y2="155" stroke="#00D09C" stroke-width="2"/>
  <rect x="246" y="155" width="38" height="13" fill="#00D09C" fill-opacity="0.25" rx="4" stroke="#00D09C" stroke-width="1"/>
  <text x="265" y="164" fill="#00D09C" font-size="8" text-anchor="middle" font-weight="bold">BUY HERE</text>
  <!-- Stop -->
  <line x1="40" y1="163" x2="400" y2="163" stroke="#FF4560" stroke-width="1.5" stroke-dasharray="4,3" stroke-opacity="0.7"/>
  <text x="48" y="159" fill="#FF4560" font-size="9" font-weight="bold">STOP — Below prior swing low when crossover occurred</text>
  <!-- Legend -->
  <line x1="50" y1="312" x2="76" y2="312" stroke="#3B82F6" stroke-width="2.5"/>
  <text x="82" y="316" fill="#3B82F6" font-size="9">MACD Line</text>
  <line x1="180" y1="312" x2="206" y2="312" stroke="#FF6B35" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="212" y="316" fill="#FF6B35" font-size="9">Signal Line</text>
  <rect x="320" y="305" width="380" height="22" fill="#081525" rx="5" stroke="#0D2035"/>
  <text x="510" y="318" fill="#E8F4FF" font-size="9" text-anchor="middle">Best crossovers happen ABOVE the zero line (bullish) or with histogram bars growing (momentum confirming)</text>
</svg>`,
      svgCaption: 'MACD crossover: buy when MACD crosses above signal line above the zero line. Growing histogram bars confirm momentum.' },
      { heading: 'Strategy 3: The MACD Signal Line Crossover - Complete Rules', body: `This is the most common MACD strategy: buy when MACD crosses above the signal line, sell when it crosses below.

PREREQUISITE CHECKS BEFORE EVERY TRADE:
1. Price is above the 200-day SMA (for long trades)
2. ADX is above 20 (trending market confirmed - crossovers fail in ranges)
3. The crossover occurs ABOVE the zero line (below zero = lower quality signal)

THE ENTRY:
Buy at the CLOSE of the candle where MACD crosses above the signal line. Wait for the close - do not buy during the candle.

HIGHEST QUALITY CROSSOVER SIGNALS have these additional characteristics:
- Histogram was negative but shrinking for 2-4 bars before the cross (you saw it coming)
- The crossover happens after a visible price pullback (not after price has already surged)
- Price is at or near a key support level when the cross occurs
- Volume increases on the crossover candle

STOP PLACEMENT:
Below the most recent PRICE swing low that formed during the pullback before the crossover. Do not use the MACD level for stop placement - use price structure. The swing low represents where the bullish reversal originated.

EXIT / TAKE PROFIT:
Exit when the MACD line crosses back below the signal line (death cross). Do NOT use a fixed dollar target. Let the signal line exit keep you in the trade as long as momentum supports it. In strong trending markets this captures 3-5 times more profit than any fixed target.

SHORT SIGNAL (Death Cross):
MACD crosses below signal line while price is below 200-day SMA and ADX is above 20. Exact mirror of the buy rules. Stop above the most recent swing high before the crossover. Exit on MACD crossover back above signal line.`, callout: { type: 'warning', text: `Never trade MACD crossovers when ADX is below 20. In ranging markets (ADX below 20), the MACD line crosses back and forth repeatedly generating a series of small losses. This is the most common way traders blow their account using MACD - applying it in ranging conditions. Check ADX first on every single MACD trade. It takes 10 seconds and is the difference between profitable and unprofitable MACD trading.` } },
      { heading: 'Strategy 4: MACD Zero-Line Cross and Divergence Trading', body: `THE ZERO-LINE CROSSOVER STRATEGY:
When the MACD line crosses from negative to positive (crosses above zero), the 12-period EMA has fully overtaken the 26-period EMA. This is a trend CONFIRMATION, not just a momentum signal.

Entry: Buy when MACD crosses from negative to positive (zero-line cross). This is a slower, more filtered signal than the signal-line crossover - fewer trades but higher quality ones.

Stop: Below the swing low that preceded the zero-line crossover.

Target: Hold until MACD crosses back below zero. This keeps you in the trade for the full trend.

COMBINING BOTH STRATEGIES:
1. Use zero-line position as BIAS: MACD above zero = bullish bias, only take signal-line buy crossovers
2. Use signal-line crossovers as ENTRIES: Buy when MACD crosses above signal line while MACD is above zero
This filters out the weakest crossover signals while capturing the strong ones.

MULTI-TIMEFRAME MACD:
Weekly MACD above zero + Daily MACD crossing above signal line = highest quality buy signal
Weekly context tells you the primary trend direction. Daily gives you the entry timing. This is how institutional traders use MACD.

MACD DIVERGENCE TRADE:
Bullish divergence: Price makes a lower low but MACD makes a HIGHER low. Sellers are losing momentum even as price falls to new lows. This is a warning that the downtrend is exhausting.
Entry: Wait for MACD to cross above signal line AFTER the divergence forms. The divergence is context, the crossover is the trigger.
Stop: Below the most recent price low.
Target: Previous swing high minimum.

MACD ON THE RIGHT TIMEFRAMES:
Daily and weekly charts: excellent - smooth signals with good follow-through
4-hour charts: good - more signals with similar quality
1-hour charts: acceptable with strict ADX filter
15-minute and below: generally too noisy for reliable MACD signals`, callout: { type: 'key', text: `The MACD histogram provides the earliest signal. When you see the histogram bars shrinking from a peak (even if still growing from the zero line), momentum is already fading. An experienced MACD reader starts thinking about the next crossover 3-5 bars before it occurs. This advance warning allows better position preparation and earlier exit from losing trades.` } }
    ],
    keyPoints: ['MACD histogram is the most important component - growing bars mean momentum increasing, shrinking bars warn of coming crossover', 'Strategy 3: buy when MACD crosses above signal line with ADX above 20, price above 200-day MA, and crossover above the zero line', 'Strategy 4: buy when MACD crosses above the zero line itself - slower but confirms both short and long-term trend alignment', 'Stop goes below the most recent price swing low - use price structure for stops, not MACD indicator levels', 'ADX above 20 is required for all MACD crossover trades - in ranging markets MACD crossovers are noise that generates repeated losses']
  },
  'mr-u1': {
    id: 'mr-u1', title: 'Bollinger Bands: Complete Reversion and Squeeze Strategy',
    subtitle: 'Dynamic volatility bands for mean reversion setups and squeeze breakouts - exact rules for both strategies',
    readTime: '11 min', hero: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
    sections: [
      { heading: 'How Bollinger Bands Work and What They Actually Measure', body: `Bollinger Bands (developed by John Bollinger in the 1980s) create a dynamic price envelope that adapts to market volatility. Unlike fixed support and resistance, they expand during volatile periods and contract during quiet periods.

THE THREE LINES:
- MIDDLE BAND: 20-period Simple Moving Average (SMA) of closing prices
- UPPER BAND: Middle band plus 2 standard deviations
- LOWER BAND: Middle band minus 2 standard deviations

WHAT THE BANDS TELL YOU:
At 2 standard deviations, the bands theoretically contain approximately 95% of price action under normal conditions. When price touches or exceeds the outer bands, it is at a statistically unusual location relative to recent history.

But here is the critical distinction that most traders miss:

In RANGING markets (ADX below 20): Statistically unusual locations tend to REVERT back to the mean (middle band). Touching the upper band is a potential sell signal. Touching the lower band is a potential buy signal.

In TRENDING markets (ADX above 25): Price can WALK the bands - staying near or repeatedly touching the upper band for extended periods as the trend continues. Treating every upper band touch as a sell in a strong uptrend is how traders consistently sell into rallies and lose.

THE BAND WIDTH: The distance between the upper and lower bands measures volatility. When bands narrow significantly (the Bollinger Band Squeeze), the market is in a period of very low volatility. Low volatility always precedes high volatility - the squeeze signals that a significant directional move is coming. The squeeze does not tell you which direction - only that the move is coming.`, callout: { type: 'key', text: `John Bollinger recommends always using the ADX or another trend indicator before applying Bollinger Band strategies. ADX is the single most important context indicator for Bollinger Bands. It tells you whether you are in a range (bands are a reversion tool) or a trend (bands are a continuation tool). Never look at the bands in isolation.` },
      svg: `<svg viewBox="0 0 720 300" xmlns="http://www.w3.org/2000/svg" style="background:#061018;border-radius:12px;display:block;width:100%;font-family:ui-monospace,monospace">
  <text x="360" y="20" fill="#E8F4FF" font-size="13" font-weight="bold" text-anchor="middle">Bollinger Band Reversion Strategy — Trade Execution</text>
  <!-- Draw bands -->
  <text x="600" y="58" fill="#3B82F6" font-size="9">Upper Band (+2σ)</text>
  <text x="600" y="158" fill="#FF6B35" font-size="9">Middle (SMA 20)</text>
  <text x="600" y="245" fill="#3B82F6" font-size="9">Lower Band (-2σ)</text>
  <!-- Bands -->
  <polyline points="40,65 80,68 120,72 160,70 200,68 240,75 280,78 320,80 360,75 400,70 440,65 480,62 520,60 560,55 600,52 640,48 680,44" fill="none" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="5,3"/>
  <polyline points="40,155 80,158 120,162 160,160 200,158 240,162 280,165 320,165 360,160 400,156 440,152 480,148 520,145 560,140 600,136 640,132 680,128" fill="none" stroke="#FF6B35" stroke-width="2" stroke-dasharray="4,4"/>
  <polyline points="40,245 80,248 120,252 160,250 200,248 240,249 280,252 320,250 360,245 400,242 440,239 480,234 520,230 560,226 600,220 640,216 680,212" fill="none" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="5,3"/>
  <!-- Band fill -->
  <!-- Price bouncing off lower band with BUY signals -->
  <polyline points="40,180 65,165 90,155 115,170 140,185 165,195 190,210 215,228 240,242 260,250 275,245 290,235 310,222 330,215 350,208 370,195 395,180 420,168 445,155 470,148 495,138 520,128 545,118 570,110 600,100 630,92 660,82" fill="none" stroke="#E8F4FF" stroke-width="2.5"/>
  <!-- Touch of lower band -->
  <circle cx="263" cy="250" r="12" fill="none" stroke="#00D09C" stroke-width="2"/>
  <circle cx="440" cy="239" r="10" fill="none" stroke="#00D09C" stroke-width="2"/>
  <!-- BUY arrows -->
  <polygon points="293,235 287,248 299,248" fill="#00D09C"/>
  <line x1="293" y1="235" x2="293" y2="251" stroke="#00D09C" stroke-width="2"/>
  <text x="305" y="232" fill="#00D09C" font-size="9" font-weight="bold">BUY #1</text>
  <text x="305" y="243" fill="#4A7AA0" font-size="8">Hammer candle</text>
  <text x="305" y="254" fill="#4A7AA0" font-size="8">at lower band</text>
  <!-- Target annotations -->
  <text x="355" y="202" fill="#F7931A" font-size="8">Target: Middle</text>
  <text x="355" y="212" fill="#F7931A" font-size="8">band (SMA 20)</text>
  <line x1="355" y1="215" x2="370" y2="195" stroke="#F7931A" stroke-width="1"/>
  <!-- Stop -->
  <line x1="40" y1="272" x2="400" y2="272" stroke="#FF4560" stroke-width="1.5" stroke-dasharray="4,3" stroke-opacity="0.7"/>
  <text x="48" y="268" fill="#FF4560" font-size="9" font-weight="bold">STOP — Below the wick of the reversal candle</text>
  <!-- ADX prerequisite box -->
  <rect x="30" y="270" width="660" height="26" fill="#081525" rx="6" stroke="#0D2035"/>
  <text x="360" y="282" fill="#FF6B35" font-size="9" font-weight="bold" text-anchor="middle">REQUIRED: ADX below 20 (ranging market). Check BEFORE entering.</text>
  <text x="360" y="292" fill="#E8F4FF" font-size="9" text-anchor="middle">In trending markets, price rides the band — using this reversion strategy in a trend = catching falling knives</text>
</svg>`,
      svgCaption: 'Bollinger Band reversion: buy lower band touch with hammer candle in ranging market. ADX below 20 required. Target = middle band.' },
      { heading: 'Strategy 16: Bollinger Band Mean Reversion - Complete Rules', body: `This strategy works ONLY in ranging markets. Check ADX first. Always.

COMPLETE SETUP FOR LOWER BAND BUY:

PREREQUISITE - ADX MUST BE BELOW 20:
If ADX is above 25, DO NOT use this strategy. Price touching the lower band in a downtrend does not mean reversion - it means continuation. Check ADX before every Bollinger Band trade.

STEP 1: CONFIRM RANGING CONDITIONS
- ADX below 20 (range confirmed)
- Price oscillating back and forth without clear higher highs and higher lows
- The bands are relatively parallel and not steeply angled

STEP 2: WAIT FOR LOWER BAND TOUCH
- Price must touch or pierce the lower Bollinger Band
- Do NOT buy the moment price touches the band - wait for the reversal signal

STEP 3: LOOK FOR THE REVERSAL SIGNAL AT THE BAND
Required: A bullish reversal candlestick at the lower band:
- Hammer: long lower wick (sellers tried to push lower but failed), small body near top
- Bullish engulfing: green candle fully covers prior red candle
Volume should ideally be below average at the touch (supply drying up, not panic selling)

STEP 4: ENTER AT THE REVERSAL CANDLE CLOSE
Buy at the CLOSE of the reversal candlestick.

STEP 5: STOP PLACEMENT
Just below the wick of the reversal candle. Tight stop. If the low of the reversal candle is violated, the band touch has failed and price is likely to fall further.

STEP 6: TARGETS
First target: Middle band (20-period SMA) - take at least partial profits here
Second target: Upper band - if momentum is strong and price crosses the middle band with conviction

TRADE FOR UPPER BAND (short): Exact mirror. Wait for upper band touch. Look for shooting star or bearish engulfing. Enter short at close. Stop above wick. Target: middle band first, then lower band.`, callout: { type: 'warning', text: `The most dangerous Bollinger Band situation: a trending stock breaks below the lower band. In a downtrend, this is NOT a buy signal - it is price accelerating lower within the trend. The band expands to accommodate the move. If you apply the reversion strategy here, you are catching a falling knife. ADX above 25 + price below lower band = momentum continuation, not reversal.` } },
      { heading: 'Strategy 17: Bollinger Band Squeeze Breakout', body: `The Bollinger Band squeeze is one of the most reliable setups in technical trading for identifying when a significant move is about to begin.

IDENTIFYING THE SQUEEZE:
- The upper and lower bands contract significantly toward each other
- Band width reaches the narrowest point in at least 3-6 months
- The middle band (SMA 20) is essentially flat - confirming low directional momentum
- Low volume often accompanies the squeeze (quiet before the storm)

THE TTM SQUEEZE (enhanced version by John Carter): Requires Bollinger Bands to be completely INSIDE the Keltner Channels. This more stringent requirement produces fewer but higher-quality squeeze signals.

TRADING THE SQUEEZE BREAKOUT:

STEP 1: Identify and mark the squeeze (narrow bands, 3-6 month low bandwidth)

STEP 2: Wait for the breakout. Do NOT try to predict direction before the breakout.

STEP 3: Entry trigger - price CLOSES above the upper band or below the lower band:
- Close above upper band: buy long
- Close below lower band: sell short

STEP 4: Volume confirmation - volume must be at least 150% of the recent average on the breakout candle. Low-volume breakouts fail more than 60% of the time.

STEP 5: Stop placement - inside the squeeze range. A reversal back into the range means the breakout was false. Exit immediately.

STEP 6: Target - the width of the bands at their narrowest point (the squeeze width) projected from the breakout point.

WHICH DIRECTION IS MORE LIKELY? Prior trend direction. Squeezes that follow a significant prior trend more often break in the direction of that prior trend. Use the weekly chart trend as the bias. If weekly trend is up and you have a squeeze, favor long breakouts.`, callout: { type: 'key', text: `The Bollinger Band squeeze combined with the RSI gives the best confirmation. During a genuine squeeze, RSI typically oscillates between 40 and 60 with no clear direction. When the breakout occurs, RSI should move decisively above 60 (bullish breakout) or below 40 (bearish breakout). An RSI that stays flat or moves weakly during the price breakout is a warning that the breakout may be false.` } }
    ],
    keyPoints: ['Bollinger Bands expand in high volatility and contract in low volatility - always check ADX before deciding which strategy to apply', 'Strategy 16 (reversion): only in ranging markets (ADX below 20). Buy lower band touch with hammer candle. Stop below wick. Target: middle band.', 'Strategy 17 (squeeze breakout): when bands reach 3-6 month narrow point, wait for the breakout candle close above/below the band with high volume', 'Stop for squeeze trades goes INSIDE the squeeze range - any return into the range means the breakout failed', 'The direction bias for squeeze breakouts: trade in the direction of the prior weekly chart trend - squeezes more often break with the dominant trend']
  },
  'vol-u5': {
    id: 'vol-u5', title: 'Covered Calls: Generate Monthly Income From Stocks You Own',
    subtitle: 'The most beginner-friendly options strategy - step by step with exact numbers and a complete example',
    readTime: '10 min', hero: 'https://images.unsplash.com/photo-1642790595397-7047cd2e64b7?w=800&q=80',
    sections: [
      { heading: 'What a Covered Call Is and Why It Generates Income', body: `A covered call is the most conservative options strategy. If you already own 100 shares of stock, you can sell one call option against those shares each month and collect premium income - similar to collecting rent on a property you own.

HOW IT WORKS:
When you sell a call option, you receive a premium payment immediately in cash. In exchange, you give someone else the RIGHT to buy your shares at a specific price (the strike price) by a specific date (expiration).

If the stock stays below the strike price by expiration: the option expires worthless. You keep the premium. Repeat next month.
If the stock rises above the strike price: your shares are "called away" (sold at the strike price) and you keep the premium. You still profit on the stock from your cost basis to the strike - just not above the strike.

WHY EVERY STOCK OWNER SHOULD UNDERSTAND THIS:
Selling covered calls generates 1-3% per month in additional income on stocks you already hold. That is 12-36% annually in additional income on top of stock appreciation. Institutional investors routinely use covered calls. Most retail investors have no idea this income source exists.

THE CATCH: You cap your upside. If the stock rallies 50% above your strike price, you miss those gains above the strike. But you collected premium income that partially compensates.

COVERED CALL IS ALSO CALLED: A buy/write. Selling calls against stock you own. Writing covered calls.

YOU NEED: Minimum 100 shares of the underlying stock per call option contract sold. Options trade in 100-share contracts.`, callout: { type: 'key', text: `Covered calls are most effective on stocks you are willing to sell anyway. If you own Apple at $150 with a $200 target, selling a $200 covered call collects income AND sets up an automatic sale at your target price. If it gets called away, you achieved your goal AND earned extra premium income. If it does not get called away, you keep the premium and try again next month.` },
      svg: `<svg viewBox="0 0 720 290" xmlns="http://www.w3.org/2000/svg" style="background:#061018;border-radius:12px;display:block;width:100%;font-family:ui-monospace,monospace">
  <text x="360" y="22" fill="#E8F4FF" font-size="13" font-weight="bold" text-anchor="middle">Covered Call Strategy — Step-by-Step Payoff</text>
  <!-- Axes -->
  <line x1="60" y1="200" x2="660" y2="200" stroke="#0D2035" stroke-width="1.5"/>
  <line x1="60" y1="60" x2="60" y2="220" stroke="#0D2035" stroke-width="1.5"/>
  <text x="48" y="204" fill="#4A7AA0" font-size="9" text-anchor="end">$0</text>
  <text x="360" y="260" fill="#4A7AA0" font-size="10" text-anchor="middle">Stock Price at Expiration →</text>
  <!-- Stock ownership: rises with price -->
  <line x1="60" y1="200" x2="660" y2="80" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="620" y="78" fill="#3B82F6" font-size="9">Stock alone</text>
  <!-- Short call payoff (negative slope above strike) -->
  <!-- Combined: flat above strike, rising below -->
  <!-- Combined covered call payoff -->
  <polyline points="60,230 160,210 260,190 360,170 430,148 490,148 560,148 640,148" fill="none" stroke="#00D09C" stroke-width="3"/>
  <!-- Strike line -->
  <line x1="430" y1="55" x2="430" y2="220" stroke="#F7931A" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="430" y="232" fill="#F7931A" font-size="9" text-anchor="middle">Strike Price</text>
  <text x="430" y="243" fill="#F7931A" font-size="8" text-anchor="middle">(where you sold the call)</text>
  <!-- Premium line -->
  <line x1="60" y1="192" x2="480" y2="192" stroke="#00D09C" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="120" y="188" fill="#00D09C" font-size="9">Premium received</text>
  <!-- Max profit zone -->
  <text x="560" y="138" fill="#00D09C" font-size="10" font-weight="bold" text-anchor="middle">MAX PROFIT</text>
  <text x="560" y="150" fill="#00D09C" font-size="9" text-anchor="middle">= (Strike - Cost) + Premium</text>
  <text x="560" y="162" fill="#00D09C" font-size="9" text-anchor="middle">(capped if stock rises)</text>
  <!-- Loss zone label -->
  <text x="150" y="245" fill="#FF4560" font-size="9" text-anchor="middle">Stock falls: loss is</text>
  <text x="150" y="256" fill="#FF4560" font-size="9" text-anchor="middle">offset by premium</text>
  <!-- Steps -->
  <rect x="30" y="266" width="660" height="20" fill="#081525" rx="6" stroke="#0D2035"/>
  <text x="360" y="279" fill="#E8F4FF" font-size="9" text-anchor="middle">Step 1: Own 100 shares · Step 2: Sell 1 call option at your target price · Step 3: Collect premium · Step 4: If exercised, sell shares at strike (your target). If not, keep premium and repeat.</text>
</svg>`,
      svgCaption: 'Covered call payoff: flat maximum profit if stock rises above strike, reduced loss to downside by premium collected' },
      { heading: 'Step-by-Step: How to Execute Your First Covered Call', body: `REQUIREMENTS TO SELL A COVERED CALL:
- Own at least 100 shares of the stock (100 shares = 1 contract)
- Have a brokerage account with options approval level 1 or 2 (standard for covered calls)
- The stock should have liquid options (check that bid/ask spreads on options are not too wide)

STEP-BY-STEP EXECUTION:

STEP 1: CHOOSE YOUR STRIKE PRICE
- Out of the money (OTM): Above the current stock price by 3-10%
  - Premium is smaller but you keep more upside if stock rises
  - Best when you expect moderate growth and want to hold shares
- At the money (ATM): At or very near current stock price
  - Premium is larger but your shares get called away if stock stays flat or rises
  - Best when you want maximum income and are willing to sell

Most beginner covered call writers start with OTM strikes 5-7% above the current price.

STEP 2: CHOOSE YOUR EXPIRATION DATE
- Monthly expirations: 30-45 days until expiration is the sweet spot
  - Theta decay (time decay) is fastest in the final 30 days - you benefit from this as the seller
  - Long-dated options give more premium but expose you longer to stock risk
  - Weekly options: more frequent income but lower per-trade premium

STEP 3: EVALUATE THE PREMIUM
- Annualized yield: (premium received / stock price) x (365 / days to expiration)
  - If you receive 2 dollars on a 100 dollar stock with 30 days until expiration: (2/100) x (365/30) = 24% annualized yield
  - Compare this to your stock holding cost and decide if it is worth it
- Minimum target: 1% monthly return (12% annualized) to justify the transaction

STEP 4: SELL THE CALL
- In your brokerage: find the option chain for your stock
- Select your chosen expiration date
- Find your chosen strike price
- Look at the bid price (what buyers will pay)
- Place a SELL TO OPEN order at the bid price or slightly above
- You receive the premium immediately in your account

STEP 5: MANAGE THE POSITION
- If stock stays below strike: option expires worthless, you keep shares and premium. Sell another call next month.
- If stock approaches strike with 7-14 days left: consider closing the position (buy the call back for a small debit) and selling a new one at a higher strike or later expiration to extend the trade.
- If stock rises well above strike: shares will be called away at expiration. You keep the premium plus gain from your cost basis to the strike.`, callout: { type: 'warning', text: `Never sell covered calls on stocks you are NOT willing to sell. If you love a stock and never want to sell it, selling covered calls risks having it called away at exactly the wrong time (right before a major catalyst). Covered calls are best on stocks where you have a specific price target in mind and are genuinely willing to sell at the strike price you choose.` } },
      { heading: 'Complete Covered Call Example With Real Numbers', body: `COMPLETE EXAMPLE TRADE:

SITUATION:
- You own 100 shares of XYZ stock at a cost of 50 dollars per share (total cost basis: 5,000 dollars)
- Current stock price: 52 dollars
- You think the stock will stay in the 50-55 dollar range for the next month

CHOOSING THE COVERED CALL:
- You look at the options expiring in 35 days
- The 55 strike call is available for a premium of 1.50 dollars per share
- That means you collect 150 dollars total (1.50 x 100 shares)

SELLING THE CALL:
- In your brokerage, you sell 1 contract of the XYZ 55 call expiring in 35 days
- You immediately receive 150 dollars in cash deposited to your account

POSSIBLE OUTCOMES AT EXPIRATION:

Outcome A: Stock is at 53 dollars (below strike)
- The call expires worthless. You keep 150 dollars. Your shares are worth 5,300 dollars.
- Total return: 150 dollars income + 300 dollar stock gain = 450 dollars or 9% in 35 days
- You sell another covered call next month.

Outcome B: Stock is at 57 dollars (above strike)
- Your shares are called away at 55 dollars. You receive 5,500 for shares.
- Plus you keep the 150 dollar premium.
- Total: 5,500 + 150 = 5,650. Your profit: 650 dollars (your cost was 5,000). Return: 13% in 35 days.
- You miss the gain from 55 to 57 (200 dollars) but collected premium that partially compensates.
- Your only regret: not selling more stock at 57. If this happens, consider selling at 57 instead.

Outcome C: Stock falls to 46 dollars
- The call expires worthless. You keep 150 dollars.
- Your shares are worth 4,600 - a 400 dollar paper loss.
- The 150 dollar premium REDUCES your loss to 250 dollars.
- The covered call did not eliminate the stock loss - it reduced it by the premium amount.
- This is why covered calls are not "safe" - you still have full stock downside minus the premium collected.`, callout: { type: 'key', text: `The covered call break-even is your stock purchase price MINUS the premium collected. If you bought stock at 50 dollars and collected a 1.50 dollar premium, your effective cost basis is 48.50 dollars. The stock must fall below 48.50 for you to have a net loss including the premium. This premium reduction of the effective cost basis is one of the most compelling features of the covered call strategy.` } }
    ],
    keyPoints: ['A covered call sells someone else the right to buy your 100 shares at the strike price - you collect premium immediately in exchange', 'Best strike: 5-7% out of the money, 30-45 days until expiration - the sweet spot for theta decay benefit and premium income', 'If stock stays below strike: option expires worthless, keep premium and shares, sell another next month (the ideal outcome)', 'If stock rises above strike: shares sold at strike, keep premium, still profitable from cost basis to strike (acceptable outcome)', 'Only sell covered calls on stocks you are genuinely willing to sell at the chosen strike price']
  }
}
