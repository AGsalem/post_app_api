import db from "../../plugin/db.js";
const seeAllpost = async (req, res) => {
    try {
        const retoken = res.cookies.token
        const [seePostSign] = await db.query("SELECT * FROM posts ORDER BY RAND()")
        const [seePostNotSign] =await db.query('SELECT post FROM posts ORDER BY RAND() ')


        if (!retoken) {
            return res.status(201).json(seePostSign)
        }

        else {
            return res.status(201).json(seePostNotSign)

        }
    } catch (err) {
        return res.status(500).json("Internal Server Error")
    }
}
export default seeAllpost
// ملحوظة الملف دة للادمن عشان يقدر يشوف اي بوست براحتة عادي
// روح لملف searchPost.js
// عشان تقدر تشوف البحث عن مستخدم