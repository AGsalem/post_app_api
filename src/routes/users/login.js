import e from "express";
import db from "../../plugin/db";
import er from "../../plugin/joi";
const login=e.Router()
login.use(e.json())




function auth(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.json("error in token");
  jwt.verify(token, process.env.SMS_SECRET, (err, user) => {
    if (err) return res.json({ TokenError: "erorr in token not verify" });
    req.user = user;
    next();
  });
}
// معرفة ان المستخدم موجود اساسا ولا لا
login.post('/login',er,async(req,res)=>{
const {name,pass}=req.body
const [seeuser]=await db.query('SELECT * FROM users WHERE name=? ,pass=?',[name,pass])
if(seeuser.length ===0){
    return res.status(401).json("user undfind")
}
})
export default login