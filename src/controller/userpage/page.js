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
    const [Post] = await db.query('SELECT post FROM posts WHERE user_id=?  LIMIT 1', [id_u])
    const [postLog] = await db.query("SELECT id,post,com  FROM posts WHERE user_id=? ", [id_u])
    try {
        // اولا للمستخدم الي مش مسجل 
        if (!retoken) {
            return res.status(200).json({ user: user, 'post': Post[0], "please login or create Account to see all posts for ": [user] })
        }
        const vtoken = jwt.verify(retoken, process.env.TOKEN)
        // console.log(vtoken.name)
        if (!vtoken || vtoken.length === 0) {
            return res.status(302).json({ "mes": user, Post })
        }
        if (vtoken.name != user) {
            return res.status(302).json({ "mes": user, Post })
        }
        if (vtoken.name = user) {
            if (postLog.length === 0) {
                return res.status(200).json({
                    WlecomMessage: ` welcom ${user}`, "message": `don't have post go /post/${id_u} to create post`
                })
            }
            else {
                return res.status(200).json({
                    WlecomMessage: ` welcom ${user}`, AllPosts: postLog,
                    'message': `to create more post go /post/${id_u} `,
                    "Notes": `new fetrue upload image go /upload/${id_u}`,
                    "to upadat or delete": `go /${id_u}/enter id for post do you want update or delete`  
                              })
            }
        }
    } catch (err) {
        // console.log(err)
        return res.status(301).json({ "error": "please change the fake token or create account" })
    }
}
// تصدير الدالة
export default page