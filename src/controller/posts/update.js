import db from "../../plugin/db.js";
const UpdatePost = (async (req, res) => {
    try {
        const { id } = req.ida
        const id_post = req.params.id_post
        const { post, com } = req.post

        console.log(id_post)
        const [[al]] = await db.query("SELECT name FROM users WHERE id = ?", [id])
        const [[find_post]] = await db.query("SELECT * FROM posts WHERE id = ?", [id_post])
        const [[SelectIdPost]] = await db.query('SELECT id ,user_id FROM posts WHERE id=? AND user_id=?', [id_post, id]);
        if (SelectIdPost.length === 0) {
            return res.status(300).json({ "error": "you must have any  posts to update " })
        }
        if (find_post.length === 0) {
            return res.status(301).json({ "erorr": "please create post you didn't have any posts " })
        } else {
            const { name } = al;
            if (al.length === 0) {
                // console.log(al)
                // console.log(id)
                return res.status(305).json({ "err": "id undfind please try again" })
            }
            const update = await db.query('UPDATE posts SET post = ? , com = ? ,user_id = ? WHERE id=? ', [post, com, id, id_post])
            return res.status(201).json({
                "update post finsh": "ok",
                post: post,
                com: com,
                id_user: id,
                id: id_post,
                "go privet profile user": `please go /users/${name} to see change`
            })
        }
    } catch (err) {
        // console.error(err)
        return res.status(401).json({ err: "please enter anthor name and pass" })
    }
})
export default UpdatePost 