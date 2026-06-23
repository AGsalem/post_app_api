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
        // نجيب id المستخدم من بعد انشاء الحساب فورا
        const [[findID]] = await db.query('SELECT id FROM users WHERE name=?', [name])
        const { id } = findID
        if (!create_user) {
            return res.status(400).json({ "message": "err" })
        }
        res.cookie('token', token, {
            httpOnly: true,
            secure: true,
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        return res.status(201).json({
             "create Account Successfully":`thanke you  ${name} for you to choose my wevsite postapp `,
            name: name,
            id: id,
            token: token,
            "message":`please enter url /users/${name} to see you privet page `,
        })
    } catch (err) {
        return ISE
    }
}
export default CreateUser
