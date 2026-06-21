import e from "express";
// استعادة ملفات المستخدم
import UpdateUser from "../controller/users/update.js";
import CreateUser from "../controller/users/create.js";
import DeleteUser from "../controller/users/delete.js";
import loginUser from "../controller/users/login.js";
import page from "../controller/userpage/page.js";
import er from "../plugin/joi.js";
// استعادة صفحة الادمن الغلبان
import searchUser from "../controller/userpage/searchUser.js";
import { NotFoundBody, NoToken } from "../types/error.js";
// استعادة ملف  item 
import item from "../types/n&p.js";
const users = e.Router()
// اولا   تعريف الroute بتاع crud للمستخدمين
// انشاء الحساب
users.post("/users", er, NotFoundBody, item, CreateUser);
//تسجيل دخول
// users.get('/login', er, loginUser)
users.post('/login', er, item, NotFoundBody, loginUser)
// حذف حساب
users.delete('/users/:id',er, DeleteUser)
// تحديث حساب
users.put('/users/:id', er, NotFoundBody, item, UpdateUser)
// رؤية المستخدمين
// دية صفحة المستخدم الغلبان
users.get('/users/:page', page)
// البحث عن مستخدمين
users.post('/searchU', NotFoundBody, searchUser)
export default users