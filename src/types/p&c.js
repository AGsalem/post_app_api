import jwt from "jsonwebtoken"
import db from "../plugin/db.js"
import { ISE, UND, BODY } from "./error.js"
// نعمل استعلام نجيب id للمستخدم 
export default async function tokens(req, res, next) {
    try {
        const id = req.params.id
        const [find_user_froId] = await db.query('SELECT id FROM users WHERE id=?', [id])
        const [[user]] = await db.query('SELECT name FROM users WHERE id=?', [id])
        const { name } = user
        if (find_user_froId.length === 0) {
            return UND(req, res)
        }
        else {
            req.ida = { id }
            const retoken = req.cookies.token
            const vtoken = jwt.verify(retoken, process.env.TOKEN)
            const a = vtoken.name
            if (!a) {

                return res.send("err")
            }
            if (!retoken || !vtoken || name != a) {

                return res.status(401).json({ "mess": "Unauthorized to Create post" })
            }
            const { post, com } = req.body
            if (!post || !com || post.length === 0 || com.length == 0) {
                return BODY(req, res)
            }
            req.post = { post, com }

            next()

        }
    } catch (err) {
        // console.error(err)
        return ISE(req, res)
    }

}
