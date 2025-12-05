export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "https://3ptw.blog");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  res.status(200).json({ ok: true });
}
