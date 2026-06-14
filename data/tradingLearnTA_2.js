export const TRADING_LEARN_TA_2 = {

"ta-u6": {
  id:"ta-u6", title:"Pivot Points", readTime:"9 min",
  subtitle:"The calculated levels traders worldwide use to define support, resistance, and session bias before the market opens.",
  sections:[
    { heading:"How to Calculate and Use Pivot Points",
      body:`Pivot points are calculated from the prior session's High, Low, and Close. They define the next session's likely support and resistance before it opens.

Standard formula:
Pivot (PP) = (Prior High + Prior Low + Prior Close) / 3
R1 = (2 × PP) − Prior Low
S1 = (2 × PP) − Prior High
R2 = PP + (Prior High − Prior Low)
S2 = PP − (Prior High − Prior Low)

Example: SPY yesterday — High $455, Low $449, Close $453.
PP = (455 + 449 + 453) / 3 = $452.33
R1 = (2 × 452.33) − 449 = $455.66
S1 = (2 × 452.33) − 455 = $449.66
R2 = 452.33 + 6 = $458.33
S2 = 452.33 − 6 = $446.33

These levels are plotted before the open and represent where the market expects key decision points to be. Session bias: price trading above the pivot = bullish session bias. Below the pivot = bearish. The pivot acts as the dividing line between bull and bear for the day.`,
      callout:{ type:"fact", text:"Pivot points are among the few technical tools where you know the exact price levels in advance — before the market opens. This allows full trade planning (entry alerts, stop placement, targets) before the session begins. Many institutional desks reference daily pivot levels, which is why price so often reacts at these mathematically precise points." }
    },
    { heading:"Three Pivot Point Trades With Exact Entries",
      body:`Trade 1 — S1 Bounce in a Bullish Session:
Condition: price opens above PP (bullish bias), dips to S1, forms a bullish reversal candle.
Entry: close of the bullish candle at S1 (or next bar open).
Stop: just below S2.
Target: PP initially, then R1.

Trade 2 — Failed Pivot Breakdown (Bullish Reversal):
Price breaks below the pivot, then reverses back above it with a strong green candle on volume.
Entry: close back above the pivot.
Stop: below the session low.
Target: R1.

Trade 3 — R1 Breakout:
Price approaches R1 with increasing momentum and expanding volume.
Entry: close above R1 on volume 1.5x+ average.
Stop: back below R1.
Target: R2.

Most powerful setups: when a pivot level also coincides with a prior significant support/resistance level or a key moving average. Multiple factors at the same price dramatically increase the reliability.`,
      callout:{ type:"warning", text:"Daily pivot points are recalculated every morning from the prior day's data. Yesterday's pivots are irrelevant today. Set your charting platform to automatically display daily pivots so you always have the current session's levels. Swing traders should use weekly pivots instead — calculated from the prior week's High, Low, Close using the same formula." }
    },
    { heading:"Weekly Pivots for Swing Traders",
      body:`For traders holding positions 3-10 days, weekly pivot points are more relevant than daily ones. Calculated identically but using prior week's High, Low, Close.

Example: SPY prior week — High $458, Low $447, Close $455.
Weekly PP = (458 + 447 + 455) / 3 = $453.33
Weekly R1 = (2 × 453.33) − 447 = $459.66
Weekly S1 = (2 × 453.33) − 458 = $448.66

Trading plan for the coming week:
If SPY holds above $453.33 Monday: week is bullish. Buy pullbacks to weekly PP targeting R1 at $459.66. Stop below weekly S1.
If SPY opens below weekly PP and fails to reclaim it Monday: week is bearish. Short rallies to weekly PP targeting S1.

The weekly PP also acts as a magnetic attractor — price frequently gravitates back toward the weekly PP by mid-week if it has moved far from it early in the week. This mid-week mean reversion to the weekly pivot is a reliable intraday scalp setup for active traders.`,
      keyPoints:[
        "PP = (Prior High + Prior Low + Prior Close) / 3. Calculated fresh each morning.",
        "Price above PP = bullish bias for the session. Price below PP = bearish bias.",
        "S1 bounce in bullish session: buy with reversal candle at S1, target R1.",
        "Failed breakdown below PP: close back above PP = immediate long signal, target R1.",
        "Swing traders: use weekly pivots (same formula, prior week OHLC). More durable than daily."
      ]
    }
  ]
},

"ta-u7": {
  id:"ta-u7", title:"Multi-Timeframe Analysis", readTime:"10 min",
  subtitle:"Use three timeframes to find better entries, tighter stops, and trades that align with institutional trend direction.",
  sections:[
    { heading:"The Three-Timeframe Rule",
      body:`Every professional trader uses at least two timeframes and most use three. The higher timeframe reveals the dominant trend. The lower timeframe provides the precise entry trigger.

Standard frameworks:
Position traders (weeks to months): Weekly for trend, Daily for setup, 4-Hour for entry.
Swing traders (days to a week): Daily for trend, 4-Hour for setup, 1-Hour for entry.
Day traders (hours): 1-Hour for trend, 15-Minute for setup, 5-Minute for entry.

The non-negotiable rule: only take trades in the direction of the higher timeframe trend. A bullish 15-minute setup inside a daily downtrend is fighting the institutional trend. Those trades lose far more often than they win.

The daily chart is the single most important timeframe for most traders. It filters intraday noise while revealing real structure. Every trade analysis should start here before moving to lower timeframes for timing.`,
      callout:{ type:"insight", text:"The most expensive mistake in multi-timeframe analysis: falling in love with a setup on a lower timeframe while ignoring the higher timeframe context. A perfect double bottom on the 15-minute chart inside a strong daily downtrend is fighting banks and hedge funds who see only the daily downtrend. The smaller the timeframe, the less it matters vs the dominant trend above it." }
    },
    { heading:"Full Multi-Timeframe Swing Trade Walkthrough",
      body:`Here is a complete three-timeframe swing trade from analysis to exit:

Step 1 — Weekly chart. NVDA shows higher highs and higher lows, price above the 40-week MA. Weekly trend: UP. Decision: only look for long trades.

Step 2 — Daily chart: find the setup. NVDA pulled back from $875 to $820 over 6 days. The 50-day EMA is at $815. RSI pulled back to 45 (oversold in uptrend context). Pullback is on declining volume. Setup: 50 EMA support in weekly uptrend, healthy pullback. Valid.

Step 3 — 4-hour chart: time the entry. Instead of buying the imprecise daily close, use the 4-hour chart. Wait for a bullish 4-hour candle closing above the $815-$820 zone. A bullish engulfing 4-hour candle forms at $818.

Entry: $819 (next 4-hour bar open).
Stop: $809 (below the 50 EMA on the daily chart).
Target: prior high at $875.

Risk: $10. Reward: $56. Ratio: 5.6:1.

The 4-hour entry ($819) vs. waiting for the daily close ($825) saved $6 per share and dramatically improved the risk-reward ratio. Lower timeframe entries almost always produce better risk-reward.`
    },
    { heading:"What to Do When Timeframes Conflict",
      body:`Sometimes charts on different timeframes disagree. A daily downtrend while the weekly is still in an uptrend. A 15-minute bullish pattern while the 1-hour is bearish.

The rule: when timeframes conflict, wait for alignment or pass.

The most common conflict: a counter-trend bounce on the lower timeframe while the higher timeframe trend is down. These trades have low probability and whipsaw constantly. Professionals avoid them.

The one exception: when the higher timeframe is at a critical support level. A daily downtrend reaching major weekly support — now the conflict becomes a potential reversal scenario. Enter with reduced size (half of normal) and a tight stop.

Pre-trade alignment checklist:
1. Higher timeframe trend: up, down, or sideways?
2. Medium timeframe setup: aligned with higher timeframe?
3. Lower timeframe entry: confirming both higher timeframes?

All three aligned = full position size, full conviction.
One misaligned = half size or pass.
Two misaligned = do not trade.`,
      keyPoints:[
        "Higher timeframe = trend direction authority. Lower timeframe = entry trigger only.",
        "Only trade in the direction of the higher timeframe trend. Fighting it destroys win rates.",
        "Lower timeframe entries give more precise stops — better risk-reward than waiting for higher timeframe closes.",
        "When timeframes conflict: wait for alignment or reduce size. Never fight two timeframes simultaneously.",
        "Daily chart is the foundation for most traders. Start all analysis there."
      ]
    }
  ]
},

"ta-u8": {
  id:"ta-u8", title:"Price Action and Supply and Demand", readTime:"12 min",
  subtitle:"Read the actual footprint of institutional buyers and sellers directly from the chart — no indicators needed.",
  sections:[
    { heading:"What Supply and Demand Zones Actually Are",
      body:`Supply and demand zones are price areas where institutions placed large orders in the past. Those unfilled or partially filled orders remain at those levels on the exchange order books. When price returns, the resting orders execute again — producing the visible price reaction.

This differs from a support/resistance line. A line is a precise price drawn by the trader. A zone reflects the actual spread of institutional orders — typically a range of 2-5%.

Demand zone (support zone) identification:
Price was at this level briefly, then launched sharply higher with big green candles and expanding volume. The launch = institution finished filling buy orders. The zone is the area where that buying occurred.

Supply zone (resistance zone) identification:
Price was at this level briefly, then dropped sharply with big red candles and expanding volume. The drop = institution finished filling sell orders. The zone is where the selling occurred.

Best zones: price reached the level, spent very little time (1-4 bars), then launched in a strong directional move. Brief time at the zone = institution was filling aggressively. Long consolidation at the zone = orders mostly consumed, weaker setup.`,
      callout:{ type:"fact", text:"Why zones work mechanically: if an institution had a 500,000-share buy order at $85 but only filled 300,000 shares before price moved away, 200,000 shares of demand remain at $85 on the order book. When price returns to $85, those resting buy orders execute again. You are trading along with pre-existing institutional demand — not trying to predict future buying." }
    },
    { heading:"Drawing and Trading a Demand Zone — Step by Step",
      body:`How to draw the zone correctly:
1. Find a strong impulsive move upward (3-5+ large green candles, expanding volume).
2. Look back to find the origin of that move — the last consolidation before the launch.
3. Draw a rectangle from the bottom of that consolidation to the top of the last red candle before the launch.
4. That rectangle is your demand zone.

Trading the zone — complete TSLA example:
TSLA ranged $240-$248 for 3 days, then exploded to $285 in 4 sessions. Demand zone = $240-$248.

Price later pulls back toward the zone. As it approaches $248 (zone top):

Entry approach 1 (aggressive): place a limit buy at $244 (middle of zone).
Entry approach 2 (conservative): wait for a bullish reversal candle inside the zone, then enter the next candle.

Stop: just below the zone bottom. Zone bottom $240, stop at $238.50.
Target: prior high at $285.
From entry $244: risk $5.50, reward $41. Ratio: 7.5:1.

If price enters the zone and spends more than 5 bars there without bouncing — the zone is being consumed, not defended. Exit or do not enter. Zones weaken with each test.`
    },
    { heading:"Engulfing Bar at a Zone — The Highest-Probability Setup",
      body:`When an engulfing candle forms at a supply or demand zone, you have the strongest price action setup available. Two pieces of evidence simultaneously: the zone itself (historical institutional interest) and the engulfing candle (current institutional activity).

Bearish engulfing at supply zone — complete trade:
Context: SPY rallied from $430 to $458. Supply zone: $455-$460 (where SPY spent 3 days before a prior sharp drop).

Day 1 in zone: SPY reaches $456. Small green candle.
Day 2: SPY opens $456.50, trades to $458.50 (into the zone), closes at $454. Large red candle engulfs the prior day's green body. Bearish engulfing confirmed.

Entry: short on Day 3 open at $453.50.
Stop: above the engulfing candle high at $459 → stop at $460.
Target 1: prior support at $445 ($8.50 reward, $6.50 risk = 1.3:1 partial target).
Target 2: next demand zone at $438 ($15.50 reward, $6.50 risk = 2.4:1).

Exit plan: sell 50% at $445, move stop to breakeven. Let remaining 50% run to $438.`,
      keyPoints:[
        "Demand zone = area where strong institutional buying launched price upward. Supply zone = where institutional selling launched price down.",
        "Best zones: price spent 1-4 bars then launched strongly with expanding volume — aggressive institutional filling.",
        "Draw demand zone from bottom of pre-launch consolidation to top of last red candle before the move.",
        "Stop just outside the zone boundary — if the zone fails, the trade thesis is invalidated.",
        "Engulfing candle AT the zone = highest-probability setup: historical evidence (zone) + current evidence (candle) combined."
      ]
    }
  ]
},

"ta-u9": {
  id:"ta-u9", title:"Advanced Candlestick Pattern Mastery", readTime:"10 min",
  subtitle:"Three-candle patterns that confirm reversals over multiple periods — and how to trade each with precision.",
  sections:[
    { heading:"Three-Candle Patterns: Confirmation Over Multiple Sessions",
      body:`Single-candle patterns give one data point. Two-candle patterns give two. Three-candle patterns confirm a shift in buyer-seller control across three periods — making them the most reliable candlestick signals.

Morning Star (Bullish Reversal):
Candle 1: Large red candle — sellers clearly in control.
Candle 2: Small body or doji at a lower level — indecision, neither side dominates.
Candle 3: Large green candle closing at least halfway into Candle 1's red body — buyers took decisive control.

Evening Star (Bearish Reversal — mirror image):
Candle 1: Large green candle.
Candle 2: Small body or doji at a higher level.
Candle 3: Large red candle closing at least halfway into Candle 1's green body.

Three White Soldiers (Strong Bullish):
Three consecutive large green candles, each opening within the prior body and closing near its high. Signals the beginning of a strong uptrend or the resumption of one after a consolidation.

Three Black Crows (Strong Bearish):
Three consecutive large red candles, each opening within the prior body and closing near its low. Strong downtrend initiation or resumption.`
    },
    { heading:"Trading the Morning Star — Full Execution",
      body:`The Morning Star at a support level is one of the highest-probability reversal setups. Here is the complete trade:

Context required: the stock must be in a downtrend or meaningful decline. The pattern must form at a significant support level.

Example: Amazon (AMZN) pulled back from $185 to $163 over 8 sessions. The $160-$165 zone is major support (prior breakout level).

Candle 1: Large red from $167 to $163 close.
Candle 2: Opens $163, trades to $161, closes $162 (doji, small range).
Candle 3: Opens $162, rallies all session, closes $167 — well into Candle 1's body. Pattern confirmed.

Entry: on the close of Candle 3 at $167 (same-day entry) or next morning open at $167.50.
Stop: below the lowest point of the three-candle pattern. Candle 2 low was $161. Stop at $160 (below the support zone).
Target: prior swing high at $185.

Risk $167.50 − $160 = $7.50. Reward $185 − $167.50 = $17.50. Ratio: 2.3:1. Valid trade.`,
      callout:{ type:"insight", text:"The most powerful Morning Stars have a gap between Candle 1 and Candle 2 (panic gap down) and another gap between Candle 2 and Candle 3 (recovery gap up). These gaps show true exhaustion and reversal conviction. In modern markets these gaps are less common in stocks but appear frequently in crypto, which trades 24/7 and gaps between sessions." }
    },
    { heading:"Quality Filters: The Difference Between Signal and Noise",
      body:`Most candlestick patterns you see on charts are not worth trading. These four filters separate the high-probability setups from the noise:

Filter 1 — Location. The pattern must form at a meaningful price level: prior support/resistance, major moving average, or Fibonacci level. Random-price patterns are noise.

Filter 2 — Prior trend justification. A Morning Star reversal needs a meaningful prior decline (at least 5-10% or 5+ declining bars). A reversal after a 1-session dip is not a meaningful signal.

Filter 3 — Volume confirmation. The recovery candle (Candle 3 in Morning Star) should show expanding volume — buyers returning with real capital. Low volume on the recovery candle = weak reversal.

Filter 4 — Higher timeframe alignment. A bullish reversal in a stock in a weekly downtrend is counter-trend. Highest probability patterns align with the weekly direction.

Quick pre-entry checklist:
☐ Pattern at a meaningful price level?
☐ Prior trend justifies this reversal?
☐ Volume expanding on the reversal candle?
☐ Aligns with weekly chart direction?
☐ Risk-reward at least 2:1?

If any box is unchecked — pass on the trade. You are looking for all five boxes, not four.`,
      keyPoints:[
        "Morning Star (3 candles): large red, indecision, large green closing into first candle's body. Bullish reversal at support.",
        "Evening Star: large green, indecision at high, large red closing into first candle. Bearish reversal at resistance.",
        "Three White Soldiers: three consecutive large green candles — strong uptrend initiation or resumption.",
        "Four quality filters: meaningful level + prior trend + volume + higher timeframe alignment.",
        "Pass on any pattern that does not clear all four filters. Selectivity is the edge."
      ]
    }
  ]
},

"ta-u10": {
  id:"ta-u10", title:"Market Gaps and Gap Trading", readTime:"10 min",
  subtitle:"The four gap types, which ones fill and which continue — and how to trade both profitably.",
  sections:[
    { heading:"The Four Gap Types and Their Implications",
      body:`A gap forms when today's opening price is significantly higher or lower than yesterday's close, leaving an area on the chart with no trading.

1. Common Gap — Fill quickly. No catalyst, range-bound stock. Price opens away from yesterday's close, fills within 1-3 days. Trade: fade it back toward prior close.

2. Breakaway Gap — Do NOT fade. Price breaks out of a significant consolidation pattern on very high volume (3x+ average). Signals a new trend beginning. These gaps typically don't fill for months. Trade: enter in the direction of the gap.

3. Continuation Gap (Runaway) — Trade with it. Forms in the middle of an existing trend on high volume. The prior trend is accelerating. Traders who missed the original entry can join here. Trade: enter in the direction on a brief pullback.

4. Exhaustion Gap — Fade it. Forms near the END of a trend, often on extreme volume after a long directional move. The final desperate push by the losing side. Often reverses through the gap within days. Trade: fade after the reversal confirms.

Volume is the primary distinguishing factor: breakaway and continuation gaps have very high volume (3x+ average). Common and exhaustion gaps have moderate to normal volume.`,
      callout:{ type:"fact", text:"Studies across US equities show approximately 70% of gaps eventually fill. However, timing varies enormously — common gaps fill within days; breakaway gaps from major base breakouts may not fill for the entire duration of the subsequent trend. Never assume any gap will fill without first identifying the gap type. The 70% statistic is overwhelmingly driven by common gaps." }
    },
    { heading:"The Gap Fade Strategy — Complete Entry Protocol",
      body:`The highest-percentage gap trade: fading a common gap with no fundamental catalyst.

Pre-fade checklist (all three required):
1. Check for news: search the ticker + "news" for today. Earnings, FDA approvals, mergers, major analyst upgrades — if any exist, DO NOT FADE. News-driven gaps continue far more than they fill.
2. Check pre-market volume: 1-2x normal = fading candidate. 5x+ normal = momentum, don't fade.
3. Check broader market: if SPY and QQQ are also gapping strongly, market tide overrides individual fade setups.

If all three pass — proceed with the fade:

Gap-up fade (short trade) — step by step:
Stock closed $48.50, opened at $51 (gap up $2.50). No news. Normal pre-market volume. Neutral market.

Watch the first 15-30 minutes. If price fails to break above the opening high and starts reversing:
Entry: break below the opening 15-minute low.
Stop: above the gap-up opening high.
Target 1: 50% fill = $49.75. Target 2: full fill = $48.50.

Example numbers:
15-min high: $51.40. 15-min low: $50.80. Price breaks $50.80.
Short entry: $50.75. Stop: $51.50. T1: $49.75 (ratio 1.3:1). T2: $48.50 (ratio 3:1).`
    },
    { heading:"Trading Breakaway Gaps — Entering a New Trend",
      body:`Breakaway gaps are one of the most powerful trend entry opportunities. You are getting positioned at the beginning of a major move.

Identifying a true breakaway gap:
Price breaking out of a recognizable consolidation or pattern (base, triangle, rectangle, extended range).
Volume 3x+ the 20-day average.
Gap size: at least 3-5% for individual stocks.
A fundamental catalyst often accompanies the technical breakout.

How to trade it — the 15-minute opening range method:
1. Note the gap-up open and the 15-minute high and low.
2. Wait 15 minutes. Let the initial volatility settle and early profit-takers sell.
3. Enter long when price breaks above the 15-minute high on continued strong volume.
4. Stop: below the 15-minute low (opening range low).
5. Target: gap size added to the 15-minute high.

If the stock gapped from $45 to $50 (gap = $5), and the 15-minute high is $50.80:
Entry: break above $50.80.
Stop: below the 15-minute low (say $49.50).
Target: $50.80 + $5 = $55.80.

Never enter the open of a breakaway gap without the 15-minute filter — the opening price is often the day's worst entry as early profit-takers sell into the gap. The 15-minute confirmation shows buyers absorbed the sellers.`,
      keyPoints:[
        "Four gap types: Common (fill fast, fade), Breakaway (trade with it), Continuation (join the trend), Exhaustion (fade after reversal confirms).",
        "Pre-fade checklist: no news + normal volume + neutral market. All three required before fading.",
        "Gap fade entry: 15-minute opening range break in the fade direction. Don't enter blind at the open.",
        "Breakaway gap: wait for 15-minute high break on volume to confirm buyers absorbed the initial sellers.",
        "Never fade earnings, FDA, merger, or major upgrade gaps. Fundamental catalysts override technical fade setups."
      ]
    }
  ]
},

"ta-u11": {
  id:"ta-u11", title:"The Double Top and Double Bottom", readTime:"9 min",
  subtitle:"The most common reversal pattern in all markets — with exact entry, stop, target, and the failed pattern trade.",
  sections:[
    { heading:"Why Double Tops and Bottoms Work",
      body:`A double top forms at the end of uptrends: price reaches a high, pulls back, then rallies again but fails to meaningfully exceed the prior high. This second failure is the key evidence — buying power is exhausted at that level. Sellers are there in sufficient force to stop every rally attempt.

The pattern completes (and the trade triggers) when price closes below the trough between the two peaks — the neckline.

Psychology behind the double top:
Every trader who bought on the second push to the high is now losing money as price falls toward the neckline. When the neckline breaks, these trapped buyers rush to exit, creating a cascade of sell orders that accelerates the decline.

The double bottom is the mirror: price tests a low twice, failing to break significantly lower on the second attempt. Short sellers are trapped when the neckline breaks upward and are forced to buy to cover, adding momentum to the rally.

The two peaks of a double top don't have to be the exact same price — a variation of up to 3% is acceptable. A second peak slightly lower than the first is actually more bearish: bulls couldn't even reach the prior high.`,
      callout:{ type:"insight", text:"The right shoulder height in a double top matters. If the second peak is significantly lower than the first (5%+ lower), it shows buyers were noticeably weaker on the second attempt. This makes for a stronger double top — the pattern reflects a more severe loss of upside momentum and has historically shown higher completion rates." }
    },
    { heading:"Trading the Double Bottom — Complete Setup",
      body:`Full execution from identification through exit:

Step 1 — Find the pattern: AMD declined from $180 to $142. Bounced from $142 to $158 (neckline). Pulled back to $143 (within 1% of $142 — valid second bottom).

Step 2 — Confirm second bottom held: a bullish engulfing candle forms at $143, closing at $148. Buyers are defending.

Step 3 — Wait for the neckline break: neckline is $158. DO NOT enter at the second bottom — unconfirmed.

Step 4 — Entry trigger: AMD closes at $159.50 on volume 2.5x average. Pattern confirmed.

Step 5 — Enter next open at $160.

Step 6 — Stop: below the neckline at $156 (swing trade). Or below the full pattern at $141 (position trade).

Step 7 — Target: ($158 − $142) = $16 measured move projected above $158 → $174.

Risk $160 − $156 = $4. Reward $174 − $160 = $14. Ratio: 3.5:1. Execute.`
    },
    { heading:"The Failed Double Top — Trading the Reversal of the Reversal",
      body:`When a double top breakdown fails and price immediately recovers above the neckline, it creates one of the most explosive trades available.

The dynamic: every short seller who entered on the neckline break is now losing money and forced to cover (buy). Every long-biased trader who was waiting on the sidelines now enters aggressively. The combination creates violent upside momentum — a short squeeze.

How to identify and trade it:
Standard setup: SPY double top with peaks at $462, neckline at $453.
Neckline breaks down. Price hits $451.
The next session: price reverses, moves back above $453 on high volume, closes at $455.

Failed pattern entry:
Enter long on the close back above the neckline: $455.
Stop: below the intraday low of the failed breakdown day (say $450.50).
Target: the double top peaks at $462 initially, then Fibonacci extensions above.

Risk: $4.50. Reward to $462: $7. Ratio: 1.56:1 — marginal to $462. But with extensions above $462 as secondary targets the trade becomes very compelling.

The critical principle: the more traders who shorted the clean neckline break, the more violent the squeeze when it fails. High-profile, widely-watched patterns that fail create the biggest counter-moves.`,
      keyPoints:[
        "Double top complete: two peaks within 3% of each other, then a close below the neckline on volume.",
        "Double bottom complete: two lows within 3%, then a close above the neckline on volume.",
        "Target for both: distance from peak/bottom to neckline, projected in the breakout direction.",
        "Enter on the NECKLINE BREAK — not at the second top or bottom. Pattern unconfirmed until then.",
        "Failed breakdown of a double top (price recovers above neckline) = extremely powerful squeeze rally. Trade it."
      ]
    }
  ]
},

"ta-u12": {
  id:"ta-u12", title:"Ichimoku Cloud System", readTime:"11 min",
  subtitle:"One indicator showing trend, momentum, and support/resistance simultaneously — and exactly how to trade it.",
  sections:[
    { heading:"The Five Ichimoku Components Explained",
      body:`Ichimoku Kinko Hyo (equilibrium at a glance) gives five pieces of information from a single indicator:

1. Tenkan-sen (Conversion Line) = (9-period high + 9-period low) / 2. Short-term momentum. The 9-period midpoint price.
2. Kijun-sen (Base Line) = (26-period high + 26-period low) / 2. Medium-term momentum. Key support/resistance level.
3. Senkou Span A = (Tenkan + Kijun) / 2, plotted 26 periods AHEAD. Upper or lower cloud boundary.
4. Senkou Span B = (52-period high + 52-period low) / 2, plotted 26 periods ahead. Other cloud boundary.
5. Chikou Span = Current close plotted 26 periods BEHIND. Confirms whether current momentum matches historical price.

The Cloud (Kumo) = the area between Span A and Span B.
Green cloud (Span A above Span B) = bullish structure.
Red cloud (Span A below Span B) = bearish structure.

Maximum bullish signal: price above green cloud + Tenkan above Kijun + Chikou above its price from 26 periods ago.
Maximum bearish signal: price below red cloud + Tenkan below Kijun + Chikou below its historical price.`,
      callout:{ type:"fact", text:"Ichimoku works exceptionally well on cryptocurrency charts, particularly Bitcoin and Ethereum on the daily and 4-hour timeframes. The 26-period displacement of the cloud edges and Chikou span aligns naturally with the continuous 24/7 nature of crypto markets. Many professional crypto traders use Ichimoku as their primary framework." }
    },
    { heading:"The TK Cross and Cloud Breakout Trades",
      body:`Two primary Ichimoku trade setups:

Setup 1 — TK Cross (Tenkan-Kijun Cross):
Bullish TK Cross: Tenkan crosses above Kijun.
Most powerful when occurring ABOVE the green cloud (all factors aligned bullish).

Ideal bullish TK cross trade:
Conditions: price above green cloud, Tenkan crosses above Kijun, Chikou above its historical reference.
Entry: close of the candle where the TK cross occurs (or next open).
Stop: below the Kijun-sen (base line). If the base line breaks, the trade is invalidated.
Target: prior swing high or next Ichimoku resistance.

Setup 2 — Cloud Breakout:
Price closes above the top of a red cloud (bearish-to-bullish transition) — a more significant signal than TK cross alone.

Entry: close above the top of the cloud.
Stop: a close back inside the cloud — if price re-enters, the breakout failed.
Target: the width of the cloud at its thinnest point projected above the breakout, or the next resistance level.

Combined signal (highest probability): TK Cross occurring simultaneously with a Cloud Breakout. Both indicators confirming at once is rare but produces the most sustained trend moves.`,
      callout:{ type:"warning", text:"Ichimoku works best on daily, 4-hour, and weekly charts. On 5-minute or 15-minute charts the signals are too noisy to be reliable. If you use Ichimoku for day trading, use the 1-hour chart for direction signals and a lower timeframe only for entry timing — never for the primary Ichimoku signal itself." }
    },
    { heading:"The Cloud as Dynamic Support and Resistance",
      body:`The most practical use for most traders: the cloud creates a visual dynamic support/resistance zone that adjusts continuously with price.

In an uptrend, the cloud below price acts as support. When price pulls back to the top of the cloud:
1. Watch for price to touch the top cloud edge.
2. Look for a bullish reversal candle at the cloud top.
3. Enter long. Stop: close below the bottom of the cloud.
4. Target: prior swing high.

Cloud thickness and its meaning:
Thick cloud = strong support/resistance — requires significant force to break through.
Thin cloud = weaker support/resistance — breakouts through thin clouds happen more easily and mean less.

Reading future momentum with the cloud:
The cloud is plotted 26 periods AHEAD. You can see the future cloud direction right now. If the cloud ahead is thickening and turning green — building bullish momentum over the next 26 periods. If the cloud ahead is thinning or turning red — momentum may stall or reverse. This forward visibility is unique to Ichimoku and allows advance planning no other standard indicator can provide.`,
      keyPoints:[
        "Five components: Tenkan (9-period), Kijun (26-period), Span A, Span B (plotted 26 ahead), Chikou (26 behind).",
        "Maximum bullish: price above green cloud + Tenkan above Kijun + Chikou above historical price.",
        "TK Cross above cloud: Tenkan crosses Kijun = primary entry signal. Stop below the Kijun-sen.",
        "Cloud acts as dynamic support in uptrend. Pullback to cloud top with bullish candle = entry.",
        "Cloud plotted 26 periods ahead gives advance visibility of future support/resistance — unique to Ichimoku."
      ]
    }
  ]
}

}
