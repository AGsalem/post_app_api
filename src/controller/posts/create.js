import db from "../../plugin/db.js";
import {  ISE } from "../../types/error.js";
const CreatePost = (async (req, res) => {
    const {id} = req.ida
    console.log(id)
    if (id.length == 0) {
        return res.send("err")
    }
    const { post, com } = req.post
    
    try {
        // نشوف هلid المستخدم موجود ولا لا 
        const [findIdForUsers] = await db.query("SELECT name,id FROM users WHERE id=? ", [{id}])
        const [createpost] = await db.query("INSERT INTO posts (post,com,user_id) VALUES(?,?,?)", [post, com, id])
        return res.status(201).json({ "message": "create post finsh ", post: post, com: com, id: id })
    } catch (err) {
        console.error(err)
        // return res.send("fsda")
        return ISE(req, res)
    }
})
export default CreatePost 