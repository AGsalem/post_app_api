// استدعائات
import e from "express";
import db from "../../plugin/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import er from "../../plugin/joi.js";
// تعريفات
// const CreateUser = (e.Router())
// CreateUser.use(e.json())
//عمل apiانشاء حساب مع التأكد  
 const CreateUser = async (req, res) => {
    try {

        const { name, pass } = req.body
        // if (!name || !pass || name == pass || pass.length < 8 || name.length < 8) {
        //     return res.status(400).json({ "err": "  name < 8 or pass < 8 letter please try again" })
        // }
        const hash = bcrypt.hashSync(pass,10)
        const token = jwt.sign({ name, pass }, process.env.TOKEN)
        const create_user = await db.query("INSERT INTO `users` (`name`,`pass`) VALUES (?,?)", [name, pass])
        if (!create_user) {
            return res.status(401).json({ "message": "err" })
        }
        return res.status(201).json({
            "message": "create Account sucess",
            name: name,
            hash: hash,
            token: token
        })
    } catch (err) {
        // console.error(err)
        return res.status(401).json({ "err": "invaild name or pass pleas try again" })
    }
}
// استخراج
export default CreateUser
