// استعادة من node_modules
import { Router } from "express";
// استعادة ملفات المستخدم
import UpdateUser from "../routes/users/update.user.js";
import CreateUser from "../routes/users/create.user.js";
import seeuser from "../routes/users/see.user.js";
// تعريف المتغير 
const connect =Router()
// استخدام connectلتعريف ملفات المستخدم في  السيرفر 
connect.use(seeuser)
connect.use(CreateUser)
connect.use(UpdateUser)

console.log("connection true")
export default connect
