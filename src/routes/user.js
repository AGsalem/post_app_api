import e from "express";
// استعادة ملفات المستخدم
import UpdateUser from "../controller/users/update.user.js";
import CreateUser from "../controller/users/create.user.js";
import seeuser from '../controller/users/see.user.js' ;
import DeleteUser from "../controller/users/delete.user.js";
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