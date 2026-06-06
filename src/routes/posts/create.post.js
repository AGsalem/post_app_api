import e from "express";
import db from "../../plugin/db.js";
const CreatePost = e.Router()
CreatePost.use(e.json())
CreatePost.post('/post/:id', async (req, res) => {
    try {
        const id = req.params.id
        const { post, com } = req.body
        const [createpost] = await db.query("INSERT INTO posts (post,com,user_id) VALUES(?,?,?)", [post, com, id])
        return res.status(201).json({ "message": "create post finsh ", post: post, com: com, id: id })
    } catch (err) {
        // console.error(err)
        return res.status(401).json({ "message": "Internal Server Error" })
    }
})
export default CreatePost 