
import db from "../../plugin/db.js";
const seeAllpost = async (req, res) => {
    try {
        const [[seePostNotSign]] = await db.query('SELECT post FROM posts ORDER BY RAND() ')
        const [[seePostSign]] = await db.query("SELECT post,com FROM posts ORDER BY RAND()")
        const retoken = req.cookies.token
        if (!retoken || retoken.length === 0) {
            return res.status(200).json({seePostNotSign})
        }
        else{
            return res.status(200).json(seePostSign)
        }
        
    } catch (err) {

        // console.error(err)
        return res.status(500).json({ "err": "Internal Server Error" })
    }
}
export default seeAllpost
// ملحوظة الملف دة للادمن عشان يقدر يشوف اي بوست براحتة عادي
// روح لملف searchPost.js
// عشان تقدر تشوف البحث عن مستخدم