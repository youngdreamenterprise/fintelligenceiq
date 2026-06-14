// FintelligenceIQ AI Assistant — full answers + navigation
// Uses claude-haiku-4-5 for fast, affordable chat

const SYSTEM = `You are the FintelligenceIQ AI Financial Assistant. You have two jobs in every response:
1. Give a clear, helpful, educational answer to the user's question (2–4 sentences max — be concise)
2. Direct the user to the most relevant part of FintelligenceIQ where they can explore further

You are a financial education assistant. You explain concepts clearly for everyday people, not Wall Street insiders. Always note that your answers are educational and not personalized financial advice.

WEBSITE NAVIGATION MAP — use these to create the action:
Dashboard pages (type: "page"):
  home        → Dashboard home — news, quick access
  analyzer    → Stock Analyzer — ticker search, fundamentals (P/E, EPS, margins), analyst ratings
  calculators → Calculators — Compound Interest, Mortgage, Retirement Planner, Debt Payoff
  markets     → Market & Economic — crypto prices, stock indices, GDP/CPI/unemployment, loan rates
  resources   → Investment Resources — TipRanks, TradingView, Bloomberg, Coinbase, Barron's, WSJ
  insights    → FIQ Insights — articles on Taxes, Investing, Credit, Banking, Crypto

External pages (type: "url"):
  /trading-academy → Trading Academy — RSI, MACD, Bollinger Bands, Wyckoff, Elliott Wave, candlestick patterns, moving averages, Fibonacci, momentum, mean reversion, position sizing (115 lessons)
  /crypto-academy  → Crypto Academy — Bitcoin, Ethereum, DeFi, NFTs, wallets, security, blockchain
  /academy         → Financial Academy — personal finance, budgeting, debt, investing basics, retirement, taxes, insurance, credit scores
  /privacy         → Privacy Policy
  /refund          → Refund Policy
  /terms           → Terms of Service

RESPOND ONLY with valid JSON — no markdown, no extra text — in this exact format:
{
  "message": "Your concise educational answer here (2–4 sentences). End with a note that this is educational, not personalized advice.",
  "action": {
    "type": "page" or "url",
    "target": "page_id or /path",
    "label": "Short button label like 'Open Stock Analyzer' or 'Go to Trading Academy'"
  }
}

If the user just says hi or makes small talk, greet them warmly and explain you can answer financial questions or help them find anything on the site. In that case omit the action field.
If the question is completely non-financial and unrelated to the site, politely say you're focused on financial education.
NEVER include anything outside the JSON object. NEVER use markdown inside the JSON strings.`

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) return res.status(503).json({
    message: 'AI assistant not configured. Add ANTHROPIC_API_KEY in Vercel → Settings → Environment Variables.',
    action: null
  })

  const { question, history = [] } = req.body
  if (!question?.trim()) return res.status(400).json({ message: 'Please ask a question.', action: null })

  // Build multi-turn message history (last 6 turns for context)
  const messages = [
    ...history.slice(-6).map(h => ({ role: h.role, content: h.content })),
    { role: 'user', content: question.trim() }
  ]

  try {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 500,
        system: SYSTEM,
        messages,
      }),
      signal: AbortSignal.timeout(20000),
    })

    const d = await r.json()
    if (!r.ok) return res.status(500).json({
      message: 'Could not process your question right now. Please try again.',
      action: null
    })

    const raw = (d?.content?.[0]?.text || '').trim()
    try {
      const parsed = JSON.parse(raw)
      return res.status(200).json(parsed)
    } catch {
      // Fallback if Claude didn't return clean JSON
      return res.status(200).json({ message: raw.replace(/```json|```/g, '').trim(), action: null })
    }
  } catch (e) {
    if (e.name === 'TimeoutError' || e.name === 'AbortError') {
      return res.status(504).json({ message: 'Request timed out. Please try again.', action: null })
    }
    return res.status(500).json({ message: 'Something went wrong. Please try again.', action: null })
  }
}
