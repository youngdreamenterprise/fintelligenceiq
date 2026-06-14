export default function handler(req, res) {
  res.status(503).json({ error: 'Stripe billing portal not yet configured.' })
}
