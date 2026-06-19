import db from "../../plugin/db.js";
import {  ISE } from "../../types/error.js";
// دية ادمن للمستخدم للتحكم في صلاحيتة صفحة بس
const seeuser = async (req, res) => {
    try {
        // const [CreateUser] = await db.query("SELECT * FROM `users`")
        const { admin } = req.body || {}
        const hashkeysec = process.env.ADD
        // console.log(admin)
        // console.log(hashkeysec)
        if (admin != hashkeysec) {
            return res.status(401).json({ "err": "the password incorrect please enter 1234 to see all users and edit for him" })
        }
        else if (admin == hashkeysec) {
            // return res.json(CreateUser)
            return res.status(301).json({ "message": "error page undfind please go / " })
        }
    } catch (err) {

       return ISE(req,res)
    }
}
export default seeuser
