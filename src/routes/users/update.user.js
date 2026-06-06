import e from "express";
import db from "../../plugin/db.js";
import http from 'http'
const UpdateUser = e.Router()
UpdateUser.use(e.json())
UpdateUser.put('/users/:id', async (req, res) => {
    try {
        const id = req.params.id
        const { name, pass } = req.body
        if (!id) {
            res.status(401).json({ "mess": "err" })
        }


        const [al] = await db.query("SELECT * FROM users WHERE id = ?", [id])
        if (al.length === 0) {
            return res.status(305).json({ "err": "id undfind please try again" })
        }

        //  نعرف هل المستخدم بيستعبط ومش بيغير حاجة ام هيغير

        // بعد التأكد من الid موجود نبدأ عملية التحديث المستخدم هيكتب الاسم والكلمة المرور الجديدة وبس
        const [updateUser] = await db.query('UPDATE users SET name=? , pass=? WHERE id= ?', [name, pass, id])
        if (updateUser) {
            return res.status(201).json({
                "message": "update user succesfull",
                id: id,
                "New Name": name,
                "New pass": pass,
            })
        }

    } catch (err) {
        console.error(err)
        return res.status(401).json({err:"please enter anthor name and pass"})
        

    }
})

export default UpdateUser
