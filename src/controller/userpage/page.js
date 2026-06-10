import db from "../../plugin/db.js"
const page = async (req, res) => {
    try {
        // نجيب اسم المستخدم من الرابط بعد/users
        const user = req.params.page
        // نشوف هل المستخدم موجود في db ولا لا
        const findUser = await db.query("SELECT name FROM users WHERE name=?", [user])
        if (findUser.length == 0) {
            return res.status(403).json({ "erorr": "user notfound" })
        } else {
            return res.status(200).send({ user })

        }
    } catch (err) {
        console.error(err)
        return res.send("err")
    }

}
export default page

