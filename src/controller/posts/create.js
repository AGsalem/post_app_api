import db from "../../plugin/db.js";
import { ISE } from "../../types/error.js";
import { ida } from "../../types/p&c.js";
const CreatePost = (async (req, res) => {
    const id = ida(req.params.id)

    try {
        
        // نشوف هلid المستخدم موجود ولا لا 
        const [findIdForUsers] = await db.query("SELECT name,id FROM users WHERE id=? ", [id])
        const { post, com } = req.body
        const [createpost] = await db.query("INSERT INTO posts (post,com,user_id) VALUES(?,?,?)", [post, com, id])
        return res.status(201).json({ "message": "create post finsh ", post: post, com: com, id: id })
    } catch (err) {
        // console.error(err)
        return ISE(req,res)
    }
})
export default CreatePost 