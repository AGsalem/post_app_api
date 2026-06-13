import db from "../../plugin/db.js";
const seeAllpost = async (req, res) => {
    try {

        const [see] = await db.query("SELECT * FROM posts ORDER BY RAND()")
        return res.status(201).json(see)
    } catch (err) {
        return res.status(500).json("Internal Server Error")
    }
}
export default seeAllpost 
// ملحوظة الملف دة للادمن عشان يقدر يشوف اي بوست براحتة عادي
// روح لملف searchPost.js
// عشان تقدر تشوف البحث عن مستخدم