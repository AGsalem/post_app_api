import db from "../../plugin/db.js"
import jwt from 'jsonwebtoken'
// مفروض في الصفحة دية انا كأدمن اسجل الدخول من قاعدة بيانات مخصصة ليا بس  واكون حاططها ليا وهحفظها في ملف مخصص مش هيترفع طبعا
const admin = async (req, res) => {
    try {
        const { id, admin_name, admin_pass } = req.body
        const token = await jwt.sign({ id, admin_name }, process.env.TOKEN)
        if (!id || !admin_name || !admin_pass) {
            return res.status(301).json({ "Erorr": "error" })
        }
        // التأكد ان انا الي داخل مش حد تاني

        const findme = await db.query('SELECT id , admin_name,admin_pass FROM admin WHERE id = ? AND admin_name = ?  AND admin_pass = ?', [id, admin_name, admin_pass])
        if (!findme) {
            return res.status(401).json({ "error": "try again" })
        }
        else {
            const [alluser] = await db.query('SELECT * FROM users')
            const [allposts] = await db.query("SELECT * FROM posts")
            res.cookie("token", token, {
                httpOnly: true,
                secure: true,
                maxAge: 1 * 24 * 60 * 60 * 1000
            })
            return res.status(200).json({
                'message': "welcom salem",
                "All Users": alluser,
                "All Posts": allposts
            })
        }
    } catch (err) {
        return res.status(500).json({ "error": "Internal Server Erorr " })
    }
}
export default admin