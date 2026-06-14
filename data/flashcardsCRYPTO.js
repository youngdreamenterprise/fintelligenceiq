export const FLASHCARDS_CRYPTO = [

// ── BLOCKCHAIN BASICS ─────────────────────────────────────────────────────────
{ id:'cry-b01', cat:'Blockchain', sub:'Fundamentals', diff:'easy', type:'definition',
  front:'What is a blockchain and what problem does it solve?',
  back:'A blockchain is a distributed ledger replicated across thousands of computers simultaneously, where entries are permanent and tamper-proof.\n\nProblem it solves: The "double-spend problem" — without a trusted central authority, how do you prevent someone from sending the same digital money to two people simultaneously?\n\nBlockchain solves this through consensus — the majority of the network must agree before any entry is recorded.',
  tip:'Think of blockchain as a Google Doc that thousands of people can READ, but no one can EDIT once written.' },

{ id:'cry-b02', cat:'Blockchain', sub:'Fundamentals', diff:'medium', type:'definition',
  front:'What is Proof of Work (PoW) vs Proof of Stake (PoS)?',
  back:'Proof of Work (Bitcoin):\n• Miners compete using computing power to validate transactions\n• First to solve the puzzle gets to add the block + earn the reward\n• Extremely energy-intensive (Bitcoin uses ~127 TWh/year)\n\nProof of Stake (Ethereum post-Merge):\n• Validators lock up ("stake") ETH as collateral\n• Randomly selected to validate, proportional to stake\n• 99.9% less energy than PoW\n• The Ethereum Merge (Sept 2022) made this switch.',
  tip:'PoW: Compete. PoS: Collaborate. PoS has lower environmental impact but different security tradeoffs.' },

{ id:'cry-b03', cat:'Blockchain', sub:'Fundamentals', diff:'hard', type:'definition',
  front:'What is the blockchain trilemma?',
  back:'No blockchain can simultaneously maximize all three:\n\n1. Security — resistance to attacks\n2. Scalability — handling high transaction volume\n3. Decentralization — no single point of control\n\nExamples:\n• Bitcoin: Maximizes Security + Decentralization (sacrifices Scalability)\n• Visa: Maximizes Security + Scalability (sacrifices Decentralization)\n• Solana: Maximizes Scalability + partial Security (some decentralization concerns)\n\nLayer 2 solutions attempt to expand the triangle.',
  tip:'Every crypto project is making a tradeoff on these three dimensions — always ask which two they chose.' },

{ id:'cry-b04', cat:'Blockchain', sub:'Wallets', diff:'easy', type:'definition',
  front:'What is the difference between a hot wallet and a cold wallet?',
  back:'Hot wallet: Connected to the internet (MetaMask, Coinbase Wallet, exchange accounts)\n• Convenient for transactions\n• Vulnerable to hacks and phishing\n\nCold wallet: Stores private keys OFFLINE (Ledger, Trezor hardware wallets)\n• Much more secure\n• Inconvenient for frequent trading\n• Best for large holdings\n\nRule of thumb: Keep only what you need for near-term use in hot wallets; store the rest cold.',
  tip:'"Not your keys, not your coins." If your crypto sits on an exchange, the exchange controls it, not you.' },

{ id:'cry-b05', cat:'Blockchain', sub:'Wallets', diff:'medium', type:'definition',
  front:'What is a seed phrase and why is it the master key to your crypto?',
  back:'A seed phrase (mnemonic phrase) is a sequence of 12–24 random words that cryptographically generates ALL the private keys for a wallet.\n\nAnyone who has your seed phrase has complete control over ALL your crypto.\n\nProper storage:\n✓ Write on paper — store in multiple secure physical locations\n✓ Consider fireproof/waterproof metal backup\n✗ Never digital — no photos, no cloud storage, no email\n✗ Never share with anyone, ever',
  tip:'When you lose a seed phrase, you lose the crypto permanently. No reset button. No customer service.' },

// ── BITCOIN ───────────────────────────────────────────────────────────────────
{ id:'cry-btc01', cat:'Bitcoin', sub:'Fundamentals', diff:'easy', type:'definition',
  front:'What makes Bitcoin\'s supply unique and why does it matter?',
  back:'Bitcoin has a fixed maximum supply of 21 million coins — mathematically enforced by the protocol.\n\nWhy it matters:\n• Creates artificial scarcity (like gold, but enforced by code)\n• Inflation rate decreases over time → eventually zero\n• No central authority can print more Bitcoin\n• Currently ~19.7M BTC have been mined (as of 2024)\n\nContrast: Central banks can and do create unlimited fiat currency.',
  tip:'Approximately 3–4 million BTC are permanently lost (forgotten passwords, lost hard drives). Actual circulating supply is lower.' },

{ id:'cry-btc02', cat:'Bitcoin', sub:'Mechanics', diff:'medium', type:'definition',
  front:'What is the Bitcoin halving and what historically happens to the price?',
  back:'Every ~4 years (210,000 blocks), the Bitcoin mining reward is cut in half:\n\n• 2009: 50 BTC per block\n• 2012: 25 BTC (first halving)\n• 2016: 12.5 BTC\n• 2020: 6.25 BTC\n• 2024: 3.125 BTC\n\nEffect: New supply entering the market decreases. Historically each halving has preceded a significant bull market (though not guaranteed).\n\nFinal halving: ~2140, after which miners earn only transaction fees.',
  tip:'The halving reduces inflation rate — but demand must still exist for prices to rise. Supply alone doesn\'t guarantee price increases.' },

{ id:'cry-btc03', cat:'Bitcoin', sub:'Investment', diff:'medium', type:'application',
  front:'What are the main arguments FOR holding Bitcoin as part of a portfolio?',
  back:'1. Digital scarcity — Fixed 21M supply, unlike infinitely printable fiat\n\n2. Store of value — "Digital gold" thesis: long-term value preservation vs inflation\n\n3. Portfolio diversification — Low historical correlation to stocks and bonds\n\n4. Decentralization — No single government, company, or person can control it\n\n5. Institutional adoption — Major corporations (Tesla, MicroStrategy) + Bitcoin ETFs approved January 2024\n\n6. Network effect — Largest crypto by market cap, most secure PoW network',
  tip:'Most allocation guidance for Bitcoin is 1–5% of investment portfolio — enough for meaningful upside, limited catastrophic downside.' },

{ id:'cry-btc04', cat:'Bitcoin', sub:'Investment', diff:'medium', type:'application',
  front:'What are Bitcoin spot ETFs and why was their January 2024 approval significant?',
  back:'Bitcoin spot ETFs (BlackRock\'s IBIT, Fidelity\'s FBTC, and others) hold actual Bitcoin and trade on traditional stock exchanges.\n\nWhy significant:\n• First time retail AND institutional investors could get Bitcoin exposure through regulated brokerage accounts\n• No need for crypto exchanges or wallets\n• Available in IRAs and 401(k)s\n• Triggered billions in institutional inflows\n\nPreviously, only futures-based Bitcoin ETFs existed (more expensive, less direct exposure).',
  tip:'Bitcoin ETFs charge expense ratios (0.12–0.25%) for the convenience of not managing your own custody.' },

// ── ETHEREUM ─────────────────────────────────────────────────────────────────
{ id:'cry-eth01', cat:'Ethereum', sub:'Fundamentals', diff:'easy', type:'definition',
  front:'What distinguishes Ethereum from Bitcoin?',
  back:'Bitcoin: Digital money and store of value — optimized for one purpose (secure, scarce, decentralized currency).\n\nEthereum: A programmable blockchain. "Smart contracts" allow code to run automatically without intermediaries.\n\nEthereum enables:\n• Decentralized Finance (DeFi)\n• NFTs and digital ownership\n• Stablecoins (USDC, DAI)\n• DAOs (Decentralized Autonomous Organizations)\n• Layer 2 scaling networks',
  tip:'If Bitcoin is the internet of money, Ethereum is the internet of programmable money.' },

{ id:'cry-eth02', cat:'Ethereum', sub:'Smart Contracts', diff:'medium', type:'definition',
  front:'What is a smart contract and what makes it revolutionary?',
  back:'A smart contract is self-executing code deployed on a blockchain that runs automatically when predefined conditions are met — no intermediary required.\n\nExample: "If Person A sends 1 ETH to this address, automatically send them the NFT stored here"\n\nRevolutionary because:\n• No counterparty risk — code executes exactly as written\n• Trustless — strangers can transact without knowing each other\n• Transparent — code is publicly verifiable on the blockchain\n• Immutable — once deployed, cannot be changed',
  tip:'Smart contract bugs are permanent — millions of dollars have been lost to coding errors that can never be fixed.' },

{ id:'cry-eth03', cat:'Ethereum', sub:'Mechanics', diff:'hard', type:'definition',
  front:'What is ETH gas and what determines gas prices?',
  back:'Gas = Unit measuring computational work on Ethereum.\nGas price = How much you\'re willing to pay per unit of gas (in Gwei: 1 Gwei = 0.000000001 ETH).\n\nYour transaction fee = Gas Units × Gas Price\n\nGas prices spike when network is congested (many people competing to get their transactions included).\n\nEIP-1559 (August 2021) introduced:\n• Base fee: burned permanently (reduces ETH supply)\n• Priority fee: goes to validators as tip',
  tip:'Simple ETH transfer ≈ 21,000 gas. Complex DeFi interaction can use 100,000–500,000+ gas.' },

// ── DEFI ──────────────────────────────────────────────────────────────────────
{ id:'cry-d01', cat:'DeFi', sub:'Fundamentals', diff:'medium', type:'definition',
  front:'What is DeFi and how is it different from traditional finance?',
  back:'Decentralized Finance — recreating financial services (lending, borrowing, trading, earning yield) using smart contracts instead of banks.\n\nKey differences:\n• No intermediary — smart contracts enforce rules automatically\n• Open to anyone with a wallet (no KYC, no credit check)\n• Transparent — all transactions visible on blockchain\n• Non-custodial — you retain control of your assets\n\nMajor DeFi protocols: Uniswap (trading), Aave (lending), Compound (lending), Curve (stablecoins)',
  tip:'DeFi removes banks but doesn\'t remove risk — smart contract bugs, hacks, and liquidity crises are real threats.' },

{ id:'cry-d02', cat:'DeFi', sub:'Mechanics', diff:'hard', type:'definition',
  front:'What is an Automated Market Maker (AMM) and how does it differ from a traditional order book?',
  back:'Traditional exchange: Buyers and sellers place orders that get matched (order book model). Requires market makers to provide liquidity.\n\nAMM (like Uniswap): Uses a mathematical formula (x × y = k) with liquidity pools.\n\n• Anyone can add liquidity by depositing token pairs\n• Prices are set algorithmically based on pool ratios\n• No order matching required\n• Slippage increases with trade size relative to pool\n\nAdvantage: Always has liquidity, 24/7. Disadvantage: Less price efficiency than deep order books.',
  tip:'When you trade on Uniswap, you\'re trading against a pool of tokens, not another human.' },

{ id:'cry-d03', cat:'DeFi', sub:'Risks', diff:'hard', type:'definition',
  front:'What is impermanent loss and when does it happen?',
  back:'Impermanent loss occurs when you provide liquidity to an AMM and the price ratio of your token pair changes.\n\nExample: You deposit 1 ETH ($2,000) + $2,000 USDC into a pool.\nIf ETH rises to $4,000, the pool rebalances: you now have 0.707 ETH + $2,828 USDC = ~$5,656\nIf you\'d just HELD: 1 ETH + $2,000 USDC = $6,000\n\nImpermanent loss: $344 — you earned less than simply holding.\n\nLoss is "impermanent" if price ratio returns to original.',
  tip:'Trading fees earned from providing liquidity must exceed impermanent loss to make LP positions profitable.' },

{ id:'cry-d04', cat:'DeFi', sub:'Mechanics', diff:'medium', type:'definition',
  front:'What is yield farming and what are its risks?',
  back:'Yield farming = Moving crypto between protocols to maximize returns, often by:\n• Providing liquidity (earning trading fees + liquidity mining rewards)\n• Lending assets (earning interest)\n• Staking tokens (earning protocol rewards)\n\nRisks:\n• Smart contract risk (code bugs = total loss)\n• Rug pull risk (developers abandon project and drain funds)\n• Impermanent loss (see previous card)\n• Liquidation risk (collateralized positions)\n• High gas costs eating into yields',
  tip:'APYs of 100%+ are red flags — usually only sustainable short-term and often collapse dramatically.' },

// ── NFTs ───────────────────────────────────────────────────────────────────────
{ id:'cry-nft01', cat:'NFTs', sub:'Fundamentals', diff:'easy', type:'definition',
  front:'What makes an NFT "non-fungible" and how is it different from other crypto?',
  back:'Fungible: Each unit is identical and interchangeable (1 BTC = any other 1 BTC).\n\nNon-fungible: Each token is unique and not interchangeable.\n\nAn NFT is a unique digital certificate of ownership recorded on a blockchain.\n\nNFTs can represent:\n• Digital art\n• Music and collectibles\n• Gaming items\n• Domain names\n• Real-world assets (deeds, tickets)',
  tip:'The NFT is the certificate of ownership — not the digital file itself. Anyone can download the image; the NFT proves who owns it.' },

{ id:'cry-nft02', cat:'NFTs', sub:'Market', diff:'medium', type:'concept',
  front:'What happened to the NFT market from 2021–2023 and what does it teach?',
  back:'2021 Peak: Bored Ape Yacht Club sold for $300K+; Beeple\'s art sold for $69M; NFT trading volume hit $25B\n\n2022–2023 Collapse: 97% of NFT projects dropped to near-zero value. BAYC floor price fell from 150 ETH to 25 ETH.\n\nLessons:\n• Speculation-driven markets revert sharply\n• Most NFTs are not investment-grade assets\n• "Rarity" alone doesn\'t sustain value without demand\n• Royalties only matter if there\'s secondary market trading',
  tip:'Evaluate NFT projects on: utility, community strength, team credibility, and roadmap execution — not just floor price.' },

// ── STABLECOINS ───────────────────────────────────────────────────────────────
{ id:'cry-s01', cat:'Stablecoins', sub:'Types', diff:'medium', type:'definition',
  front:'What are the three types of stablecoins and how do they maintain their $1 peg?',
  back:'1. Fiat-backed (USDC, USDT): 1:1 backed by actual USD held in reserve. Most stable. Counterparty risk: trust the custodian.\n\n2. Crypto-backed (DAI): Over-collateralized with crypto (deposit $150 in ETH to mint $100 DAI). Decentralized but complex.\n\n3. Algorithmic (LUNA/UST — collapsed 2022): No collateral — uses algorithms and incentives to maintain peg. Highest risk — UST failure destroyed $40B of value.',
  tip:'After Terra/LUNA collapse, avoid algorithmic stablecoins. USDC (Circle) is the most transparent fiat-backed option.' },

// ── CRYPTO TRADING ────────────────────────────────────────────────────────────
{ id:'cry-t01', cat:'Trading', sub:'Concepts', diff:'easy', type:'definition',
  front:'What does "HODL" mean and what is the strategy behind it?',
  back:'HODL (originally a typo for "HOLD") = Buying cryptocurrency and holding through all volatility rather than trading.\n\nStrategy basis:\n• Most traders underperform simple buy-and-hold in crypto\n• Timing crypto\'s extreme volatility is nearly impossible\n• Long-term holders of Bitcoin have historically been rewarded\n• Trading generates taxable events that compound costs\n\nRisk: HODLing through a prolonged bear market can mean holding for 3–5 years to recover.',
  tip:'HODLing Bitcoin from any point in history for 4+ years has historically produced a positive return.' },

{ id:'cry-t02', cat:'Trading', sub:'Risk', diff:'medium', type:'concept',
  front:'What is a liquidation in crypto leveraged trading and how does it happen?',
  back:'Using leverage means borrowing to amplify your position.\n\n10× leverage: $1,000 controls $10,000 position\n\nLiquidation occurs when your position moves against you enough to wipe out your collateral:\n\n10× long ETH: A 10% price DROP = 100% of your collateral lost → forced liquidation\n\nThe exchange sells your position to protect their loan — you lose everything.\n\nWhy it\'s dangerous: Crypto\'s normal daily volatility can liquidate even 3–5× positions.',
  tip:'More than 80% of retail traders using leverage in crypto eventually lose their entire position to liquidation.' },

{ id:'cry-t03', cat:'Trading', sub:'Cycles', diff:'medium', type:'concept',
  front:'What is the crypto market cycle and what drives it?',
  back:'Historical 4-year cycle (loosely correlated with Bitcoin halvings):\n\n1. Accumulation: Prices low, bear market fatigue, smart money buying quietly\n2. Bull Run: Rising prices, increasing media attention, retail FOMO buying\n3. Euphoria (Peak): Parabolic prices, everyone is "investing," irrational exuberance\n4. Bear Market: 70–90% drawdowns from peak, capitulation, many exit permanently\n\nDrivers: Halving supply reduction, sentiment extremes, macro liquidity, institutional adoption waves.',
  tip:'The best time to buy is when everyone is bearish and saying "crypto is dead." The worst time: media covers record highs daily.' },

{ id:'cry-t04', cat:'Trading', sub:'Analysis', diff:'medium', type:'definition',
  front:'What is the Crypto Fear & Greed Index and how is it used?',
  back:'A composite score from 0 (Extreme Fear) to 100 (Extreme Greed) measuring overall crypto market sentiment.\n\nComponents: Volatility, Market momentum, Social media volume, Survey sentiment, Bitcoin dominance, Google Trends.\n\nContrarian strategy:\n• Extreme Fear (0–25) → Historically a good buying opportunity\n• Extreme Greed (75–100) → Historically a good time to reduce exposure\n\n"Be fearful when others are greedy, and greedy when others are fearful." — Buffett',
  tip:'The index is available at alternative.me/crypto/fear-and-greed-index — updated daily.' },

// ── SECURITY ──────────────────────────────────────────────────────────────────
{ id:'cry-sec01', cat:'Security', sub:'Protection', diff:'easy', type:'concept',
  front:'What are the 5 most important crypto security practices?',
  back:'1. Self-custody for large holdings — Use a hardware wallet (Ledger/Trezor); don\'t leave significant funds on exchanges\n\n2. Protect your seed phrase — Paper only, multiple copies, secure physical storage, NEVER digital\n\n3. Use strong unique passwords + 2FA — Authenticator app (not SMS) for all exchange accounts\n\n4. Verify URLs carefully — Phishing sites look identical to real ones. Bookmark legitimate sites.\n\n5. Verify before signing — Read what wallet transactions are asking you to approve. "Approve all tokens" transactions are often exploits.',
  tip:'"Not your keys, not your coins" — The FTX collapse (2022) proved that even major exchanges can fail, taking all customer funds.' },

{ id:'cry-sec02', cat:'Security', sub:'Scams', diff:'medium', type:'concept',
  front:'What are the most common crypto scams and their warning signs?',
  back:'1. Rug pulls — Team abandons project after raising funds. Warning: anonymous team, no audits, locked liquidity for short periods only\n\n2. Phishing — Fake websites/emails steal credentials or seed phrases. Warning: Unsolicited contact, urgency\n\n3. Pump and dump — Coordinated buying to inflate price, then mass selling. Warning: Low market cap coins with sudden huge volume\n\n4. Romance scams (Pig butchering) — Build relationship first, then "introduce" to profitable crypto scheme\n\n5. Fake giveaways — "Send 1 BTC, receive 2 back." Elon Musk never said this.',
  tip:'If it sounds too good to be true, it is — especially in crypto where FOMO drives many to suspend disbelief.' },

// ── REGULATION ────────────────────────────────────────────────────────────────
{ id:'cry-reg01', cat:'Regulation', sub:'US Law', diff:'medium', type:'definition',
  front:'How does the IRS treat cryptocurrency for tax purposes?',
  back:'The IRS treats crypto as PROPERTY, not currency.\n\nEvery taxable event requires reporting:\n✓ Selling crypto for USD → Capital gain or loss\n✓ Trading one crypto for another → Taxable exchange\n✓ Using crypto to buy goods → Taxable disposal at current value\n✓ Receiving crypto as payment → Ordinary income at market value\n\nNOT taxable:\n✗ Buying crypto\n✗ Transferring between your own wallets\n✗ Gifting crypto (recipient takes your basis)',
  tip:'Crypto tax software (CoinTracker, Koinly, TaxBit) is essential for anyone with significant transaction history.' },

{ id:'cry-reg02', cat:'Regulation', sub:'Global', diff:'hard', type:'concept',
  front:'What regulatory developments have most shaped the crypto industry since 2021?',
  back:'Key developments:\n\n• SEC vs Ripple (2020–2023): XRP ruled not a security when sold on exchanges → partial crypto win\n\n• Bitcoin spot ETFs approved (Jan 2024): Opened institutional floodgates; first legitimate regulated BTC exposure\n\n• FTX collapse (Nov 2022): $8B missing; CEO Sam Bankman-Fried convicted; triggered major exchange regulation push\n\n• MiCA (EU, 2024): Comprehensive crypto regulation framework — stablecoin rules, exchange licensing\n\n• Tornado Cash sanctions (2022): OFAC sanctioned a smart contract — unprecedented legal territory',
  tip:'The regulatory landscape is evolving rapidly — regulatory clarity in the EU (MiCA) is ahead of the US.' },

// ── LAYER 2 ───────────────────────────────────────────────────────────────────
{ id:'cry-l2-01', cat:'Layer 2', sub:'Scaling', diff:'hard', type:'definition',
  front:'What are Layer 2 scaling solutions and why are they necessary?',
  back:'Layer 2 (L2) networks run ON TOP of Ethereum (Layer 1), processing transactions off-chain and then posting proofs to Ethereum for security.\n\nWhy needed: Ethereum L1 processes ~15 transactions per second at high cost during congestion.\n\nTypes:\n• Optimistic Rollups (Arbitrum, Optimism): Assume transactions valid, fraud proofs for disputes. ~2,000+ TPS\n• ZK Rollups (zkSync, StarkNet, Polygon zkEVM): Cryptographic proofs of validity. More complex but faster finality\n\nResult: Ethereum security at 10–100× lower cost',
  tip:'Most DeFi activity is migrating to L2s for the dramatically lower fees while inheriting Ethereum\'s security.' },

// ── CROSS-CUTTING ─────────────────────────────────────────────────────────────
{ id:'cry-x01', cat:'Concepts', sub:'Fundamentals', diff:'easy', type:'definition',
  front:'What is blockchain\'s role in digital ownership and why is it revolutionary?',
  back:'Before blockchain: Digital things could be infinitely copied. You couldn\'t "own" a digital item the way you own a physical one.\n\nBlockchain enables: A public, immutable record of who owns what — without needing a trusted central authority to maintain the record.\n\nApplications:\n• Crypto wallets (you prove ownership with a private key)\n• NFTs (unique digital ownership)\n• Decentralized domain names\n• On-chain voting rights\n• Tokenized real-world assets',
  tip:'Blockchain doesn\'t prevent copying — it creates a public record of who holds the "official" version recognized by the network.' },

{ id:'cry-x02', cat:'Concepts', sub:'Investing', diff:'medium', type:'application',
  front:'What is the appropriate allocation to crypto for most investors and why?',
  back:'General guidance: 1–5% of total investable assets.\n\nAt 5% allocation, a 70% crypto crash:\n→ Reduces overall portfolio by just 3.5%\n→ A manageable loss from diversification\n\nAt 20% allocation, the same crash:\n→ Reduces overall portfolio by 14%\n→ A major setback potentially requiring years to recover\n\nCrypto\'s volatility (50–80% drawdowns are normal) makes position sizing critical.',
  tip:'Even believers in crypto\'s long-term future should size positions to survive being wrong about timing.' },

{ id:'cry-x03', cat:'Concepts', sub:'Technology', diff:'easy', type:'definition',
  front:'What is a decentralized exchange (DEX) vs a centralized exchange (CEX)?',
  back:'CEX (Coinbase, Binance, Kraken):\n• Company-operated with KYC/AML requirements\n• Takes custody of your funds\n• Order book matching\n• Regulated in most jurisdictions\n• Counterparty risk (FTX collapse showed this)\n\nDEX (Uniswap, Curve, dYdX):\n• Smart contract operated\n• You keep custody (connect wallet, not deposit)\n• AMM or on-chain order books\n• Generally less regulated\n• No counterparty risk — just smart contract risk',
  tip:'Start with a CEX for ease and fiat on-ramp. Use DEX for access to tokens not listed on centralized platforms.' },

{ id:'cry-x04', cat:'Concepts', sub:'Future', diff:'medium', type:'concept',
  front:'What is the long-term bull case for Ethereum\'s value?',
  back:'Ethereum as "ultrasound money" thesis:\n\n1. Fee burning (EIP-1559): Every transaction burns base fee → reduces ETH supply\n2. Staking yield: Locking ETH reduces circulating supply\n3. Network effect: Most developers, most DeFi TVL, most institutional DApps built on ETH\n4. Revenue model: High demand for blockspace → high fees → more ETH burned\n\nIf DeFi and Web3 grow, demand for ETH blockspace grows, making ETH increasingly scarce.\n\nCounter: Layer 2 reduces L1 fee demand; competing L1s may take market share.',
  tip:'ETH\'s value accrual depends on blockspace demand — track weekly ETH fees burned at ultrasound.money.' },

{ id:'cry-x05', cat:'Concepts', sub:'Portfolio', diff:'medium', type:'application',
  front:'What is Bitcoin dominance and why does it matter for altcoin positioning?',
  back:'Bitcoin dominance = Bitcoin\'s market cap as a % of total crypto market cap.\n\nHistorical ranges: 40–70%+\n\nInterpreting dominance:\n• Rising dominance: Capital flowing INTO Bitcoin (risk-off in crypto)\n• Falling dominance: Capital flowing INTO altcoins (risk-on "altseason")\n\nPattern: BTC usually leads crypto bull markets. As BTC stabilizes at new highs, capital rotates to ETH, then major alts, then smaller alts.\n\nHigh dominance = better time to accumulate altcoins for the next cycle.',
  tip:'Altcoins typically amplify Bitcoin\'s moves: Bitcoin +50% often = ETH +100%, small alts +300-1000%.' },

]
