// استعادةdb
import db from "../../plugin/db.js"
import jwt from 'jsonwebtoken'
import { decode } from "jsonwebtoken"
// تعريف الدالة
const page = async (req, res) => {
    const user = req.params.page
      const retoken = req.cookies.token

    // هنعمل صفحة للمستخدم تبان للمستخدم المسجل بس  يقدر يشوف عادي والي مش مسجل يبان قشور 
    // هنا هنعرف   الاستعلامات بتاع المسجل والي مش مسجل
    // اولا الي مش مسجل جيب المستخدم والبوست واحد بس
    const [User] = await db.query('SELECT name,id FROM users WHERE name=?', [user])
    // جيب id 
    let iv = User[0]
    const id_u = iv.id
    const [Post] = await db.query('SELECT post FROM posts WHERE user_id=? ORDER BY RAND() LIMIT 1', [id_u])
    const [postLog] = await db.query("SELECT post,com FROM posts WHERE user_id=? LIMIT 1", [id_u])
    try {
        // اولا للمستخدم الي مش مسجل 
        if (!retoken) {
            return res.status(200).json({ "mes": "", user: user, 'post': Post[0], "please login or create acount to see all posts for ": [user] })
        }
        const vtoken = jwt.verify(retoken, process.env.TOKEN)
        console.log(vtoken.name)
        if (vtoken.name != user) {
            return res.status(302).json({ "mes": user, Post })
        }
        if (vtoken.name = user) {
            if (postLog.length === 0) {
                return res.status(200).json({ user, "mes": "don't have post go /post to create post" })
            }
            else {
                return res.status(200).json({ "mespro": "", user, postLog, 'message': "to create more post go /post ", "Notes": "new fetrue upload image go /upload" })
            }
        }
    } catch (err) {
        console.log(err)
        return res.status(500).json({ "err": "Internal Server Erorr" })
    }
}
// تصدير الدالة
export default page