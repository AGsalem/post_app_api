import jwt from "jsonwebtoken";
import db from "../../plugin/db.js";
import { ISE } from "../../types/error.js";
const DeleteUser = async (req, res) => {
    // ملحوظة الي هيتنفذ بس الي هيكون في try التعريفات برة
    // اولا جيب  id من الرابط
    const id = req.params.id
    // ملحوظة الاستعلامات هكتبها قبل try
    // لو بعد كل التأكيد وربنا كرم اهلة وطلع مسجل احذف المستخدم
    try {
        // اولا لو الid مش موجود 
        const [fuser] = await db.query('SELECT * FROM users WHERE id =? ', [id])
        // بعد ما اتأكدناان id المستخدم موجود نشوف هل مسجل ولا بيستعبط
        const ftoken = req.cookies.token
        // نفك تشفير jwt
        const vtoken = jwt.verify(ftoken, process.env.TOKEN)
        // نجيب اسم المستخدم بعد فك التشفير
        const nm = vtoken.name
        // نجيب اسم المستخدم بعد يتجاب من القاعدة
        const NameUser = fuser[0]
        // لو مفيشid والراجع من القاعدة ولا حاجة
        if (!id || fuser.length === 0 || !ftoken || !vtoken) {
            return res.status(401).json({
                "error": "Unauthorized to delete user"
            })
        }
        //   لو كان موجود نشوف هل عندة توكن ولا لا 
        // لو مفيش توكن  ولا توكن 
        // هي حاجة واحدة هنرجعها من مصفوفة البحث عن id بس المستخدم اسم
        // NameUser
        const user = NameUser.name
        console.log(user)
        if (nm == user) {
            const [deluser] = await db.query("DELETE FROM users WHERE id=?", [id])
            if(deluser){
            res.clearCookie("token")
            return res.status(200).json({ "mes": "delete user Sucessfull", user })
        }}
        // ثانيا شوف الid موجود ولا لا
    } catch (err) {
        console.error(err)
        return ISE
    }
}
export default DeleteUser 