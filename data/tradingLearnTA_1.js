export const TRADING_LEARN_TA_1 = {

"ta-u1": {
  id:"ta-u1", title:"Reading Charts and Candlesticks", readTime:"10 min",
  subtitle:"Decode every bar on a chart — who won, by how much, and what it means for the next move.",
  sections:[
    { heading:"What Every Candlestick Tells You",
      body:`A candlestick records four prices from one time period: Open, High, Low, Close. The thick body spans from open to close — green means buyers drove price higher during the period; red means sellers drove it lower. The thin wicks above and below reveal how far each side pushed before losing control.

The upper wick = buyers pushed price here but sellers rejected them back down.
The lower wick = sellers pushed price here but buyers stepped back in and held.

Read any bar by asking three questions:
Who won the period — buyers (green) or sellers (red)?
How convincingly — large body means decisive control, small body means close battle.
Did the losing side mount a challenge — long wicks mean yes, short wicks mean no.

A large green candle with tiny wicks = total buyer control.
A small green body with a long upper wick = buyers won barely while sellers fought hard — weak conviction.
A red candle with a long lower wick (hammer shape) = sellers pushed price down but buyers defended and closed near the high — potential reversal.`,
      chart:"candlestick_anatomy",
      callout:{ type:"fact", text:"The hammer is the most important single-candle pattern for beginners: small body near the top, lower wick at least twice the body length. At a downtrend low it shows that sellers tried to extend the decline but buyers aggressively reclaimed those levels before the close. The longer the lower wick relative to the body, the more forceful the buying rejection of lower prices." }
    },
    { heading:"The Five Patterns Every Trader Must Know",
      body:`These five formations carry real predictive weight at significant price levels:

1. Hammer (Bullish Reversal) — At downtrend lows. Small body near top, long lower wick. Buyers defended lower prices hard. Entry signal: next candle opens above the hammer body.

2. Shooting Star (Bearish Reversal) — At uptrend highs. Small body near bottom, long upper wick. Sellers rejected higher prices. Entry signal: next candle opens below the shooting star body.

3. Bullish Engulfing — A large green candle whose body completely covers the prior red candle's body. Buyers overwhelmed sellers in one decisive session.

4. Bearish Engulfing — A large red candle that completely engulfs the prior green candle's body. Sellers overwhelmed buyers decisively.

5. Doji — Open and close nearly identical, creating a cross or plus sign. Complete indecision. After a sustained trend, a doji warns the trend may be exhausting.

Critical rule: none of these patterns mean anything at random prices. They only carry weight at a significant level — major support, resistance, or a key moving average.`,
      callout:{ type:"warning", text:"The most costly beginner mistake: trading candlestick patterns at random prices in the middle of a range. A hammer at a random price is noise. The same hammer at a 3-month support level after a 15% decline is a high-probability setup. Every time you see a pattern, first ask: what makes this specific price level significant enough to justify the trade?" }
    },
    { heading:"Executing a Hammer Trade — Step by Step",
      body:`A complete hammer trade at support so you know exactly what to do:

Scenario: NVDA has declined 10 days in a row. It pulls back to $420 — a level that was major resistance for three months before breaking out, making it now significant support (role reversal). On day 11 a hammer forms: opens $421, trades down to $415, closes $422.

Step 1 — Confirm the level matters. $420 was prior multi-month resistance. It is meaningful.
Step 2 — Confirm hammer shape. Lower wick ($7) is more than twice the body ($1). Valid.
Step 3 — Wait for confirmation. Day 12 opens at $423 — above the hammer body. Entry signal triggered.
Step 4 — Enter at $423 (market open day 12, or a buy-stop order at $423).
Step 5 — Place stop below the hammer low: $414.50.
Step 6 — Calculate position size. Risk = $423 − $414.50 = $8.50. Account risk = $850: 850 ÷ 8.50 = 100 shares.
Step 7 — Set target. Prior swing high at $445 = $22 reward on $8.50 risk = 2.6:1. Take partial at $445, move stop to breakeven.`,
      keyPoints:[
        "Green candle = buyers won the period. Red = sellers won. Wicks show how far each side pushed before losing control.",
        "Hammer at support: small body near top, lower wick 2x the body — buyers rejected lower prices forcefully.",
        "Bullish and bearish engulfing: one side overwhelms the other in a single decisive session.",
        "Doji at trend extremes: neither side could maintain control — potential trend exhaustion.",
        "Context rule: a pattern only matters at a meaningful price level. No level = no trade."
      ]
    }
  ]
},

"ta-u2": {
  id:"ta-u2", title:"Chart Patterns: Reversals and Continuations", readTime:"12 min",
  subtitle:"Head and shoulders, double tops, bull flags — with exact entry rules, stops, and measured move targets.",
  sections:[
    { heading:"Head and Shoulders — The Most Reliable Reversal Pattern",
      body:`The Head and Shoulders top forms at the end of uptrends and shows a specific failure sequence: bulls make a high (left shoulder), push even higher (head), then try again but fail to reach the head (right shoulder). That right shoulder failure is the critical evidence — buying power is exhausted.

The neckline connects the lows between the shoulders. A close below the neckline on expanding volume completes the pattern and is the sell signal.

Target calculation: measure the vertical distance from the head peak to the neckline. Project that same distance downward from where price breaks the neckline.

Example: Stock at $100 (head high), neckline at $88. Distance = $12. After the break at $88, target = $88 − $12 = $76.

Volume signature: heavy at left shoulder (healthy uptrend), lighter at head (first divergence), notably light at right shoulder (buyers exhausted), then a surge on the neckline breakdown confirming institutional selling.`,
      chart:"head_shoulders",
      callout:{ type:"fact", text:"A right shoulder that forms at a lower price than the left shoulder makes the pattern more bearish — bulls could not even reach the prior shoulder. A right shoulder at or above the left shoulder height weakens the pattern significantly. The lower the right shoulder, the more exhausted the buyers are." }
    },
    { heading:"Bull Flag — Highest-Probability Continuation Trade",
      body:`A bull flag forms during a strong uptrend when price pauses and pulls back slightly. The sharp advance is the flagpole. The pause is the flag. When price breaks above the flag, the original advance typically repeats.

Three requirements for a valid bull flag:
1. Flagpole must be sharp and near-vertical — a gradual rise does not qualify.
2. Flag consolidation slopes slightly downward or sideways — never upward (that is a rising wedge, which is bearish).
3. Volume contracts during the flag and expands on the breakout.

Full trade execution:
AAPL moves from $175 to $195 in 5 days (+$20 flagpole). Pulls back to $191 over 3 days on light volume, sloping downward.

Breakout trigger: price closes above $193 (flag high) on volume 2x average.
Entry: $193.50 next morning open.
Stop: below the flag low at $187.50.
Target: $193 + $20 (flagpole) = $213.
Risk: $6.00. Reward: $19.50. Ratio: 3.25:1.`,
      chart:"bull_flag"
    },
    { heading:"Double Bottom — Clearest Reversal to Trade",
      body:`A double bottom forms when price tests the same support level twice and holds both times. The pattern completes when price closes above the peak between the two bottoms (the neckline). That neckline break — not the second touch of the low — is the entry signal.

Complete trade setup:
Stock declined from $80 to $52. First bottom at $52. Bounced to $61 (neckline). Pulled back to $53 (second bottom, within 2% of first). Held and began rallying.

Step 1 — Watch for close above the $61 neckline.
Step 2 — Entry: the day price closes above $61 on expanding volume at $61.50.
Step 3 — Stop: below the second bottom at $51.50.
Step 4 — Target: ($61 − $52) = $9 projected above neckline: $61 + $9 = $70.
Step 5 — Risk/reward: $61.50 entry, $51.50 stop ($10 risk), $70 target ($8.50 reward). Ratio: 0.85:1 — too low. Tighten stop to $53.50 (just below second bottom): now $8 risk, $8.50 reward = 1.06:1. Still marginal. Move entry to $62 with stop at $53.50: $8.50 risk, $8 reward. Reject — wait for better R:R or skip.`,
      callout:{ type:"warning", text:"Never enter a double bottom at the second touch of the low. The pattern is unconfirmed until the neckline breaks. The second low could be the start of a breakdown to new lows. Wait for the neckline break on volume. You sacrifice a few points of entry but only trade confirmed setups." },
      keyPoints:[
        "Head and Shoulders target: head-to-neckline distance projected down from the breakdown point.",
        "Bull flag: sharp flagpole + counter-trend low-volume pullback + high-volume breakout above flag high.",
        "Bull flag target: flagpole length added to the breakout price.",
        "Double bottom confirms ONLY when price closes above the neckline on volume.",
        "Double bottom target: bottom-to-neckline distance projected above the neckline."
      ]
    }
  ]
},

"ta-u3": {
  id:"ta-u3", title:"Moving Averages: SMA and EMA", readTime:"11 min",
  subtitle:"The three specific moving average strategies professionals use — with exact setups and real trade examples.",
  sections:[
    { heading:"Moving Averages as Dynamic Support and Resistance",
      body:`A moving average smooths price noise and reveals the underlying trend. The 20-period EMA tracks short-term trend. The 50-period EMA tracks intermediate trend. The 200-period SMA defines the long-term regime.

The insight most beginners miss: in a strong uptrend, price repeatedly pulls back to the 21 EMA or 50 EMA and bounces. These pullbacks are where professionals enter — not at breakouts when everyone else already sees the move.

SMA (Simple Moving Average): each period weighted equally. Slower but less whipsaw noise.
EMA (Exponential Moving Average): recent prices weighted more heavily. Faster and more responsive.

Most important rule: price above the 200 SMA = bull market, trade from the long side. Price below the 200 SMA = bear market, be extremely selective on longs.`,
      chart:"moving_averages"
    },
    { heading:"The 21 EMA Pullback Strategy — Full Execution",
      body:`In a confirmed uptrend, buy when price pulls back to the 21 EMA and shows a reversal signal there. This is one of the cleanest repeatable setups in technical analysis.

Three conditions required:
1. Clear uptrend: higher highs and higher lows, price above the 50 EMA and 200 SMA.
2. Price pulls back to the 21 EMA without closing significantly below it.
3. A bullish candlestick forms at the 21 EMA (hammer, engulfing, or close back above the 21 EMA after briefly touching it).

Real trade — SPY daily:
SPY trending above both 50 and 200 MAs. Pulls back from $452 to $441 over 4 days. Touches the 21 EMA at $440. Hammer forms on day 4. Day 5 opens above the hammer high.

Entry: $442 at day 5 open.
Stop: $437 (below the 21 EMA and hammer low).
Initial target: prior high at $452 = $10 reward on $5 risk = 2:1.
Trailing stop: move to the 21 EMA value after each close.

Critical filter: price must NOT close below the 50 EMA on the pullback. A close below the 50 EMA means the intermediate trend is weakening — the pullback may be a larger reversal.`,
      callout:{ type:"insight", text:"Why the 21 EMA works as support: institutional buying programs are programmed to add positions near key moving averages during uptrends. The moving average doesn't cause the bounce — the institutional buy orders triggered near it do. When you buy a 21 EMA touch in an uptrend you are joining institutional order flow, not fighting it." }
    },
    { heading:"The Golden Cross — Long-Term Trend Change Trade",
      body:`The Golden Cross: the 50-day SMA crosses above the 200-day SMA. This is a major long-term signal that historically precedes sustained trending moves.

Important context: it is lagging. By the time it forms, price has often already rallied 15-30% off the low. The signal is not about catching the bottom — it is about confirming a regime change and positioning for the next major uptrend leg.

How to trade it:
Entry approach 1 (aggressive): buy when the 50 crosses above the 200. Stop below the most recent significant swing low.
Entry approach 2 (highest quality): wait for the first pullback after the cross. Price typically retests the 200 MA from above after the cross — buy that test on declining volume.

S&P 500 Golden Cross example — early 2023:
Cross formed in February 2023 at approximately $4,100.
High-quality entry: pullback to test the 200 SMA in March 2023 at $3,950.
Stop: below the prior significant low at $3,800.
The index rallied to $4,600+ over the following months.

Death Cross use: do NOT aggressively short on a Death Cross — it is even more lagging on the downside. Use it to reduce long exposure and stop buying dips. The Death Cross signals a regime change to bear market, not an immediate short entry.`,
      keyPoints:[
        "200 SMA = the most important single line. Above it = bull market (trade long). Below it = bear market (be cautious).",
        "21 EMA pullback in uptrend: buy bullish candle at the 21 EMA with price above 50 EMA and 200 SMA.",
        "Stop: below the 21 EMA and the reversal candle low.",
        "Golden Cross (50 above 200): highest quality entry is the first pullback back to the 200 MA after the cross forms.",
        "Moving averages create self-fulfilling support because institutional programs buy near them — align with that order flow."
      ]
    }
  ]
},

"ta-u4": {
  id:"ta-u4", title:"Volume Analysis Fundamentals", readTime:"10 min",
  subtitle:"Volume confirms or denies every price move. Learn to separate real moves from false ones before they reverse.",
  sections:[
    { heading:"The Four Volume Principles That Apply to Every Trade",
      body:`Every indicator is calculated from price — if price moves, they follow. Volume is different. It records actual shares or contracts that changed hands. It is real money, real conviction, real institutional participation.

Price tells you WHAT is happening. Volume tells you HOW MUCH people believe it.

The four master rules:
1. Rising price + rising volume = healthy trend, continuation likely.
2. Rising price + declining volume = trend losing conviction, watch for reversal.
3. Falling price + rising volume = heavy distribution or panic selling — dangerous environment.
4. Falling price + declining volume = natural pullback in uptrend, buyers not panicking.

Rule 4 is the most valuable for entries. A pullback on declining volume in an uptrend means sellers are not aggressive — it is a healthy correction creating an entry opportunity. A pullback on rising volume means sellers are actively pressing — avoid buying.

The breakout rule: any breakout you trade requires volume at least 1.5x the 20-day average. Low-volume breakouts fail at rates exceeding 60%.`,
      chart:"volume_analysis"
    },
    { heading:"Volume Climax — How to Read Exhaustion Tops and Bottoms",
      body:`A volume climax is a spike to 3-10x average volume marking potential trend exhaustion. When everyone who wanted to buy has bought (buying climax at a top) or everyone who wanted to sell has sold (selling climax at a bottom), the trend's fuel is gone.

Selling climax at bottoms — full trade setup:
Signature: sharp sell-off with a volume spike 3x or more above the 20-day average, usually a large red candle.

Step 1 — Identify the climax: the volume bar is clearly extreme relative to recent history.
Step 2 — Wait for next session. If price does NOT make a new low, the climax likely absorbed the available supply.
Step 3 — Entry trigger: a close above the high of the climax bar.

Example: A stock falls from $90 to $55 over 6 weeks. On the final day, volume hits 8 million shares vs. 1.5 million average. Red bar from $61 to $55. Next day: opens $56, closes $59 — no new low.

Entry: close above the climax bar high of $62. Enter at $62.50.
Stop: below the climax bar low at $54.50.
Target: prior swing at $75. Risk $8, Reward $12.50. Ratio: 1.56:1.

Key rule: a climax bar is NOT automatically a buy signal. You need the following session to confirm by NOT extending the move. If the next session makes another new low on high volume, the selling is not exhausted — it is continuing.`,
      callout:{ type:"warning", text:"Do not buy climax bars on the day they form. Wait for the confirmation session. The climax day itself often continues further intraday before any bounce. Entering on the climax bar puts you into an extremely volatile situation before the reversal is confirmed. The one-session wait costs you a few points on entry but dramatically increases your probability of being right." }
    },
    { heading:"On-Balance Volume — Spot Accumulation Before Price Moves",
      body:`OBV adds the full day's volume on up closes, subtracts it on down closes, creating a running total that reveals whether volume is flowing into or out of a stock.

Its primary use: OBV divergence warns of institutional activity before price confirms it.

Bullish divergence setup:
Price makes a new low. OBV makes a higher low than at the prior price bottom.
Interpretation: despite price falling to a new low, more money is flowing IN on up days than is flowing out on down days. Institutions are quietly buying the dip.

How to act:
1. Identify OBV divergence on the daily chart: price at new low, OBV not confirming.
2. Watch for a price catalyst — a breakout above the most recent swing high with volume expansion.
3. Entry: when price breaks the swing high on volume 1.5x+ average.
4. Stop: below the second low (the one that created the divergence).

This approach gets you positioned before the breakout most traders are waiting for — buying at support rather than chasing the move. Typical lead time: 1-4 weeks between OBV divergence and the price breakout.`,
      keyPoints:[
        "Volume confirms price. High-volume moves are real. Low-volume moves are suspect.",
        "Declining volume on a pullback in an uptrend = healthy. Rising volume on a pullback = warning sign.",
        "Selling climax: 3x+ average volume on a down bar, followed by a session that fails to make a new low.",
        "OBV rising while price falls = institutions accumulating. Watch for the price breakout as the entry signal.",
        "Every breakout you trade: require volume at least 1.5x the 20-day average. Low-volume breakouts fail most of the time."
      ]
    }
  ]
},

"ta-u5": {
  id:"ta-u5", title:"Fibonacci Retracement and Extensions", readTime:"11 min",
  subtitle:"How to use Fibonacci levels to find high-probability entries in trends and calculate precise profit targets.",
  sections:[
    { heading:"Why Fibonacci Levels Work in Markets",
      body:`Fibonacci levels work in markets for one primary reason: millions of traders worldwide watch the same levels. The concentration of orders at 38.2%, 50%, and 61.8% retracements is self-fulfilling — the levels work because so many participants expect them to work.

The most important levels:
38.2% retracement: shallow pullback in a strong trend. Weak hands shaken out, strong trend resumes quickly.
50% retracement: midpoint, common consolidation area.
61.8% retracement (the Golden Ratio): deepest acceptable retracement in a valid uptrend. More than 61.8% retracement = the original move is likely over.

How to draw correctly:
Uptrend retracement: click the swing LOW (start of the move) then drag to the swing HIGH (end of the move). Software auto-draws the levels.
Downtrend retracement: click swing HIGH, drag to swing LOW.

Use SIGNIFICANT swing points — major turning points visible on the daily chart, not minor intraday fluctuations. The quality of the Fibonacci depends entirely on the quality of the swing points you anchor to.`,
      chart:"fibonacci"
    },
    { heading:"The 61.8% Retracement Trade — Complete Execution",
      body:`The 61.8% retracement entry is the most reliable Fibonacci setup. Here is the full execution:

Setup: Apple (AAPL) rallies from $155 (swing low) to $195 (swing high) — a $40 move.

Step 1 — Draw Fibonacci from $155 to $195.
61.8% level = $195 − (0.618 × $40) = $195 − $24.72 = $170.28 ≈ $170.

Step 2 — Watch for price to pull back toward $170.

Step 3 — Look for a reversal signal AT $170. Do not buy just because price touched the level. Wait for: a hammer, a bullish engulfing candle, or a close back above $172 after briefly touching $170.

Step 4 — Confirm with a second factor. Is $170 also a prior resistance level now acting as support? Is the 50 EMA near $170? More confluence = higher probability.

Step 5 — Entry: when the bullish reversal candle closes. Enter on that close or next bar open.

Step 6 — Stop: below the prior swing low at $154 (or below the reversal candle low, whichever is tighter and still logical).

Step 7 — Targets: Fibonacci extensions above $195.
127.2% extension: $195 + (0.272 × $40) = $205.88 — first partial exit.
161.8% extension: $195 + (0.618 × $40) = $219.72 — primary target.`,
      callout:{ type:"insight", text:"Confluence is everything with Fibonacci. A 61.8% retracement that also lands on a prior resistance level (now support), a rising 50 EMA, and a round number like $170 has four independent technical factors pointing to the same price. This layering of evidence dramatically raises probability compared to a Fibonacci level sitting in empty space with no other technical significance." }
    },
    { heading:"Fibonacci Extensions — Your Profit Target Calculator",
      body:`After any impulse move (A to B) and a pullback (B to C), Fibonacci extensions project targets beyond B.

A = $100 (swing low), B = $150 (swing high), C = $131 (61.8% pullback from B)

Target 1 — 127.2% extension: $131 + (1.272 × $50) = $194.60
Target 2 — 161.8% extension: $131 + (1.618 × $50) = $211.90
Target 3 — 261.8% extension: $131 + (2.618 × $50) = $261.90

Professional exit approach:
Enter at C ($131), stop below $98 (below swing low A).
Sell 1/3 at Target 1 ($194.60). Move stop to breakeven.
Sell another 1/3 at Target 2 ($211.90). Raise stop to Target 1.
Let final 1/3 run toward Target 3 with a trailing stop.

This graduated exit locks in profits at each level while letting the position run if the trend is strong. Most traders either take all profit too early or hold too long. Scaled exits solve both problems simultaneously.`,
      keyPoints:[
        "Draw retracements from significant swing low to high (uptrend) or high to low (downtrend).",
        "61.8% = Golden Ratio — deepest valid retracement in a healthy uptrend. Deeper retracement = move likely over.",
        "Never enter solely because price touched a Fibonacci level. Require a bullish/bearish reversal candle at the level.",
        "Confluence rule: Fibonacci + prior S/R + moving average = triple-stack, highest probability.",
        "Extensions give targets: sell 1/3 at 127.2%, 1/3 at 161.8%, trail the final third."
      ]
    }
  ]
}

}
