import jwt from "jsonwebtoken";
import db from "../../plugin/db.js";
import { ISE, NoToken } from "../../types/error.js";
const DeleteUser = async (req, res) => {

    // ملحوظة الاستعلامات هكتبها قبل try
    // لو بعد كل التأكيد وربنا كرم اهلة وطلع مسجل احذف المستخدم
    try {
        // اولا جيب  id من الرابط
        const id = req.params.id
        if (!id) {
            return res.status(401).json({ "mess": "err" })
        }

        const ftoken = req.cookies.token
        if (!ftoken) {
            return NoToken(req, res)
        }
        // نفك تشفير jwt
        const vtoken = jwt.verify(ftoken, process.env.TOKEN)
        // نجيب اسم المستخدم بعد فك التشفير
        const nm = vtoken.name
        // نجيب اسم المستخدم بعد يتجاب من القاعدة
        // لو مفيشid والراجع من القاعدة ولا حاجة
        if (!id || !ftoken || !vtoken || nm.length === 0) {
            return res.status(401).json({
                "error": "Unauthorized to delete user"
            })
        }
        // اولا لو الid مش موجود 
        const [[fuser]] = await db.query('SELECT * FROM users WHERE id =? ', [id])
        if (fuser.length === 0) {
            return res.status(401).json({ "mess": "err" })
        }
        // بعد ما اتأكدناان id المستخدم موجود نشوف هل مسجل ولا بيستعبط

        //   لو كان موجود نشوف هل عندة توكن ولا لا 
        // لو مفيش توكن  ولا توكن 
        // هي حاجة واحدة هنرجعها من مصفوفة البحث عن id بس المستخدم اسم
        // NameUser
        const { name } = fuser
        console.log(name)
        console.log(nm)
        if (nm == name) {
            const [deluser] = await db.query("DELETE FROM users WHERE id=?", [id])
            res.clearCookie("token")
            return res.status(200).json({ "mes": "delete user Successful", name })

        }
        // ثانيا شوف الid موجود ولا لا
    } catch (err) {
        // console.error(err)
        return res.status(401).json({
            "error": "Unauthorized to delete user"
        })
    }
}
export default DeleteUser 