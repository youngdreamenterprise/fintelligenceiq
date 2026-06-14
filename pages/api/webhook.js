export default function handler(req, res) {
  res.status(503).json({ error: 'Stripe webhook not yet configured.' })
}
