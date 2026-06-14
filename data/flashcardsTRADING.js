export const FLASHCARDS_TRADING = [

// ── TECHNICAL INDICATORS ──────────────────────────────────────────────────────
{ id:'trd-i01', cat:'Indicators', sub:'RSI', diff:'easy', type:'definition',
  front:'What is RSI and what do the 70 and 30 levels mean?',
  back:'Relative Strength Index — measures price momentum on a 0–100 scale.\n\nAbove 70: Overbought — price has risen strongly; potential reversal or pause\nBelow 30: Oversold — price has fallen strongly; potential reversal or bounce\n\nCalculated from average gains vs average losses over 14 periods.\n\nImportant: Overbought does NOT mean "sell immediately" — a strong uptrend can stay above 70 for months.',
  tip:'RSI divergence (price makes new high, RSI does not) is often more valuable than the absolute 70/30 levels.' },

{ id:'trd-i02', cat:'Indicators', sub:'RSI', diff:'medium', type:'application',
  front:'What is RSI divergence and why is it considered a high-probability signal?',
  back:'Bullish divergence: Price makes a LOWER low, but RSI makes a HIGHER low\n→ Selling momentum is weakening despite lower prices → potential reversal up\n\nBearish divergence: Price makes a HIGHER high, but RSI makes a LOWER high\n→ Buying momentum is weakening despite higher prices → potential reversal down\n\nWhy high-probability: Divergences show that the forces DRIVING the move are fading before price itself reverses.',
  tip:'Divergences on higher timeframes (daily/weekly charts) are more reliable than on 5-minute charts.' },

{ id:'trd-i03', cat:'Indicators', sub:'MACD', diff:'easy', type:'definition',
  front:'What does MACD stand for and what are its three components?',
  back:'Moving Average Convergence Divergence\n\nThree components:\n1. MACD Line: 12-period EMA − 26-period EMA\n2. Signal Line: 9-period EMA of the MACD line\n3. Histogram: MACD Line − Signal Line (shows the gap between them)\n\nSignals:\n• MACD crosses ABOVE signal line → bullish momentum\n• MACD crosses BELOW signal line → bearish momentum\n• Growing histogram → strengthening momentum\n• Shrinking histogram → fading momentum',
  tip:'MACD is a lagging indicator — it confirms trends, it doesn\'t predict them. Use with price action for best results.' },

{ id:'trd-i04', cat:'Indicators', sub:'Moving Averages', diff:'easy', type:'definition',
  front:'What is the Golden Cross and Death Cross?',
  back:'Golden Cross: 50-day SMA crosses ABOVE the 200-day SMA\n→ Bullish signal — short-term momentum shifting positive\n→ Historically followed by above-average returns in stocks\n\nDeath Cross: 50-day SMA crosses BELOW the 200-day SMA\n→ Bearish signal — short-term momentum shifting negative\n→ Often appears after significant declines\n\nCaution: These are LAGGING signals — by the time the cross occurs, much of the move has already happened.',
  tip:'The 200-day SMA itself is powerful: price above = long-term uptrend. Price below = long-term downtrend.' },

{ id:'trd-i05', cat:'Indicators', sub:'Moving Averages', diff:'medium', type:'application',
  front:'What is the difference between SMA and EMA, and when would you prefer each?',
  back:'SMA (Simple Moving Average): Equal weight to all periods\n• Smoother, slower to react\n• Better for long-term trend identification\n• Preferred by: swing traders, investors (50/200-day SMAs)\n\nEMA (Exponential Moving Average): More weight to recent prices\n• Faster, more responsive to recent price action\n• More false signals in choppy markets\n• Preferred by: day traders, short-term momentum traders (8/21-day EMAs)\n\nRule of thumb: Use EMA for entry timing, SMA for trend direction.',
  tip:'The 21 EMA is widely used by momentum traders as a dynamic support/resistance level in uptrends.' },

{ id:'trd-i06', cat:'Indicators', sub:'Bollinger Bands', diff:'medium', type:'definition',
  front:'What are Bollinger Bands and what is the Bollinger Squeeze?',
  back:'Bollinger Bands: 20-period SMA with upper and lower bands set 2 standard deviations away.\n\nIn trending markets: Price can ride the upper or lower band for extended periods (NOT automatically a reversal signal)\n\nIn ranging markets: Price tends to mean-revert from the upper band to the lower band (mean reversion strategy)\n\nBollinger Squeeze: When the bands narrow to their tightest range in months → signals a period of very low volatility that often precedes a sharp breakout in EITHER direction.',
  tip:'The squeeze tells you a breakout is coming. Watch for price direction + volume to confirm which way.' },

{ id:'trd-i07', cat:'Indicators', sub:'Volume', diff:'medium', type:'definition',
  front:'What is On-Balance Volume (OBV) and what does it reveal?',
  back:'OBV adds volume on UP days and subtracts volume on DOWN days, creating a running cumulative total.\n\nWhat it reveals: Whether buying or selling volume is dominant.\n\nKey signals:\n• OBV rising while price is flat/falling → ACCUMULATION (big money buying quietly)\n• OBV falling while price is flat/rising → DISTRIBUTION (big money selling into strength)\n• OBV making new highs BEFORE price → Leading signal of coming price breakout\n\nPrinciple: Volume PRECEDES price.',
  tip:'OBV diverging from price is a powerful early warning. "Smart money" can\'t hide their footprint in volume data.' },

{ id:'trd-i08', cat:'Indicators', sub:'Volume', diff:'easy', type:'concept',
  front:'What does it mean when a breakout occurs on high vs. low volume?',
  back:'HIGH VOLUME breakout:\n✓ Confirms genuine institutional participation\n✓ Higher probability the breakout holds\n✓ More likely the start of a sustained move\n\nLOW VOLUME breakout:\n⚠ Often a "fakeout" — price reverses back\n⚠ Lack of institutional conviction\n⚠ Higher risk of breakdown back into range\n\nRule: "Volume confirms price." A breakout to new highs on 2–3× average volume is significantly more reliable than one on below-average volume.',
  tip:'Compare breakout volume to the 20-day average volume. 2× or more is the threshold for confirmation.' },

{ id:'trd-i09', cat:'Indicators', sub:'ATR', diff:'medium', type:'definition',
  front:'What is Average True Range (ATR) and how is it used in trading?',
  back:'ATR measures the average daily price range — it quantifies VOLATILITY.\n\nA stock with ATR of $3 typically moves about $3 in a typical day.\n\nPrimary uses:\n1. Stop placement: Set stop 1.5–2× ATR below entry → gives trade room to breathe\n2. Position sizing: Smaller position when ATR is high (more volatile), larger when low\n3. Volatility regime: Very low ATR = squeeze forming = breakout approaching\n\nExample: $50 stock, ATR = $1.50, 2× ATR stop = $3 below entry → Stop at $47',
  tip:'ATR-based stops are ADAPTIVE — they adjust to market volatility automatically, unlike fixed-dollar stops.' },

// ── CHART PATTERNS ────────────────────────────────────────────────────────────
{ id:'trd-p01', cat:'Patterns', sub:'Reversal', diff:'medium', type:'definition',
  front:'What is a Head and Shoulders pattern and how do you trade it?',
  back:'H&S pattern = 3 peaks, with the middle peak (head) highest, flanked by two lower peaks (shoulders), connected by a neckline.\n\nHow to trade:\n• Entry: After price breaks BELOW the neckline on high volume\n• Target: Project the head-to-neckline height downward from breakout point\n• Stop: Above the right shoulder\n\nInverse H&S (bullish mirror):\n• 3 troughs, middle lowest → breakout ABOVE neckline → long',
  tip:'The more times the neckline is tested before the break, the more powerful the eventual move.' },

{ id:'trd-p02', cat:'Patterns', sub:'Continuation', diff:'easy', type:'definition',
  front:'What is a bull flag pattern and why is it one of the most reliable patterns?',
  back:'Bull Flag:\n1. Strong upward move (the "flagpole") — often vertical, on high volume\n2. Brief consolidation in a downward-slanting channel (the "flag") — lower volume\n3. Breakout upward from the flag — high volume\n\nTarget: Flagpole height added to the breakout point\n\nWhy reliable:\n• Consolidation represents normal "profit-taking"\n• The breakout shows that buyers are back in control\n• High volume on the initial move = strong institutional interest',
  tip:'Bear flags are the mirror image: sharp drop (flagpole), brief upward consolidation, then breakout lower.' },

{ id:'trd-p03', cat:'Patterns', sub:'Continuation', diff:'medium', type:'definition',
  front:'What is the difference between a symmetrical, ascending, and descending triangle?',
  back:'Symmetrical: Price makes lower highs AND higher lows → converging. Can break either direction — trade the breakout direction.\n\nAscending: Flat TOP resistance + rising lows → BULLISH — buyers are more aggressive each test. Expect upside breakout.\n\nDescending: Falling tops + flat BOTTOM support → BEARISH — sellers are more aggressive each test. Expect downside breakdown.\n\nAll triangles: The longer the formation, the more significant the eventual breakout.',
  tip:'False breakouts from triangles are common — wait for the CANDLE TO CLOSE outside the pattern before entering.' },

{ id:'trd-p04', cat:'Patterns', sub:'Candlestick', diff:'easy', type:'definition',
  front:'What is a hammer candlestick and what does it signal?',
  back:'Hammer: Small body at TOP of the candle\'s range with a LONG lower wick (at least 2× the body).\n\nSignal: Bullish reversal when found after a downtrend.\n\nInterpretation: Sellers pushed price down significantly, but buyers stepped in and pushed it back up to near the open → buying pressure overwhelmed selling.\n\nRequirements for high probability:\n• Found at a KEY SUPPORT LEVEL\n• Appears after a significant decline\n• Confirmed by the next day\'s bullish close\n• Even better with high volume',
  tip:'A hammer in the middle of a range has no meaning. Context (at support, after decline) is everything.' },

{ id:'trd-p05', cat:'Patterns', sub:'Candlestick', diff:'medium', type:'definition',
  front:'What is a bearish engulfing pattern and when is it most significant?',
  back:'Bearish Engulfing: A GREEN candle followed immediately by a RED candle whose body COMPLETELY COVERS the previous green candle\'s body.\n\nSignal: Bearish reversal.\n\nInterpretation: Buyers initially had control, but sellers completely overtook them in the following session — dramatic shift in momentum.\n\nMost significant when:\n• At a KEY RESISTANCE LEVEL\n• After a prolonged uptrend\n• On high volume\n• Confirmed by the following day\'s lower close',
  tip:'The LARGER the engulfing candle relative to the previous candle, the stronger the reversal signal.' },

// ── STRATEGIES ────────────────────────────────────────────────────────────────
{ id:'trd-s01', cat:'Strategy', sub:'Trend Following', diff:'medium', type:'definition',
  front:'What is trend following and what are its core principles?',
  back:'Trend following: "The trend is your friend" — trading in the direction of the established trend.\n\nCore principles:\n1. Identify the trend (price above 200-day SMA = uptrend)\n2. Wait for pullbacks to key levels (moving averages, support)\n3. Enter in the direction of the trend when pullback ends\n4. Use a trailing stop to ride the trend as long as it lasts\n5. Accept that you won\'t catch the exact bottom or top\n\nTrend followers accept many small losses for occasional large winning trades.',
  tip:'The hardest part of trend following isn\'t the strategy — it\'s holding through volatility when the trend continues.' },

{ id:'trd-s02', cat:'Strategy', sub:'Mean Reversion', diff:'medium', type:'definition',
  front:'What is mean reversion trading and what conditions must be present?',
  back:'Mean reversion: Prices that have moved far from their average tend to "snap back" toward that average.\n\nSetup conditions:\n• Price is significantly extended from its moving average (2+ standard deviations)\n• RSI below 30 (oversold) or above 70 (overbought)\n• Price at or near a major support/resistance level\n• Ideally a reversal candlestick confirming the turn\n\nTarget: Usually the 20-day SMA or other middle-of-range level\n\nWorks best in RANGING markets — fails badly in strong trends.',
  tip:'Mean reversion in trending markets is dangerous: "never catch a falling knife" applies when the trend is strongly down.' },

{ id:'trd-s03', cat:'Strategy', sub:'Momentum', diff:'medium', type:'definition',
  front:'What is momentum trading and what are the key signals used?',
  back:'Momentum trading: Stocks that have been moving strongly tend to CONTINUE moving in the same direction.\n\nKey signals:\n• Breakout above 52-week high (institutional funds chasing performance)\n• Strong relative strength vs the S&P 500 (stock outperforming the market)\n• High volume on the breakout\n• EMA pullback entry (price pulls back to 21-day EMA in an uptrend, then bounces)\n\nMomentum best in: Trending, trending markets.\nMomentum worst in: Choppy, range-bound markets (generates whipsaws).',
  tip:'Momentum strategies statistically work because institutional fund managers must buy what\'s working to keep up with benchmarks.' },

// ── RISK MANAGEMENT ───────────────────────────────────────────────────────────
{ id:'trd-r01', cat:'Risk Management', sub:'Position Sizing', diff:'medium', type:'application',
  front:'How do you calculate position size using the 1% risk rule?',
  back:'Formula: Shares = (Account × Risk%) ÷ (Entry − Stop)\n\nExample:\n• $50,000 account\n• Risk per trade: 1% = $500 maximum loss\n• Entry: $100/share\n• Stop loss: $95/share ($5 risk per share)\n\nShares = $500 ÷ $5 = 100 shares\n\nPosition size = 100 × $100 = $10,000 (20% of account)\n\nIf wrong and stopped out: lose exactly $500 (1% of account).',
  tip:'The 1% rule ensures that 10 consecutive losing trades only reduce your account by 10%, not wipe you out.' },

{ id:'trd-r02', cat:'Risk Management', sub:'Stop Losses', diff:'easy', type:'definition',
  front:'What are the main methods of placing stop losses?',
  back:'1. ATR-based: Stop = Entry − (2 × ATR). Adapts to market volatility.\n\n2. Support-based: Stop placed just below the nearest key support level.\n\n3. Pattern-based: Stop below the pattern that triggered entry (below the hammer\'s low, below the flag base).\n\n4. Percentage-based: Fixed % below entry (e.g., 2%). Simplest but doesn\'t adapt to volatility.\n\nGolden rules:\n• Place stop BEFORE entering the trade\n• Never move stop further away (only closer to lock in profits)\n• Use hard stops in the system, not mental stops',
  tip:'"Mental stops" don\'t work. Hope overrides discipline. Put the actual stop order in when you enter the trade.' },

{ id:'trd-r03', cat:'Risk Management', sub:'Risk/Reward', diff:'medium', type:'application',
  front:'Why does a strategy that wins 40% of the time but has a 3:1 reward-to-risk ratio still profit?',
  back:'Expectancy calculation:\n(Win rate × Average win) − (Loss rate × Average loss)\n\n40% win rate, 3:1 R/R:\n(0.40 × 3R) − (0.60 × 1R)\n= 1.2R − 0.6R\n= +0.6R per trade\n\nOn 100 trades with $200 per risk unit:\n• 40 wins × $600 = $24,000\n• 60 losses × $200 = $12,000\n• Net profit: $12,000\n\nYou can be WRONG most of the time and still be profitable with good risk/reward.',
  tip:'Most beginners focus on win rate. Professionals focus on EXPECTANCY — win rate × average win minus loss rate × average loss.' },

{ id:'trd-r04', cat:'Risk Management', sub:'Psychology', diff:'medium', type:'concept',
  front:'What is "revenge trading" and how do you prevent it?',
  back:'Revenge trading: Making impulsive trades immediately after a loss with the subconscious goal of "making back" the money quickly.\n\nWhy it\'s dangerous:\n• Emotional state → poor judgment\n• Ignoring setup criteria → random entries\n• Often increasing size → bigger potential loss\n• Can turn a small loss into account destruction\n\nPrevention:\n• After a loss: take a break (15 min minimum)\n• Set a maximum daily loss limit and STOP trading when hit\n• Journal every trade to identify emotional trading patterns',
  tip:'The market doesn\'t owe you your money back. Each trade is independent — the market has no memory.' },

{ id:'trd-r05', cat:'Risk Management', sub:'Position Sizing', diff:'hard', type:'definition',
  front:'What is the Kelly Criterion and why do most traders use a fraction of it?',
  back:'Kelly formula: f = (W × R − L) / R\n\nWhere: W = win probability, L = loss probability, R = win/loss ratio\n\nExample: 55% win rate, 2:1 R/R:\nf = (0.55 × 2 − 0.45) / 2 = 0.325 = 32.5% of capital\n\nWhy use HALF-KELLY (16%):\n• Full Kelly maximizes long-run growth but allows devastating drawdowns\n• Our win rate estimates are imperfect — Kelly is sensitive to errors\n• Half-Kelly captures 75% of the optimal growth with dramatically lower variance',
  tip:'Most professional traders who use Kelly apply 20–50% of the full formula — protecting against estimation errors.' },

// ── MARKET STRUCTURE ──────────────────────────────────────────────────────────
{ id:'trd-m01', cat:'Market Structure', sub:'Support/Resistance', diff:'easy', type:'definition',
  front:'What is the "flip" of support and resistance and why is it important?',
  back:'When a SUPPORT level is decisively broken, it often becomes RESISTANCE.\nWhen a RESISTANCE level is decisively broken, it often becomes SUPPORT.\n\nWhy: The traders who bought at support are now holding losses when it breaks. When price returns to that level, they sell to "get out even" — creating new selling pressure at what was formerly support.\n\nThe flip is one of the most reliable re-entry signals in technical analysis.',
  tip:'The more times a level was tested before breaking, the stronger the flip effect — more trapped traders at that level.' },

{ id:'trd-m02', cat:'Market Structure', sub:'Trend', diff:'easy', type:'definition',
  front:'How do you define an uptrend using market structure?',
  back:'Uptrend defined by Dow Theory: A series of HIGHER HIGHS and HIGHER LOWS.\n\n↗ Price makes new high (HH)\n↘ Price pulls back but NOT below previous low (HL — Higher Low)\n↗ Price makes another new high above previous high\n\nThe uptrend is INTACT as long as price makes higher lows.\n\nDowntrend: Series of LOWER HIGHS and LOWER LOWS.\n\nTrend BREAKS when: Price breaks below the most recent higher low in an uptrend (or above the most recent lower high in a downtrend).',
  tip:'Trading in the direction of market structure (HH/HL = trade long only) dramatically improves win rates.' },

{ id:'trd-m03', cat:'Market Structure', sub:'VWAP', diff:'medium', type:'definition',
  front:'What is VWAP and how do institutional traders use it?',
  back:'Volume Weighted Average Price — the average price paid, weighted by volume, throughout the trading day.\n\nInstituional traders use VWAP as:\n• Benchmark: "I want to buy below VWAP" (getting better-than-average price)\n• Trend indicator: Above VWAP = bullish intraday bias; below VWAP = bearish\n• Support/resistance: Price often gravitates back to VWAP after moving away\n\nVWAP resets every session — it\'s a DAILY indicator.\n\nSWAP (Weekly) and MVWAP (Monthly) track longer periods.',
  tip:'VWAP is most useful for day traders and short-term swing traders. Less relevant for long-term investors.' },

// ── WYCKOFF ───────────────────────────────────────────────────────────────────
{ id:'trd-w01', cat:'Advanced', sub:'Wyckoff', diff:'hard', type:'definition',
  front:'What are the four Wyckoff market phases?',
  back:'1. Accumulation: "Composite Operator" (institutions) buying at low prices while retail sells in fear. Volume dries up. Price moves sideways. Duration: Months to years.\n\n2. Markup: Price begins rising as institutional positions are full. Retail begins buying. Uptrend establishes.\n\n3. Distribution: Institutions selling at high prices into retail buying. Price moves sideways. Retail thinks it\'s consolidation.\n\n4. Markdown: Price falls. Retail holds through the decline hoping for recovery. Repeat.',
  tip:'The Wyckoff Spring — a brief break below support that immediately reverses upward — is the highest-probability entry in accumulation.' },

{ id:'trd-w02', cat:'Advanced', sub:'Wyckoff', diff:'hard', type:'definition',
  front:'What is the Wyckoff "Spring" and why is it such a high-probability setup?',
  back:'The Spring: Price breaks below the support level of an accumulation range, triggering stop losses and panic selling — then IMMEDIATELY reverses upward, closing back above support.\n\nWhy high probability:\n• Shakes out weak hands at the lows (retail stops triggered)\n• Institutions absorb the stop-loss selling\n• The reversal shows that there are MORE buyers than available supply at those low prices\n• Often accompanied by a dramatic reversal candle\n\nEntry: After price closes back above support on the reversal\nStop: Below the Spring\'s low',
  tip:'The Spring is the last test before markup. Missing it often means chasing much higher prices.' },

// ── ELLIOTT WAVE ──────────────────────────────────────────────────────────────
{ id:'trd-e01', cat:'Advanced', sub:'Elliott Wave', diff:'hard', type:'definition',
  front:'What are the three unbreakable rules of Elliott Wave Theory?',
  back:'1. Wave 2 can NEVER retrace more than 100% of Wave 1\n   (If Wave 1 starts at $100 and ends at $120, Wave 2 can\'t go below $100)\n\n2. Wave 3 is NEVER the shortest impulse wave\n   (Wave 3 is usually the strongest and most obvious wave)\n\n3. Wave 4 NEVER overlaps with Wave 1\n   (Wave 4\'s low can\'t enter Wave 1\'s price territory)\n\nIf any of these rules are violated, your wave count is wrong — recount.',
  tip:'Wave 3 being the strongest wave is why the classic "buy the Wave 2 dip" strategy is so popular among Elliott traders.' },

// ── FIBONACCI ─────────────────────────────────────────────────────────────────
{ id:'trd-f01', cat:'Tools', sub:'Fibonacci', diff:'medium', type:'definition',
  front:'What are the key Fibonacci retracement levels and which is most important?',
  back:'Key Fibonacci retracement levels:\n• 23.6% — Shallow pullback in strong trends\n• 38.2% — Moderate pullback\n• 50.0% — Psychological midpoint (not true Fibonacci, but widely watched)\n• 61.8% — THE "Golden Ratio" — most significant level\n• 78.6% — Deep retracement\n\nHow to use: Draw from swing low to swing high. The retracement levels show where buyers might step in on a pullback before the trend resumes.\n\n61.8% is significant because it mathematically appears throughout nature and markets.',
  tip:'Fibonacci works best when multiple tools align (Fib level + moving average + prior support = "confluence").' },

{ id:'trd-f02', cat:'Tools', sub:'Fibonacci', diff:'hard', type:'application',
  front:'What are Fibonacci extensions and how do you set a price target with them?',
  back:'While retracements measure where a pullback might stop, EXTENSIONS measure where the move might GO after the pullback.\n\nKey extension levels:\n• 127.2% — First extension target\n• 161.8% — Most common "measured move" target\n• 261.8% — Extended target for strong trends\n\nHow to draw: Use 3 points — the start of the move (A), the end of the move (B), and the end of the retracement (C).\n\nThe 161.8% extension from C becomes your primary target.',
  tip:'Fibonacci extensions often align with prior highs/lows — these "confluent" levels are the most reliable targets.' },

// ── TRADING PSYCHOLOGY ────────────────────────────────────────────────────────
{ id:'trd-ps01', cat:'Psychology', sub:'Discipline', diff:'easy', type:'concept',
  front:'What is the "trader\'s paradox" and how do you resolve it?',
  back:'The paradox: Trading profitably requires DIFFERENT behavior than what feels natural.\n\nNatural instinct → Correct trading behavior:\n✗ Take profits quickly → ✓ Let winners run\n✗ Hold losers (hope) → ✓ Cut losses quickly\n✗ Trade more when losing → ✓ Reduce size or stop when losing\n✗ Avoid uncertainty → ✓ Accept that losses are part of the system\n✗ Trade based on feelings → ✓ Trade based on rules\n\nResolution: A written trading plan and journaling create objective standards that override instinct.',
  tip:'Every professional trader fails initially because they follow instincts. The learning is in re-wiring those instincts through systematic rule-following.' },

{ id:'trd-ps02', cat:'Psychology', sub:'Discipline', diff:'medium', type:'concept',
  front:'What should a trading journal contain and why is it essential?',
  back:'Essential journal entries:\n• Date, time, ticker, direction (long/short)\n• Entry price, stop price, target price\n• Position size and dollar risk\n• REASON for entry (setup/criteria)\n• Screenshot of chart at entry\n• Exit price and profit/loss\n• Emotional state before and during trade\n• What you did well / what to improve\n\nWhy essential: Pattern recognition about YOUR errors becomes impossible without data. The journal reveals: which setups work for you, which timeframes suit you, and when your emotions hurt your results.',
  tip:'Review your journal weekly — looking for patterns in your profitable trades vs. losing trades.' },

{ id:'trd-ps03', cat:'Psychology', sub:'Mindset', diff:'medium', type:'concept',
  front:'What is "process vs outcome" thinking and why does it matter in trading?',
  back:'Outcome thinking: "I won $500 today, so my decision was good."\n\nProcess thinking: "Regardless of the outcome, was my decision correct based on what I knew at entry?"\n\nWhy it matters:\n• You can make a GOOD DECISION that has a BAD OUTCOME (bad luck)\n• You can make a BAD DECISION that has a GOOD OUTCOME (good luck)\n• Judging decisions by outcomes leads to repeating lucky mistakes and abandoning correct processes\n\nCorrect evaluation: "Given the setup, the risk/reward, and my rules — was this a valid trade?"\n\nProfessionals focus on process. Amateurs focus on outcomes.',
  tip:'Keep statistics on your decision quality (follow your rules?) vs. P&L. You should make money following your rules consistently.' },

// ── SYSTEMS & BACKTESTING ─────────────────────────────────────────────────────
{ id:'trd-sys01', cat:'Systems', sub:'Backtesting', diff:'medium', type:'definition',
  front:'What is backtesting and what are its main limitations?',
  back:'Backtesting: Applying your trading rules to historical data to see how they would have performed.\n\nUseful for:\n• Validating that a strategy has an edge over large samples\n• Calculating expected win rate, average win/loss ratio, max drawdown\n• Identifying which market conditions the strategy performs best in\n\nLimitations:\n• Overfitting: Finding rules that fit past data but fail in live trading\n• Survivorship bias: Only testing stocks that still exist (ignores bankruptcies)\n• Slippage and spread: Actual execution costs higher than theoretical\n• Curve-fitting: Tweaking parameters until the backtest looks perfect (but it won\'t work forward)',
  tip:'Always test on OUT-OF-SAMPLE data (data you haven\'t looked at while building the strategy) before trading live.' },

{ id:'trd-sys02', cat:'Systems', sub:'Trading Plan', diff:'easy', type:'definition',
  front:'What must a complete trading plan include?',
  back:'1. Market selection — Which markets/instruments you trade and why\n\n2. Timeframe — Primary chart for analysis and entry\n\n3. Setup criteria — Exact conditions that must be present before considering a trade\n\n4. Entry rules — Specific trigger that gets you in (e.g., "close above resistance")\n\n5. Position sizing — Exact formula (e.g., 1% account risk per trade)\n\n6. Stop loss placement — Exact rules for where your stop goes\n\n7. Exit rules — When you take profit and when you cut losses\n\n8. Max daily loss — Amount at which you stop trading for the day',
  tip:'The trading plan must be so specific that someone else could execute your trades using only the document.' },

// ── SPECIFIC SETUPS ───────────────────────────────────────────────────────────
{ id:'trd-set01', cat:'Setups', sub:'Breakout', diff:'medium', type:'application',
  front:'What makes an ideal breakout setup and how do you confirm it\'s real?',
  back:'Ideal breakout conditions:\n✓ Prior consolidation of 2+ weeks (pressure building)\n✓ Volume declining DURING consolidation (supply drying up)\n✓ Breakout on 2–3× average daily volume (institutional buying)\n✓ Closing near the HIGH of the day (buyers in control at close)\n✓ Breaking a well-defined, clean level that has held multiple times\n\nFalse breakout signs:\n• Low volume\n• Long upper wick at breakout candle\n• Closes back inside the range on the same day',
  tip:'Wait for the DAILY CLOSE above the level before entering — intraday pokes above don\'t count as breakouts.' },

{ id:'trd-set02', cat:'Setups', sub:'Pullback', diff:'medium', type:'application',
  front:'How do you identify a quality pullback entry in an uptrend?',
  back:'Quality pullback entry criteria:\n\n1. Clear uptrend established (series of higher highs/higher lows)\n2. Price pulls back 30–50% of the prior advance\n3. Pullback volume DECREASING (weak sellers, not strong distribution)\n4. Price finding support at a key level: 21 EMA, 50 SMA, prior breakout, or Fibonacci level\n5. Bullish reversal signal at the support level (hammer, bullish engulfing, reversal candle)\n6. Volume INCREASES on the reversal day\n\nEntry: On close above the reversal candle\'s high\nStop: Below the pullback low',
  tip:'The best pullbacks look "scary" because everyone is afraid the trend has ended. That\'s where the opportunity is.' },

{ id:'trd-set03', cat:'Setups', sub:'Pivot Points', diff:'hard', type:'definition',
  front:'What are pivot points and how do traders use them?',
  back:'Pivot points: Calculated from the previous session\'s High, Low, and Close to define likely support and resistance for the next session.\n\nPivot (P) = (H + L + C) / 3\n\nResistance levels:\nR1 = 2P − L\nR2 = P + (H − L)\nR3 = H + 2(P − L)\n\nSupport levels:\nS1 = 2P − H\nS2 = P − (H − L)\nS3 = L − 2(H − P)\n\nTraders watch: If price opens above P = bullish day expected. Opens below P = bearish day expected.',
  tip:'The central pivot point is the most important level — it acts as the "magnet" price gravitates toward during the session.' },

// ── ADVANCED CONCEPTS ─────────────────────────────────────────────────────────
{ id:'trd-adv01', cat:'Advanced', sub:'Market Profile', diff:'hard', type:'definition',
  front:'What is the Point of Control (POC) in Market Profile and why do traders care about it?',
  back:'Market Profile displays trading volume at each price level during the session, showing where MOST trading occurred.\n\nPoint of Control (POC): The price level where the MOST volume traded during the session — the "fairest" price in the market\'s view.\n\nWhy important:\n• Price tends to return to the POC (mean reversion)\n• A strong move AWAY from POC with expanding volume signals new price discovery\n• POC from previous sessions become future support/resistance\n• Institutions trade around the POC as a reference point',
  tip:'Volume Profile (TradingView feature) shows volume at price levels for any timeframe, making POC analysis accessible.' },

{ id:'trd-adv02', cat:'Advanced', sub:'Seasonality', diff:'medium', type:'concept',
  front:'What is the "Sell in May" effect and what does historical data show?',
  back:'"Sell in May and Go Away" refers to the historically weaker stock market performance from May through October vs. November through April.\n\nHistorical data:\n• November–April average return (1950–2023): ~7% (S&P 500)\n• May–October average return: ~1.5%\n\nNot a reliable trading signal because:\n• Works better in some decades than others\n• Significant years violate the pattern\n• Transaction costs eat into gains from implementing it\n• Misses strong summer rallies in some years',
  tip:'Seasonality is one of many tools — treat it as a slight probabilistic tailwind/headwind, not a definitive signal.' },

{ id:'trd-adv03', cat:'Advanced', sub:'Options Integration', diff:'hard', type:'application',
  front:'How can traders use options to define risk on a directional trade?',
  back:'Instead of buying stock with a stop loss (stop can be gapped through), use options:\n\nBull call spread:\n• Buy the $50 call → Right to buy at $50\n• Sell the $55 call → Limits profit but reduces cost\n• Maximum loss: Premium paid (DEFINED risk — cannot lose more)\n• Maximum gain: $5 − Premium\n\nAdvantages vs stock with stop:\n• No gap risk (stop can be bypassed by overnight gap)\n• Exact maximum loss known at entry\n• Can stay in trade through volatility without being stopped out prematurely',
  tip:'Options-defined risk is especially valuable around earnings announcements where gaps are common.' },

// ── CROSS-CUTTING ─────────────────────────────────────────────────────────────
{ id:'trd-x01', cat:'Concepts', sub:'Edge', diff:'medium', type:'definition',
  front:'What does it mean to have a "trading edge" and how do you know if you have one?',
  back:'Edge: A set of rules that, when applied consistently over many trades, produces a positive expected return.\n\nYou have an edge if, over a large sample (100+ trades):\n• (Win rate × Average win) − (Loss rate × Average loss) > 0\n• The strategy maintains this edge on out-of-sample data\n• Live trading results confirm the backtest (no major deterioration)\n\nEdge without discipline → No edge\nDiscipline without edge → Consistent losses\nEdge + Discipline → Profitable trading over time\n\nMost retail traders don\'t have a tested edge — they have a feeling.',
  tip:'The brutal test: After 100 real trades following your rules exactly, is your account up or down? That answers the question.' },

{ id:'trd-x02', cat:'Concepts', sub:'Markets', diff:'easy', type:'definition',
  front:'What is market liquidity and why does it matter to a trader?',
  back:'Liquidity = How easily you can buy or sell a security without moving its price.\n\nHigh liquidity (Apple, S&P 500 ETFs):\n• Tight bid-ask spreads (buy at $100.00, sell at $100.01)\n• Large volume — can buy/sell millions without impacting price\n• Easy to exit quickly\n\nLow liquidity (small-cap stocks, exotic forex pairs):\n• Wide bid-ask spreads (instant 1–3% loss when you buy)\n• Small volume — large orders move the price against you\n• Hard to exit when you need to\n\nFor most retail traders: Trade liquid instruments only.',
  tip:'The bid-ask spread is an invisible cost you pay on EVERY trade — in illiquid instruments it can exceed 2% immediately.' },

{ id:'trd-x03', cat:'Concepts', sub:'Correlations', diff:'medium', type:'concept',
  front:'What is the typical relationship between US stocks, gold, and the US dollar in different market regimes?',
  back:'Normal environment:\n• Stocks UP ↔ Dollar UP, Gold sideways\n• Risk-on sentiment supports both\n\nCrisis environment (flight to safety):\n• Stocks DOWN → Bonds UP, Dollar UP, Gold UP\n• Investors flee to safe assets\n\nInflation scare:\n• Bonds DOWN, Dollar DOWN → Gold UP, Commodities UP\n• Hard assets outperform financial assets\n\nRecession fear:\n• Stocks DOWN, Commodities DOWN → Bonds UP, Dollar UP',
  tip:'Cross-asset correlations break down in crises — don\'t rely on "safe haven" assets performing exactly as expected during acute stress.' },

{ id:'trd-x04', cat:'Concepts', sub:'Terminology', diff:'easy', type:'definition',
  front:'What is the difference between a market order, limit order, and stop order?',
  back:'Market order: Execute immediately at the best available price.\n• Guaranteed execution, NOT guaranteed price\n• Can get a worse price than expected (slippage) in volatile markets\n\nLimit order: Execute ONLY at your specified price or better.\n• Guaranteed price, NOT guaranteed execution\n• You might not get filled if price doesn\'t reach your limit\n\nStop order (Stop Loss): Becomes a market order when price hits your stop level.\n• Use to limit losses or protect profits\n• Can be "gapped through" in fast markets',
  tip:'Use limit orders for entries when you have time. Use market orders only when immediate execution is essential.' },

{ id:'trd-x05', cat:'Concepts', sub:'Risk Management', diff:'hard', type:'concept',
  front:'What is the maximum drawdown and why is it more important than average return?',
  back:'Maximum drawdown (MDD): The largest peak-to-trough decline in a portfolio\'s value, measured percentage-wise.\n\nExample: $100,000 → $60,000 = 40% drawdown\n\nWhy it matters more than average return:\n• A 50% drawdown requires a 100% gain just to break even\n• A strategy returning 20%/year with 60% drawdowns may force you to quit before recovery\n• Psychological tolerance for drawdowns is usually MUCH lower than people estimate\n\nTarget: Annual return / Max drawdown ratio > 1.5 is considered professional quality',
  tip:'Before live trading any strategy, ask: "Could I emotionally handle the worst historical drawdown this strategy has shown?"' },

]
