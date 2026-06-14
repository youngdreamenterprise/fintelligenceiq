// FintelligenceIQ Knowledge Base — client-side search, zero API calls
// Each entry: keywords (used for scoring), title, content, action (optional nav)

export const KB = [

// ─── TRADING: INDICATORS ──────────────────────────────────────────────────────
{ id:'rsi', keywords:['rsi','relative strength index','overbought','oversold','momentum','14 period','rsi divergence'],
  title:'RSI (Relative Strength Index)',
  content:'RSI measures price momentum on a 0–100 scale. Above 70 = overbought (potential reversal/sell signal). Below 30 = oversold (potential reversal/buy signal). The standard look-back is 14 periods. RSI divergence — where price makes a new high but RSI does not — is one of the most reliable reversal warning signals available.',
  action:{ type:'url', target:'/trading-academy', label:'Study RSI in Trading Academy' }},

{ id:'macd', keywords:['macd','moving average convergence','divergence','signal line','histogram','crossover'],
  title:'MACD (Moving Average Convergence Divergence)',
  content:'MACD shows the relationship between two exponential moving averages (12 and 26 periods). The MACD line crossing above the signal line (9-period EMA of MACD) is a bullish signal. The histogram shows the gap between the two lines — growing bars mean strengthening momentum, shrinking bars mean momentum is fading.',
  action:{ type:'url', target:'/trading-academy', label:'Learn MACD — Trading Academy' }},

{ id:'bollinger', keywords:['bollinger bands','bb','standard deviation','squeeze','bandwidth','upper band','lower band','2 standard'],
  title:'Bollinger Bands',
  content:'Bollinger Bands place two standard deviation bands around a 20-period moving average. Price touching the upper band in a strong trend is normal. A "Bollinger squeeze" (bands narrowing) signals low volatility before a potential breakout — the direction of the breakout determines the trade. Mean reversion traders buy the lower band and sell the upper band in ranging markets.',
  action:{ type:'url', target:'/trading-academy', label:'Learn Bollinger Bands' }},

{ id:'sma_ema', keywords:['moving average','sma','ema','exponential','simple','50 day','200 day','21 ema','golden cross','death cross'],
  title:'Moving Averages (SMA & EMA)',
  content:'Simple Moving Average (SMA) gives equal weight to all periods. Exponential Moving Average (EMA) weights recent prices more heavily — it reacts faster. The 50 and 200 day SMAs are the most-watched institutional levels. A "Golden Cross" (50 SMA crossing above 200 SMA) is bullish. A "Death Cross" (50 below 200) is bearish. The 21 EMA is a popular short-term trend line for pullback entries.',
  action:{ type:'url', target:'/trading-academy', label:'Moving Averages — Trading Academy' }},

{ id:'fibonacci', keywords:['fibonacci','fib','retracement','extension','38.2','61.8','golden ratio','23.6','161.8'],
  title:'Fibonacci Retracements & Extensions',
  content:'Fibonacci levels (23.6%, 38.2%, 50%, 61.8%) identify where a pullback might find support before the trend resumes. The 61.8% level is the "golden ratio" and is the most significant. Extensions (127.2%, 161.8%) project where price may go after breaking a prior high. Confluence — when a Fibonacci level aligns with support/resistance or a moving average — increases its reliability significantly.',
  action:{ type:'url', target:'/trading-academy', label:'Fibonacci — Trading Academy' }},

{ id:'vwap', keywords:['vwap','volume weighted average price','intraday','institutional','fair value'],
  title:'VWAP (Volume Weighted Average Price)',
  content:'VWAP is the average price weighted by volume — it represents the true average price paid throughout the day. Institutional traders use VWAP as a benchmark. Price above VWAP = bullish intraday bias. Price below VWAP = bearish. Pullbacks to VWAP in an uptrend are common long entries for day traders. VWAP resets each session.',
  action:{ type:'url', target:'/trading-academy', label:'VWAP — Trading Academy' }},

{ id:'volume', keywords:['volume','volume analysis','obv','on balance volume','accumulation','distribution','buying volume','selling volume'],
  title:'Volume Analysis',
  content:'Volume confirms or questions price moves. Rising price on rising volume = strong trend. Rising price on declining volume = weakening trend (potential reversal). On-Balance Volume (OBV) is a cumulative indicator — if OBV makes new highs before price does, it signals institutional accumulation. High volume on a reversal candle (Selling Climax) often marks a major bottom.',
  action:{ type:'url', target:'/trading-academy', label:'Volume Analysis — Trading Academy' }},

{ id:'atr', keywords:['atr','average true range','volatility','stop loss','position sizing','trailing stop'],
  title:'ATR (Average True Range)',
  content:'ATR measures average daily price range — it quantifies volatility. A stock with ATR of $2 moves about $2 on a typical day. ATR is used for stop-loss placement: a 2× ATR stop gives the trade enough room to breathe while defining your maximum risk. When ATR is very low (volatility squeeze), a large move is often approaching.',
  action:{ type:'url', target:'/trading-academy', label:'Risk Management — Trading Academy' }},

{ id:'stochastic', keywords:['stochastic','%k','%d','80 level','20 level','overbought oversold'],
  title:'Stochastic Oscillator',
  content:'The Stochastic Oscillator compares closing price to the high-low range over a set period (usually 14). Above 80 = overbought. Below 20 = oversold. The most reliable signal is a %K/%D crossover while in the overbought or oversold zone — it signals momentum is shifting. Best used in ranging markets, not strong trends.',
  action:{ type:'url', target:'/trading-academy', label:'Trading Academy — Indicators' }},

{ id:'ichimoku', keywords:['ichimoku','cloud','tenkan','kijun','chikou','senkou span','kumo'],
  title:'Ichimoku Cloud',
  content:'Ichimoku is a complete trend system. Price above the cloud = uptrend. Price below = downtrend. Inside the cloud = consolidation. The Tenkan/Kijun cross (short-term MA crossing medium-term MA) is the entry signal. The Chikou span (current price plotted 26 periods back) confirms trend direction. A thick green cloud ahead signals strong support.',
  action:{ type:'url', target:'/trading-academy', label:'Ichimoku — Trading Academy' }},

// ─── TRADING: PATTERNS ────────────────────────────────────────────────────────
{ id:'candlestick', keywords:['candlestick','doji','hammer','engulfing','shooting star','morning star','evening star','pin bar','wick','candle'],
  title:'Candlestick Patterns',
  content:'Candlesticks show open, high, low, and close in one visual. Key patterns: Doji (open=close, indecision), Hammer (long lower wick at bottom, bullish reversal), Shooting Star (long upper wick at top, bearish reversal), Bullish Engulfing (green candle completely covers prior red candle, strong buy signal), Bearish Engulfing (opposite). Context matters — a hammer at support is far more significant than a hammer in the middle of a range.',
  action:{ type:'url', target:'/trading-academy', label:'Candlestick Patterns — Trading Academy' }},

{ id:'head_shoulders', keywords:['head and shoulders','h&s','neckline','inverse head','head shoulders pattern','reversal pattern'],
  title:'Head & Shoulders Pattern',
  content:'Head & Shoulders is one of the most reliable reversal patterns. Three peaks — left shoulder, higher head, right shoulder — with a "neckline" connecting the lows. A break below the neckline confirms the pattern. Target: measure the distance from the head to the neckline and project it downward from the breakout point. Inverse Head & Shoulders is the bullish mirror version.',
  action:{ type:'url', target:'/trading-academy', label:'Chart Patterns — Trading Academy' }},

{ id:'double_top_bottom', keywords:['double top','double bottom','resistance test','support test','w pattern','m pattern'],
  title:'Double Top & Double Bottom',
  content:'Double Top: price hits resistance twice and fails both times — signals a trend reversal to the downside. The pattern confirms when price breaks below the "valley" between the two tops. Double Bottom (W pattern): price hits support twice — signals reversal to the upside. The target equals the height of the pattern projected from the breakout level.',
  action:{ type:'url', target:'/trading-academy', label:'Chart Patterns — Trading Academy' }},

{ id:'flags_pennants', keywords:['flag','pennant','bull flag','bear flag','continuation pattern','flagpole','consolidation'],
  title:'Flags & Pennants',
  content:'Flags and pennants are short-term continuation patterns. After a sharp move (the "flagpole"), price consolidates in a tight range (flag) or converging wedge (pennant) before continuing in the original direction. Entry: breakout from the flag/pennant. Target: flagpole length added to the breakout point. Bull flags are one of the most reliable and tradeable patterns in technical analysis.',
  action:{ type:'url', target:'/trading-academy', label:'Chart Patterns — Trading Academy' }},

{ id:'triangle', keywords:['triangle','symmetrical','ascending triangle','descending triangle','wedge','converging'],
  title:'Triangle Patterns',
  content:'Ascending Triangle: flat top (resistance) with rising lows — bullish. Descending Triangle: flat bottom (support) with declining highs — bearish. Symmetrical Triangle: converging trendlines — direction determined by the breakout. The longer the triangle develops, the more powerful the eventual breakout. Volume typically declines during formation and spikes on the breakout.',
  action:{ type:'url', target:'/trading-academy', label:'Chart Patterns — Trading Academy' }},

// ─── TRADING: STRATEGIES ──────────────────────────────────────────────────────
{ id:'wyckoff', keywords:['wyckoff','accumulation','distribution','composite operator','spring','selling climax','markup','markdown'],
  title:'Wyckoff Method',
  content:'Wyckoff teaches how institutional investors ("Composite Operator") accumulate and distribute positions. Key phases: Accumulation (smart money buys at low prices while retail sells), Markup (trend up), Distribution (smart money sells at highs while retail buys), Markdown (trend down). The "Spring" — a brief dip below support that immediately reverses — is the highest-probability Wyckoff entry signal.',
  action:{ type:'url', target:'/trading-academy', label:'Wyckoff Method — Trading Academy' }},

{ id:'elliott_wave', keywords:['elliott wave','5 wave','impulse wave','corrective wave','wave 2','wave 3','wave count'],
  title:'Elliott Wave Theory',
  content:'Elliott Wave identifies recurring 5-wave impulse patterns (3 up, 2 corrective) followed by 3-wave corrections. Wave 3 is always the strongest and most obvious move. Wave 2 entry — buying the pullback after Wave 1 completes — offers the best risk-reward since your stop is below Wave 1\'s start. Three unbreakable rules: Wave 2 never retraces more than 100% of Wave 1, Wave 3 is never the shortest, Wave 4 never enters Wave 1\'s territory.',
  action:{ type:'url', target:'/trading-academy', label:'Elliott Wave — Trading Academy' }},

{ id:'mean_reversion', keywords:['mean reversion','revert','average','overextended','bounce','rubber band','reversion to mean'],
  title:'Mean Reversion Trading',
  content:'Mean reversion is based on the idea that prices tend to return to their average after moving too far in one direction. When a stock is significantly extended above or below its moving average or Bollinger Band, it tends to "snap back." Entries are taken when the extension is extreme, with a target at the moving average. RSI below 30 or above 70 combined with price at a Bollinger Band extreme is a classic mean reversion signal.',
  action:{ type:'url', target:'/trading-academy', label:'Mean Reversion — Trading Academy' }},

{ id:'momentum', keywords:['momentum','trend following','breakout','52 week high','new high','momentum strategy','trend'],
  title:'Momentum Trading',
  content:'Momentum trading follows the principle that stocks moving strongly in one direction tend to continue. Strategies include: breakout above 52-week highs (institutional funds chasing performance), EMA pullbacks (buying the dip in an uptrend at the 21 EMA), and MACD crossovers confirming trend continuation. Momentum strategies work best in trending markets — in choppy, sideways markets they produce whipsaws.',
  action:{ type:'url', target:'/trading-academy', label:'Momentum Strategies — Trading Academy' }},

{ id:'position_sizing', keywords:['position sizing','risk per trade','kelly','1 percent rule','account risk','how much to buy'],
  title:'Position Sizing',
  content:'Position sizing determines how much to risk on each trade. The standard rule: risk no more than 1-2% of your account on any single trade. Formula: Shares = (Account × Risk%) ÷ (Entry Price − Stop Price). Example: $50,000 account, 1% risk = $500 max loss. If stop is $5 away from entry, buy 100 shares. This ensures no single trade can seriously damage your account.',
  action:{ type:'url', target:'/trading-academy', label:'Position Sizing — Trading Academy' }},

{ id:'stop_loss', keywords:['stop loss','stop','cut losses','exit','where to place stop','risk management stop'],
  title:'Stop Loss Placement',
  content:'A stop loss is a pre-defined exit point if the trade goes against you. Common methods: ATR-based (stop = entry minus 2× ATR), support-based (stop below nearest support level), pattern-based (stop below the pattern that triggered entry). Key rules: place the stop BEFORE entering the trade, use hard stops (actual orders in the system, not mental), and never move a stop further away — only trail it closer as profit develops.',
  action:{ type:'url', target:'/trading-academy', label:'Stop Loss Strategies — Trading Academy' }},

{ id:'risk_reward', keywords:['risk reward','r:r','reward risk','2:1','3:1','expectancy','profit target'],
  title:'Risk-Reward Ratio',
  content:'Risk-reward ratio compares potential profit to potential loss. A 2:1 ratio means you expect to make $2 for every $1 risked. Expectancy formula: (Win Rate × Average Win) − (Loss Rate × Average Loss). A strategy winning 50% with 2:1 R:R has positive expectancy: (0.5×2) − (0.5×1) = +0.5 per trade. Never enter a trade with less than 1.5:1 risk-reward — ideally aim for 2:1 or better.',
  action:{ type:'url', target:'/trading-academy', label:'Risk & Reward — Trading Academy' }},

{ id:'support_resistance', keywords:['support','resistance','level','key level','breakout','breakdown','flip'],
  title:'Support & Resistance',
  content:'Support is a price level where buying historically overcomes selling (price bounces up). Resistance is where selling overcomes buying (price reverses down). When support breaks, it often becomes resistance — this "flip" is one of the most reliable re-entry signals. The more times a level has been tested and held, the more significant it is. Round numbers ($100, $200) tend to act as strong psychological levels.',
  action:{ type:'url', target:'/trading-academy', label:'Trading Academy — Technical Analysis' }},

{ id:'trend_line', keywords:['trend line','trendline','uptrend','downtrend','draw','connect lows','connect highs','trend channel'],
  title:'Trend Lines',
  content:'An uptrend line connects at least two higher lows — the line acts as dynamic support. A downtrend line connects at least two lower highs — it acts as dynamic resistance. The more points that touch the line, the stronger it is. A break of a well-established trend line is a significant signal. Trend channels add a parallel line above (uptrend) for resistance or below (downtrend) for support.',
  action:{ type:'url', target:'/trading-academy', label:'Technical Analysis — Trading Academy' }},

// ─── PERSONAL FINANCE ─────────────────────────────────────────────────────────
{ id:'compound_interest', keywords:['compound interest','compounding','grow money','interest on interest','rule of 72','exponential growth'],
  title:'Compound Interest',
  content:'Compound interest is interest earned on both your principal and accumulated interest — it grows exponentially. The Rule of 72: divide 72 by your annual return to estimate how many years to double your money (at 8%, money doubles in ~9 years). Starting earlier matters enormously: $10,000 at 7% annual return grows to $76,000 in 30 years but only $19,000 in 10 years. Use our Compound Interest Calculator to model your savings.',
  action:{ type:'page', target:'calculators', label:'Open Compound Interest Calculator' }},

{ id:'emergency_fund', keywords:['emergency fund','savings','3 months','6 months','rainy day','cash reserve','liquid savings'],
  title:'Emergency Fund',
  content:'An emergency fund is 3-6 months of essential living expenses kept in a liquid, accessible account (high-yield savings). It protects you from having to sell investments or take on debt during job loss or unexpected expenses. Priority order: build a $1,000 starter emergency fund first, then pay down high-interest debt, then build the full 3-6 month fund. Keep it separate from your checking account to avoid spending it.',
  action:{ type:'url', target:'/academy', label:'Learn More — Financial Academy' }},

{ id:'budgeting', keywords:['budget','budgeting','50 30 20','track spending','expenses','income','spending plan'],
  title:'Budgeting Basics',
  content:'The 50/30/20 rule: 50% of after-tax income to needs (housing, food, utilities), 30% to wants, 20% to savings and debt. Zero-based budgeting assigns every dollar a purpose — income minus expenses = zero. Track spending for one month before budgeting to understand your real spending patterns. Small recurring expenses (subscriptions, coffee) are the most common budget leaks.',
  action:{ type:'url', target:'/academy', label:'Financial Academy — Budgeting' }},

{ id:'credit_score', keywords:['credit score','fico','credit report','credit utilization','payment history','700','750','800'],
  title:'Credit Score',
  content:'FICO scores range 300-850. Payment history (35%) is the biggest factor — one late payment can drop your score 50-100 points. Credit utilization (30%) is the second biggest — keep balances below 30% of your limit, ideally below 10%. Length of credit history (15%), credit mix (10%), and new inquiries (10%) make up the rest. Check your free credit report at AnnualCreditReport.com — errors are common and can be disputed.',
  action:{ type:'url', target:'/academy', label:'Credit & Finance — Financial Academy' }},

{ id:'debt', keywords:['debt','pay off debt','avalanche','snowball','interest rate','credit card debt','loan','debt payoff'],
  title:'Debt Payoff Strategies',
  content:'Two main methods: Avalanche (pay highest interest rate first — saves the most money mathematically) and Snowball (pay smallest balance first — builds momentum and motivation). The Avalanche is mathematically better; the Snowball is psychologically easier. For high-interest credit card debt (above 15%), paying it off is equivalent to a guaranteed 15%+ return — better than most investments. Use our Debt Payoff Calculator to build a plan.',
  action:{ type:'page', target:'calculators', label:'Open Debt Payoff Calculator' }},

{ id:'mortgage', keywords:['mortgage','home loan','payment','30 year','15 year','interest rate','down payment','principal','amortization'],
  title:'Mortgage Calculator',
  content:'Your monthly mortgage payment has four components: Principal (loan repayment), Interest, Taxes (property), and Insurance (PITI). A $400,000 mortgage at 7% for 30 years = ~$2,661/month (principal + interest). Making one extra payment per year can shorten a 30-year mortgage by 4-6 years. A 15-year mortgage has a higher payment but you pay far less total interest. Use our Mortgage Calculator to model your specific numbers.',
  action:{ type:'page', target:'calculators', label:'Open Mortgage Calculator' }},

{ id:'retirement', keywords:['retirement','401k','ira','roth','roth ira','traditional ira','retirement savings','retire early'],
  title:'Retirement Planning',
  content:'Max out tax-advantaged accounts first: 401(k) up to $23,000/year (2024), IRA up to $7,000/year. Roth IRA uses after-tax dollars — withdrawals in retirement are tax-free, ideal if you expect higher taxes later. Traditional IRA/401(k) uses pre-tax dollars — reduces taxes now, but withdrawals are taxed in retirement. The 4% Rule: in retirement, withdraw 4% of your portfolio annually — this has historically lasted 30+ years.',
  action:{ type:'page', target:'calculators', label:'Open Retirement Calculator' }},

{ id:'roth_ira', keywords:['roth ira','roth','after tax','tax free','retirement account','contribution limit'],
  title:'Roth IRA',
  content:'A Roth IRA lets you invest after-tax dollars and withdraw everything — including all growth — tax-free in retirement. 2024 contribution limit: $7,000 ($8,000 if 50+). Income limits apply: phase-out starts at $146,000 for single filers. Key advantage: no required minimum distributions (RMDs) in retirement. Best for people who expect their tax rate to be higher in retirement than today — typically younger, lower-income earners.',
  action:{ type:'url', target:'/academy', label:'Retirement Planning — Financial Academy' }},

{ id:'401k', keywords:['401k','employer match','workplace retirement','contribution','pre tax','traditional 401k'],
  title:'401(k) Guide',
  content:'A 401(k) is an employer-sponsored retirement account with pre-tax contributions (reduces your taxable income now). Always contribute at least enough to get the full employer match — it\'s an instant 50-100% return. 2024 limit: $23,000. Investment options are limited to what your employer offers. When you change jobs, roll the 401(k) into an IRA to gain more investment flexibility.',
  action:{ type:'url', target:'/academy', label:'Retirement Planning — Financial Academy' }},

{ id:'inflation', keywords:['inflation','cpi','consumer price index','purchasing power','real return','cost of living'],
  title:'Inflation',
  content:'Inflation is the rate at which prices rise over time — eroding purchasing power. The Federal Reserve targets 2% annual inflation. CPI (Consumer Price Index) is the main measure — it tracks a basket of common goods and services. Real return = nominal return minus inflation. A savings account earning 2% when inflation is 4% means your purchasing power is declining by 2% per year. Check current CPI data in our Market & Economic section.',
  action:{ type:'page', target:'markets', label:'View Economic Indicators' }},

{ id:'tax_loss_harvesting', keywords:['tax loss harvesting','tax loss','capital gains','offset','losses','tax strategy'],
  title:'Tax-Loss Harvesting',
  content:'Tax-loss harvesting means selling investments at a loss to offset capital gains taxes on your winners. You can offset unlimited capital gains with losses, plus up to $3,000 of ordinary income annually. Unused losses carry forward indefinitely. The "wash sale" rule prevents you from buying the same (or substantially identical) security within 30 days before or after the sale. Most effective in taxable brokerage accounts.',
  action:{ type:'page', target:'insights', label:'Read Tax Articles — FIQ Insights' }},

// ─── CRYPTOCURRENCY ───────────────────────────────────────────────────────────
{ id:'bitcoin', keywords:['bitcoin','btc','satoshi','digital gold','21 million','halving','proof of work','blockchain'],
  title:'Bitcoin',
  content:'Bitcoin is the original cryptocurrency, created by Satoshi Nakamoto in 2009. It has a fixed supply of 21 million coins — making it deflationary by design. Bitcoin "halvings" (every ~4 years) cut the rate new BTC is issued in half, historically preceding bull markets. Bitcoin uses "Proof of Work" — miners compete to validate transactions using computing power. It\'s often called "digital gold" due to its scarcity.',
  action:{ type:'url', target:'/crypto-academy', label:'Learn Bitcoin — Crypto Academy' }},

{ id:'ethereum', keywords:['ethereum','eth','smart contract','solidity','gas fees','proof of stake','evm','ether'],
  title:'Ethereum',
  content:'Ethereum is a programmable blockchain that enables smart contracts — self-executing code that runs without intermediaries. Most DeFi apps and NFTs are built on Ethereum. ETH is the native currency, used to pay "gas fees" for transactions. Ethereum switched from Proof of Work to Proof of Stake ("The Merge" in 2022), reducing energy use by 99.9%.',
  action:{ type:'url', target:'/crypto-academy', label:'Learn Ethereum — Crypto Academy' }},

{ id:'defi', keywords:['defi','decentralized finance','yield farming','liquidity pool','amm','uniswap','lending protocol','aave','compound'],
  title:'DeFi (Decentralized Finance)',
  content:'DeFi recreates financial services (lending, borrowing, trading) using smart contracts — no banks required. Yield farming earns returns by providing liquidity to DEXes (decentralized exchanges). Liquidity pools allow trading without a traditional order book — you trade against a pool of funds. High yields often come with high risks: smart contract bugs, impermanent loss, and rug pulls.',
  action:{ type:'url', target:'/crypto-academy', label:'DeFi Guide — Crypto Academy' }},

{ id:'nft', keywords:['nft','non fungible token','digital art','opensea','mint','collectible','token'],
  title:'NFTs (Non-Fungible Tokens)',
  content:'NFTs are unique digital assets on a blockchain — unlike Bitcoin (fungible, every BTC is identical), each NFT is one-of-a-kind. They\'re used for digital art, gaming items, music, and proof of ownership. The creator receives royalties on secondary sales (baked into the smart contract). Be cautious: NFT value is speculative and heavily influenced by hype. Most NFTs are not investment-grade assets.',
  action:{ type:'url', target:'/crypto-academy', label:'NFT Guide — Crypto Academy' }},

{ id:'crypto_wallet', keywords:['wallet','private key','seed phrase','hardware wallet','cold storage','metamask','hot wallet','self custody'],
  title:'Crypto Wallets',
  content:'A crypto wallet stores your private keys — the proof of ownership of your crypto. Hot wallets (MetaMask, mobile apps) are convenient but connected to the internet and vulnerable to hacks. Cold wallets (Ledger, Trezor) store keys offline — much more secure for large holdings. Your seed phrase (12-24 words) is the master key — write it down on paper and store it securely. Never store it digitally. "Not your keys, not your coins."',
  action:{ type:'url', target:'/crypto-academy', label:'Crypto Security — Crypto Academy' }},

{ id:'crypto_trading', keywords:['crypto trading','altcoin','bull run','bear market','crypto volatility','buy the dip','hodl'],
  title:'Crypto Trading Basics',
  content:'Crypto markets trade 24/7 — they never close. Volatility is much higher than stocks: 20-30% moves in a week are common. Bitcoin tends to lead the market — altcoins often amplify BTC\'s moves. "HODL" (Hold On for Dear Life) is the strategy of buying and holding through volatility. Dollar-cost averaging (buying fixed amounts regularly) removes the pressure of timing the market. Never invest more than you can afford to lose entirely.',
  action:{ type:'url', target:'/crypto-academy', label:'Crypto Trading — Crypto Academy' }},

// ─── STOCK MARKET ────────────────────────────────────────────────────────────
{ id:'pe_ratio', keywords:['pe ratio','price to earnings','p/e','earnings','valuation','overvalued','undervalued','eps'],
  title:'P/E Ratio (Price-to-Earnings)',
  content:'The P/E ratio divides a stock\'s price by its annual earnings per share (EPS). A P/E of 20 means you\'re paying $20 for each $1 of earnings. Lower P/E = cheaper relative to earnings. Compare P/E to: the company\'s historical average, industry peers, and the S&P 500 average (~21). High-growth companies often have high P/Es — investors pay more for expected future earnings. A very low P/E may mean the company is struggling or the stock is a value opportunity.',
  action:{ type:'page', target:'analyzer', label:'Analyze a Stock' }},

{ id:'earnings', keywords:['earnings','eps','earnings per share','quarterly earnings','beat expectations','guidance','revenue'],
  title:'Earnings & EPS',
  content:'EPS (Earnings Per Share) = Net Income ÷ Shares Outstanding. Companies report earnings quarterly. "Beating earnings" means actual EPS exceeded analyst estimates — usually positive for the stock. "Guidance" is the company\'s own forecast for future earnings — often more important than the current quarter. Earnings season (Jan, Apr, Jul, Oct) causes high volatility. Use our Stock Analyzer to check a company\'s EPS and earnings history.',
  action:{ type:'page', target:'analyzer', label:'Open Stock Analyzer' }},

{ id:'analyst_ratings', keywords:['analyst rating','buy rating','sell rating','hold','price target','upgrade','downgrade','consensus'],
  title:'Analyst Ratings',
  content:'Wall Street analysts rate stocks: Strong Buy, Buy, Hold, Sell, Strong Sell. The "consensus" rating is the average of all analysts covering the stock. Price targets represent where analysts expect the stock to be in 12 months. Upgrades (moving from Hold to Buy) and Downgrades (Buy to Hold) often move stocks significantly on the day of the change. View analyst consensus in our Stock Analyzer.',
  action:{ type:'page', target:'analyzer', label:'View Analyst Ratings' }},

{ id:'market_cap', keywords:['market cap','market capitalization','large cap','small cap','mid cap','mega cap'],
  title:'Market Capitalization',
  content:'Market cap = Share Price × Total Shares Outstanding. Categories: Mega-cap (>$200B — Apple, Microsoft), Large-cap ($10B-$200B — most S&P 500 companies), Mid-cap ($2B-$10B), Small-cap ($300M-$2B). Large-caps are generally more stable; small-caps have more growth potential but higher risk. The S&P 500 tracks the 500 largest US companies by market cap.',
  action:{ type:'page', target:'analyzer', label:'Analyze Stocks' }},

{ id:'dividends', keywords:['dividend','yield','dividend yield','payout ratio','dividend growth','income investing','quarterly dividend'],
  title:'Dividends',
  content:'A dividend is a cash payment companies make to shareholders — typically quarterly. Dividend Yield = Annual Dividend ÷ Stock Price × 100. A 3% yield means you earn $3/year for every $100 invested. Payout Ratio = Dividends Paid ÷ Net Income — above 80% may be unsustainable. "Dividend aristocrats" are S&P 500 companies that have increased their dividend for 25+ consecutive years.',
  action:{ type:'page', target:'analyzer', label:'Analyze Dividend Stocks' }},

// ─── ECONOMIC INDICATORS ──────────────────────────────────────────────────────
{ id:'gdp', keywords:['gdp','gross domestic product','economic growth','recession','economy','output'],
  title:'GDP (Gross Domestic Product)',
  content:'GDP measures the total value of goods and services produced in a country. Two consecutive quarters of negative GDP growth = a recession. US GDP grows roughly 2-3% annually in normal conditions. GDP is released quarterly. Strong GDP growth is generally positive for stocks but can also signal inflation pressure. View current US GDP data in our Market & Economic section.',
  action:{ type:'page', target:'markets', label:'View GDP Data — Markets Section' }},

{ id:'fed_interest_rates', keywords:['federal reserve','fed','interest rate','fed funds rate','rate hike','rate cut','fomc','monetary policy'],
  title:'Federal Reserve & Interest Rates',
  content:'The Federal Reserve sets the Federal Funds Rate — the rate banks charge each other for overnight loans. Higher rates = more expensive borrowing → slows economy and inflation. Lower rates = cheaper borrowing → stimulates growth. Higher rates hurt growth stocks (their future earnings are worth less when discounted at higher rates). They benefit bank stocks and bonds. View current Fed rate in our Market & Economic section.',
  action:{ type:'page', target:'markets', label:'View Interest Rate Data' }},

{ id:'cpi', keywords:['cpi','consumer price index','inflation','price increase','cost of living','core cpi'],
  title:'CPI (Consumer Price Index)',
  content:'CPI measures the average change in prices of a basket of goods and services. It\'s the main measure of inflation. "Core CPI" excludes volatile food and energy prices — it\'s the Fed\'s preferred measure. When CPI rises above the Fed\'s 2% target, interest rate hikes typically follow. High inflation erodes purchasing power — your money buys less over time.',
  action:{ type:'page', target:'markets', label:'View CPI Data — Markets' }},

{ id:'unemployment', keywords:['unemployment','jobs report','nonfarm payrolls','labor market','jobless claims','employment'],
  title:'Unemployment & Jobs Data',
  content:'The monthly Jobs Report (Non-Farm Payrolls) is one of the most market-moving economic releases. Lower unemployment = strong economy (good for stocks, bad for bonds). The Fed watches unemployment alongside inflation for its dual mandate. Unemployment below 4% is generally considered "full employment." View current unemployment data in our Market & Economic section.',
  action:{ type:'page', target:'markets', label:'View Unemployment Data' }},

// ─── SITE NAVIGATION ─────────────────────────────────────────────────────────
{ id:'nav_stock_analyzer', keywords:['analyze stock','stock analyzer','look up stock','search ticker','check stock','find stock','stock data'],
  title:'Stock Analyzer',
  content:'The Stock Analyzer lets you look up any publicly traded stock by ticker symbol (e.g., AAPL, TSLA, MSFT). It shows fundamental data (P/E ratio, EPS, revenue, profit margins), analyst ratings and consensus, and price targets. You\'ll need a free Finnhub API key configured for real-time data.',
  action:{ type:'page', target:'analyzer', label:'Open Stock Analyzer' }},

{ id:'nav_calculators', keywords:['calculator','calculate','compute','how much','estimate','plan'],
  title:'Financial Calculators',
  content:'FintelligenceIQ has four financial calculators: Compound Interest Calculator (grow your savings), Mortgage Calculator (estimate monthly payments), Retirement Planner (project your retirement savings), and Debt Payoff Calculator (plan your debt elimination strategy). All calculators are free and available on the Calculators page.',
  action:{ type:'page', target:'calculators', label:'Open Calculators' }},

{ id:'nav_markets', keywords:['market data','economic data','live prices','crypto prices','indices','s&p 500','nasdaq','dow jones'],
  title:'Market & Economic Data',
  content:'The Market & Economic page shows live cryptocurrency prices, major stock market indices (S&P 500, NASDAQ, Dow Jones), and key economic indicators including GDP, CPI, unemployment rate, and current interest rates. Data is pulled from Finnhub and FRED (Federal Reserve Economic Data).',
  action:{ type:'page', target:'markets', label:'View Market Data' }},

{ id:'nav_insights', keywords:['articles','blog','read','insights','fiq insights','educational article','learn','news','banking insurance','banking and insurance'],
  title:'FIQ Insights Articles',
  content:'FIQ Insights contains in-depth educational articles on financial topics. Categories: Taxes (tax strategies, tax-loss harvesting), Investing & Retirement (4% rule, 401k, IRA, index funds), Credit & Lending (credit scores, mortgages), Banking & Insurance (emergency funds, savings rates), and Crypto. More articles are added regularly.',
  action:{ type:'page', target:'insights', label:'Read FIQ Insights' }},

{ id:'nav_resources', keywords:['resources','tools','external','tradingview','tipranks','bloomberg','barrons','wsj','cnbc','coinbase'],
  title:'Investment Resources',
  content:'The Investment Resources page contains curated links to professional-grade financial tools: TipRanks (analyst ratings), TradingView (charting), Coinbase (crypto), Bloomberg (financial news), Barron\'s, Wall Street Journal, and CNBC. All are external platforms — FintelligenceIQ provides the curated links.',
  action:{ type:'page', target:'resources', label:'View Investment Resources' }},

{ id:'nav_trading_academy', keywords:['trading academy','learn trading','trading lessons','trading course'],
  title:'Trading Academy',
  content:'The Trading Academy has 115 lessons across 5 subjects: Technical Analysis (candlesticks, chart patterns, indicators), Momentum Trading (breakouts, EMA strategies), Mean Reversion (Bollinger Bands, RSI extremes), Volume & Market Structure (Wyckoff, Elliott Wave, Market Profile), and Trading Systems & Risk Management (position sizing, backtesting, psychology). Free to enrolled members.',
  action:{ type:'url', target:'/trading-academy', label:'Open Trading Academy' }},

{ id:'nav_crypto_academy', keywords:['crypto academy','learn crypto','cryptocurrency course','blockchain course'],
  title:'Crypto Academy',
  content:'The Crypto Academy covers everything from blockchain fundamentals to advanced DeFi strategies. Topics include Bitcoin, Ethereum, wallets and security, DeFi (lending, yield farming, liquidity pools), NFTs, crypto trading strategies, and regulatory environment. Structured as progressive lessons — start from the beginning or jump to your level.',
  action:{ type:'url', target:'/crypto-academy', label:'Open Crypto Academy' }},

{ id:'nav_financial_academy', keywords:['financial academy','learn finance','personal finance course','financial literacy','insurance','life insurance','health insurance','auto insurance','renters insurance','homeowners insurance'],
  title:'Financial Academy',
  content:'The Financial Academy teaches foundational personal finance: budgeting, debt management, building credit, investing basics, tax fundamentals, insurance, and retirement planning. Designed for people at any financial knowledge level — from complete beginners to those looking to fill gaps in their knowledge.',
  action:{ type:'url', target:'/academy', label:'Open Financial Academy' }},

// ─── GENERAL FINANCIAL TERMS ──────────────────────────────────────────────────
{ id:'dollar_cost_averaging', keywords:['dollar cost averaging','dca','invest regularly','automatic investing','consistent investing'],
  title:'Dollar-Cost Averaging (DCA)',
  content:'Dollar-cost averaging means investing a fixed dollar amount at regular intervals (weekly, monthly) regardless of price. When prices are low you automatically buy more shares; when high, fewer. Over time this averages out your cost basis and removes the stress of trying to time the market. Studies show DCA outperforms lump-sum investing for most retail investors — mainly because people stay consistent instead of panic-selling.',
  action:{ type:'url', target:'/academy', label:'Investment Strategies — Financial Academy' }},

{ id:'index_fund', keywords:['index fund','etf','s&p 500 index','vanguard','fidelity','passive investing','low cost','expense ratio'],
  title:'Index Funds & ETFs',
  content:'Index funds track a market index (like the S&P 500) by holding all or most of the stocks in it. ETFs (Exchange-Traded Funds) are similar but trade like stocks throughout the day. They offer instant diversification at very low cost (expense ratios as low as 0.03%). Warren Buffett famously recommended that most investors put their money in a simple S&P 500 index fund. Over 20-year periods, most actively managed funds underperform simple index funds.',
  action:{ type:'url', target:'/academy', label:'Investing Basics — Financial Academy' }},

{ id:'diversification', keywords:['diversification','diversify','eggs in one basket','spread risk','portfolio allocation','asset allocation'],
  title:'Diversification',
  content:'Diversification means spreading investments across different assets to reduce risk. Holding 30 stocks in different sectors is far less risky than holding 1 stock. Asset allocation diversification (stocks + bonds + cash + real estate) reduces overall portfolio volatility. Don\'t just diversify across sectors — assets that are uncorrelated (move independently of each other) provide the best protection.',
  action:{ type:'url', target:'/academy', label:'Investing — Financial Academy' }},

{ id:'bear_bull_market', keywords:['bull market','bear market','correction','crash','rally','market cycle','20 percent'],
  title:'Bull & Bear Markets',
  content:'A bull market is a sustained rise of 20%+ from a recent low. A bear market is a decline of 20%+ from a recent high. A correction is a 10-20% pullback — more common and shorter than bear markets. Bull markets average 4 years; bear markets average 1 year. Historically the stock market has always recovered from bear markets and gone on to make new highs. Staying invested through bear markets is how long-term wealth is built.',
  action:{ type:'url', target:'/academy', label:'Financial Academy' }},

{ id:'short_selling', keywords:['short selling','short','shorting','borrow','sell high buy low','bearish trade','short squeeze'],
  title:'Short Selling',
  content:'Short selling means borrowing shares you don\'t own, selling them, and hoping to buy them back cheaper later (returning the shares and pocketing the difference). It\'s how traders profit from falling prices. Risk: theoretically unlimited — a stock can rise infinitely. A "short squeeze" happens when a heavily shorted stock rises sharply, forcing shorts to buy back at higher prices (accelerating the rise). Short selling requires margin account approval.',
  action:{ type:'url', target:'/trading-academy', label:'Trading Strategies — Trading Academy' }},

{ id:'options', keywords:['options','calls','puts','strike price','expiration','premium','covered call','put option'],
  title:'Options Basics',
  content:'Options give the buyer the right (not obligation) to buy (call) or sell (put) a stock at a specific price (strike) before a specific date (expiration). Buying calls profits from price increases. Buying puts profits from price decreases. Selling covered calls on stocks you own generates income (premium). Options are complex instruments — they can expire worthless (100% loss) or produce large gains. Study thoroughly before using real capital.',
  action:{ type:'url', target:'/trading-academy', label:'Options — Trading Academy' }},

// ─── INSURANCE ────────────────────────────────────────────────────────────────
{ id:'insurance_basics', keywords:['insurance','premium','deductible','copay','coverage','policy','claim','out of pocket','insure','insured'],
  title:'Insurance Basics',
  content:'Insurance is a contract where you pay a regular premium and the insurer covers specific financial losses. Key terms: Premium (your regular payment to keep coverage), Deductible (what you pay before insurance kicks in), Copay (a fixed amount you pay per visit or service), Out-of-pocket maximum (the most you pay in a year — after which the insurer covers 100%), and Claim (a request for the insurer to pay a covered loss). Higher deductibles = lower premiums. Choose your deductible based on how much you could comfortably pay in an emergency.',
  action:{ type:'url', target:'/academy', label:'Financial Academy — Insurance' }},

{ id:'life_insurance', keywords:['life insurance','term life','whole life','universal life','death benefit','beneficiary','coverage amount','life insurance policy'],
  title:'Life Insurance',
  content:'Life insurance pays a death benefit to your beneficiaries when you die. Term life is the simplest and cheapest — it covers a set period (10, 20, 30 years) with no cash value. Whole life is permanent coverage with a cash value component that grows over time, but premiums are 5-15× higher. For most people, term life insurance is the smart choice — buy enough coverage (10-12× your annual income) to replace your earnings for your family.',
  action:{ type:'url', target:'/academy', label:'Life Insurance — Financial Academy' }},

{ id:'health_insurance', keywords:['health insurance','medical insurance','hmo','ppo','hsa','health savings account','copay','network','open enrollment'],
  title:'Health Insurance',
  content:'Health insurance covers medical expenses. HMO plans require a primary care doctor referral to see specialists — lower premiums but less flexibility. PPO plans let you see any doctor without referral — higher premiums but more freedom. HSA (Health Savings Account): paired with a high-deductible plan, lets you save pre-tax dollars for medical expenses — contributions roll over year to year and can be invested. Open enrollment typically happens once a year (or after a qualifying life event like job change or marriage).',
  action:{ type:'page', target:'insights', label:'Banking & Insurance — FIQ Insights' }},

{ id:'auto_insurance', keywords:['auto insurance','car insurance','liability','collision','comprehensive','uninsured motorist','vehicle insurance'],
  title:'Auto Insurance',
  content:'Auto insurance has several components: Liability covers damage you cause to others (required in most states), Collision covers damage to your own car in an accident, Comprehensive covers theft and non-collision damage (weather, vandalism). Minimum state liability limits are often dangerously low — consider higher limits if you have assets to protect. Raising your deductible from $500 to $1,000 can cut your premium 10-25%. Shop rates every 1-2 years — loyalty rarely pays in auto insurance.',
  action:{ type:'url', target:'/academy', label:'Insurance Planning — Financial Academy' }},

{ id:'renters_homeowners_insurance', keywords:['renters insurance','homeowners insurance','home insurance','property insurance','liability coverage','dwelling','personal property'],
  title:'Renters & Homeowners Insurance',
  content:`Renters insurance covers your personal belongings from theft, fire, or water damage — and includes liability coverage if someone is injured in your home. It costs \$15-\$30/month and is almost always worth it. Homeowners insurance covers the structure of your home, your belongings, and liability. Required by mortgage lenders. Standard policies do not cover floods or earthquakes — those require separate policies. Document your belongings with photos or video stored in the cloud to simplify any future claims.`,
  action:{ type:'page', target:'insights', label:'Banking & Insurance — FIQ Insights' }},

{ id:'disability_insurance', keywords:['disability insurance','short term disability','long term disability','income protection','unable to work','disability coverage'],
  title:'Disability Insurance',
  content:'Disability insurance replaces a portion of your income (typically 60-70%) if you are unable to work due to illness or injury. Short-term disability covers a few months; long-term disability can cover years or until retirement. Many employers offer group disability - check your benefits. If your job involves physical work or your savings could not cover 3+ months without income, disability insurance is essential. Social Security disability benefits exist but are difficult to qualify for and take 2+ years to receive.',
  action:{ type:'url', target:'/academy', label:'Financial Academy — Insurance' }},

{ id:'insurance_needs', keywords:['what insurance do i need','insurance types','do i need insurance','should i get insurance','insurance checklist'],
  title:'What Insurance Do You Need?',
  content:'Essential insurance for most people: Health insurance (medical costs can be catastrophic without it), Auto insurance (legally required if you own a car), Renters or Homeowners insurance (protects your belongings and liability), and Life insurance if others depend on your income. Valuable additions: Disability insurance if your employer does not provide it, Umbrella insurance for extra liability coverage. Skip: Mortgage life insurance (term life is cheaper), Extended warranties on most electronics, and Credit card payment insurance.',
  action:{ type:'page', target:'insights', label:'Banking & Insurance — FIQ Insights' }},

]

// Stopwords to ignore in search
export const STOPWORDS = new Set(['a','an','the','is','it','to','for','of','in','on','at','do','how','what','where','when','why','can','i','me','my','we','you','your','this','that','these','those','are','was','be','been','have','has','had','will','would','could','should','with','about','from','or','and','not','but','if','so','then','get','find','show','tell','help','need','want'])
