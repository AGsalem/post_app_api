import jwt from "jsonwebtoken"
import db from "../../plugin/db.js";
import { ISE, UND } from "../../types/error.js";
const loginUser = async (req, res) => {

  const { name, pass } = req.item
  const restoken = req.cookies.token
  // const vtoken = jwt.verify(restoken, process.env.TOKEN)
  const token = jwt.sign({ name }, process.env.TOKEN)
  try {
    const [findUser] = await db.query("SELECT name,pass,id FROM users WHERE name=? AND pass=?", [name, pass])
    const [[findID]] = await db.query('SELECT id FROM users WHERE name =?', name)
    const { id } = findID
    console.log(id)
    if (findUser.length === 0) {
      return UND(req, res)
    }
    if (findUser.length > 0) {
      res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        maxAge: 7 * 24 * 60 * 60 * 1000
      }
      )

      return res.status(201).json({
        "Login Successful": `thanke you  ${name} for you to choose my wevsite postapp `,
        name: name,
        id: id,
        token: token,
        "message": `please enter url /users/${name} to see you privet page `,
      })
    }
  } catch (err) {
    // console.error(err)
    return ISE(req, res)
  }
}
export default loginUser