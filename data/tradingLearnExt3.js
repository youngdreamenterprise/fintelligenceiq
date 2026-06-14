export const TRADING_LEARN_EXT_3 = {
  'sys-u3': {
    id: 'sys-u3', title: 'Backtesting: How to Actually Validate a Trading Strategy',
    subtitle: 'The right way to test if a strategy works before risking real money - avoiding the mistakes that destroy confidence',
    readTime: '10 min', hero: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
    sections: [
      { heading: 'What Backtesting Is and Why Most Traders Do It Wrong', body: `Backtesting is testing a trading strategy on historical price data to estimate how it would have performed before risking real capital. Done correctly, it is the most powerful tool for evaluating strategies. Done incorrectly - which is how most beginners do it - it produces meaningless results that destroy accounts.

WHAT BACKTESTING CAN TELL YOU:
- Whether a strategy had positive expectancy in the past
- The realistic win rate and average win/loss ratio
- The maximum drawdown you would have experienced
- How the strategy performs in different market conditions (bull, bear, range)
- Whether the performance is consistent across multiple market regimes or only worked in one period

WHAT BACKTESTING CANNOT TELL YOU:
- That the strategy will work exactly the same in the future
- Your exact fill prices (live execution is always slightly different)
- How you would have actually behaved emotionally during the drawdown periods
- Whether the strategy still works after enough traders learn about it and it stops working

THE FUNDAMENTAL PROBLEM: Overfitting
Overfitting is the most common and most costly backtesting mistake. It happens when you adjust strategy rules until the historical results look excellent - but you are actually just fitting noise, not discovering genuine edge. An overfitted strategy collapses when applied to new data.

TEST: Vary each parameter of your strategy by 10-20%. If performance collapses dramatically with small changes, the strategy is overfitted to historical noise. Robust strategies show gradual performance change across a range of parameter values - not cliff-like drops at the exact optimized values.`, callout: { type: 'warning', text: `The confirmation bias trap: most beginners backtest AFTER they have already decided they like a strategy. They interpret ambiguous signals in whatever way makes the strategy look best. They pick the start and end dates that include the best performance period. They smooth over execution difficulties. Rigorous backtesting requires defining every rule BEFORE looking at any results, then testing honestly.` },
      svg: `<svg viewBox="0 0 720 300" xmlns="http://www.w3.org/2000/svg" style="background:#061018;border-radius:12px;display:block;width:100%;font-family:ui-monospace,monospace">
  <text x="360" y="22" fill="#E8F4FF" font-size="13" font-weight="bold" text-anchor="middle">Complete Trading System — Decision Framework</text>
  <!-- Flow boxes -->
  <!-- Step 1: Market regime -->
  <rect x="280" y="42" width="160" height="38" fill="#081525" rx="8" stroke="#F7931A" stroke-width="2"/>
  <text x="360" y="57" fill="#F7931A" font-size="10" font-weight="bold" text-anchor="middle">STEP 1</text>
  <text x="360" y="72" fill="#E8F4FF" font-size="10" text-anchor="middle">Check ADX: Trending or Ranging?</text>
  <!-- Arrow down -->
  <line x1="360" y1="80" x2="360" y2="100" stroke="#0D2035" stroke-width="2"/>
  <polygon points="360,102 356,98 364,98" fill="#0D2035"/>
  <!-- Branches -->
  <line x1="360" y1="100" x2="200" y2="100" stroke="#0D2035" stroke-width="2"/>
  <line x1="360" y1="100" x2="520" y2="100" stroke="#0D2035" stroke-width="2"/>
  <!-- Left: Trending -->
  <line x1="200" y1="100" x2="200" y2="118" stroke="#00D09C" stroke-width="2"/>
  <rect x="120" y="118" width="160" height="38" fill="#081525" rx="8" stroke="#00D09C" stroke-width="2"/>
  <text x="200" y="133" fill="#00D09C" font-size="10" font-weight="bold" text-anchor="middle">TRENDING (ADX 25+)</text>
  <text x="200" y="148" fill="#E8F4FF" font-size="9" text-anchor="middle">Use: MA cross, RSI pullback</text>
  <!-- Right: Ranging -->
  <line x1="520" y1="100" x2="520" y2="118" stroke="#FF6B35" stroke-width="2"/>
  <rect x="440" y="118" width="160" height="38" fill="#081525" rx="8" stroke="#FF6B35" stroke-width="2"/>
  <text x="520" y="133" fill="#FF6B35" font-size="10" font-weight="bold" text-anchor="middle">RANGING (ADX 20-)</text>
  <text x="520" y="148" fill="#E8F4FF" font-size="9" text-anchor="middle">Use: BB reversion, RSI 30/70</text>
  <!-- Step 2: Find setup -->
  <line x1="200" y1="156" x2="200" y2="172" stroke="#0D2035" stroke-width="2"/>
  <line x1="520" y1="156" x2="520" y2="172" stroke="#0D2035" stroke-width="2"/>
  <line x1="200" y1="172" x2="520" y2="172" stroke="#0D2035" stroke-width="2"/>
  <line x1="360" y1="172" x2="360" y2="186" stroke="#0D2035" stroke-width="2"/>
  <rect x="260" y="186" width="200" height="38" fill="#081525" rx="8" stroke="#3B82F6" stroke-width="2"/>
  <text x="360" y="202" fill="#3B82F6" font-size="10" font-weight="bold" text-anchor="middle">STEP 2</text>
  <text x="360" y="217" fill="#E8F4FF" font-size="10" text-anchor="middle">At key S/R level? (Yes = proceed)</text>
  <!-- Arrow -->
  <line x1="360" y1="224" x2="360" y2="240" stroke="#0D2035" stroke-width="2"/>
  <polygon points="360,242 356,238 364,238" fill="#0D2035"/>
  <rect x="230" y="242" width="260" height="42" fill="#081525" rx="8" stroke="#00D09C" stroke-width="2"/>
  <text x="360" y="257" fill="#F7931A" font-size="10" font-weight="bold" text-anchor="middle">STEP 3: EXECUTE</text>
  <text x="360" y="270" fill="#E8F4FF" font-size="9" text-anchor="middle">Entry signal fires → Calculate position size</text>
  <text x="360" y="282" fill="#E8F4FF" font-size="9" text-anchor="middle">→ Place entry + stop + target BEFORE entering</text>
</svg>`,
      svgCaption: 'Trading system decision framework: market regime determines strategy type, key level determines location, signal determines entry timing' },
      { heading: 'How to Backtest Correctly - The Step-by-Step Process', body: `BEFORE STARTING: Define every rule in writing
Before looking at any historical data, write down:
- Exact entry conditions (what must happen before you enter? Be specific - not "RSI is low" but "RSI 14 closes below 30")
- Exact stop placement rules (below the X-period low? Below the reversal candle? Specific dollar amount?)
- Exact exit rules (when do you take profits? When do you stop out?)
- Exact position sizing rules (% of account per trade?)
Rules must be specific enough that two different people would make the same trade decision.

STEP 1: CHOOSE YOUR TEST DATA
- Minimum: 3-5 years of data including at least one complete market cycle (bull and bear)
- Use DAILY bars for swing strategies. Use appropriate timeframe bars for your strategy timeframe.
- Test on multiple instruments if your strategy claims to work across markets

STEP 2: SPLIT YOUR DATA
- Divide your historical data: 70% for development (in-sample), 30% for testing (out-of-sample)
- NEVER optimize parameters on the out-of-sample 30%
- Final performance on the out-of-sample data is your realistic estimate of live performance

STEP 3: EXECUTE EVERY TRADE OBJECTIVELY
- Take every signal your rules generate - do not cherry-pick the good-looking ones
- Use realistic fill assumptions: for daily bars, assume fills at the next day open +/- 0.1%
- Apply realistic commissions and slippage (0.1-0.2% round trip for liquid stocks)
- Record every trade: entry date, entry price, exit date, exit price, profit/loss

STEP 4: CALCULATE THE KEY METRICS
- Win Rate: winning trades / total trades (60% is good for trend-following)
- Average Win / Average Loss: ratio should be at least 1.5:1 for low win rates
- Expectancy: (win rate x average win) - (loss rate x average loss) - must be positive
- Maximum Drawdown: worst peak-to-trough equity decline - can you survive this emotionally and financially?
- Sharpe Ratio: (average return - risk-free rate) / standard deviation - above 1.0 is good, above 2.0 is excellent`, callout: { type: 'key', text: `Walk-forward analysis is the gold standard of backtesting validation. Instead of testing on a fixed historical period, you roll your test window forward in time. Optimize parameters on the first 2 years. Test on year 3 (out-of-sample). Roll forward: optimize on years 2-3, test on year 4. Continue across all available data. The aggregated out-of-sample results represent a simulation of how the strategy would have actually performed in live trading.` } },
      { heading: 'Interpreting Results and Knowing When to Trade Live', body: `WHAT ACCEPTABLE BACKTEST RESULTS LOOK LIKE:

For a trend-following strategy:
- Win rate: 40-55% (you do not need high win rates with good risk management)
- Average win / average loss: at least 2:1 (winners must be larger than losers)
- Annual return: meaningfully above buy-and-hold of the same market
- Maximum drawdown: less than 25% (you must be able to survive this emotionally)
- Sharpe ratio: above 0.8

For a mean-reversion strategy:
- Win rate: 60-70% (reversion strategies have higher win rates but smaller wins)
- Average win / average loss: at least 1.2:1
- Maximum drawdown: less than 20% (shorter holding periods = faster drawdowns)

RED FLAGS THAT INDICATE OVERFITTING:
- Win rate above 80% on trend-following (too good to be true)
- Sharpe ratio above 3.0 (unrealistic for discretionary-style rules)
- Strategy only works on one specific instrument or one specific time period
- Performance collapses when parameters change by 10%
- Only 20-30 total trades in the backtest (statistically meaningless)

MINIMUM SAMPLE SIZES:
- 50 trades: initial confidence that results are not random noise
- 100 trades: meaningful confidence across varied market conditions
- 200+ trades: statistical validity across multiple market regimes

THE LIVE TRANSITION PLAN:
After a satisfactory backtest:
1. Paper trade the strategy for 1-3 months observing exactly how it performs in real conditions
2. Identify any execution challenges not apparent in backtesting
3. Start live trading at 25% of your intended position size
4. After 50 live trades, compare results to backtest expectations
5. If within 20% of backtested metrics, scale to full position size`, callout: { type: 'key', text: `Backtest results are always better than live results. The gap is typically 20-40% because of execution differences, look-ahead bias you did not notice, cherry-picked start dates, and psychological factors in live trading. When setting expectations for a live strategy, take your backtested metrics and apply a 20-30% haircut to estimate realistic live performance.` } }
    ],
    keyPoints: ['Define every rule in WRITING before looking at any historical data - ambiguous rules allow confirmation bias to distort results', 'Split data: 70% for development (in-sample), 30% for testing (out-of-sample). Final performance on out-of-sample data is your realistic estimate.', 'Minimum 100 trades for statistical validity - 20-30 trades tells you almost nothing about long-term performance', 'Overfitting test: change each parameter by 10-20%. Robust strategies show gradual performance change. Overfitted strategies collapse.', 'Walk-forward analysis (roll the test window forward in time) is the gold standard - it simulates actual live trading performance']
  }
}
