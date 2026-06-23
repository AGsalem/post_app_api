import db from "../../plugin/db.js";
import jwt from "jsonwebtoken";
import { ISE } from "../../types/error.js";
const UpdateUser = async (req, res) => {
    const id = req.params.id
    if (!id) {
        res.status(401).json({ "mess": "err" })
    }
    const { name, pass } = req.item
    try {
        const retoken = req.cookies.token
        if (!retoken || retoken.length === 0) {
            return res.status(301).json({ "error": "Unauthorized to update user" })
        }
        const vtoken = jwt.verify(retoken, process.env.TOKEN)
        if (vtoken.length === 0) {
            return res.status(301).json({
                "error": "Unauthorized to update  user"
            })
        }

        const [al] = await db.query("SELECT * FROM users WHERE id = ?", [id])
        // نعرف متغير نقارنة بي المستخدم هيغيرة لو مغيرش حاجة يبقى نطلع خطأ

        if (al.length === 0) {
            return res.status(305).json({ "err": "id undfind please try again" })
        }
        //  نعرف هل المستخدم بيستعبط ومش بيغير حاجة ام هيغير
        // بعد التأكد من الid موجود نبدأ عملية التحديث المستخدم هيكتب الاسم والكلمة المرور الجديدة وبس
        const [updateUser] = await db.query('UPDATE users SET name=? , pass=? WHERE id= ?', [name, pass, id])

        {
            return res.status(201).json({
                "message": "update user succesfull",
                id: id,
                "New Name": name
            })
        }
    } catch (err) {
        // console.error(err)
        return ISE(req, res)
    }
}
export default UpdateUser