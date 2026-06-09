export default function auth(req, res, next) {
  // const authHeader = req.headers["authorization"];
  const token = res.cookies.token
  if (!token) return res.json("error in token");
  jwt.verify(token, process.env.TOKEN, (err, user) => {
    if (err){ return res.json({ TokenError: "erorr in token not verify" });}
    req.user = user;
    next();
  });
}
