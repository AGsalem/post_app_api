import e from "express";
import db from "../../plugin/db.js";
const UpdatePost = ( async (req, res) => {
    try {
        
        const [al] = await db.query("SELECT * FROM users WHERE id = ?", [id])
        if (al.length === 0) {
            return res.status(305).json({ "err": "id undfind please try again" })
        }
        const { post, com } = req.body
        const update = await db.query('UPDATE posts SET post = ? , com = ? ,user_id = ? ', [post, com, id])
        return res.status(201).json({
            "update post finsh": "ok",
            post: post,
            com: com
        })
    } catch (err) {
        console.error(err)
        return res.status(401).json({ err: "please enter anthor name and pass" })
    }

})
export default UpdatePost 