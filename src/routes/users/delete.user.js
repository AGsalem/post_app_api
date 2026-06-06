import e from "express";
import db from "../../plugin/db.js";
const DeleteUser = e.Router()
DeleteUser.use(e.Router())
DeleteUser.delete('/users/:id', async (req, res) => {
    try {
        const id = req.params.id
        const { name, pass } = req.body
        const [al] = await db.query("SELECT * FROM users WHERE id = ?", [id])
        if (al.length === 0) {
            return res.status(305).json({ "err": "id undfind please try again" })
        }
        const deluse = await db.query("DELETE  FROM users WHERE name=? AND pass=? AND id=? ", [name, pass, id])
        if (deluse) {
            return res.status(201).json({
                "mes": "delete Account Sucessfull",
                name: name,
                pass: pass,
                id: id
            })
        }
        console.log("ok")
    } catch (err) {
        console.error(err)
return res.status(401).json('err')
    }
})
export default DeleteUser 