import auth from "../../plugin/auth.js";
import jwt from "jsonwebtoken"
import db from "../../plugin/db.js";
const loginUser = async (req, res) => {

  const { name, pass } = req.body
  const [findUser] = await db.query("SELECT name,pass FROM users WHERE name=? AND pass=?", [name, pass])
  const restoken = req.cookies.token
  const vtoken = jwt.verify(restoken, process.env.TOKEN)
  const token = jwt.sign({ name }, process.env.TOKEN)

  try {
    if (findUser.length === 0) {
      return res.status(401).json({ "error": "User UndFind" })
    }
    // البحث عن لو كان في توكن قبل كدة نحذفة 
    if (restoken.length >= 1 || vtoken.length >= 1) {
      res.clearCookie(restoken, process.env.TOKEN)
    }
    if (findUser.length > 0) {
      res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        maxAge: 7 * 24 * 60 * 60 * 1000
      }
      )

      return res.status(202).json({
        "message": "login user sucessfull",
        name: name,
        token: token
      })
    }
  } catch (err) {
    console.error(err)
    return res.status(500).json({ "error": "Internal Server Erorr" })
  }
}
export default loginUser