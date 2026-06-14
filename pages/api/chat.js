// WealthChatbot — powered by Anthropic Claude
// Uses ANTHROPIC_API_KEY (server-side only, never exposed to the browser)
// Add this key in Vercel → Settings → Environment Variables

const ANTHROPIC_API = 'https://api.anthropic.com/v1/messages'
const MODEL         = 'claude-haiku-4-5-20251001'   // fast + affordable for chatbot use
const MAX_TOKENS    = 1024

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    return res.status(503).json({
      error: 'AI assistant is not configured. Add ANTHROPIC_API_KEY in Vercel → Settings → Environment Variables.'
    })
  }

  const { messages, system } = req.body
  if (!messages?.length) return res.status(400).json({ error: 'No messages provided' })

  // Convert to Anthropic format: [{ role: 'user'|'assistant', content: string }]
  // Anthropic requires alternating user/assistant turns, starting with user
  const anthropicMessages = messages.map(m => ({
    role:    m.role === 'assistant' ? 'assistant' : 'user',
    content: m.content,
  }))

  // Ensure the conversation starts with a user message
  if (anthropicMessages[0]?.role !== 'user') {
    return res.status(400).json({ error: 'Conversation must start with a user message.' })
  }

  const defaultSystem = `You are WealthIQ, a knowledgeable financial education assistant for the FintelligenceIQ platform. 
You help users understand trading strategies, financial concepts, market analysis, and investing principles.
Be concise, accurate, and educational. Always clarify that your responses are for educational purposes only, 
not personalized financial advice. When discussing specific trades or strategies, explain the underlying concepts clearly.`

  try {
    const r = await fetch(ANTHROPIC_API, {
      method: 'POST',
      headers: {
        'Content-Type':         'application/json',
        'x-api-key':            apiKey,
        'anthropic-version':    '2023-06-01',
      },
      body: JSON.stringify({
        model:      MODEL,
        max_tokens: MAX_TOKENS,
        system:     system || defaultSystem,
        messages:   anthropicMessages,
      }),
      signal: AbortSignal.timeout(30000),
    })

    const d = await r.json()

    if (!r.ok) {
      const errMsg = d?.error?.message || `API error ${r.status}`

      if (r.status === 401) {
        return res.status(401).json({
          error: 'Invalid API key. Check ANTHROPIC_API_KEY in Vercel → Settings → Environment Variables.'
        })
      }
      if (r.status === 429) {
        return res.status(429).json({
          error: 'Too many requests. Please wait a moment and try again.'
        })
      }
      if (r.status === 529) {
        return res.status(503).json({
          error: 'The AI service is temporarily overloaded. Please try again in a moment.'
        })
      }
      return res.status(r.status).json({ error: errMsg })
    }

    const text = d?.content?.[0]?.text || ''
    if (!text) return res.status(500).json({ error: 'Empty response from AI. Please try again.' })

    return res.status(200).json({ text })

  } catch (e) {
    if (e.name === 'TimeoutError' || e.name === 'AbortError') {
      return res.status(504).json({ error: 'Request timed out. Please try again.' })
    }
    return res.status(500).json({ error: e.message || 'Request failed. Please try again.' })
  }
}
