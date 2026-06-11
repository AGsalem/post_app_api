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
// استعادة صفحة الادمن الغلبان
import admin from "../controller/admin/admin.js";
const users=e.Router()
// اولا   تعريف الroute بتاع crud للمستخدمين
// انشاء الحساب
users.post("/users",er ,CreateUser);
//تسجيل دخول
users.get('/login',er,loginUser)

users.post('/login',er,loginUser)
// حذف حساب
users.delete('/users/:id',er,DeleteUser)
// تحديث حساب
users.put('/users/:id',er, UpdateUser)
// رؤية المستخدمين
// تموية المستخدم عشان نستغل ثغرات الفضول
users.post('/admin',seeuser);
users.get('/admin',seeuser);
// دية صفحة المستخدم الغلبان
users.get('/users/:page',page)
// دية بقى بتاعتي الي دكر يعرف يولد الكلمة المرور 
users.post('/page/page/admin',admin)
export default users