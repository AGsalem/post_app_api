import db from "../../plugin/db.js";
// دية ادمن للمستخدم للتحكم في صلاحيتة صفحة بس
const seeuser = async (req, res) => {
    try {
        const [CreateUser] = await db.query("SELECT * FROM `users`")
        const { admin } = req.body || {}
        const hashkeysec = process.env.ADD
        console.log(admin)
        console.log(hashkeysec)
        if (admin != hashkeysec) {
            return res.status(401).json({ "err": "Try Again" })
        }
        else if (admin == hashkeysec) {
            return res.json(CreateUser)
        }
    } catch (err) {
       
        res.status(500).json({ "err": " please enter the hash of secret of pass key" })
    }
}
export default seeuser
