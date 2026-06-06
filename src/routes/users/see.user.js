import e from "express";
import db from "../../plugin/db.js";
const seeuser = e.Router()
seeuser.get('/users', async (req, res) => {
    try {
        const [CreateUser] = await db.query("SELECT * FROM `users`")
        console.log(CreateUser)
        res.json(CreateUser)
    } catch (err) {
        // console.error(err)
        res.status(401).json({"err":"internal server error"})
    }
})
// console.log("ws")

export default seeuser