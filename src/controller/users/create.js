// استدعائات
import db from "../../plugin/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
//
import { EREQ, ISE } from "../../types/error.js";
//عمل api انشاء حساب مع التأكد  
const CreateUser = async (req, res) => {
    const { name, pass } = req.item
    if (!name || !pass) {
        return res.status(400).json("error")
    }
    const hash = bcrypt.hashSync(pass, 10)
    const token = jwt.sign({ name }, process.env.TOKEN)
    try {
        if (name == pass) {
            return EREQ
        }
        const create_user = await db.query("INSERT INTO `users` (`name`,`pass`) VALUES (?,?)", [name, pass])
        if (!create_user) {
            return res.status(400).json({ "message": "err" })
        }
        res.cookie('token', token, {
            httpOnly: true,
            secure: true,
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        return res.status(201).json({
            "message": "create Account SucessFull",
            name: name,
            token: token
        })
    } catch (err) {
        return ISE
    }
}
export default CreateUser
