import db from "../../plugin/db.js";
const UpdatePost = (async (req, res) => {
    try {
        const { id } = req.ida
        const [al] = await db.query("SELECT * FROM users WHERE id = ?", [id])
        if (al.length === 0) {
            // console.log(al)
            // console.log(id)
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