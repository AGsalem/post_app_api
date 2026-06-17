// استدعائات
import db from "../../plugin/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
//عمل api انشاء حساب مع التأكد  
const CreateUser = async (req, res) => {
    try {
        const { name, pass } = req.body
        if(name == pass){
            return res.status(401).json({"message":"Please Don't Enter name = pass "})
        }
        const hash = bcrypt.hashSync(pass, 10)
        const token = jwt.sign({ name }, process.env.TOKEN)
        const create_user = await db.query("INSERT INTO `users` (`name`,`pass`) VALUES (?,?)", [name, pass])
        if (!create_user) {
            return res.status(400).json({ "message": "err" })
        }
        res.cookie('token', token, {
            httpOnly: true,
            secure:true,
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        return res.status(201).json({
            "message": "create Account SucessFull",
            name: name,
            token: token
        })
    } catch (err) {
        return res.status(500).json({ "err": "invaild name or pass pleas try again" })
    }
}
export default CreateUser
