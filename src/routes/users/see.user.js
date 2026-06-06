import e from "express";
import db from "../../plugin/db.js";
const seeuser = e.Router()
seeuser.use(e.json())
seeuser.post('/admin', async (req, res) => {
    try {
        const [CreateUser] = await db.query("SELECT * FROM `users`")
        const { admin1 } = req.body
        const hashkeysec = process.env.ADD
        if (admin1 != hashkeysec) {
            return res.status(401).json({"err":"Try Again"})
        }
        else {
            return  res.json(CreateUser)
        }
    } catch (err) {
        console.error(err)
        res.status(401).json({ "err": " please enter the hash of secret of pass key" })
    }
})
export default seeuser