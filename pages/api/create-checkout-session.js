export default function handler(req, res) {
  res.status(503).json({ error: 'Stripe payments not yet configured.' })
}
