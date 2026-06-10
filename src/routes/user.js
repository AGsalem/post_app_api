import e from "express";
// استعادة ملفات المستخدم
import UpdateUser from "../controller/users/update.js";
import CreateUser from "../controller/users/create.js";
import seeuser from '../controller/admin/see.js' ;
import DeleteUser from "../controller/users/delete.js";
import loginUser from "../controller/users/login.js";
import page from "../controller/userpage/page.js";
import er from "../plugin/joi.js";
import auth from "../plugin/auth.js";
const users=e.Router()
// اولا   تعريف الroute بتاع crud للمستخدمين
// انشاء الحساب
users.post("/users",er ,CreateUser);
//تسجيل دخول
users.post('/login',er,loginUser)
// حذف حساب
users.delete('/users/:id',er,DeleteUser)
// تحديث حساب
users.put('/users/:id',er, UpdateUser)
// رؤية المستخدمين
users.post('/admin',seeuser);
users.get('/users/:page',page)

export default users