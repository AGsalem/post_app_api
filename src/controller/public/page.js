import db from "../../plugin/db.js"
const page = async (req, res) => {
    try {
        // نجيب بوستات المستخدم
        const a=req.cookies.token
        if(!a){
            return res.status(301).json({"erorr":"re"})
        }
        // نجيب اسم المستخدم من الرابط بعد/users
        const user = req.params.page
        // نشوف هل المستخدم موجود في db ولا لا
        const [findUser] = await db.query("SELECT name,id FROM users WHERE name=?", [user])
        // تعريف ال id  هياخد اول مصفوفة راجعة 
        let id_user = findUser[0]
        let id = id_user.id
        // جلب بوستات المستخدم 
        const [findposts] = await db.query("SELECT post,com from posts WHERE user_id = ?", [id])
        // لو المستخدم
        if (findUser.length == 0) {
            return res.status(403).json({ "erorr": "user Not Found" })
        }
        // لو المستخدم معندوش بوستات
        else if (findposts.length == 0) {
            return res.status(302).json({ "mespost": "didn't have post please create post" })
        }
        else {
            return res.json({
                message: `welcom ${user}`,
                posts:findposts
            })
        }

    } catch (err) {
        // console.error(err)
        return res.send("err")
    }

}
export default page

