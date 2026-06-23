import db from "../../plugin/db.js";
import { ISE } from "../../types/error.js";
const CreatePost = (async (req, res) => {
    const { id } = req.ida
    console.log(id)
    if (id.length == 0) {
        return res.send("err")
    }
    const { post, com } = req.post
    if (!post || !com || post.length === 0 || com.length === 0) {
        return res.status(405).json({ "message": "please don't forget input do you want in post or comment " })
    }
    try {
        // نشوف هلid المستخدم موجود ولا لا 
        const [findIdForUsers] = await db.query("SELECT name,id FROM users WHERE id=? ", [id])
        if (findIdForUsers.length === 0) {
            return res.status(401).json({ "error": "user undfind", findIdForUsers })
        } else {
            const [createpost] = await db.query("INSERT INTO posts (post,com,user_id) VALUES(?,?,?)", [post, com, id])
            const [idpost] = await db.query("SELECT id FROM  posts WHERE user_id=?  and post =?", [id, post])
            const id_p  = idpost[0]
            const finsh=id_p.id
            return res.status(201).json({
                "message": "create post finsh ",
                post: post,
                com: com,
                id: id,
                "Notes": `to update post or delete go /post/${id}/${finsh}`
            })
        }
    } catch (err) {
        console.error(err)
        // return res.send("fsda")
        return ISE(req, res)
    }
})
export default CreatePost 


// Ahmed_Gamal_Salem
// ahmed@salem2030##