import e from "express";
import db from "../../plugin/db.js";
const DeletePost = (async (req, res) => {
    try {
        const id = req.params.id
        const [[al]] = await db.query("SELECT * FROM users WHERE id = ?", [id])
        const { name } = al
        if (al.length === 0) {
            return res.status(305).json({ "err": "id undfind please try again" })
        }
        const { post, com } = req.body
        const deletepost = await db.query("DELETE FROM posts WHERE post = ? AND com = ? AND user_id = ?", [post, com, id])
        if (deletepost) {
            return res.status(201).json({ "message": "Delete post  finsh", "go privet profile": ` please go to /users/${name}  to see change`, "to create more": `to create a new post go /users/post/${id}` })
        }
    } catch (err) {
        // console.error(err)
        return res.status(401).json({ err: "please enter anthor name and pass", post: post, com: com, user_id: id })

    }
})
export default DeletePost 