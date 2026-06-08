import e from "express";
import auth from "../../plugin/auth";
import db from "../../plugin/db";
import er from "../../plugin/joi";
  const loginUser=async(req,res)=>{
  try {
    const { name, pass } = req.body
    const [findUser] = await db.query("SELECT name,pass FROM users WHERE name=? AND pass=?", [name, pass])
    if (findUser.length === 0) {
      return res.status(401).json({ "error": "User UndFind" })
    }
    if (findUser.length > 0) {
      return res.status(202).json({
        "message": "login user sucessfull",
        name: name,
        pass: pass
      })
    }
  } catch (err) {
    console.error(err)
    return res.status(401).json({ "error": "Internal Server Erorr" })
  }
}

export default loginUser