export default function handler(req, res) {
  // 设置 CORS 响应头
  res.setHeader("Access-Control-Allow-Origin", "https://3ptw.blog");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // 处理预检请求
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  // 正常逻辑
  if (req.method === "POST") {
    const { comment } = req.body || {};
    res.status(201).json({ message: "评论已收到", comment });
  } else {
    res.status(200).json({ comments: ["第一条评论", "第二条评论"] });
  }
}
