export const FLASHCARDS_FIN = [

// ── INVESTING ──────────────────────────────────────────────────────────────────
{ id:'fin-i01', cat:'Investing', sub:'Fundamentals', diff:'easy', type:'definition',
  front:'What is the P/E ratio and what does it measure?',
  back:'Price ÷ Earnings per Share. A P/E of 25 means you pay $25 for every $1 of annual earnings.\n\nLow P/E = cheaper relative to earnings. High P/E = expensive (or high growth expected).\n\nS&P 500 historical average: 15–18×. Current range: 20–25×.',
  tip:'Compare P/E to the company\'s own history and industry peers — not just absolute numbers.' },

{ id:'fin-i02', cat:'Investing', sub:'Fundamentals', diff:'easy', type:'definition',
  front:'What is the difference between a stock and a bond?',
  back:'Stock = ownership in a company. You profit from earnings growth and dividends but have no guaranteed return — you can lose everything.\n\nBond = loan to a company or government. They pay you interest (coupon) and return your principal at maturity. Payment is contractual — missing it = default.',
  tip:'Stocks offer higher expected return; bonds offer lower risk and predictable income.' },

{ id:'fin-i03', cat:'Investing', sub:'Fundamentals', diff:'medium', type:'application',
  front:'An investor buys a $1,000 bond with a 4% coupon when market rates rise to 6%. What happens to the bond\'s price?',
  back:'The price FALLS. New bonds now yield 6%, making your 4% bond less attractive.\n\nThe price drops until your $40 annual payment represents a 6% yield on the new lower price (~$667).\n\nKey rule: Bond prices and yields always move in OPPOSITE directions.',
  tip:'Duration quantifies sensitivity: 10-year duration bond falls ~10% when rates rise 1%.' },

{ id:'fin-i04', cat:'Investing', sub:'ETFs & Funds', diff:'easy', type:'definition',
  front:'What is an expense ratio and why does it matter?',
  back:'The annual fee charged as a percentage of your investment, deducted automatically.\n\n$100,000 at 7% return for 30 years:\n• 0.05% expense ratio → $756,000\n• 1.00% expense ratio → $574,000\n\nDifference: $182,000 lost to fees (24% of ending wealth).',
  tip:'Look for index funds under 0.10%. Vanguard/Fidelity/Schwab offer some at 0.03%.' },

{ id:'fin-i05', cat:'Investing', sub:'ETFs & Funds', diff:'medium', type:'application',
  front:'What is the "Three-Fund Portfolio" and what does each fund provide?',
  back:'1. US Total Market (VTI) — ~3,500 US stocks, complete domestic exposure\n2. International (VXUS) — ~7,000 non-US stocks, geographic diversification\n3. US Bonds (BND) — thousands of bonds, stability and volatility reduction\n\nThis simple combo beats most actively managed funds over 20+ years.',
  tip:'The allocation between stocks and bonds is the key decision — not which specific funds.' },

{ id:'fin-i06', cat:'Investing', sub:'Retirement', diff:'easy', type:'definition',
  front:'What is the key difference between a Traditional and Roth IRA?',
  back:'Traditional IRA: Contribute pre-tax (deductible). Pay taxes when you withdraw in retirement.\n\nRoth IRA: Contribute after-tax (no deduction). ALL growth is tax-free — withdrawals in retirement are never taxed.\n\nChoose Roth when: you expect higher taxes in retirement than today.',
  tip:'2024 limit: $7,000/year ($8,000 if 50+), shared across ALL your IRAs.' },

{ id:'fin-i07', cat:'Investing', sub:'Retirement', diff:'medium', type:'application',
  front:'Your employer offers a 401(k) with a 3% match. You earn $80,000. What is the minimum you should contribute and why?',
  back:'At minimum, contribute 3% ($2,400/year) to capture the full employer match.\n\nEmployer adds $1,200–$2,400 instantly. That\'s a 50–100% immediate return on your contribution — better than any investment.\n\n"Never leave free money on the table."',
  tip:'After capturing the match, max your Roth IRA ($7,000) before going back to the 401(k).' },

{ id:'fin-i08', cat:'Investing', sub:'Strategy', diff:'easy', type:'definition',
  front:'What is dollar-cost averaging (DCA)?',
  back:'Investing a fixed dollar amount at regular intervals (weekly/monthly) regardless of price.\n\nWhen prices are HIGH → you buy fewer shares\nWhen prices are LOW → you buy more shares\n\nResult: Your average cost per share is lower than the average price paid.',
  tip:'DCA removes the emotional burden of timing the market — the biggest investor mistake.' },

{ id:'fin-i09', cat:'Investing', sub:'Strategy', diff:'hard', type:'application',
  front:'What is the "4% Rule" and when does it apply?',
  back:'In retirement, withdraw 4% of your initial portfolio value each year (adjusted for inflation).\n\nHistorically, this has sustained a 30-year retirement in 95%+ of scenarios.\n\nFormula: Target Portfolio = Annual Spending × 25\n\nExample: Need $60K/year → Need $1.5M to retire.',
  tip:'The 4% rule assumes a ~60/40 stock/bond allocation. More stocks = safer. More bonds = riskier.' },

{ id:'fin-i10', cat:'Investing', sub:'Analysis', diff:'medium', type:'definition',
  front:'What is Free Cash Flow (FCF) and why is it more reliable than net income?',
  back:'FCF = Cash from Operations − Capital Expenditures\n\nFCF represents actual cash the business generates — what\'s left to pay dividends, buy back stock, or invest in growth.\n\nNet income can be manipulated through accounting. FCF is much harder to fake — it reflects real cash movement.',
  tip:'Warren Buffett uses "owner earnings" (similar to FCF) as his primary valuation metric.' },

{ id:'fin-i11', cat:'Investing', sub:'Analysis', diff:'medium', type:'definition',
  front:'What is Return on Equity (ROE) and what does a consistently high ROE signal?',
  back:'ROE = Net Income ÷ Shareholders\' Equity\n\nMeasures how efficiently management uses your invested capital.\n\nROE consistently above 15% signals a durable competitive advantage (economic "moat") — the company can earn strong returns without excessive leverage.',
  tip:'Compare ROIC (Return on Invested Capital) too — avoids distortion from high debt levels.' },

{ id:'fin-i12', cat:'Investing', sub:'Behavior', diff:'medium', type:'concept',
  front:'What is the "Disposition Effect" and why does it hurt investor returns?',
  back:'The tendency to sell winners too quickly (to "lock in gains") and hold losers too long (to avoid admitting a mistake).\n\nThis is EXACTLY WRONG:\n✗ Selling winners cuts off compounding\n✗ Holding losers wastes capital\n✓ Tax rules actually incentivize the opposite: hold winners, sell losers',
  tip:'The question isn\'t what you paid — it\'s whether the investment is still the best use of your capital today.' },

{ id:'fin-i13', cat:'Investing', sub:'Asset Classes', diff:'medium', type:'definition',
  front:'What is a REIT and how does it work?',
  back:'Real Estate Investment Trust — a company that owns income-producing properties, traded on stock exchanges like shares.\n\nMust distribute 90%+ of taxable income as dividends (why REITs yield 4–7%)\n\nTypes: Apartments, Offices, Industrial, Data Centers, Cell Towers, Healthcare\n\nBest held in tax-advantaged accounts (dividends taxed as ordinary income).',
  tip:'VNQ (Vanguard REIT ETF, 0.12% ER) provides broad REIT exposure in a single fund.' },

{ id:'fin-i14', cat:'Investing', sub:'Asset Classes', diff:'hard', type:'concept',
  front:'What are the main factors in the Fama-French model and why do they matter?',
  back:'Beyond market beta, Fama-French identified:\n• Size factor: Small-cap stocks outperform large-caps long-term\n• Value factor: Cheap stocks (low P/B) outperform expensive ones\n• Profitability: More profitable companies outperform\n\nThese "factor premiums" are real but experience multi-year underperformance — conviction required.',
  tip:'AVUV (Avantis US Small Cap Value) captures size + value + profitability in one ETF.' },

{ id:'fin-i15', cat:'Investing', sub:'Behavior', diff:'easy', type:'concept',
  front:'What does "missing the 10 best days" mean for long-term investors?',
  back:'Missing just the 10 best trading days in a 20-year period reduces your total return by MORE THAN 50%.\n\nThose best days often occur during bear markets — when scared investors have sold.\n\nConclusion: Staying fully invested through downturns is critical to achieving market returns.',
  tip:'Time IN the market consistently beats TIMING the market for retail investors.' },

// ── TAXES ──────────────────────────────────────────────────────────────────────
{ id:'fin-t01', cat:'Taxes', sub:'Basics', diff:'easy', type:'definition',
  front:'What is the difference between your marginal and effective tax rate?',
  back:'Marginal rate: The rate on your LAST (highest) dollar of income.\n\nEffective rate: Total tax paid ÷ Total income — your TRUE average rate.\n\nExample earning $80,000:\n• You are in the 22% bracket (marginal)\n• But you only pay 22% on income above $47,150\n• Effective rate might be ~13%\n\nMoving into a higher bracket does NOT mean all your income is taxed at that rate!',
  tip:'Always compare strategies using effective rates, not marginal brackets.' },

{ id:'fin-t02', cat:'Taxes', sub:'Investments', diff:'medium', type:'definition',
  front:'What are long-term capital gains rates and how do you qualify?',
  back:'Assets held MORE THAN 12 months qualify for preferential rates:\n• 0% — income below $47,025 (single 2024)\n• 15% — most filers\n• 20% — income above $518,900\n\nShort-term gains (≤12 months) are taxed as ordinary income — up to 37%.\n\nHolding one extra day past 12 months can save 22–37% in taxes on the gain.',
  tip:'3.8% Net Investment Income Tax (NIIT) also applies above $200K/$250K — real top rate is 23.8%.' },

{ id:'fin-t03', cat:'Taxes', sub:'Strategy', diff:'medium', type:'application',
  front:'What is tax-loss harvesting and what is the wash sale rule?',
  back:'Tax-loss harvesting: Sell an investment at a loss to realize the loss for tax purposes, then immediately buy a SIMILAR (not identical) investment to stay invested.\n\n$10,000 loss offsets $10,000 of gains → saves $1,500–$2,380 in taxes.\n\nWash sale rule: Cannot repurchase the SAME security within 30 days before or after the sale.',
  tip:'Sell VTI at a loss → immediately buy SCHB or IVV. You stay invested, realize the loss.' },

{ id:'fin-t04', cat:'Taxes', sub:'Strategy', diff:'hard', type:'application',
  front:'What is the "backdoor Roth IRA" and who needs it?',
  back:'High earners above $161K (single) cannot contribute directly to a Roth IRA.\n\nBackdoor workaround:\n1. Contribute $7,000 to a NON-DEDUCTIBLE Traditional IRA\n2. Immediately convert to Roth IRA\n3. Pay no additional tax (basis = contribution)\n\nCaution: Pro-rata rule applies if you have other pre-tax IRA balances.',
  tip:'Mega backdoor Roth: Some 401(k)s allow after-tax contributions up to $69K total, then convert.' },

{ id:'fin-t05', cat:'Taxes', sub:'Business', diff:'medium', type:'definition',
  front:'What is self-employment tax and how is it calculated?',
  back:'Self-employed pay BOTH halves of Social Security and Medicare:\n• Social Security: 12.4% (up to $168,600 wage base in 2024)\n• Medicare: 2.9% (no limit)\n• Total: 15.3% on net self-employment income\n\nGood news: You can deduct HALF of SE tax paid from your income (above-the-line deduction).',
  tip:'S-Corp election can save SE tax: pay yourself a reasonable salary + take remaining profits as distributions.' },

{ id:'fin-t06', cat:'Taxes', sub:'Real Estate', diff:'medium', type:'definition',
  front:'What is the primary home capital gains exclusion and how does it work?',
  back:'Excludes up to $250,000 in gains ($500,000 married) from taxation when selling your primary residence.\n\nRequirements:\n• Own the home for 2+ of the last 5 years\n• Use it as PRIMARY residence for 2+ of the last 5 years\n• Can use multiple times throughout your life',
  tip:'One of the most valuable tax benefits available — $250K or $500K in TAX-FREE gains.' },

{ id:'fin-t07', cat:'Taxes', sub:'Real Estate', diff:'hard', type:'definition',
  front:'What is a 1031 exchange and what does it accomplish?',
  back:'When selling investment property, you can defer ALL capital gains taxes by reinvesting proceeds into a "like-kind" property.\n\nTimeline:\n• Identify replacement property within 45 days\n• Close within 180 days\n\nThe gain is DEFERRED (not forgiven) — until you eventually sell without a 1031.\n\n$200K gain at 20% rate = $40K deferred and compounding instead of paid to IRS.',
  tip:'Multiple 1031 exchanges = indefinitely deferred gains. The basis resets at death (step-up in basis).' },

{ id:'fin-t08', cat:'Taxes', sub:'Business', diff:'medium', type:'application',
  front:'What is the QBI deduction (Section 199A) and who benefits?',
  back:'Qualified Business Income deduction allows most pass-through business owners to deduct 20% of their net business income.\n\nExample: $200,000 net sole proprietor income → deduct $40,000 → taxed on $160,000.\n\nIncome limits and restrictions apply for "Specified Service Trades" (doctors, lawyers, consultants) above certain income levels.',
  tip:'The QBI deduction alone can reduce a self-employed person\'s effective tax rate by 5–8%.' },

{ id:'fin-t09', cat:'Taxes', sub:'Retirement', diff:'medium', type:'application',
  front:'What is a "Roth Conversion" and when is the best time to do one?',
  back:'Moving money from a Traditional IRA/401(k) to a Roth IRA. You pay ordinary income taxes on the converted amount.\n\nBest times to convert:\n• Early retirement (income fell, before Social Security + RMDs begin)\n• Years with business losses\n• Low-income years when in a lower bracket than expected later\n\nPurpose: Reduces future RMDs and creates tax-free income in retirement.',
  tip:'The "Roth conversion window" (retirement before age 73) is the most valuable tax planning period.' },

{ id:'fin-t10', cat:'Taxes', sub:'Planning', diff:'easy', type:'definition',
  front:'What is the standard deduction and who should take it?',
  back:'2024 standard deduction: $14,600 (single) / $29,200 (married filing jointly)\n\nThis amount is subtracted from your gross income with NO documentation required.\n\nTake the standard deduction if your itemized deductions (mortgage interest + state taxes + charity + medical) don\'t exceed this amount.\n\nAbout 90% of taxpayers take the standard deduction since the 2017 TCJA doubled it.',
  tip:'Charitable "bunching" strategy: donate 2-3 years\' worth in one year to exceed the standard deduction.' },

// ── CREDIT & LENDING ───────────────────────────────────────────────────────────
{ id:'fin-c01', cat:'Credit', sub:'Credit Score', diff:'easy', type:'definition',
  front:'What are the 5 factors of a FICO credit score and their weights?',
  back:'1. Payment History — 35% (most important: never miss a payment)\n2. Amounts Owed — 30% (keep credit card utilization below 10%)\n3. Length of History — 15% (never close old accounts)\n4. Credit Mix — 10% (variety of credit types)\n5. New Credit — 10% (avoid opening many accounts at once)',
  tip:'Payment history + utilization = 65% of your score. Focus there exclusively first.' },

{ id:'fin-c02', cat:'Credit', sub:'Credit Score', diff:'medium', type:'application',
  front:'One late payment drops your score from 780 to 680. How long does recovery take?',
  back:'A 30-day late payment on a previously perfect record can drop your score 60–100 points.\n\nRecovery timeline:\n• 12–18 months: Score begins recovering with on-time payments\n• 2–4 years: Score fully recovered (the mark still exists but weighs less)\n• 7 years: The late payment drops off your credit report entirely\n\nImmediately set up autopay for all minimums.',
  tip:'The OLDER a late payment gets, the less it hurts. Recent lates hurt dramatically more.' },

{ id:'fin-c03', cat:'Credit', sub:'Mortgages', diff:'medium', type:'application',
  front:'What is PMI and how do you avoid or eliminate it?',
  back:'Private Mortgage Insurance — required when your down payment is less than 20% (LTV above 80%).\n\nCost: 0.2–1.5% annually on the loan amount\n\nOn a $400K mortgage: $800–$6,000/year added to payments\n\nHow to eliminate:\n• Put 20%+ down initially (avoid it completely)\n• Reach 20% equity through payments/appreciation → request removal\n• At 78% LTV: automatic cancellation required by law',
  tip:'PMI only protects the lender — you pay it but receive no benefit. Avoid when possible.' },

{ id:'fin-c04', cat:'Credit', sub:'Mortgages', diff:'hard', type:'application',
  front:'How do you calculate whether refinancing is worth it?',
  back:'Break-even analysis:\n1. Closing costs ÷ Monthly savings = Break-even months\n\nExample:\n• Current rate: 7.5% → New rate: 6.5%\n• Monthly savings: $250\n• Closing costs: $9,000\n• Break-even: 9,000 ÷ 250 = 36 months\n\nIf you plan to stay 36+ months → refinance. If moving sooner → skip.',
  tip:'No-closing-cost refinance trades zero upfront fees for a slightly higher rate — good if you might move soon.' },

{ id:'fin-c05', cat:'Credit', sub:'Debt', diff:'easy', type:'definition',
  front:'What is the debt avalanche method?',
  back:'Pay minimum payments on ALL debts, then put every extra dollar toward the HIGHEST INTEREST RATE debt first.\n\nOnce that\'s paid off → redirect its minimum + extra to the next highest rate.\n\nMathematically optimal: saves the most total interest over the payoff period.\n\nComparison: Debt Snowball targets SMALLEST BALANCE first — psychologically easier but costs more interest.',
  tip:'Which method is best? The one you\'ll actually complete. Use snowball if you need wins to stay motivated.' },

{ id:'fin-c06', cat:'Credit', sub:'Debt', diff:'medium', type:'application',
  front:'You have $5,000 in credit card debt at 24% APR. You pay only the minimum ($100/month). How long to pay it off and how much interest do you pay?',
  back:'Approximately 7–8 years to pay off.\n\nTotal interest paid: ~$3,800\n\nYou\'ve now paid $8,800 for $5,000 worth of purchases — 76% more than the original amount.\n\nAt $500/month instead: Paid off in 11 months, total interest: ~$560.',
  tip:'Credit card debt at 20%+ APR should always be your first financial priority to eliminate.' },

{ id:'fin-c07', cat:'Credit', sub:'Building Credit', diff:'easy', type:'definition',
  front:'What is a credit freeze and why is it the best identity theft protection?',
  back:'A credit freeze (security freeze) prevents anyone from opening new credit in your name — including you.\n\nFree since 2018 at all three bureaus (Equifax, Experian, TransUnion).\n\nCan be temporarily unfrozen online in minutes when you need to apply for credit.\n\nFreeze at: Equifax, Experian, TransUnion + NCTUE, ChexSystems, Innovis.',
  tip:'Once set, freeze is the single most effective identity theft prevention available. Everyone should have one.' },

{ id:'fin-c08', cat:'Credit', sub:'Student Loans', diff:'medium', type:'definition',
  front:'What is PSLF and who qualifies?',
  back:'Public Service Loan Forgiveness:\n\n10 years of full-time employment at a government or 501(c)(3) nonprofit + 120 qualifying monthly IDR plan payments = remaining federal student loan balance forgiven TAX-FREE.\n\nQualifying employers: Federal/state/local government, public schools, hospitals, most nonprofits.\n\nMust be on an Income-Driven Repayment plan (SAVE, PAYE, IBR, or ICR).',
  tip:'PSLF is the single best student loan benefit for eligible borrowers — often forgives $100K–$300K tax-free.' },

{ id:'fin-c09', cat:'Credit', sub:'Credit Cards', diff:'medium', type:'application',
  front:'What is the most financially optimal way to use a rewards credit card?',
  back:'1. Use the card for ALL purchases (maximizes rewards)\n2. Pay the FULL STATEMENT BALANCE every month by the due date\n3. Never carry a balance (24% APR wipes out any rewards)\n4. Choose the right card for your spending (2% flat cash back OR category-specific cards)\n\nAt 2% cash back on $3,000/month spending = $720/year tax-free reward.',
  tip:'A single month of carrying a balance at 24% APR can cost more than an entire year of rewards.' },

{ id:'fin-c10', cat:'Credit', sub:'DTI', diff:'medium', type:'definition',
  front:'What is debt-to-income ratio (DTI) and what do lenders require?',
  back:'DTI = Total Monthly Debt Payments ÷ Gross Monthly Income\n\nTwo types:\n• Front-end DTI: Housing payment only → lenders prefer below 28%\n• Back-end DTI: ALL debt payments → conventional lenders require below 43%\n\nExample: $8K income, $3,200 in total monthly debt payments → DTI = 40%',
  tip:'To improve DTI: pay off small loans entirely (removes the monthly payment) before applying for a mortgage.' },

// ── BANKING ────────────────────────────────────────────────────────────────────
{ id:'fin-b01', cat:'Banking', sub:'Accounts', diff:'easy', type:'definition',
  front:'What is FDIC insurance and what are its limits?',
  back:'Federal Deposit Insurance Corporation — insures deposits at member banks up to:\n\n$250,000 per depositor, per bank, per ownership category\n\nOwnership categories are SEPARATE:\n• Individual account: $250K\n• Joint account: $250K per co-owner ($500K for 2 owners)\n• IRA/retirement: $250K\n\nTotal possible coverage at ONE bank for a couple: $1M+',
  tip:'Credit unions have identical protection through NCUA — same $250K limits.' },

{ id:'fin-b02', cat:'Banking', sub:'Savings', diff:'easy', type:'application',
  front:'$50,000 in a big bank savings account at 0.06% vs. an online HYSA at 4.5%. What is the annual difference?',
  back:'Big bank: $50,000 × 0.06% = $30/year\n\nHigh-Yield Savings Account: $50,000 × 4.5% = $2,250/year\n\nDifference: $2,220/year — for the SAME FDIC-insured safety.\n\nOver 5 years: ~$11,000 extra earned — simply by switching to an online bank.',
  tip:'Ally, Marcus, Discover Bank, and AmEx Savings consistently offer top HYSA rates. Compare monthly.' },

{ id:'fin-b03', cat:'Banking', sub:'Savings', diff:'medium', type:'definition',
  front:'What is a CD ladder and why is it useful?',
  back:'A CD ladder splits savings across multiple CDs with staggered maturities (1, 2, 3, 5 years).\n\nBenefits:\n• Earns longer-term rates while maintaining access to funds regularly\n• As each CD matures, reinvest at prevailing rates\n• Eliminates the risk of locking ALL money at one rate\n\nExample: $40K split into four $10K CDs maturing in 1, 2, 3, 5 years.',
  tip:'No-penalty CDs allow early withdrawal without penalty — more flexibility at slightly lower rates.' },

{ id:'fin-b04', cat:'Banking', sub:'Products', diff:'medium', type:'definition',
  front:'What are I-Bonds and what makes them unique?',
  back:'Series I Savings Bonds — US government savings bonds with interest that adjusts with inflation.\n\nRate = Fixed rate (set at purchase) + Inflation rate (adjusted every 6 months)\n\nSpecial features:\n• Cannot redeem for 12 months (1-year lock-up)\n• Redeem between 1–5 years: forfeit 3 months of interest\n• 30-year maximum hold\n• State and local tax exempt\n• Federal tax deferred until redemption\n\nPurchase limit: $10,000/person/year at TreasuryDirect.gov',
  tip:'In high-inflation periods, I-Bond rates can reach 7–9% — often the best risk-free rate available.' },

{ id:'fin-b05', cat:'Banking', sub:'Fees', diff:'easy', type:'concept',
  front:'Name 4 common banking fees and how to eliminate each one.',
  back:'1. Monthly maintenance fee ($4–$35) → Switch to online bank or meet waiver requirements\n\n2. Overdraft fee ($25–$38/each) → Use banks with no overdraft fees (Ally, Capital One)\n\n3. ATM fees ($5–$10/visit) → Schwab Bank reimburses all ATM fees worldwide\n\n4. Foreign transaction fees (1–3%) → Use no-FTF travel cards (Chase Sapphire, Cap One Venture)',
  tip:'Average American pays ~$280/year in bank fees. All avoidable with the right accounts.' },

{ id:'fin-b06', cat:'Banking', sub:'Products', diff:'medium', type:'definition',
  front:'What is the difference between an ACH transfer and a wire transfer?',
  back:'ACH (Automated Clearing House):\n• Free, 1–3 business days\n• Reversible — can be recalled\n• Used for: payroll, bills, routine transfers\n\nWire Transfer:\n• $15–$50 fee, same-day settlement\n• IRREVOCABLE — cannot be recalled\n• Used for: real estate closings, large business payments\n\nWire fraud: Never send wires based on emailed instructions — always call to verify.',
  tip:'FedNow (2023): Instant 24/7/365 transfers — will eventually replace routine wire transfers.' },

{ id:'fin-b07', cat:'Banking', sub:'Federal Reserve', diff:'medium', type:'definition',
  front:'What is the Federal Reserve\'s dual mandate and its primary tool?',
  back:'Dual mandate from Congress:\n1. Maximum employment\n2. Price stability (2% inflation target)\n\nPrimary tool: Federal Funds Rate — the overnight rate banks charge each other for reserves.\n\nWhen inflation is high → Fed raises rates (slows economy, reduces inflation)\nWhen unemployment rises → Fed cuts rates (stimulates economy)',
  tip:'When the Fed raises rates, mortgage rates, car loans, and credit card rates ALL rise.' },

// ── INSURANCE ──────────────────────────────────────────────────────────────────
{ id:'fin-n01', cat:'Insurance', sub:'Life', diff:'easy', type:'definition',
  front:'What is the difference between term and whole life insurance?',
  back:'Term Life:\n• Covers specific period (10/20/30 years)\n• Pure death benefit — no cash value\n• Inexpensive: $1M/30yr ≈ $50–80/month at age 35\n• Best for: most families\n\nWhole Life:\n• Permanent coverage for life\n• Builds cash value (earning 2–4%)\n• Premiums 5–15× more expensive than term\n• Usually NOT the best financial choice for most people',
  tip:'"Buy term and invest the difference" almost always outperforms whole life over 30 years.' },

{ id:'fin-n02', cat:'Insurance', sub:'Life', diff:'medium', type:'application',
  front:'How much life insurance do you need?',
  back:'Rule of thumb: 10–12× your annual income\n\nMore precise calculation:\nIncome replacement (years until financial independence × salary)\n+ Pay off all debt (mortgage, car, etc.)\n+ College education for children\n+ Final expenses ($15,000–$25,000)\n− Existing savings/investments\n\n= Your coverage need',
  tip:'Need life insurance only if others financially depend on your income. Singles without dependents usually don\'t need it.' },

{ id:'fin-n03', cat:'Insurance', sub:'Health', diff:'easy', type:'definition',
  front:'What is the difference between a deductible, copay, and coinsurance?',
  back:'Deductible: What YOU pay first before insurance starts. ($3,000 deductible = you pay first $3,000 of medical costs)\n\nCopay: Fixed amount per visit. ($30 for primary care, $50 for specialist)\n\nCoinsurance: Your percentage AFTER meeting deductible. (20% coinsurance = insurance pays 80%, you pay 20%)\n\nOut-of-pocket maximum: The MOST you pay in a year. After this, insurance covers 100%.',
  tip:'2024 ACA out-of-pocket maximum: $9,450 (individual). After this, you pay nothing for covered care.' },

{ id:'fin-n04', cat:'Insurance', sub:'Health', diff:'medium', type:'definition',
  front:'What is an HSA and what makes it the most tax-advantaged account available?',
  back:'Health Savings Account — paired with a High-Deductible Health Plan (HDHP).\n\nTriple tax advantage:\n1. Contributions are tax-DEDUCTIBLE (reduces income now)\n2. Growth is tax-FREE\n3. Withdrawals for medical expenses are tax-FREE\n\n2024 limits: $4,150 (self) / $8,300 (family)\n\nAfter 65: withdraw for any purpose (taxed like Traditional IRA).',
  tip:'Invest HSA funds in index funds and let them grow. Pay medical expenses out-of-pocket now if you can afford it.' },

{ id:'fin-n05', cat:'Insurance', sub:'Auto', diff:'easy', type:'definition',
  front:'What do the numbers "100/300/100" mean on an auto insurance policy?',
  back:'Liability coverage limits:\n\n• $100,000 — Maximum per PERSON for bodily injury\n• $300,000 — Maximum per ACCIDENT for bodily injury\n• $100,000 — Maximum for property damage\n\nMost states require much lower minimums (25/50/25) — dangerously inadequate.\n\nA serious multi-person accident can easily cost $1M+ in claims. Carry 100/300/100 minimum.',
  tip:'Add an umbrella policy ($1M for ~$200/year) to cover catastrophic liability above these limits.' },

{ id:'fin-n06', cat:'Insurance', sub:'Property', diff:'medium', type:'application',
  front:'What does standard homeowners insurance NOT cover, and what do you need to add separately?',
  back:'Standard policies EXCLUDE:\n• Flood damage → Requires separate NFIP or private flood policy\n• Earthquake damage → Requires separate earthquake policy\n• Sewer backup → Add as endorsement (~$75/year)\n• Business activities → Add business rider or separate policy\n\nMost homeowners don\'t realize they have no flood coverage until water is in the basement.',
  tip:'40% of NFIP flood claims come from properties OUTSIDE designated high-risk flood zones — everyone is at risk.' },

{ id:'fin-n07', cat:'Insurance', sub:'Disability', diff:'medium', type:'definition',
  front:'What is "own-occupation" vs "any-occupation" disability insurance and why does the distinction matter enormously?',
  back:'Own-occupation: You are disabled if you cannot perform the duties of YOUR SPECIFIC occupation.\n\nA surgeon who loses a hand → disabled even if physically able to work a desk job.\n\nAny-occupation: You must be unable to perform ANY occupation for which you\'re reasonably suited.\n\nThat same surgeon would NOT qualify as disabled because they could work in another medical role.\n\nAlways seek own-occupation definition — it\'s dramatically more protective.',
  tip:'1 in 4 of today\'s 20-year-olds will become disabled before retirement. Disability insurance is often more important than life insurance.' },

{ id:'fin-n08', cat:'Insurance', sub:'Medicare', diff:'medium', type:'definition',
  front:'Why does Original Medicare (Parts A and B) require supplemental insurance?',
  back:'The dangerous gap: Medicare Part B pays 80% of covered costs — but there is NO OUT-OF-POCKET MAXIMUM.\n\n$500,000 hospitalization → you owe $100,000 with no cap.\n\nSolution: Either\n• Medicare Advantage (replaces Original Medicare, includes a cap) OR\n• Medigap Plan G (supplements Original, fills most gaps, covers any provider nationwide)\n\nEvery Medicare enrollee needs one of these.',
  tip:'Medigap enrollment without health screening is only guaranteed during your 6-month open enrollment window at 65.' },

{ id:'fin-n09', cat:'Insurance', sub:'Umbrella', diff:'easy', type:'application',
  front:'Why should anyone with $300,000+ in net worth have an umbrella policy?',
  back:'Umbrella insurance provides $1–5M in additional liability coverage ABOVE your auto and homeowners policy limits.\n\nCost: $1M umbrella ≈ $150–$350/year — extraordinarily cheap for the protection.\n\nCovers:\n• Auto accidents exceeding policy limits\n• Injury on your property\n• Libel/slander (not in standard home policies)\n• Rental property liability\n\nWithout umbrella: a $600K lawsuit beyond your $300K auto limit = personal asset seizure.',
  tip:'Everyone with a home, savings, teenage drivers, pool, or dog should have a $1M umbrella.' },

{ id:'fin-n10', cat:'Insurance', sub:'Life', diff:'hard', type:'concept',
  front:'What are the situations where permanent (whole) life insurance IS the right choice?',
  back:'Permanent insurance makes sense for:\n\n1. Estate planning — Using death benefit to pay estate taxes for very large estates (above $13.6M)\n\n2. Business succession — Key person insurance, funded buy-sell agreements\n\n3. Pension maximization — Taking single-life (higher) pension + using life insurance to protect surviving spouse\n\n4. PPLI (Private Placement) — Tax-advantaged wrapper for very high-net-worth investors who\'ve maxed all other vehicles\n\nFor the vast majority of families, term life is the correct choice.',
  tip:'If a whole life policy is being pitched primarily as an "investment," that\'s a red flag.' },

// ── ADDITIONAL CROSS-SUBJECT CARDS ────────────────────────────────────────────
{ id:'fin-x01', cat:'Investing', sub:'Fundamentals', diff:'medium', type:'concept',
  front:'What is an "economic moat" and what are its main sources?',
  back:'A durable competitive advantage that protects a company\'s above-average returns from competition.\n\nSources of moat:\n• Network effects (Visa, Facebook — more users = more valuable)\n• Switching costs (Salesforce, Bloomberg Terminal — painful to leave)\n• Cost advantages (Amazon, Costco — structural cost leadership)\n• Intangible assets (Apple brands, pharmaceutical patents)\n\nCompanies with wide moats compound value for decades.',
  tip:'"It is far better to buy a wonderful company at a fair price than a fair company at a wonderful price." — Buffett' },

{ id:'fin-x02', cat:'Taxes', sub:'Planning', diff:'medium', type:'application',
  front:'What is "asset location" and why can it add thousands to your returns without changing what you own?',
  back:'Placing each asset type in the most tax-efficient account type:\n\nIn TAX-ADVANTAGED accounts (IRA, 401k):\n• Bonds (ordinary income dividends → taxed at high rates otherwise)\n• REITs (dividends taxed as ordinary income)\n• Actively managed funds (high turnover = capital gains)\n\nIn TAXABLE accounts:\n• Broad index funds (minimal distributions)\n• Municipal bonds (interest already tax-exempt)\n\nResult: Same investments, same allocation — more after-tax return.',
  tip:'Moving bonds from taxable to IRA can save $1,000–$3,000/year in taxes on a $200K bond position.' },

{ id:'fin-x03', cat:'Credit', sub:'Credit Cards', diff:'easy', type:'definition',
  front:'What is the credit card grace period and what happens if you carry a balance?',
  back:'Grace period: The time between statement closing date and payment due date (~21–25 days).\n\nIf you pay your FULL statement balance by the due date:\n→ Zero interest charged for that billing cycle\n\nIf you carry ANY balance:\n→ Grace period DISAPPEARS\n→ Interest accrues on ALL purchases from the DAY you made them\n→ Not just on the remaining balance\n\nThis is why carrying even a small balance is very expensive.',
  tip:'Always pay the STATEMENT balance (not just the minimum) to maintain your grace period.' },

{ id:'fin-x04', cat:'Banking', sub:'Savings', diff:'hard', type:'concept',
  front:'What is the "Rule of 72" and how do you apply it?',
  back:'Divide 72 by your annual return rate to estimate how many years to double your money.\n\nExamples:\n• 72 ÷ 4% = 18 years to double (HYSA rate)\n• 72 ÷ 7% = ~10 years to double (stock market average)\n• 72 ÷ 10% = 7.2 years to double\n• 72 ÷ 24% = 3 years to double (credit card APR — works in reverse on debt!)',
  tip:'The Rule of 72 also works in reverse: debt at 24% APR DOUBLES what you owe every 3 years if you don\'t pay it.' },

{ id:'fin-x05', cat:'Investing', sub:'Strategy', diff:'easy', type:'definition',
  front:'What does "diversification" mean in investing and what are its limits?',
  back:'Diversification = spreading investments across assets that don\'t move in perfect lockstep, reducing overall portfolio risk without necessarily reducing expected return.\n\nPowerful diversification:\n• Different companies within a sector\n• Different sectors of the economy\n• International vs US stocks\n• Stocks vs bonds\n\nLimits: During global crises (2008, 2020), correlations spike — nearly all assets fall together.',
  tip:'A US total market index fund gives instant diversification across 3,500+ companies in a single purchase.' },

{ id:'fin-x06', cat:'Insurance', sub:'Property', diff:'easy', type:'definition',
  front:'What is Actual Cash Value (ACV) vs. Replacement Cost Value (RCV) in homeowners insurance?',
  back:'ACV: Pays the current market value of damaged property — original cost MINUS depreciation.\n\nExample: 5-year-old TV originally worth $1,000 → ACV might be $300.\n\nRCV: Pays what it costs to replace the item with a NEW equivalent today.\n\nSame TV → RCV pays $1,000 for a new comparable TV.\n\nRCV coverage costs slightly more in premiums but is dramatically better when you file a claim.',
  tip:'Always choose Replacement Cost Value coverage for both the dwelling and personal property.' },

{ id:'fin-x07', cat:'Taxes', sub:'Basics', diff:'medium', type:'application',
  front:'What is "above-the-line" vs "below-the-line" deductions and why does the distinction matter?',
  back:'Above-the-line (adjustments to income): Reduce your AGI BEFORE calculating standard/itemized deductions.\n\nExamples: IRA contributions, HSA contributions, student loan interest, 50% of SE tax, alimony\n\nBelow-the-line (itemized): Can only deduct if you itemize (exceed standard deduction).\n\nWhy it matters: Above-the-line deductions ALWAYS help, regardless of whether you itemize. They also lower your AGI, which determines eligibility for other deductions and credits.',
  tip:'Reducing AGI is often more valuable than just reducing taxable income — it unlocks other benefits.' },

{ id:'fin-x08', cat:'Credit', sub:'Mortgages', diff:'medium', type:'definition',
  front:'What is amortization and how does it affect the math on a 30-year mortgage?',
  back:'Amortization = Spreading loan repayment over time via fixed payments that are mostly interest early and mostly principal later.\n\nOn a $400,000 mortgage at 7%:\n• Year 1: Each $2,661 payment = ~$2,333 interest + ~$328 principal\n• Year 30: Each $2,661 payment = ~$154 interest + ~$2,507 principal\n\nTotal interest paid over 30 years: ~$558,000 — MORE than the original loan amount.',
  tip:'Making just 1 extra payment per year can reduce a 30-year mortgage by 4–6 years.' },

{ id:'fin-x09', cat:'Banking', sub:'Federal Reserve', diff:'hard', type:'concept',
  front:'What is Quantitative Easing (QE) and what does it do to financial markets?',
  back:'QE = The Federal Reserve DIRECTLY PURCHASES Treasury bonds and mortgage-backed securities.\n\nEffect: Injects reserves into the banking system, drives down long-term yields, forces investors into higher-risk assets.\n\nThe Fed\'s balance sheet grew from $900B (pre-2008) to $9T (2022 peak).\n\nCriticism: QE inflated asset prices (stocks, real estate) while increasing wealth inequality.\n\nQT (Quantitative Tightening) = Reverse process, tightens financial conditions.',
  tip:'Every QE and QT cycle creates ripple effects across stocks, bonds, and real estate markets.' },

{ id:'fin-x10', cat:'Investing', sub:'Behavior', diff:'medium', type:'concept',
  front:'What is "recency bias" and how does it specifically harm investors?',
  back:'Recency bias = Overweighting recent events when making predictions.\n\nIn investing:\n• After a bull market → Investors assume it continues → Buy at peaks\n• After a crash → Investors fear further decline → Sell at bottoms\n\nBoth behaviors produce exactly wrong timing:\n✗ Buying after a long run (overpriced)\n✗ Selling during a crash (locking in losses)\n\nFix: Systematic investing (automating contributions) eliminates timing decisions entirely.',
  tip:'The news cycle amplifies recency bias — bear market news makes bottoms feel permanent; bull market news makes peaks feel eternal.' },

]
