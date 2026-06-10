import auth from "../../plugin/auth.js";
import jwt from "jsonwebtoken"
import db from "../../plugin/db.js";
const loginUser = async(req, res) => {
  try {
    const toke=req.cookies.token
  if(!toke){
    return res.status(201).json({"message":"errr"})
  }
    const { name, pass } = req.body
    const [findUser] = await db.query("SELECT name,pass FROM users WHERE name=? AND pass=?", [name, pass])
    if (findUser.length === 0) {
      return res.status(401).json({ "error": "User UndFind" })
    }
         const token=jwt.sign({name},process.env.TOKEN)

    if (findUser.length > 0) {
      return res.status(202).json({
        "message": "login user sucessfull",
        name: name,
        pass: pass,
        token:token
      })
    }
  } catch (err) {
    // console.error(err)
    return res.status(500).json({ "error": "Internal Server Erorr" })
  }
}
export default loginUser