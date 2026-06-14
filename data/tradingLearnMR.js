export const TRADING_LEARN_MR = {

"mr-u1": {
  id:"mr-u1", title:"Bollinger Bands: Complete Strategy Guide", readTime:"11 min",
  subtitle:"Two distinct Bollinger Band strategies — mean reversion in ranges and breakout after squeeze — with exact execution.",
  sections:[
    { heading:"How Bollinger Bands Work and the Critical Regime Check",
      body:`Bollinger Bands = a 20-period SMA with bands at 2 standard deviations above and below. Because standard deviations capture approximately 95% of normal price action, price touching the outer bands is statistically unusual relative to recent history.

The key insight: in RANGING markets, statistically unusual locations revert to the mean. In TRENDING markets, price walks the bands — staying near or repeatedly touching one band for extended periods.

Before any Bollinger Band trade, determine the regime using ADX:
ADX below 20: ranging market → band touches are reversal signals → use Strategy 1 (mean reversion).
ADX above 25: trending market → band touches are continuation signals → do NOT use mean reversion here.
ADX between 20-25: transition → wait for clarity or reduce size significantly.

This regime check is non-negotiable. Ignoring it and applying mean reversion in a trending market is how traders repeatedly catch falling knives against the dominant institutional trend.`,
      chart:"bollinger_bands",
      callout:{ type:"warning", text:"The most costly Bollinger Band mistake: buying every lower band touch without checking the trend. In a downtrend, price walks the lower band for weeks — creating an endless series of lower band touches, each one looking like a buy signal but all continuing lower. ADX above 25 means the lower band touch is trend continuation, not reversal. Check ADX first, every time." }
    },
    { heading:"Strategy 1: Bollinger Band Mean Reversion — Full Trade",
      body:`All conditions required for a valid mean reversion trade:
1. ADX below 20 (ranging market confirmed).
2. Price reaches or touches the lower band (for a long trade).
3. A bullish reversal candlestick forms at the lower band (hammer, engulfing, or doji followed by green candle).
4. Volume is below average at the band touch (sellers are not aggressive — supply drying up).
5. No significant news catalyst driving the move to the band.

Complete trade setup:
Stock in a sideways range between $85 (lower band area) and $98 (upper band area) for 3 weeks. ADX is 15. Stock touches $85 lower band. A hammer candle forms with below-average volume.

Entry: the open of the next candle after the hammer (or the close of the hammer).
Stop: $82 — just below the lower band. If price closes below the lower band, the range is breaking down.
Target 1: middle band (20 SMA) at $91.50.
Target 2: upper band at $98.

Trade management: sell 60% at the middle band ($91.50), move stop to breakeven. Let remaining 40% run to the upper band ($98). Risk $3, Reward to T1 $6.50, Ratio: 2.2:1.`
    },
    { heading:"Strategy 2: Bollinger Band Squeeze Breakout — Full Execution",
      body:`When the Bollinger Bands narrow to their tightest level in 6 months, volatility is at an extreme low and a major directional move is building. The squeeze predicts timing but not direction.

Identifying the squeeze:
Band Width = (Upper Band − Lower Band) / Middle Band. When Band Width drops to its 6-month minimum = squeeze. Many platforms display this as the "Bandwidth" indicator.

Stronger squeeze confirmation: use the TTM Squeeze (John Carter's indicator) — requires Bollinger Bands to be completely inside the Keltner Channels. Fewer signals but higher quality.

Trading the breakout:
WAIT for the squeeze to break. Do not anticipate direction.
Entry signal: price closes OUTSIDE the narrowed band on volume 50%+ above recent average.
Closing above the upper band: long entry.
Closing below the lower band: short entry.

Entry: the next bar open after the closing breakout.
Stop: a return inside the squeeze range (the opposite band level at the time of the squeeze).
Target: the width of the bands at their tightest point added to the breakout level.

Example: stock squeezed between $148-$152 for 10 days (band width at 6-month low). Volume expands 80% above average. Price closes at $154 (above upper band).
Entry: $154.50.
Stop: below $148 (below the squeeze range).
Target: squeeze width ($4) added to breakout ($154): $158.
Risk: $6.50. Reward: $3.50. Ratio: 0.54:1 — too low. Extend target to 2× squeeze width: $162. Risk: $6.50. Reward: $7.50. Ratio: 1.15:1. Acceptable but tight. Use 3× squeeze width for minimum 2:1 on significant squeezes.`,
      keyPoints:[
        "ADX below 20 = mean reversion setup. ADX above 25 = band touches are continuation signals, not reversals.",
        "Mean reversion entry: lower band touch + bullish reversal candle + below-average volume. Target: middle band, then upper band.",
        "Stop: just outside the band — a close beyond it means the range is breaking, not reverting.",
        "Squeeze breakout: Band Width at 6-month minimum → wait for directional close outside the band on high volume.",
        "Squeeze target: minimum 2-3× the band width at time of squeeze. One-band-width targets produce poor R:R."
      ]
    }
  ]
},

"mr-u2": {
  id:"mr-u2", title:"RSI Divergence Mean Reversion", readTime:"9 min",
  subtitle:"Using RSI divergence as the signal for mean reversion entries — with exact confirmation rules.",
  sections:[
    { heading:"RSI Divergence as a Mean Reversion Tool",
      body:`RSI divergence has two main uses. In the momentum module, it was used as an early warning for trend exhaustion. In mean reversion, it provides specific entry signals when price is at an extreme and RSI shows the move is losing steam.

Bullish RSI divergence for mean reversion:
Price makes a new low. RSI makes a higher low than at the prior price bottom.
Interpretation: each new price low requires less selling momentum — sellers are exhausting. A bounce back toward the mean (20 SMA or VWAP) is likely.

Bearish RSI divergence for mean reversion:
Price makes a new high. RSI makes a lower high than at the prior price peak.
Interpretation: each new price high requires less buying momentum — buyers are exhausting. A pull-back toward the mean is likely.

The critical mean reversion context:
This strategy works specifically in RANGING markets where price is oscillating around a mean. In trending markets, divergence signals continuation — not reversal. Check ADX: below 20 before applying divergence as a mean reversion entry signal.`,
      callout:{ type:"insight", text:"Hidden divergence is the trend-continuation version of regular divergence. Regular divergence: price makes new extreme, RSI doesn't confirm. Hidden divergence: RSI makes new extreme, price doesn't confirm. Hidden bullish divergence (price makes higher low, RSI makes lower low) in an uptrend signals the pullback is temporary and the trend will resume — excellent for adding to long trend positions." }
    },
    { heading:"Full RSI Divergence Mean Reversion Trade",
      body:`Complete trade using RSI divergence in a ranging stock:

Context: stock has been ranging between $55 and $68 for 6 weeks. ADX is 14 (ranging confirmed).

Price declines to $56 (near the $55 lower range boundary). RSI at this low: 28.
Price bounces to $62, then declines again to $57 (slightly higher low). RSI at this second low: 34 (higher low despite price being similar to prior low).

Bullish RSI divergence confirmed: second price low roughly equal to first, but RSI significantly higher.

Confirmation required: do not enter on the divergence alone. Wait for a bullish price trigger:
Option 1: a bullish engulfing candle at or near the second low.
Option 2: RSI crosses back above 35 from below (momentum turning).
Option 3: price closes above the prior bounce high ($62 — the resistance level between the two lows).

Entry (most conservative — highest probability): price closes above $62 at $62.50. This is the confirmation that the divergence is playing out.
Stop: below the second low at $56.50.
Target: upper range boundary at $68.
Risk: $6. Reward: $5.50. Ratio: 0.92:1 — marginal. Tighten stop to $57.50 (just below the second low, slightly different): Risk $5, Reward $5.50 = 1.1:1. Still marginal. Target needs to be the upper band at $68: risk $5, reward $5.50. Consider only if there is additional confluence (Fibonacci, supply zone) at $68 to justify.`
    },
    { heading:"Combining Divergence With Bollinger Bands",
      body:`The highest-probability RSI divergence mean reversion signal: RSI bullish divergence forming exactly at the lower Bollinger Band in a ranging market (ADX below 20).

This combines two independent signals: the statistical extremity of being at the lower band AND the momentum evidence of sellers losing steam (divergence).

Full setup checklist for the combined signal:
☐ ADX below 20 (ranging market).
☐ Price touching or near the lower Bollinger Band.
☐ RSI showing bullish divergence (second low with higher RSI than first low).
☐ A bullish reversal candlestick at the lower band (hammer, engulfing).
☐ Below-average volume on the second low (sellers not aggressive).

When all five conditions align simultaneously, this is one of the highest-quality mean reversion entries available.

Entry: bullish reversal candle close at the lower band.
Stop: below the lower band (if price closes below, the range has broken — the mean reversion thesis is wrong).
Target 1: middle band (20 SMA).
Target 2: upper band.

Exit rule if both targets are not reached: if price stalls at the middle band on multiple attempts without reaching the upper band, the range may be changing structure. Exit at the middle band and reassess.`,
      keyPoints:[
        "Bullish RSI divergence: price at new low, RSI at higher low vs. prior. Seller exhaustion signal.",
        "Only use RSI divergence for mean reversion when ADX is below 20 (ranging market).",
        "Do not enter on divergence alone — require a confirming price trigger (engulfing candle or range resistance break).",
        "Combined signal: RSI divergence + lower Bollinger Band touch + ranging ADX = highest quality mean reversion entry.",
        "Hidden divergence: confirms trend continuation — used for adding to trend positions, not mean reversion entries."
      ]
    }
  ]
},

"mr-u3": {
  id:"mr-u3", title:"Advanced Bollinger Band Techniques", readTime:"8 min",
  subtitle:"Bandwidth as a volatility measure, %B as a position indicator, and walking the bands in trends.",
  sections:[
    { heading:"Bandwidth — Measuring Volatility Cycles",
      body:`Bollinger Band Width = (Upper Band − Lower Band) / Middle Band × 100. This percentage measures how wide the bands currently are relative to the midpoint — a direct measure of recent volatility.

The volatility cycle: markets alternate between low-volatility (narrow bands, accumulation) and high-volatility (wide bands, trending) phases. This cycle is highly predictable: extreme low volatility is almost always followed by a high-volatility expansion. The question is direction, not whether expansion will occur.

Using Bandwidth practically:
When Bandwidth drops to a 6-month low: a volatility expansion is imminent. Prepare for a significant directional move.
When Bandwidth reaches a 6-month high: volatility is extended and often about to contract. Mean reversion strategies become more applicable.

Trading the bandwidth contraction:
Stage 1 (narrow bands): don't take new momentum trades. Wait for the breakout.
Stage 2 (breakout from contraction): enter in the breakout direction on expanding volume.
Stage 3 (bands expand): ride the trend while bands are expanding.
Stage 4 (bands at extreme width): begin thinking about exits. Volatility expansion ends.

This Bandwidth cycle provides a timing tool that improves both entry (buy breakouts from contractions) and exit (reduce positions during extreme band expansion) decisions.`,
      callout:{ type:"fact", text:"Historical analysis shows that after a Bollinger Band squeeze (Bandwidth at a 6-month low), the average subsequent 20-day price move is approximately 3× the average 20-day move during non-squeeze periods. The squeeze literally compresses the eventual move — the longer and deeper the squeeze, the larger the subsequent directional expansion tends to be." }
    },
    { heading:"%B — Where Price Is Within the Bands",
      body:`%B = (Current Close − Lower Band) / (Upper Band − Lower Band).

Reading %B:
%B = 1.0: price is exactly at the upper band.
%B = 0.5: price is at the middle band (20 SMA).
%B = 0.0: price is at the lower band.
%B above 1.0: price is above the upper band (extreme extension).
%B below 0.0: price is below the lower band (extreme extension).

Mean reversion trades using %B:
In ranging markets (ADX < 20):
Buy when %B drops below 0 (price below lower band) and a bullish candle forms.
Sell (or exit long) when %B reaches 1.0 (upper band area).
Short when %B exceeds 1.0 with a bearish candle confirmation.

%B divergence: price makes a new low but %B makes a higher low than the prior price bottom. Same as RSI divergence but using band positioning instead of RSI. Confirmation: %B turns up from below 0 toward 0.2.

Walking the bands in trends:
In a strong uptrend (ADX > 25), %B will repeatedly trade between 0.8-1.0+ — "walking the upper band." Instead of selling these upper band tags (which would fight the trend), simply hold and let the trend continue. The %B dropping below 0.5 (middle band) in a strong uptrend signals a significant pullback requiring attention.`
    },
    { heading:"The W-Bottom Pattern on Bollinger Bands",
      body:`The W-Bottom is John Bollinger's own favorite pattern. It is a double bottom where the second low is higher than the first and occurs above the lower band:

Formation:
Low 1: price touches or breaks below the lower band on high volume (potential selling climax).
Bounce: price bounces back toward the middle band.
Low 2: price pulls back but the second low is HIGHER than Low 1 and does NOT reach the lower band.
Confirmation: price rallies back to the middle band from Low 2 on expanding volume.

Why the W-Bottom is powerful: Low 2 higher than Low 1 is bullish divergence in price itself — sellers could not push price as low as before. Not reaching the lower band on Low 2 means the statistical extremity that produced Low 1 is not being repeated. The bullish implications compound.

Trading the W-Bottom:
Entry: the close above the middle band from the Low 2 bounce, on expanding volume.
Stop: below Low 2.
Target: upper band.

The M-Top is the exact mirror: two highs where the second fails to reach the upper band and price breaks below the middle band on the confirmation. Short entry on the middle band break, stop above the M-Top high, target lower band.`,
      keyPoints:[
        "Bandwidth: (Upper − Lower) / Middle × 100. Low bandwidth = imminent expansion. High bandwidth = volatility extended.",
        "%B: 0 = at lower band, 0.5 = at middle, 1.0 = at upper band. Below 0 or above 1 = extreme extension.",
        "In trends, price 'walks' one band — %B stays 0.8-1.0 in uptrends. Selling upper band tags fights the trend.",
        "W-Bottom: Low 2 higher than Low 1 and not reaching the lower band. Entry on middle band breakout.",
        "M-Top (mirror): High 2 lower than High 1, doesn't reach upper band. Short on middle band breakdown."
      ]
    }
  ]
},

"mr-u4": {
  id:"mr-u4", title:"Anchored VWAP for Swing Traders", readTime:"10 min",
  subtitle:"VWAP as institutional benchmark, standard deviation bands, and anchored VWAP for multi-day swing trades.",
  sections:[
    { heading:"Why VWAP Is the Most Important Intraday Price Level",
      body:`VWAP (Volume-Weighted Average Price) = the average price weighted by volume throughout the session. It represents the true average cost basis of all participants who traded that day.

Why institutions care: fund managers measure execution quality by comparing their fill prices to VWAP. Buying below VWAP = better than average execution. Buying above VWAP = worse than average. This creates systematic institutional buying pressure BELOW VWAP and reduced buying above it — generating the mean-reversion characteristic that makes VWAP strategies work.

Standard VWAP signals:
Price above VWAP: bullish session bias. Buyers are in control; stock is trading above the average cost basis.
Price below VWAP: bearish session bias. Sellers dominating; stock below average cost.
Price reclaiming VWAP from below on volume: potential bullish reversal — institutions resuming buying.

The most reliable VWAP setup: in a bullish session (SPY above VWAP, broad market green), a pullback to VWAP in a leading stock that reclaims VWAP with a bullish candle.
Entry: the close of the reclaim candle.
Stop: below the VWAP reclaim low (if VWAP fails to hold, the setup is wrong).
Target: VWAP standard deviation band +1 or +2.`,
      callout:{ type:"insight", text:"VWAP resets to zero at the start of each session. This means VWAP is only useful for intraday trading. For swing and position traders, the relevant tool is Anchored VWAP — VWAP calculated from a specific starting point (a major low, an earnings date, or a significant breakout level) instead of the current day's open." }
    },
    { heading:"VWAP Standard Deviation Bands",
      body:`VWAP Standard Deviation (SD) bands create statistical targets similar to Bollinger Bands but anchored to the volume-weighted mean rather than a simple moving average.

Typical SD bands:
+1 SD and -1 SD: contain approximately 68% of price action.
+2 SD and -2 SD: contain approximately 95% of price action.
+3 SD and -3 SD: extreme extensions, statistically rare.

Trading with SD bands:
In a non-trending session (SPY moving sideways, no major catalyst):
Price at -2 SD = extreme extension below VWAP. Buy with tight stop below -2 SD. Target: VWAP (0 SD).
Price at +2 SD = extreme extension above VWAP. Short with stop above +2 SD. Target: VWAP.

In a trending session (strong directional day):
+2 SD becomes a minimum target, not a sell signal. Strong up days routinely trade at or above +2 SD all day.
Identifying trending vs. non-trending sessions (within the first 30 minutes): if price breaks to new intraday highs with expanding volume after the first 15 minutes, assume trend day. If price oscillates around VWAP, assume range day.

Full trade — non-trending session:
Stock touching -2 SD at $112.50, VWAP at $118.
Entry: bullish reversal candle at $112.50. Enter at $113.
Stop: below $112 (below -2 SD).
Target 1: VWAP at $118 ($5 reward, $1 risk = 5:1).
Target 2: +1 SD at $121.`
    },
    { heading:"Anchored VWAP for Swing Trading",
      body:`Anchored VWAP is calculated from a chosen starting point rather than the day's open. The anchor point is typically: a major swing low, a significant news/earnings event, or a major base breakout.

Why anchored VWAP matters for swing traders:
If a stock broke out from a 6-month base at $85 three months ago, the anchored VWAP from that breakout date represents the average cost basis of all buyers since the breakout. When price pulls back to the anchored VWAP, it is pulling back to where the typical post-breakout buyer is near breakeven — a strong support level because those buyers are motivated to defend it.

Setting the anchor:
For a recent breakout: anchor to the day of the highest-volume breakout bar.
For an earnings catalyst: anchor to the earnings date.
For a recovery from a major low: anchor to the significant low.

Full swing trade using anchored VWAP:
Stock broke out from a base at $85 on high volume. Three months later, stock has run to $115 and is pulling back. Anchored VWAP (from the breakout date) is now at $96.

Price pulls back to $97 — near the anchored VWAP at $96. Forms a hammer at $96.50.
Entry: $97.50.
Stop: below the anchored VWAP at $94.
Target: prior high at $115.
Risk: $3.50. Reward: $17.50. Ratio: 5:1.

Anchored VWAP provides a much more precise support level than a simple moving average because it reflects the actual average cost basis of real participants who bought since the anchor point.`,
      keyPoints:[
        "VWAP = volume-weighted average price. Institutional benchmark: below VWAP = better than average execution.",
        "VWAP creates systematic institutional support below it and reduced buying above it.",
        "SD bands: price at ±2 SD is extreme. In non-trending sessions, fade back to VWAP. In trend sessions, target +2 SD.",
        "Anchored VWAP: calculate from a significant starting point (breakout, earnings, major low) for swing trade S/R.",
        "Anchored VWAP pullback: price pulling back to anchored VWAP = returning to average breakout buyer's cost basis."
      ]
    }
  ]
},

"mr-u5": {
  id:"mr-u5", title:"Mean Reversion in Different Markets", readTime:"8 min",
  subtitle:"How mean reversion characteristics differ across stocks, ETFs, futures, and crypto — and how to adapt.",
  sections:[
    { heading:"Mean Reversion Strength by Asset Class",
      body:`Mean reversion is stronger in some markets than others. Understanding which markets revert reliably and which don't saves you from applying the strategy where it won't work.

Strongest mean reversion:
Individual large-cap stocks in ranging markets: IBM, KO, JNJ — mature blue-chips with stable business models often oscillate predictably. Fundamentals cap the upside and support the downside.
Highly liquid ETFs that track broad indices or sectors: SPY, QQQ, XLE oscillate around their fundamental value more reliably than speculative individual stocks.
Volatility instruments (VIX): extreme VIX spikes almost always mean-revert. VIX above 40 has historically been one of the most reliable buy signals for equities.

Moderate mean reversion:
Currencies (major forex pairs): interest rate differentials attract capital flows that eventually normalize.
Commodity futures: physical supply/demand creates natural price ceilings (demand destruction) and floors (production cuts).

Weakest mean reversion:
Individual growth/momentum stocks: can trend for years without reverting. Applying mean reversion to NVDA in 2023 repeatedly failed.
Low-float speculative stocks: can stay at extremes indefinitely or go to zero.
Crypto in bull cycles: momentum dominates over mean reversion during parabolic phases.`,
      callout:{ type:"warning", text:"Mean reversion in individual speculative stocks is very dangerous. A stock at 3 standard deviations below its moving average might look like an extreme that must revert — but if the company's fundamentals are deteriorating, price can continue much lower from that 'extreme' level. Mean reversion assumptions require the underlying asset to still be fundamentally sound. Always check why the stock is declining before assuming it will revert." }
    },
    { heading:"ETF Mean Reversion — The Safest Application",
      body:`Sector ETFs and broad index ETFs provide the cleanest mean reversion setups because:
They represent diversified baskets of securities (company-specific risk is eliminated).
They have tight bid-ask spreads and deep liquidity.
They have predictable valuation anchors (forward P/E, historical premium/discount to NAV).
Institutional rebalancing creates structural buy pressure when prices decline significantly.

Best ETF mean reversion setups:

Broad index ETF pullbacks:
SPY or QQQ declining 5-8% from a recent high in a long-term uptrend (200 SMA intact). The oversold pullback provides a mean reversion entry.
Entry: when RSI on SPY or QQQ drops below 35 AND price is at a meaningful support level (prior high, Fibonacci, 50 or 200 day SMA).
Stop: below the support level.
Target: return to or near the recent high (mean reversion complete).

Sector ETF extremes:
A sector that has significantly underperformed for 3-6 months relative to SPY. Historical analysis shows that extremely underperforming sectors tend to mean-revert over the subsequent 6-12 months.
Not a momentum strategy — a fundamentally-grounded mean reversion over longer time horizons.`
    },
    { heading:"Mean Reversion in Crypto Markets",
      body:`Crypto markets show unusually strong mean reversion in specific conditions and zero mean reversion in others. Understanding the distinction is critical.

Strong crypto mean reversion conditions:
After extreme fear periods (Crypto Fear & Greed Index below 15). Historical data shows that when the index drops below 10-15, buying Bitcoin or Ethereum with a 30-60 day holding period has a strong positive expectancy.
Bitcoin funding rates in perpetual futures going extremely negative (below -0.1% per 8 hours). Extremely negative funding means short sellers are paying longs — reflecting peak bearish sentiment. Historical mean reversion follows reliably.
Bitcoin RSI below 25 on the weekly chart (extremely rare, occurred only 3-4 times in history). Each instance was a major buying opportunity.

Weak/no crypto mean reversion conditions:
During major bear market drawdowns (Bitcoin down 50%+ from all-time highs with negative 12-month return). These are not oversold situations — they are regime changes.
During liquidity crises (exchange failures, major protocol failures). Fundamental events override statistical mean reversion.
During altcoin speculative frenzies (individual altcoins 10-50% above Bollinger Bands). These "extremes" can continue far longer than statistical models predict.

Practical crypto mean reversion rule: only apply mean reversion strategies to Bitcoin and Ethereum, not to individual altcoins. The diversification and liquidity of BTC and ETH make their mean reversion behavior much more reliable than individual altcoins.`,
      keyPoints:[
        "Strongest mean reversion: large-cap stable stocks in ranges, liquid ETFs, VIX extremes.",
        "Weakest mean reversion: high-momentum growth stocks, low-float speculative stocks, crypto in parabolic phases.",
        "ETF mean reversion is the safest: no individual company risk, predictable valuation anchors, institutional rebalancing support.",
        "Crypto mean reversion: reliable at fear extremes (Fear & Greed < 15) and extreme negative funding rates.",
        "Never apply mean reversion to altcoins or during fundamental disruptions (exchange failures, liquidity crises)."
      ]
    }
  ]
},

"mr-u6": {
  id:"mr-u6", title:"Volatility Mean Reversion", readTime:"7 min",
  subtitle:"Trading the VIX and implied volatility spikes — the most reliable mean reversion in all of finance.",
  sections:[
    { heading:"Why Volatility Is the Most Mean-Reverting Variable in Markets",
      body:`Volatility (as measured by the VIX or individual stock implied volatility) is the most reliably mean-reverting variable in financial markets. Unlike stock prices which can trend indefinitely, volatility has natural limits:

Upper limit: markets cannot remain in extreme panic indefinitely. Economic activity continues, valuations eventually attract buyers, and fear subsides.
Lower limit: volatility cannot go to zero. Markets always have some residual uncertainty.

The VIX (CBOE Volatility Index) measures the implied 30-day volatility of S&P 500 options. Historical VIX levels:
Below 15: complacent markets, low fear.
15-20: normal conditions.
20-30: elevated concern.
Above 30: significant fear.
Above 40: extreme fear, historically excellent buying opportunity for equities.
Above 50 (rare): panic levels, historically exceptional long-term buying opportunity.

The mean reversion trade: buy equities (SPY, QQQ) or sell VIX when VIX spikes above 30-40, with the expectation that volatility will revert to the 15-20 range over the following weeks to months.`,
      callout:{ type:"fact", text:"Historical analysis of every VIX spike above 35 since 1990 shows that the S&P 500 produced positive returns over the subsequent 3, 6, and 12 months in the large majority of cases. The higher the VIX spike, the stronger the subsequent equity returns on average. VIX above 40 has produced average 12-month forward returns of approximately 25% for the S&P 500." }
    },
    { heading:"VIX Mean Reversion Trade — Exact Execution",
      body:`Trading equity long on a VIX spike:

Signal: VIX closes above 35 (or your chosen threshold based on historical context).

Confirmation filters:
Is the VIX spike driven by uncertainty (fear of what might happen) or actual economic disaster (2008 type credit system failure)? Uncertainty-driven spikes revert faster. Structural crises take longer.
Is the broad market (SPY) at a meaningful technical support level (200 SMA, major Fibonacci, prior significant lows)?
Is RSI on SPY below 30 (oversold on the daily chart)?

If yes to all: high-probability mean reversion entry.

Entry: the close of the SPY on the day all three conditions are met, or the next morning open.
Stop: below the prior significant swing low (5-8% below entry).
Time stop: if SPY has not rallied at least 5% within 20 trading days, exit and reassess. The mean reversion may be slower than expected.

Target: mean reversion targets are less precise than price targets. Use VIX returning to 20 as a soft signal to begin scaling out. SPY returning to the pre-spike high is the maximum target.

Position size: this is not a normal-sized trade. Because the setup is based on exceptional fear, many experienced traders use 1.5-2× their normal position size. But never exceed the maximum you can handle psychologically — if the spike continues before reverting, you need to hold.`
    },
    { heading:"Individual Stock Implied Volatility Mean Reversion",
      body:`Individual stocks also show implied volatility (IV) mean reversion — the foundation of options premium selling strategies.

The concept: before earnings, product launches, or other scheduled events, options implied volatility spikes as traders buy options protection. After the event occurs, IV collapses rapidly back to normal — called the "IV crush."

The IV crush trade:
Sell options before an event when IV is elevated. After the event occurs and IV collapses, buy back the options at the lower price. Profit from the IV difference (not from price direction).

The simplest IV crush trade: selling a strangle (out-of-the-money call + out-of-the-money put) before earnings. You collect elevated premium. After earnings, if the stock stays within the strike range AND IV collapses, both options lose value rapidly.

Risk: if the stock makes a move larger than the total premium collected (the breakeven distance), the trade loses. This is the primary risk — mispriced IV creates the appearance of edge but doesn't eliminate the directional risk.

Practical application for non-options traders: understand that IV mean reversion is why long option strategies (like buying calls before earnings) often lose money even when the stock moves in the right direction. The IV collapse on the call offset the directional gain. When buying options, prefer periods of low implied volatility relative to historical volatility.`,
      keyPoints:[
        "VIX is the most mean-reverting variable in markets. Extreme spikes (above 35-40) reliably revert to 15-20.",
        "Historical VIX above 40: average 12-month forward equity returns approximately +25%. Best risk-reward in markets.",
        "VIX trade entry: VIX above 35 + SPY at technical support + RSI below 30 = high-probability equity long.",
        "IV crush: individual stock IV spikes before events then collapses after. Selling high IV before events, buying back after.",
        "When buying options: prefer low IV environments. High IV makes option purchases expensive — the IV crush offsets directional gains."
      ]
    }
  ]
},

"mr-u7": {
  id:"mr-u7", title:"Backtesting Mean Reversion Systems", readTime:"7 min",
  subtitle:"The specific backtesting requirements for mean reversion — including the unique pitfalls these strategies face.",
  sections:[
    { heading:"Why Mean Reversion Backtesting Requires Special Care",
      body:`Mean reversion strategies are particularly prone to specific backtesting errors that produce inflated results. Understanding these before backtesting prevents costly surprises in live trading.

Mean reversion-specific pitfalls:

1. Lookahead bias in entry timing: if your system buys "when price reaches the lower band," the actual execution happens at the open of the NEXT bar — not at the exact moment the band was touched. Backtests that fill at the exact band touch are using prices that weren't actually available at entry time.

2. Exit timing: mean reversion systems often have ambiguous exits ("sell when price returns to the mean"). Backtests that exit at the exact middle band level use an ideal that is rarely achievable in practice. Real exits happen slightly worse — fill price slippage, partial fills.

3. Regime blindness: a mean reversion strategy backtested during a ranging market period will show excellent results. The same strategy tested over a full market cycle (including trending periods) will show dramatically worse results. Always test across full market cycles.

4. Not accounting for gap risk: mean reversion stocks that gap down significantly on news can turn a planned 3% stop into a 15% loss. Historical backtests often don't simulate this gap risk accurately.`,
      callout:{ type:"warning", text:"Mean reversion strategies with very tight stops and multiple trades per day are particularly vulnerable to transaction cost underestimation. A strategy making 3 trades per day at a $5 commission each way plus 3-cent spread costs approximately $33 per day = $8,250 per year. Before this cost, the strategy may show 15% annual return. After costs, 6% or less. Always backtest with fully realistic transaction costs." }
    },
    { heading:"Proper Mean Reversion Backtesting Methodology",
      body:`Step 1 — Define the regime filter:
Your backtest should apply the mean reversion rules ONLY during confirmed ranging periods (ADX below 20). Run a separate analysis: what percentage of the time is ADX below 20 in your target market? If only 30% of the time, your system will have low trade frequency in live trading.

Step 2 — Define exit rules precisely:
"Exit when price returns to the mean" is too vague. Use: "Exit at the close of the first day price closes above the 20-period SMA." This is executable in real trading and backtestable precisely.

Step 3 — Include realistic execution:
Entry: use the open of the next bar after the signal bar (not the signal bar's close).
Exit: use the open of the next bar after the exit signal (not the exact target price).
Transaction costs: use $7 commission per side + 0.02% of position value for slippage.

Step 4 — Test across full market cycles:
Your backtest must include: at least one significant bear market period, at least one strong trending bull market, and at least one extended sideways/choppy period. The strategy should show positive expectancy in ALL three environments (even if smaller in trending periods when the regime filter reduces trade frequency).

Step 5 — Monte Carlo simulation:
Run 1,000 random orderings of your historical trades. Examine the distribution of drawdowns and returns. If the worst 5% of orderings show drawdowns you could not psychologically handle, your position sizing needs adjustment.`
    },
    { heading:"Key Metrics Specific to Mean Reversion Strategies",
      body:`Mean reversion strategies have different metric targets than momentum strategies:

Win rate: mean reversion typically has higher win rates than momentum (60-75% vs. 40-55%) because prices frequently return to the mean. However, the losers can be large (when the mean reversion thesis fails and the trend continues), so high win rate alone is insufficient.

Profit factor by regime: calculate profit factor separately for: ADX below 20 periods (ranging) vs. ADX above 25 periods (trending). If the strategy has positive profit factor during ranging periods but near-zero or negative during trending periods, the regime filter is critical and must be implemented perfectly in live trading.

Maximum adverse excursion (MAE): for each trade, the maximum loss from entry before the exit (whether winning or losing). If winning trades regularly go -3% against you before recovering, your stop needs to be at least 4-5% — or many winning trades will be stopped out before reaching the target.

Maximum favorable excursion (MFE): for each trade, the maximum gain before the exit. If your target is at +3% but the average MFE on winning trades is +7%, you are exiting too early. Adjust targets based on what the market actually offers, not what feels comfortable.`,
      keyPoints:[
        "Mean reversion backtesting pitfall: filling at exact band touch instead of next-bar open. Must use next open.",
        "Test across full market cycles including trending periods. ADX filter may reduce trade frequency in live trading.",
        "Include full transaction costs: commission + slippage. Day-trading mean reversion is especially cost-sensitive.",
        "Calculate profit factor separately by regime (ranging vs. trending). Strategy should only be applied in its intended regime.",
        "MAE analysis: if winners regularly go 3% adverse before recovering, your stop must be wider to avoid stopping them out."
      ]
    }
  ]
},

"mr-u8": {
  id:"mr-u8", title:"Risk Management for Mean Reversion", readTime:"7 min",
  subtitle:"The position sizing and stop methodology specifically designed for mean reversion strategies.",
  sections:[
    { heading:"Mean Reversion Risk Profile — Different From Momentum",
      body:`Mean reversion strategies have a fundamentally different risk profile than momentum strategies:

Momentum: high win rate possible with many trades. Losses are usually small (momentum stopped out quickly). Winners can be very large (runners). Right-skewed return distribution.

Mean reversion: also high win rate, but losses are potentially large when the "mean" is wrong (price trends away permanently). The structural risk is that what looked like a deviation from the mean is actually the beginning of a new trend.

The primary risk in mean reversion: a stock declining to 2 standard deviations below its moving average might look like a mean reversion opportunity — but if the company's fundamentals have deteriorated, the "mean" itself is now lower. The stock is not 2 SD below its old mean — it is establishing a new, lower mean.

Protection against this risk:
1. Only trade mean reversion in assets with stable fundamentals (ETFs, large-cap blue chips) where the mean is reliably stable.
2. For individual stocks: check that there is no major negative fundamental change (earnings miss, guidance cut, product failure) driving the price to the extreme. News-driven moves often do NOT revert.
3. Time stops: if the mean reversion doesn't occur within a reasonable time (2-3× the typical holding period for your system), exit regardless of where price is.`,
      callout:{ type:"insight", text:"The time stop is the most underused risk management tool in mean reversion trading. If you buy a lower Bollinger Band touch expecting a mean reversion within 5-10 days, and after 15 days price has not moved toward the mean, something has changed. The reversion that was expected hasn't come. Exit and reassess — holding indefinitely while hoping for a reversion can turn a planned small loss into a large one." }
    },
    { heading:"Position Sizing for Mean Reversion",
      body:`Mean reversion position sizing requires balancing two concerns: making positions large enough to matter when they win, while staying small enough that losing ones don't damage the account.

Fixed fractional (standard):
Risk 1% of account per trade. Stop = below the entry's extreme point (below the lower band for long trades).
For tight stops (band touch with stop 2-3% below), this often allows reasonably-sized positions.

Volatility-adjusted sizing:
Use ATR to define stop distance: stop = 2× ATR below entry for long trades.
Position size = (Account × 1%) / (2 × ATR).
This automatically scales position size with market volatility — smaller positions in volatile markets (wider ATR stops), larger in calm markets.

Mean reversion scaling:
Some mean reversion traders scale into positions as price moves further from the mean — buying more as the deviation increases.
Danger: this can become averaging down if the "mean" is changing. Only scale in when you have confirmed the asset is still in a genuine range and the fundamental backdrop is unchanged.
Rule: scale in a maximum of 2 tranches. Never more than 3× your initial position from scaling. If the second tranche is stopped, exit all remaining positions.`
    },
    { heading:"The Three Mandatory Stops for Mean Reversion",
      body:`Every mean reversion trade needs three types of stops:

Stop 1 — The price stop:
For long trades: below the lower Bollinger Band or below the price extreme that triggered the entry.
For short trades: above the upper band or above the entry extreme.
Purpose: prevents a failed mean reversion from becoming a trend following disaster.

Stop 2 — The time stop:
Define: the maximum number of bars you will hold a mean reversion trade before exiting regardless of price.
Example: "If a long mean reversion trade has not reached the middle band within 15 trading days, exit at market on day 15."
Purpose: prevents capital being tied up indefinitely in a stalling trade while other opportunities appear.

Stop 3 — The fundamental stop:
Define: any specific fundamental events that invalidate the mean reversion thesis.
Example: "If earnings are released while in the trade and the result is a miss with lowered guidance, exit immediately regardless of price or time."
Purpose: fundamental changes can permanently shift the mean lower, making price reversion to the prior mean impossible.

Implementing all three stops before entering the trade is the professional standard. Write each stop level in your journal before entry. Having the stops defined in advance prevents emotional decision-making when prices move against you.`,
      keyPoints:[
        "Mean reversion primary risk: the 'mean' itself has moved due to fundamental change — the deviation never reverts.",
        "Only trade mean reversion in stable-fundamental assets (ETFs, large-cap blue chips) where the mean is reliably stable.",
        "Three mandatory stops: price stop (below extreme), time stop (exit if no reversion in N days), fundamental stop.",
        "ATR-based stops: 2× ATR below entry adjusts stop distance to current volatility automatically.",
        "Time stop is critical: if reversion doesn't occur in 2-3× typical holding period, exit and reassess. Don't hold indefinitely."
      ]
    }
  ]
},

"mr-u9": {
  id:"mr-u9", title:"Regime Selection: Trend vs. Reversion", readTime:"8 min",
  subtitle:"How to identify the current market regime and select the correct strategy type before entering any trade.",
  sections:[
    { heading:"The Single Most Important Pre-Trade Question",
      body:`Before selecting any specific strategy, every professional trader answers one question first: is this market currently trending or ranging?

This question determines which strategy category is appropriate:
Trending (ADX above 25, consistent HH+HL or LH+LL): use momentum/trend-following strategies. Mean reversion strategies will lose money here.
Ranging (ADX below 20, price oscillating without direction): use mean reversion strategies. Trend-following strategies will lose money here.
Transitioning (ADX between 20-25): no clear regime. Reduce position sizes or wait.

The most expensive mistake: applying a trend-following strategy in a ranging market (whipsaw losses as every breakout fails) or applying a mean reversion strategy in a trending market (buying every dip in a downtrend until a catastrophic loss).

ADX is the primary regime indicator, but use multiple confirming tools:
Bollinger Band width: narrow = ranging (bands contracting), wide = trending (bands expanding).
Price structure: clear HH+HL = trending up. No consistent pattern = ranging.
Moving average alignment: 20 EMA above 50 EMA above 200 SMA = trending up. EMAs tangled without clear order = ranging.`,
      callout:{ type:"fact", text:"Markets are in a genuine trending condition (ADX above 25) approximately 25-35% of the time. The remaining 65-75% of the time, markets are ranging or transitioning. This means mean reversion and range-based strategies are applicable more often than pure trend-following strategies — yet most traders focus exclusively on trend-following. This creates a structural inefficiency that informed mean reversion traders can exploit." }
    },
    { heading:"Multi-Timeframe Regime Identification",
      body:`Different timeframes can be in different regimes simultaneously. A daily ranging market might be a weekly uptrend. A 15-minute trending period might be inside a daily range.

The regime hierarchy rule: the higher timeframe regime dominates. If the weekly is trending and the daily is ranging, the daily range is a correction within a larger trend — use trend continuation entries off the range, not pure mean reversion.

The workflow:
Step 1 — Weekly chart: trending up (HH+HL, ADX 28), ranging (ADX 16), or trending down?
Step 2 — Daily chart: trending up, ranging, or trending down?
Step 3 — Decision:

Weekly UP + Daily UP: full trend-following. No mean reversion.
Weekly UP + Daily RANGING: the daily range is a correction. Mean reversion within the range is valid (buy lower band, sell upper band) but positions in the trend direction at range lows are preferred.
Weekly RANGING + Daily RANGING: full mean reversion environment. Bollinger Band, VWAP, RSI divergence strategies.
Weekly DOWN + Daily RANGING: dangerous. Mean reversion within the range is technically valid but overall risk is elevated. Use half position sizes.
Weekly DOWN + Daily DOWN: trend-following short strategies. Absolutely no mean reversion longs.`
    },
    { heading:"Practical Regime-Based Strategy Selection",
      body:`A simple decision tree for real-time strategy selection:

Before the market opens, assess the daily chart regime (5 minutes):

Is the daily ADX above 25?
YES → Trending market today. Strategy choices: 21 EMA pullback (long above 200 SMA), breakout momentum, 52-week high breakout. AVOID: Bollinger Band mean reversion, RSI overbought/oversold as reversal signals.

Is the daily ADX below 20?
YES → Ranging market today. Strategy choices: Bollinger Band reversion, VWAP mean reversion, RSI extreme reversions. AVOID: MA crossover entries, breakout momentum, trend continuation setups.

Is the daily ADX between 20-25?
YES → Transitioning market. Reduce position size by 50% for any trade taken. Prefer to wait for ADX to clarify direction.

Weekly vs. daily alignment:
If weekly is trending and daily is ranging: take mean reversion entries within the range BUT in the direction of the weekly trend only. Do not short into a weekly uptrend even in a daily ranging environment.
If weekly is ranging and daily is trending: take daily trend trades but expect the trend to be shorter-lived than in weekly-trending conditions.

This 5-minute regime assessment before each trading session prevents the most common and most costly regime mismatch errors.`,
      keyPoints:[
        "Regime question must come first: trending (ADX>25) or ranging (ADX<20)? This determines the entire strategy selection.",
        "Markets are ranging 65-75% of the time — mean reversion is applicable more often than pure trend-following.",
        "Multi-timeframe: higher timeframe regime dominates. Weekly trend + daily range = buy daily range lows (trend direction).",
        "Transition zone (ADX 20-25): reduce all position sizes by 50% or wait for clarity.",
        "5-minute daily regime check before the open prevents the most expensive strategy mismatch errors."
      ]
    }
  ]
},

"mr-u10": {
  id:"mr-u10", title:"Mean Reversion Psychology", readTime:"7 min",
  subtitle:"The specific psychological challenges of mean reversion trading — and why they are different from trend trading.",
  sections:[
    { heading:"Why Mean Reversion Is Psychologically Harder Than Trend Trading",
      body:`Trend trading aligns with the dominant market force — you are going with the flow. Psychologically, it is somewhat natural to hold a position as it moves in your direction.

Mean reversion requires buying weakness (at the lower band, during a decline) and selling strength (at the upper band, during a rally). This is psychologically very difficult:

When you buy at the lower band, the stock has just declined and recent news is likely negative or absent. The natural human instinct is to sell (avoid the thing that is falling) — mean reversion requires buying exactly when selling feels most natural.

When you sell at the upper band, the stock has been rallying and feels like it might continue. The natural human instinct is to hold (keep the winner) — mean reversion requires selling when holding feels most natural.

This psychological challenge creates two characteristic mean reversion errors:

Error 1 — Fear of entry: price reaches the lower band but you hesitate because the decline has been scary. The opportunity passes while you wait for more confirmation.

Error 2 — Extended holding: price reaches the upper band (your target) but you decide to hold because the momentum feels strong. Price reverses sharply and you give back most of the gain.`,
      callout:{ type:"insight", text:"The pre-commitment technique for mean reversion: enter the trade and place both the stop order AND the limit sell order at the target at the same time you enter. Having both orders working immediately removes the decision-making at exit time. When price reaches the target, it exits automatically — no deliberation about whether to hold for more. Automated execution is the best solution to mean reversion psychological errors." }
    },
    { heading:"Specific Techniques for Mean Reversion Discipline",
      body:`Technique 1 — The pre-market plan:
Before the session opens, identify every potential mean reversion setup that might trigger today. Write the exact entry, stop, and target for each. This planning in a calm, analytical state prevents emotional decisions during live trading.

When a setup triggers during the session, you execute the pre-planned trade — not a spontaneous decision made while watching prices fluctuate.

Technique 2 — Automated orders:
As discussed above, place both the stop-loss and the take-profit limit order simultaneously at entry. This removes both emotional exit decisions from the equation.

Technique 3 — The "this is normal" checklist:
When price moves against a mean reversion entry (before the stop is hit), it can feel alarming. Create a checklist:
☐ Is price still above my stop level?
☐ Is the deviation from the mean wider or narrower than when I entered?
☐ Has anything fundamental changed that invalidates the thesis?

If the answer is "stop not hit, deviation wider, nothing fundamental changed" — the trade is within normal parameters. Sit still. This checklist prevents premature exit from trades that are simply fluctuating within the normal range of mean reversion trades.

Technique 4 — Small size during learning:
Start with 25-50% of your intended position size during the first 20-30 mean reversion trades. The reduced financial stake allows you to learn the emotional experience of the strategy without catastrophic consequences.`
    },
    { heading:"The Patience Paradox in Mean Reversion",
      body:`Mean reversion trading rewards patience in a counterintuitive way: the best mean reversion setups are the ones that feel most uncomfortable — the deepest deviations from the mean where fear is highest and the urge to avoid the trade is strongest.

A price touching the lower band for the first time is not as good a setup as a price at 2 standard deviations below the mean on the third touch. The third touch is scarier (the stock has fallen further) but statistically superior (the deviation is more extreme, the reversion probability is higher).

Building tolerance for discomfort:
The discomfort of buying a declining stock at the lower band is information — it is telling you that other investors are also uncomfortable, which is why the price is at an extreme. Your willingness to act when others are paralyzed by fear is the edge.

Journal your emotional state at each mean reversion entry. Over time, you will notice that your most uncomfortable entries (where you hesitated longest) often produced the best returns. This historical data from your journal provides evidence-based confidence for future uncomfortable entries.

The patience paradox in exits applies equally: exiting at the mean (20 SMA) when the trade has gone in your favor and momentum feels strong is difficult. But mean reversion exits at or before the mean are statistically the highest expected value exits — not holding to the upper band hoping for continuation.`,
      keyPoints:[
        "Mean reversion psychology challenge: buying weakness and selling strength directly opposes natural human instinct.",
        "Pre-commitment: place both stop and target orders simultaneously at entry. Removes emotional exit decisions.",
        "Pre-market planning: identify and plan all potential setups before the open. Execute plans, not spontaneous decisions.",
        "Discomfort is signal: the most uncomfortable mean reversion entries often produce the best returns. Journal this.",
        "Start at 25-50% position size for first 20-30 trades to learn the emotional experience without large financial stakes."
      ]
    }
  ]
},

"mr-u11": {
  id:"mr-u11", title:"Intraday Mean Reversion Strategies", readTime:"8 min",
  subtitle:"VWAP reversion, opening range extremes, and the specific intraday setups with the highest mean reversion probability.",
  sections:[
    { heading:"Intraday Mean Reversion Context",
      body:`Intraday mean reversion is most powerful on non-trending days — approximately 60-70% of all trading sessions. On these days, price oscillates around VWAP without sustained directional movement, and strategies that exploit this oscillation produce consistent results.

Identifying trend vs. range days (in the first 30-45 minutes):
Range day signals: price oscillates around VWAP in the first 30 minutes, no gap up/down with strong catalyst, SPY also oscillating without direction, volume below average.
Trend day signals: strong gap with fundamental catalyst, price breaks away from VWAP in first 30 minutes and stays away, volume 2×+ average, broad market also trending in the same direction.

On identified range days: apply intraday mean reversion strategies.
On identified trend days: apply momentum strategies (ORB, VWAP trend continuation). Do NOT fight the trend with mean reversion.

The key intraday mean reversion levels in order of reliability:
1. VWAP (most important): institutional benchmark, creates constant pull.
2. VWAP ± 1 SD and ± 2 SD: statistical extremes around VWAP.
3. Prior day close: overnight gap creates a pull to the prior close.
4. Round numbers ($100, $150, $200): psychological magnets.
5. Session high/low: price at session extremes in range days often reverts.`,
      callout:{ type:"fact", text:"Studies of intraday S&P 500 futures show that when price deviates more than 1 standard deviation from VWAP in non-trending sessions, the probability of returning to VWAP within the next 30-60 minutes exceeds 70%. This statistical edge is the foundation of professional intraday mean reversion strategies." }
    },
    { heading:"VWAP Reversion Trade — Step by Step",
      body:`The most reliable intraday mean reversion: buy a pullback to VWAP in a bullish non-trending session.

Setup conditions:
1. Overall market (SPY, QQQ) is in an uptrend on the daily chart.
2. Today is a range day (confirmed in first 30 minutes: price oscillating around VWAP, normal volume).
3. Price is above VWAP and pulling back toward it.
4. Pullback is on declining volume (healthy correction, not selling pressure).
5. A bullish reversal candle forms as price reaches VWAP.

Trade execution:
SPY at $452 at open (above daily VWAP at $451). Pulls back to $451 (VWAP) at 10:15am on declining volume. Small hammer forms on the 5-minute chart touching VWAP.

Entry: the next 5-minute bar open at $451.50.
Stop: $449.50 (1 ATR below VWAP level).
Target: prior morning high at $453.50 or VWAP + 1 SD.

Risk: $2. Reward: $2. Ratio: 1:1 — tight. For intraday VWAP trades, 1:1 can be acceptable if win rate is 65%+. Or extend to VWAP + 2 SD target for 2:1 ratio.

Close all intraday mean reversion positions by 3:30 PM ET. The final 30 minutes often show directional movement from institutional order completion — the range-day assumption may not hold through close.`
    },
    { heading:"Opening Range Extremes as Mean Reversion Levels",
      body:`The first 30-minute opening range high and low create powerful intraday mean reversion levels for the rest of the session on range days.

How it works:
If a stock gaps up but then fails at the opening range high and begins declining on declining volume, the opening range high acts as resistance. Price tends to revert toward the prior close or opening range midpoint.

The opening range midpoint ((high + low)/2) is a particularly useful mean reversion target because it represents the equilibrium price established in the most volatile 30 minutes of the session.

Opening range reversion trade:
Stock opens at $88 (gap up from prior close $86). 30-minute opening range: high $89.50, low $87.50, midpoint $88.50.
At 10:30am, stock pushes to $89.80 (above opening range high) but immediately fails and reverses on declining volume. Classic opening range high rejection.

Short entry: $89.50 (the opening range high area, after confirming rejection).
Stop: above the highest 5-minute bar in the rejection zone ($90.20).
Target 1: opening range midpoint at $88.50 ($1 reward, $0.70 risk = 1.4:1).
Target 2: opening range low at $87.50 ($2 reward, $0.70 risk = 2.9:1).

The opening range midpoint and extremes work as intraday magnets throughout the day on non-trending sessions, providing reliable targets for mean reversion trades.`,
      keyPoints:[
        "Intraday mean reversion works on range days (60-70% of sessions). Trend days require momentum strategies.",
        "Identify range vs. trend days in first 30-45 minutes: VWAP oscillation + normal volume = range day.",
        "VWAP reversion: buy pullback to VWAP on declining volume with bullish candle in bullish non-trending session.",
        "Opening range extremes (30-minute high/low) and midpoint are reliable intraday mean reversion targets.",
        "Close all intraday mean reversion positions by 3:30 PM. Final 30 minutes often break range-day assumption."
      ]
    }
  ]
},

"mr-u12": {
  id:"mr-u12", title:"ETF Mean Reversion Strategies", readTime:"7 min",
  subtitle:"Using ETF structure and predictable rebalancing flows to build higher-probability mean reversion trades.",
  sections:[
    { heading:"Why ETFs Are Superior Mean Reversion Vehicles",
      body:`ETFs offer structural advantages for mean reversion that individual stocks do not:

1. No earnings binary risk: ETFs don't report earnings. An individual stock can gap 20% overnight on an earnings miss, destroying a mean reversion setup. ETFs move gradually, giving mean reversion strategies time to work.

2. Diversification: a sector ETF declining to the lower Bollinger Band represents an entire sector being oversold — not just one company with potential fundamental problems. The reversion probability is higher because it takes a sector-wide fundamental change (not just one company's news) to invalidate the thesis.

3. Predictable rebalancing flows: index ETFs must rebalance to match their index on specific schedules. This creates predictable buying and selling that mean reversion traders can anticipate.

4. Tight bid-ask spreads: liquid ETFs like SPY, QQQ, XLE have sub-penny spreads — transaction costs are minimal, making mean reversion strategies more viable net of costs.

Best ETFs for mean reversion:
SPY, QQQ (broad market, most liquid, tightest spreads).
XLE, XLK, XLF (sector ETFs, more volatility than SPY = better mean reversion amplitudes).
GLD, TLT (gold and bonds — show excellent mean reversion in specific conditions).`,
      callout:{ type:"insight", text:"Leveraged inverse ETFs (-2× or -3× sector ETFs) are NOT suitable for mean reversion strategies. Leveraged ETFs have daily rebalancing that creates compounding decay — they lose value over time even in sideways markets. A stock can return to where it started after oscillating; a 3× leveraged ETF will not return to where it started because of the daily compounding effect. Never apply mean reversion to leveraged ETFs." }
    },
    { heading:"The ETF Oversold Pullback Trade",
      body:`The highest-probability ETF mean reversion setup: a broad market or sector ETF declining 5-8% from a recent high while the longer-term trend remains intact.

Setup conditions:
1. Weekly chart in an uptrend (higher highs and higher lows, price above 40-week MA).
2. Daily decline: ETF has fallen 5-8% from its recent high over the past 1-2 weeks.
3. RSI on daily chart has pulled back below 40 (not quite oversold but meaningfully pulled back).
4. Volume during the decline is below average (no institutional selling — just a natural pullback).
5. Price approaching a meaningful support level (prior resistance now support, Fibonacci retracement, or major moving average).

When all five conditions align: high probability mean reversion to the prior high and potentially beyond.

Trade execution — QQQ example:
QQQ pulled from $390 to $361 over 10 days (7.4% decline). Weekly uptrend intact. RSI at 37. Volume during decline below average. Price touching the 50-day EMA at $358.

Entry: $359.50 (50 EMA touch confirmed with bullish daily candle).
Stop: $350 (below the 50 EMA and a significant prior support level).
Target: return to prior high at $390.

Risk: $9.50. Reward: $30.50. Ratio: 3.2:1. Excellent trade.`
    },
    { heading:"Pairs Mean Reversion With ETFs",
      body:`ETF pairs mean reversion trades exploit the tendency for related ETFs to revert to their historical relative performance ratio.

Classic ETF pairs:
XLK (tech) vs. XLV (healthcare): tend to rotate relative performance. When XLK has significantly outperformed XLV over 3-6 months, the spread tends to narrow.
XLE (energy) vs. XLU (utilities): both dividend-focused sectors. When they diverge significantly, they tend to revert.
SPY vs. IWM (S&P 500 vs. Russell 2000): the large/small cap spread shows persistent mean reversion over 3-12 month periods.

How to trade a pairs reversion:
Calculate the ratio: XLK price / XLV price (or the rolling return spread over 3 months).
When the ratio reaches a 2-standard-deviation extreme vs. its own 12-month history: long the underperformer (XLV) and short the outperformer (XLK) with equal dollar amounts.
Target: ratio returns to its 12-month mean.
Stop: ratio extends to a 3-standard-deviation extreme.

The pairs trade is market-neutral (being long and short simultaneously eliminates most broad market risk). You profit from the relative performance convergence regardless of whether the overall market goes up or down.

Best application: inside tax-advantaged accounts (IRA) where the frequent rebalancing doesn't create significant tax events.`,
      keyPoints:[
        "ETFs superior for mean reversion: no earnings binary risk, diversification, predictable flows, tight spreads.",
        "Never apply mean reversion to leveraged ETFs (-2× or -3×). Daily rebalancing destroys the reversion assumption.",
        "ETF oversold pullback: 5-8% decline from recent high + declining volume + RSI below 40 + approaching support = buy.",
        "Pairs mean reversion: long underperformer, short outperformer when ratio reaches 2-SD extreme from its 12-month mean.",
        "ETF pairs are market-neutral: profit from relative convergence regardless of broad market direction."
      ]
    }
  ]
},

"mr-u13": {
  id:"mr-u13", title:"Quantitative Mean Reversion Models", readTime:"7 min",
  subtitle:"The statistical foundations of mean reversion — z-scores, cointegration, and half-life calculation.",
  sections:[
    { heading:"The Z-Score Model",
      body:`The z-score measures how many standard deviations the current price is from its mean:
Z = (Current Price − Mean Price) / Standard Deviation

Z-score of +2: price is 2 standard deviations ABOVE its mean = statistically extreme high.
Z-score of -2: price is 2 standard deviations BELOW its mean = statistically extreme low.
Z-score between -1 and +1: normal range, no mean reversion signal.

Typical parameters: 20-day or 60-day lookback period for the mean and standard deviation calculation.

Trading rules:
Short when Z-score exceeds +2. Cover when Z-score returns to 0.
Long when Z-score drops below -2. Close when Z-score returns to 0.
Stop: at Z-score of ±3 (if price reaches 3 SD from mean, the mean itself may have changed — exit).

The z-score approach is clean, systematic, and removes all subjectivity from entry and exit decisions. Every signal is defined by a specific numerical threshold.

Improvement: instead of a fixed 20-day lookback, use a 252-day lookback to calculate the annual mean and standard deviation. Then use a 20-day rolling window to identify deviations from this longer-term mean. This captures deviations from the true long-term equilibrium, not just recent 20-day fluctuations.`
    },
    { heading:"Cointegration — The Foundation of Pairs Trading",
      body:`Cointegration means two prices that are individually non-stationary (each price can wander indefinitely) move together in the long run — their difference (spread) is stationary and mean-reverting.

Example: Gold and gold miners (GLD and GDX). Each can trend independently for periods, but their fundamental relationship (miners profit from gold prices) means the spread between them tends to be bounded.

Testing for cointegration (Engle-Granger method):
1. Regress asset A on asset B to find the hedge ratio (β): A = α + β × B + ε.
2. Test whether the residuals (ε) are stationary using the Augmented Dickey-Fuller test.
3. If the residuals are stationary (ADF test rejects the null hypothesis at 95% confidence), the pair is cointegrated.

Trading the spread:
Spread = A − (β × B).
Calculate the z-score of the spread: (Spread − Mean Spread) / SD Spread.
Long the spread when Z < -2 (A cheap relative to B): buy A, sell β shares of B.
Short the spread when Z > +2: sell A, buy β shares of B.
Target: Z returns to 0.
Stop: Z extends beyond ±3.

Classic cointegrated pairs: SPY/IVV (two S&P 500 ETFs), GLD/IAU (two gold ETFs), XLE/XOP (energy sector ETFs), similar foreign currency ETFs.`,
      callout:{ type:"warning", text:"Cointegration is not the same as correlation. Two assets can be highly correlated (both go up when the market rises) without being cointegrated. For pairs trading, you need cointegration — the spread must be stationary. Always run the statistical test before assuming a relationship is suitable for pairs trading. Many apparently similar assets (like two different tech stocks) have high correlation but are NOT cointegrated." }
    },
    { heading:"Half-Life of Mean Reversion",
      body:`The half-life of mean reversion measures how quickly price tends to revert to the mean after a deviation. It tells you how long to expect to hold a mean reversion trade.

Calculation (Ornstein-Uhlenbeck process):
Fit an AR(1) model: Δp(t) = λ × p(t-1) + ε
Half-life = -ln(2) / ln(1 + λ)
Where λ is the estimated coefficient.

Example interpretations:
Half-life of 5 days: on average, half the deviation from the mean is eliminated within 5 days. Most of the reversion occurs within 10-15 days.
Half-life of 25 days: slower reversion, expect to hold for 30-50 days on average.
Half-life of 100+ days: very slow mean reversion — may not be worth trading as a strategy due to opportunity cost.

How to use half-life in strategy design:
Your time stop should be set to approximately 2-3× the half-life. If the half-life is 5 days, exit any trade that hasn't reverted within 15 days.
Your profit target expectation: the strategy should make most of its trades profitable within 1-2 half-lives.
Select assets for mean reversion based on having a half-life between 5-20 days — short enough to generate sufficient trading frequency, long enough to avoid excessive transaction costs.`,
      keyPoints:[
        "Z-score: (Price − Mean) / SD. Trade long when Z < -2, short when Z > +2. Stop at ±3 SD.",
        "Cointegration: two prices that individually trend but whose spread is stationary. Foundation of pairs trading.",
        "Cointegration ≠ correlation. Run the Engle-Granger test — don't assume similar assets are cointegrated.",
        "Half-life: how quickly mean reversion occurs. Set time stop at 2-3× half-life. Target assets with 5-20 day half-life.",
        "Practical quantitative pairs: GLD/IAU, SPY/IVV, XLE/XOP — same underlying assets in different wrappers."
      ]
    }
  ]
},

"mr-u14": {
  id:"mr-u14", title:"Correlation and Mean Reversion", readTime:"7 min",
  subtitle:"How correlation between assets creates mean reversion opportunities — and how to identify and exploit them.",
  sections:[
    { heading:"Correlation as a Mean Reversion Signal",
      body:`When two assets have a strong historical correlation, temporary divergences create mean reversion opportunities. If asset A and asset B both respond to the same economic driver (oil prices, interest rates, earnings growth), they should move roughly together over time. When they diverge significantly, one of them has moved "too far" and should revert to re-establish the relationship.

Types of correlation-based mean reversion:

1. Sector peers: two stocks in the same sector with similar business models (e.g., JPM and BAC). Both respond to interest rates and credit conditions. Temporary divergence = opportunity.

2. Related commodities: gold and silver typically move together. When gold rallies significantly without silver (or vice versa), the spread tends to mean-revert.

3. Geographic equivalents: SPY (US stocks) and EFA (international stocks) have periods of divergence driven by currency moves or regional events. Over longer periods, they tend to revert toward their historical relationship.

4. Index and components: when a stock significantly underperforms its sector ETF without a company-specific reason, it tends to catch up over the following weeks.`,
      callout:{ type:"warning", text:"Correlation changes over time. A pair that was highly correlated for 5 years can become structurally uncorrelated due to business changes, regulatory shifts, or competitive disruption. Always calculate rolling correlation (the correlation over the most recent 90-252 days) rather than using a fixed historical correlation. If the rolling correlation has dropped from 0.85 to 0.40, the pair's mean reversion behavior has fundamentally changed." }
    },
    { heading:"Building a Correlation-Based Screen",
      body:`A simple process for finding correlated pairs with current divergence:

Step 1 — Build the correlation matrix:
Within a sector (e.g., energy), calculate 12-month correlation between each pair of major stocks: XOM, CVX, COP, EOG, PXD.
Pairs with correlation above 0.75 are candidates for mean reversion trades.

Step 2 — Calculate the performance divergence:
For each high-correlation pair, calculate the 30-day return difference.
Example: XOM up 8% in 30 days, CVX up 2%. Divergence = 6%. Is this within the normal range or unusual?

Step 3 — Z-score the divergence:
Calculate the mean and SD of the 30-day return divergence over the past 12 months.
If the current 6% divergence is 2+ standard deviations from the mean historical divergence: potential mean reversion opportunity.

Step 4 — Fundamental check:
Is there a company-specific reason for the divergence? (An earnings miss, legal issue, or business change is a structural reason to diverge — not a mean reversion opportunity.)
If no company-specific reason: proceed with the pairs trade.

Step 5 — Execute: long the underperformer (CVX), short the outperformer (XOM) with equal dollar values.`
    },
    { heading:"Limitations of Correlation-Based Trading",
      body:`Correlation-based mean reversion has specific limitations that must be understood before trading:

Limitation 1 — False correlations:
Two assets can have high historical correlation without a causal relationship. When the underlying conditions that created the correlation change, both the correlation and the mean reversion behavior disappear. Always understand WHY two assets are correlated.

Limitation 2 — Correlation breakdown during crises:
During market crises, correlations that were near zero (diversifying) spike toward 1.0 (everything falls together). Conversely, correlations that were near 1.0 (historically linked assets) sometimes break down as investors sell whatever they can regardless of relationship.

Limitation 3 — Pairs require two legs to manage:
You need to monitor both the long and short side simultaneously. If one leg moves significantly against you while the other doesn't offset it, the position can become unbalanced.

Limitation 4 — Short selling complexity:
For retail investors, shorting individual stocks requires a margin account, may involve hard-to-borrow fees, and has theoretically unlimited upside risk. ETF pairs (where you buy both, just weight them differently) are often more practical.

Practical simplification: focus on ETF pairs (XLE vs. XOP, GLD vs. GDX) rather than individual stock pairs. ETF pairs have tighter spreads, no hard-to-borrow issues, and represent diversified baskets that are less vulnerable to single-company disruptions.`,
      keyPoints:[
        "Correlated assets that diverge without fundamental reason tend to revert: long underperformer, short outperformer.",
        "Use rolling correlation (90-252 day), not fixed historical. If rolling correlation drops below 0.5, the relationship has changed.",
        "Build systematic screen: correlation above 0.75 + return divergence at 2+ SD from historical mean = candidate.",
        "Always check for company-specific reasons for divergence before assuming mean reversion.",
        "ETF pairs (XLE/XOP, GLD/GDX) are more practical for retail traders than individual stock pairs."
      ]
    }
  ]
},

"mr-u15": {
  id:"mr-u15", title:"Common Mean Reversion Mistakes", readTime:"7 min",
  subtitle:"The five mistakes that lose the most money in mean reversion trading — with specific fixes for each.",
  sections:[
    { heading:"Mistake 1: Buying Falling Knives and Mistake 2: No Trend Filter",
      body:`Mistake 1 — Buying every oversold stock without a fundamental check:
"Oversold" on an indicator does not mean the stock will recover. A stock declining 40% from its high might look like an extreme mean reversion opportunity. But if the company's earnings are collapsing, the stock is not oversold — it is being fairly repriced lower. The "mean" itself is moving down with the fundamentals.

Fix: before any mean reversion entry in an individual stock, check the fundamental picture. Declining earnings growth? Rising debt? Market share loss? These are structural reasons for price decline, not deviations from a stable mean. Only trade mean reversion in assets where the mean is demonstrably stable.

Mistake 2 — Not checking the market regime (applying mean reversion in trending markets):
This is the single most costly mean reversion mistake. In a trending market, every lower Bollinger Band touch continues lower. Every "oversold" RSI reading gets more oversold. Every "bounce" fails and resumes the trend.

Fix: the regime check before every trade. ADX above 25 = trending market = no mean reversion entries. ADX below 20 = ranging market = mean reversion appropriate. This check takes 10 seconds and prevents the most common and most painful mean reversion losses.`,
      callout:{ type:"warning", text:"The specific scenario to avoid: a stock in a long-term downtrend (below 200 SMA) with multiple lower band touches. Each lower band touch looks like an extreme mean reversion opportunity. But in a downtrend, the lower band is where the trend is visiting regularly. The 'mean' (20 SMA) is declining alongside price. You are not buying an extreme deviation — you are buying into a trend." }
    },
    { heading:"Mistake 3: Wrong Position Size and Mistake 4: Missing Time Stops",
      body:`Mistake 3 — Scaling into losing positions without rules:
Because mean reversion traders buy weakness, the temptation to "add more, it's even more oversold now" is powerful. Scaling in without rules — based purely on the feeling that the position is "more attractive" at lower prices — creates an undefined, growing risk.

Fix: if you scale into mean reversion trades, define the scale-in rules before the first entry: "I will add one additional tranche if price reaches X with a total position limit of Y shares/dollars. No additional scaling beyond that level."

Mistake 4 — No time stop:
A mean reversion trade that doesn't revert within the expected timeframe is telling you something is wrong — either the mean has shifted or the deviation is not going to close in the expected direction. Holding indefinitely "waiting for it to work" ties up capital and often results in larger eventual losses.

Fix: define a time stop before every mean reversion entry. "If price has not reached the middle band within 10 trading days, exit at market close on day 10 regardless of where price is." Write the time stop date in your journal along with the entry. On that date, exit if the target has not been reached — no exceptions.`
    },
    { heading:"Mistake 5: Ignoring Volume and Mistake 6: Exiting Too Early",
      body:`Mistake 5 — Ignoring volume at the mean reversion extreme:
A lower band touch on 3× average volume is very different from a lower band touch on 0.5× average volume. High volume at the extreme might indicate institutional selling (climax behavior eventually reverting) or it might indicate panic (genuine structural selling that continues). Low volume at the extreme typically indicates a lack of selling pressure — the natural exhaustion of a correction.

Fix: prefer lower band touches on declining or below-average volume. This signals sellers are not aggressive — the supply is drying up, making the reversion more likely. Be more cautious about lower band touches on high volume until the selling climax confirmation (next session that doesn't make a new low) occurs.

Mistake 6 — Exiting before the target in profit:
Price is moving in your direction — 60% of the way to the target. It pauses for a day and the urge to take profit ("lock in what I have") overwhelms the plan.

Fix: the target was calculated before entry for a reason. If you exit at 60% of the expected mean reversion, your average trade return drops dramatically. Only exit before the target if: (1) the stop has been hit, (2) the time stop has expired, (3) a significant fundamental change has occurred, or (4) you have a clear technical reason (a new resistance level or a reversal candle appears before the target).`,
      keyPoints:[
        "Mistake 1: no fundamental check. Mean reversion only in assets with STABLE fundamentals.",
        "Mistake 2: no regime check. ADX above 25 = no mean reversion. Check it every time.",
        "Mistake 3: undefined scaling. Write scale-in rules and total position limits BEFORE the first entry.",
        "Mistake 4: no time stop. Define the number of days before entry. Exit on that date if target not reached.",
        "Mistakes 5-6: prefer low-volume band touches and hold to the defined target. Premature exits kill the strategy's expectancy."
      ]
    }
  ]
},

"mr-u16": {
  id:"mr-u16", title:"Gap Trading as Mean Reversion", readTime:"7 min",
  subtitle:"Which gaps fade, which continue, and the complete execution for the highest-probability gap fades.",
  sections:[
    { heading:"The Statistical Case for Gap Fading",
      body:`A gap occurs when today's open is significantly away from yesterday's close. Studies on US equity markets show that approximately 70% of gaps eventually fill (price returns to the prior close). However, the timing and applicability vary dramatically by gap type.

Gaps most likely to fill (fade candidates):
Small gaps under 2% with no significant catalyst: these are usually overnight noise or thin pre-market trading — no real fundamental reason for the gap. Fill probability: above 75%.
Large gaps on sentiment without fundamental catalyst: a stock gaps up 5% because a competitor reported strong earnings. The indirect positive sentiment may be overstated. Fill probability moderate (60%).
Gaps in range-bound stocks: stocks in established trading ranges that gap to the range boundary without breaking out of the range. Fill probability high (70-80%).

Gaps least likely to fill (do not fade):
Earnings gaps (beat + raised guidance): the company's fundamental value has genuinely changed. The new price reflects the new reality. Do not fade.
FDA approval/rejection gaps: binary event with permanent fundamental change. Do not fade.
Major analyst initiations or target changes (especially upgrades with large target increases): institutional buying following can sustain the gap.
Breakaway gaps from multi-month bases on high volume: the trend has changed. The gap is the beginning of a new phase.`
    },
    { heading:"The Gap Fade Entry Protocol",
      body:`Complete gap fade execution:

Step 1 — Pre-market research (5 minutes before open):
Google the ticker + "news today." Find any headline. Is there a specific fundamental catalyst?
If no catalyst → fade candidate.
If there is a catalyst → do not fade, regardless of gap size.

Step 2 — Check pre-market volume:
Normal to slightly elevated (1-1.5× typical daily volume in pre-market) → fade candidate.
Very high pre-market volume (3×+) → momentum is strong, do not fade.

Step 3 — Check the chart context:
Is the stock in a sideways range that the gap has not broken it out of? → Fade candidate.
Is the stock breaking above a significant multi-week resistance? → Even with no specific news, the technical breakout argues against fading.

Step 4 — First 15 minutes after open:
Watch the opening range form (first 15 minutes: high and low).
If price fails to break above the opening high and reversal begins → enter the fade.
If price breaks above the opening high on expanding volume → cancel the fade, the gap is holding.

Gap-up fade entry:
Stock gapped from $44 to $47. No catalyst. Normal volume.
15-minute high $47.40, low $46.70. Price breaks below $46.70.
Short entry: $46.60.
Stop: above $47.50 (above the opening range high).
Target 1: 50% fill at $45.50. Target 2: full fill at $44.00.`
    },
    { heading:"Island Reversals — The Most Powerful Gap Setup",
      body:`An island reversal is a price pattern where a stock gaps up (or down), trades for 1-5 sessions, then gaps back down (or up) through the same area — leaving an "island" of price action isolated from the rest of the chart.

Bullish island reversal (at a downtrend low):
Stock has been declining. Gaps down aggressively one day (a selling exhaustion gap). Trades sideways for a few sessions with no new lows. Then gaps back up through the area of the initial gap down.

The gap up on day 5+ creates the island — the 2-4 sessions of trading are now isolated above the rest of the chart. All traders who shorted the downside gap are now trapped — the upward gap has invalidated their thesis.

Trading the bullish island reversal:
Entry: the upward gap that creates the island.
Stop: back below the island (if price returns into the island, the reversal has failed).
Target: the measured move from the bottom of the decline to the island top, projected upward.

This is a high-conviction mean reversion setup because:
1. The initial downside gap exhausted sellers.
2. The subsequent trading range confirmed no continued selling.
3. The upside gap confirms institutional buying decision.
4. All short sellers from the initial downside gap are trapped and forced to cover.`,
      keyPoints:[
        "70% of gaps fill eventually. Highest fade probability: no catalyst, normal volume, stock in established range.",
        "Never fade: earnings gaps, FDA events, analyst upgrades, breakaway gaps from multi-week bases.",
        "Gap fade entry: wait for 15-minute opening range to form, then short the break below the opening low (gap-up fade).",
        "Island reversal: gap down + sideways + gap up back through original gap area. Extremely powerful reversal setup.",
        "Island reversal trade: entry on the upside gap, stop back below the island, target measured move from the decline."
      ]
    }
  ]
},

"mr-u17": {
  id:"mr-u17", title:"Volatility Breakout After Squeeze", readTime:"7 min",
  subtitle:"The complete setup and execution for trading high-probability breakouts from low-volatility compression periods.",
  sections:[
    { heading:"Why Squeezes Predict Major Moves",
      body:`Market volatility is cyclical. High volatility periods exhaust themselves and are followed by low volatility. Low volatility periods compress price into narrowing ranges, building energy for the next directional expansion. This is the volatility cycle, and trading breakouts from extreme low volatility is one of the highest-probability strategies available.

The squeeze mechanics:
1. After a major trend or volatile period, the market pauses. Volatility begins to contract.
2. Bollinger Bands narrow. ATR declines. Daily ranges get smaller.
3. The contraction continues until reaching an extreme low — a multi-month minimum in volatility.
4. A triggering event (catalyst or sufficient time passing) breaks the compression.
5. The pent-up directional energy releases in a significant move.

Why the signal works: during the squeeze, both bulls and bears are adding positions but neither side can move price significantly. When one side finally overwhelms the other, the trapped losing side adds momentum as stops trigger. The squeeze creates the loaded spring; the breakout is its release.

Key tools for identifying squeezes:
Bollinger Band Width at 6-month minimum: the primary signal.
ATR declining to multi-month lows: confirms volatility compression.
TTM Squeeze indicator (Bollinger Bands inside Keltner Channels): more stringent definition, higher quality signals.`
    },
    { heading:"Squeeze Breakout — Full Trade Execution",
      body:`Complete squeeze breakout trade:

Step 1 — Identify the squeeze:
Check Bollinger Band Width. When it reaches its lowest level in at least 6 months: a squeeze is in progress.
Confirm with ATR: is the 14-period ATR at a multi-month low?
Both confirming: high-quality squeeze signal.

Step 2 — Wait for the directional break:
Do NOT enter during the squeeze. The direction is unknown until the break occurs. Entering early often results in being stopped out by the initial false breakout.

Step 3 — Identify the break:
Price closes outside the narrowed Bollinger Band on volume 1.5×+ the 20-day average.
Closing above the upper band: long entry.
Closing below the lower band: short entry.

Step 4 — Prior trend direction bias:
The highest-probability squeeze breakout aligns with the prior trend direction. If the stock was in an uptrend before the squeeze, the upside break has higher probability. Use this as a tiebreaker if you are undecided.

Step 5 — Entry and trade management:
Entry: the open of the bar after the closing breakout.
Stop: back inside the squeeze range (the midpoint of the squeeze).
Target: the width of the squeeze range × 2 to 3, added to the breakout level.

Example: stock squeezed between $95-$99 for 12 days. Breaks above $99 on 2× volume.
Entry: $99.50. Stop: $96 (midpoint of $95-$99). Target: $99.50 + 2×($4) = $107.50.
Risk: $3.50. Reward: $8.00. Ratio: 2.3:1.`
    },
    { heading:"Combining the Squeeze With Fundamental Context",
      body:`Squeeze breakouts are significantly more powerful when they occur at the same time as a fundamental catalyst or near a scheduled event.

The ideal scenario: a stock has been building a technical squeeze (low volatility, Bollinger Bands contracting) for 6-10 weeks going into an earnings report. The earnings are strong (beat + raised guidance). The stock breaks out of the squeeze on the earnings gap.

The combination:
Technical energy: the squeeze has been building directional energy for weeks.
Fundamental catalyst: earnings provide the trigger and the justification.
Institutional response: funds who have been watching the developing setup now commit capital.

All three arriving simultaneously produce the fastest, most sustained squeeze breakouts.

Pre-event squeeze identification:
2-3 weeks before an earnings report, check whether the stock is in a volatility squeeze (Bollinger Band Width at low levels, stock price moving sideways).
If yes: reduce normal short-term trading of this stock. Wait for the earnings event.
Position for the post-earnings direction using the 15-minute opening range method on the morning after earnings.

The squeeze makes the post-earnings move larger than it would have been without the compression. The pent-up energy amplifies the earnings catalyst response.`,
      keyPoints:[
        "Volatility cycle: high volatility exhausts → contraction → extreme low (squeeze) → expansion. Breakout captures the expansion.",
        "Squeeze identification: Bollinger Band Width at 6-month minimum + ATR at multi-month low.",
        "Do NOT enter during the squeeze — wait for the directional break with volume confirmation.",
        "Entry: close outside the band on 1.5×+ volume → next open. Stop: inside the squeeze midpoint.",
        "Most powerful: squeeze + earnings catalyst arriving simultaneously. The compression amplifies the earnings move."
      ]
    }
  ]
},

"mr-u18": {
  id:"mr-u18", title:"Building a Complete Mean Reversion System", readTime:"8 min",
  subtitle:"Assembling all mean reversion tools into one unified, rules-based trading system.",
  sections:[
    { heading:"The Five Decisions Every Mean Reversion System Must Define",
      body:`Just as with momentum, every mean reversion system must explicitly answer five questions:

1. When to trade (regime filter): ADX below what threshold triggers mean reversion mode? (Standard: ADX below 20.)

2. What to trade (universe): which assets have stable enough means to support mean reversion? (Recommended starting point: SPY, QQQ, and the top 3 most liquid sector ETFs.)

3. Entry signal (what triggers a position): which specific signal constitutes an entry? (Options: Bollinger lower band touch + bullish candle, RSI below 30 + support level, Z-score below -2.)

4. Exit signal (target): how is the profit target defined? (Options: return to middle band, return to VWAP, Z-score returning to 0, specific price level.)

5. Loss control: what is the stop loss (price stop) and the time stop?

A complete mean reversion system explicitly answers all five before any capital is committed. Ambiguity in any of these leads to discretionary decisions under pressure — which is where systems fail.`,
      callout:{ type:"insight", text:"A mean reversion system with one clear regime filter, one entry type, and one exit method will outperform a system with three entry types and four exit options. Not because the simple system has more edge — but because it is more consistently executed. Consistency of execution is the primary performance driver, not the sophistication of the strategy." }
    },
    { heading:"A Complete Mean Reversion System Template",
      body:`Here is a fully-defined, executable mean reversion swing trading system:

REGIME FILTER:
Trade ONLY when daily ADX is below 20 AND the weekly chart is either ranging or in a mild uptrend (not a strong downtrend — downtrend mean reversion is dangerous).

UNIVERSE:
SPY, QQQ, XLE, XLK, XLF, GLD. (Six liquid, well-diversified ETFs with stable fundamental means.)

ENTRY SIGNAL (all required):
☐ ADX below 20 on the daily chart.
☐ Price touches or breaches the lower Bollinger Band (2 SD, 20 period).
☐ A bullish reversal candle forms (hammer, engulfing, or doji followed by green candle).
☐ Volume on the decline is below the 20-day average (sellers not aggressive).
☐ No major fundamental catalyst (news) driving the decline.

POSITION SIZING:
1% of account equity at risk per trade.
Stop distance = price entry minus lower band minus 0.5%.
Shares = (account × 1%) / stop distance in dollars.
Maximum 3 positions simultaneously.

EXIT TARGETS:
Profit target: middle band (20 SMA). Sell 50% there.
Extended target: upper band or prior swing high. Trail remaining 50% with a stop at the middle band.
Price stop: close below the lower band.
Time stop: if middle band not reached within 12 trading days, exit all.`
    },
    { heading:"Testing and Refining the System",
      body:`Validation sequence:

Step 1 — Backtest on ETF data (3-4 weeks):
Pull 2 years of daily data for your 6 ETFs.
Identify all sessions where ADX was below 20 (regime filter active).
Within those sessions, find all lower band touch + bullish candle occurrences.
Record each: entry, stop, exit at middle band (day it was reached or time stop).
Calculate: win rate, average R:R, maximum drawdown, profit factor.

Step 2 — Regime filter validation:
Run the SAME strategy without the ADX filter (buy every lower band touch regardless of ADX).
Compare results. The ADX filter should meaningfully improve profit factor.
If the filter doesn't help, your universe has insufficient trending periods to make the filter meaningful — reassess.

Step 3 — Paper trade (1 month):
Execute every qualifying signal in real-time with a paper account.
Focus on: is the regime filter working as expected? Are entries qualifiable without ambiguity? Are exits executing at expected prices?

Step 4 — Live trading with small size:
Begin with 25% of intended position sizes. Run for 20 signals.
Confirm that real-market execution (spreads, partial fills, gap risk) doesn't significantly degrade the backtest results.

Step 5 — Full deployment:
Scale to full size after confirming small-size phase results align with backtest expectations.`,
      keyPoints:[
        "Five required decisions: regime filter, universe, entry signal, profit target, loss controls (price + time stops).",
        "Complete system: ADX<20 + ETF universe + lower band touch + bullish candle + below-average volume.",
        "Time stop: 12 trading days to reach middle band. If not, exit. Never hold mean reversion indefinitely.",
        "Validate regime filter value by comparing with-filter vs. without-filter backtests. Filter must add measurable value.",
        "Deployment sequence: backtest → paper trade → 25% live → full size. Don't skip the small-size validation phase."
      ]
    }
  ]
},

"mr-u19": {
  id:"mr-u19", title:"Real-World Mean Reversion Case Studies", readTime:"8 min",
  subtitle:"Three complete mean reversion trades from setup through exit — including one that failed and why.",
  sections:[
    { heading:"Case Study 1: SPY Bollinger Band Lower Touch, March 2023",
      body:`Context: The S&P 500 had been in a moderate uptrend in early 2023 (recovered from the 2022 lows). ADX on the daily SPY chart was oscillating between 15-22 — a ranging-to-mild-trend environment.

The Setup (March 2023):
SPY had risen from $385 to $408 over 6 weeks. It then pulled back to $395 over 5 days — falling to the lower Bollinger Band at $393. ADX was 16 at the time of the pullback (ranging confirmed). Volume during the decline was declining (sellers not pressing aggressively). A hammer formed on the day it touched the lower band.

Trade Execution:
Entry: $396 (next day open after the hammer).
Stop: $390 (below the lower band at $393 minus 0.5%).
Time stop: 12 trading days (exit at $396 if middle band not reached by then).
Target: middle band at $403, then upper band area.

Outcome:
SPY bounced from the entry level. The middle band at $403 was reached on day 7 (within the time stop window). Sold 50% of the position at $403, moved stop on remainder to $400 (slightly above entry). SPY continued to $412 by day 11. Sold remainder at $410.

Result: entry $396, exits $403 (50%) and $410 (50%). Average exit $406.50. Gain: $10.50/share = 2.65% on the ETF. With 1% account risk and $6 stop: position = $1,000/$6 = 167 shares × $10.50 = $1,753.50 profit per $100,000 account. ROI on risk: 175%.`
    },
    { heading:"Case Study 2: XLE Mean Reversion That Failed — The Clean Exit",
      body:`This case study demonstrates how a well-structured mean reversion trade handles failure without catastrophic damage.

Setup (September 2023):
XLE (energy sector ETF) had been ranging for 8 weeks between $83 and $91 (ADX oscillating 14-18). XLE pulled back to $84 — near the lower Bollinger Band ($83.50). A hammer formed. All mean reversion criteria met.

Trade Execution:
Entry: $84.50 next morning.
Stop: $82 (below the lower band).
Time stop: 12 trading days.
Target: middle band at $87.50.

What Happened:
Oil prices declined on unexpected Saudi production news. XLE dropped through $84, through $83, and hit the stop at $82 on day 4.

Clean exit at $82.
Loss: $84.50 − $82 = $2.50/share.
With 1% risk on $100,000 account ($1,000 risk), position was 400 shares ($2.50 stop).
Total loss: $1,000 — exactly 1% of account. The predetermined plan executed perfectly.

Why This Was a Good Trade Despite Losing:
The fundamental backstop (oil news) changed the mean. The stop at $82 was correct — below the lower band, where the range structure was definitively broken.
The time stop was irrelevant here because the price stop was hit first — exactly as designed.
The 1% risk meant this loss could be absorbed 100 times before materially damaging the account.

Key lesson: a properly-structured mean reversion trade that loses exactly as planned (at the predetermined stop, for the planned amount) is a success in process even if not in outcome.`
    },
    { heading:"Case Study 3: RSI Divergence Trade on QQQ",
      body:`Context: QQQ in a sideways range during a period of uncertainty about Fed policy (late 2023). ADX was consistently below 18 for 6 weeks.

The Setup:
QQQ declined from $365 to $342 (Low 1, October 2023). RSI at Low 1: 27.
QQQ bounced to $358, then declined again to $345 (Low 2, 3 weeks later). RSI at Low 2: 32 (higher RSI despite similar price = bullish divergence).

The Confirmation Required:
Divergence alone is not an entry. Waited for the price trigger.
Trigger: QQQ closed above the bounce high at $358 on Day 4 after Low 2, with volume 40% above the 20-day average.

Entry: $359 (next morning open after the confirmed close above $358).
Stop: below Low 2 at $343.
Target: middle band at $365 (near the prior consolidation high).

Outcome:
QQQ continued upward from the divergence entry. Middle band at $365 was reached on day 8.
Sold 50% at $365. Moved stop on remaining 50% to $357 (just above entry).
QQQ reached $372 (upper band) by day 14. Sold remainder at $370.

Result: entry $359, exits $365 (50%) and $370 (50%). Average exit $367.50. Gain: $8.50 per share = 2.37%.

Key lesson: the RSI divergence identified the potential reversal 3 weeks before the actual entry signal. Patience — waiting for the price confirmation trigger ($358 close) rather than buying at Low 2 ($345) — produced a better entry with a confirmed signal rather than an anticipatory one.`,
      keyPoints:[
        "Case 1: SPY Bollinger lower band touch in ranging market (ADX 16) + hammer + declining volume = textbook setup.",
        "Case 2: clean stop execution when fundamental news changed the mean. 1% account risk limited damage to $1,000.",
        "Case 3: RSI divergence requires patience — wait for price confirmation trigger, not just the divergence itself.",
        "Properly structured losses are process successes: stop hit, predetermined amount, no deviation from plan.",
        "Mean reversion time horizons: 5-15 days for ETF/index mean reversion is typical. Plan for this duration."
      ]
    }
  ]
},

"mr-u20": {
  id:"mr-u20", title:"Mean Reversion in Crypto Markets", readTime:"7 min",
  subtitle:"The specific conditions where mean reversion works in crypto — and where it absolutely doesn't.",
  sections:[
    { heading:"Crypto Mean Reversion: Why It's Different",
      body:`Cryptocurrency markets present unique mean reversion challenges and opportunities. The same strategies that work reliably in equity ETFs require significant modification for crypto.

Why crypto is harder for mean reversion:
Volatility is 3-10× higher than equity markets. What looks like a 2-standard-deviation extreme in crypto might be reached in a single day's trading, then extended to 4+ standard deviations before reverting — if it reverts at all.
Crypto markets are 24/7 — there are no closing prices, no session resets. Gaps that occur in stocks (creating clean mean reversion opportunities at prior closes) are continuous moves in crypto.
Fundamental mean is harder to define. A stock has earnings, revenue, and book value to anchor a mean. Most cryptocurrencies have no such anchor — the "mean" is almost entirely sentiment-driven.
Regime changes are more extreme. The shift from crypto bull market to bear market involves 70-90% declines. Mean reversion strategies during these periods are account-destroying.

Where crypto mean reversion works:
Bitcoin and Ethereum only (not altcoins). The two largest cryptos have the deepest liquidity, most institutional participation, and most reliable technical behavior.
On the daily or weekly chart (not intraday).
During sideways consolidation phases between major trends.
At extreme sentiment levels (Fear & Greed below 15 or above 85).`,
      callout:{ type:"warning", text:"Altcoin mean reversion is a trap. Individual altcoins can lose 95%+ of their value in bear markets, making any mean reversion entry during a downtrend catastrophic. The 'oversold' altcoin that looks like a mean reversion opportunity at -60% from its high can decline another -90% from there. Apply mean reversion only to Bitcoin and Ethereum, and only with a clear understanding of the macro crypto market cycle." }
    },
    { heading:"Bitcoin-Specific Mean Reversion Indicators",
      body:`The most reliable mean reversion signals specific to Bitcoin:

1. Crypto Fear & Greed Index below 15 (Extreme Fear):
Historically, Bitcoin purchased when the index is below 15 has produced positive returns over the following 30, 60, and 90 days in the majority of cases during non-bear-market periods.
How to check: available free at alternative.me/crypto/fear-and-greed-index.

2. Bitcoin funding rate in perpetual futures going below -0.05% per 8 hours:
Funding rate measures whether longs or shorts pay the other side in perpetual futures. Extremely negative = shorts dominating = peak pessimism in the derivatives market. Historical mean reversion has been strong from these extremes.

3. Bitcoin weekly RSI below 30:
Occurred only 3-4 times in Bitcoin's history (2015, 2018, 2020, 2022). Each was a major buying opportunity for 6-12 month time horizons. Not useful as a frequent trading signal — but extraordinary when it appears.

4. MVRV Z-Score below 0 (on-chain metric):
MVRV = Market Value / Realized Value. Z-score below 0 means most Bitcoin holders are at a loss (market value below their average purchase price). Historically, MVRV Z-score below 0 has indicated major long-term buying opportunities.`
    },
    { heading:"Executing Crypto Mean Reversion Trades",
      body:`Given crypto's higher volatility, position sizing must be adjusted:

Standard equity mean reversion: 1-2% account risk per trade.
Crypto mean reversion: 0.5-1% maximum account risk per trade.

The higher volatility means that even with ATR-based stops, crypto stops are typically 10-20% below entry. At 1% account risk with a 15% stop: position = (account × 1%) / (0.15 × entry price). For a $100,000 account buying Bitcoin at $40,000: position = $1,000 / $6,000 = 0.167 BTC.

Complete Bitcoin mean reversion trade:
Fear & Greed Index at 12 (extreme fear). Bitcoin at $28,000. Bitcoin weekly RSI at 34 (approaching oversold). Bitcoin above the 200-week SMA (long-term uptrend intact on monthly chart).

Entry: $28,500.
Stop: $24,000 (below the 200-week SMA and prior significant low).
Time stop: 60 days (crypto mean reversion takes longer than equity due to longer cycle periods).
Target: return to 20-week SMA at approximately $35,000.

Risk: $4,500. Reward to target: $6,500. Ratio: 1.4:1 — marginal but justified given the historically high-probability sentiment extreme.

Exit: if Fear & Greed Index returns above 50 (neutral) and Bitcoin returns to the 20-week SMA, take profit. Alternatively hold to the 60-day time stop.`,
      keyPoints:[
        "Crypto mean reversion: BTC and ETH only. Not altcoins. Daily or weekly chart only. Not intraday.",
        "Fear & Greed below 15: historically strong Bitcoin buying opportunity during non-bear-market conditions.",
        "Extremely negative funding rates (-0.05%+ per 8 hours): peak derivatives pessimism = mean reversion opportunity.",
        "Position size: 0.5-1% account risk for crypto mean reversion (half of normal due to higher volatility).",
        "Time stops for crypto: 30-60 days (longer cycle than equities). Check the 200-week SMA remains intact before entry."
      ]
    }
  ]
},

"mr-u21": {
  id:"mr-u21", title:"Rate of Change Mean Reversion", readTime:"7 min",
  subtitle:"Using Rate of Change extremes to identify overbought and oversold conditions systematically.",
  sections:[
    { heading:"Rate of Change as a Mean Reversion Signal",
      body:`Rate of Change (ROC) = ((Current Close − Close N periods ago) / Close N periods ago) × 100.

It measures the percentage change over a lookback period. Unlike RSI (which smooths), ROC directly shows the raw momentum change.

ROC mean reversion logic: over any given period, returns cannot compound indefinitely at extreme rates. An asset that has risen 25% in 10 days will almost certainly not rise another 25% in the next 10 days. The rate of change itself reverts toward zero over time — which is the mean reversion opportunity.

Identifying ROC extremes:
Calculate the ROC for your chosen lookback (5, 10, or 20 day).
Calculate the 12-month mean and standard deviation of the ROC.
When ROC is more than 2 standard deviations above or below its mean: an extreme exists.

For mean reversion trading:
ROC above +2 SD from its mean = short signal (rate of gain is unsustainably high).
ROC below -2 SD from its mean = long signal (rate of decline is unsustainably fast).

The advantage of ROC extremes: they identify not just price extremes but momentum extremes — situations where the RATE of movement is itself extreme, not just the price level.`,
      callout:{ type:"insight", text:"ROC mean reversion works best for what practitioners call 'rubber band' setups — situations where price has been pulled sharply away from equilibrium by excess short-term momentum. The 5-day or 10-day ROC shows these acute momentum extremes clearly. The 20-day ROC shows slightly longer-term exhaustion. Use shorter ROC periods (5-10 days) for intraday and swing trades; longer periods (20-60 days) for position trades." }
    },
    { heading:"The 10-Day ROC Mean Reversion System",
      body:`A complete rules-based system using 10-day ROC extremes:

Universe: S&P 500 stocks or sector ETFs.

Entry rules (long):
1. ADX below 20 (ranging market).
2. 10-day ROC below -2 SD from its 12-month mean.
3. Price at or near a meaningful support level (prior resistance, major MA, Fibonacci).
4. A bullish candlestick confirmation on the day the ROC extremity occurs.

Position sizing: 1% account risk. Stop = below the support level that triggered the entry.

Exit:
Target: 10-day ROC returns to 0 (no change over the prior 10 days) = price has fully mean-reverted in momentum terms.
OR: price returns to its 20-day SMA.
Time stop: 10 trading days.

Example — QQQ:
10-day ROC for QQQ drops to -8.5%. 12-month mean ROC: -0.2%. 12-month SD: 2.8%.
Z-score: (-8.5 − (−0.2)) / 2.8 = -2.96 (below -2 SD threshold).
Price at $370, also at the 50-day EMA.
Bullish engulfing candle forms.

Entry: $371. Stop: $364 (below the 50 EMA). Target: 20-day SMA at $382.
Risk: $7. Reward: $11. Ratio: 1.57:1. Accept if time stop is tight (10 days) and win rate historically above 60%.`
    },
    { heading:"Combining ROC With Other Mean Reversion Tools",
      body:`ROC extremes are most powerful when they coincide with other mean reversion signals.

ROC + Bollinger Band:
When 10-day ROC is at -2 SD extreme AND price is at the lower Bollinger Band: two independent extreme signals occurring simultaneously. Historically shows higher win rate than either signal alone.

ROC + RSI divergence:
Price makes a new low on extreme negative ROC. RSI at this low is HIGHER than RSI at the prior price low. The ROC confirms the momentum extreme; the RSI divergence confirms the sellers are exhausting. Both converging produces the highest-quality mean reversion signal.

ROC + VWAP extreme:
When 5-day ROC is at -2 SD extreme AND intraday price is at -2 SD below VWAP: combined signal for an intraday + swing trade.

The calendar of ROC extremes:
The most extreme ROC readings historically occur at: market bottoms after bear declines (March 2020, October 2022), after earnings panic selloffs (stocks dropping 20%+ on earnings miss), and during sector rotation selloffs (investors rapidly exiting a sector simultaneously).

Each of these creates the extreme ROC environments where mean reversion probability is highest. Building an alert for when the ROC of specific ETFs drops below their historical -2 SD threshold provides a systematic early warning for these opportunities.`,
      keyPoints:[
        "ROC = percentage change over N periods. Mean reversion targets the extreme rates of change, not just price extremes.",
        "ROC below -2 SD from its 12-month mean = rate of decline is unsustainably extreme = mean reversion signal.",
        "10-day ROC system: enter on extreme ROC + support + bullish candle. Exit when ROC returns to 0 or 20-day SMA reached.",
        "ROC + Bollinger Band lower touch + RSI divergence = three independent confirming signals = highest quality setup.",
        "Most extreme ROC readings: market bottoms, post-earnings panic selloffs, sector rotation exits. Build alerts for these."
      ]
    }
  ]
},

"mr-u22": {
  id:"mr-u22", title:"Mastering Mean Reversion", readTime:"9 min",
  subtitle:"The unified framework for all mean reversion strategies — from regime identification to execution to continuous improvement.",
  sections:[
    { heading:"The Mean Reversion Master Checklist",
      body:`Before every mean reversion trade, run through this complete checklist:

REGIME VERIFICATION:
☐ Daily ADX below 20? (Ranging market confirmed)
☐ No strong trend on weekly chart? (Weekly ADX below 25 or sideways structure)
☐ No major macro event this week that could break the range? (Fed, earnings, economic data)

ASSET QUALITY CHECK:
☐ Is this an asset with a stable, well-defined mean? (ETF, blue-chip large-cap)
☐ No major fundamental news driving the current extreme? (Check headlines)
☐ The mean (20 SMA) itself is relatively flat? (Not in a steep declining trend)

ENTRY SIGNAL CHECK:
☐ Price at or beyond a statistical extreme? (Lower Bollinger Band, Z-score below -2, ROC below -2 SD)
☐ Price at a meaningful support level? (Not just a statistical extreme in empty space)
☐ Confirming reversal candlestick? (Hammer, engulfing, or doji followed by reversal)
☐ Volume declining on the approach? (Sellers not aggressive)

TRADE MECHANICS:
☐ Entry price defined.
☐ Stop price defined (below the statistical extreme).
☐ Target defined (middle band, 20 SMA, or VWAP).
☐ Time stop set (specific calendar date, maximum 12-15 trading days).
☐ Position size calculated from formula.
☐ R:R at least 1.5:1.

If any box in REGIME or ASSET QUALITY is unchecked: do not trade.
If one box in ENTRY SIGNAL is unchecked: reduce position size by 50%.`
    },
    { heading:"Combining Multiple Mean Reversion Strategies",
      body:`The tools from this module complement each other. Here is how they stack:

Level 1 — Regime only (ADX below 20): validates the environment. No specific entry yet.

Level 2 — Statistical extreme (Bollinger lower band or Z-score below -2): the first entry signal. Basic mean reversion trade — moderate probability.

Level 3 — Statistical extreme + Price level (lower band at a prior support/resistance level): confluence of statistical extremity and historical S/R. Good probability.

Level 4 — Level 3 + Confirmation candle (hammer or engulfing at the extreme): three independent signals converging. High probability.

Level 5 — Level 4 + Indicator divergence (RSI divergence confirming sellers exhausting): four independent signals. Highest probability setup available.

Position sizing by level:
Level 2: 0.5% account risk.
Level 3: 0.75% account risk.
Level 4: 1.0% account risk.
Level 5: 1.25-1.5% account risk.

This graduated approach allocates more capital to the highest-quality setups while still participating in the more moderate-quality ones at reduced risk. Over 100 trades, the highest-quality (level 5) setups should produce meaningfully better results on a risk-adjusted basis.`
    },
    { heading:"Continuous Improvement in Mean Reversion",
      body:`Mean reversion trading improves through specific, data-driven reviews:

Monthly review questions specific to mean reversion:
1. What was my average win rate this month for mean reversion vs. momentum trades?
2. What percentage of my mean reversion entries had ADX below 20 at entry? (If below 80%, you are taking regime-mismatched trades.)
3. What was my average time to reach the target vs. my time stop? (If regularly hitting time stops, your target may be too far or the time stop too short.)
4. Did any mean reversion trades fail catastrophically (loss > 2×  normal)? If yes, what happened (fundamental change, regime break, news)?

The regime filter quality check:
Track your win rate separately for trades where ADX was below 15 vs. below 20. If the below-15 trades show dramatically higher win rates, consider tightening your ADX filter to 15.

The time stop optimization:
If 60% of your profitable mean reversion trades reach their target within 7 days, consider shortening the time stop to 8 days. This frees capital faster and forces you to pass on slower-reverting situations that tie up capital without generating returns.

The most important long-term improvement: gradually building a larger universe of regime-appropriate assets. As you learn the characteristic volatility, mean, and typical reversion time for each asset, your ability to select the highest-quality setups within the universe improves continuously.`,
      keyPoints:[
        "Master checklist: regime verification → asset quality → entry signal → trade mechanics. All must pass before entry.",
        "Five entry levels: regime → statistical extreme → + price level → + confirmation candle → + divergence.",
        "Scale position size with entry quality: 0.5% at level 2, up to 1.5% at level 5.",
        "Monthly review: win rate by ADX level, time to target vs. time stop, catastrophic failure analysis.",
        "Long-term improvement: learn the characteristic behavior of each asset in your universe. Precision comes from familiarity."
      ]
    }
  ]
}

}
