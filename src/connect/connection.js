// استعادة من node_modules
import { Router } from "express";
// استعادة ملفات المستخدم
import UpdateUser from "../controller/users/update.user.js";
import CreateUser from "../controller/users/create.user.js";
import seeuser from "../controller/users/see.user.js";
import DeleteUser from "../controller/users/delete.user.js";
import loginUser from "../controller/users/login.js";
import users from "../routes/user.js";
// تجربة
import posts from "../routes/post.js";
// استعادة بوستات المستخدم 
import seeAllpost from '../controller/posts/seepost.js'
import UpdatePost from "../controller/posts/update.post.js";
import CreatePost from "../controller/posts/create.post.js";
import DeletePost from "../controller/posts/delete.post.js";
// دة الملف الغلبان الوحيد الي هيتعرف هنا منplugin
import limit from "../plugin/limit.js";
// استعادة multer 
import multer from "../plugin/multer.js";
// تعريف المتغير 
const connect =Router()
// دة مهم جدا لازم تعرف routes هنا عشان يشتغلو في السيرفر
connect.use(posts)
connect.use(users)
// تعريف الplugin قبل كلة عشان يحد الطلبات ويمنع مخاولة الاختبار
connect.use(limit)
// لتعريف ملف multer في السيرفر
connect.use(multer)
// استخدام connectلتعريف ملفات المستخدم في  السيرفر 
// استخدام ملفات االمستخدم  لتعريفها للسيرفر
// رؤية المستخدمين لي  الادمن
connect.use(seeuser)
// انشاء مستخدم 
connect.use(CreateUser)
//تحديث المستخدم
connect.use(UpdateUser)
// حذف المستخدم 
connect.use(DeleteUser)

// connect.use(هنا حط تسجيل الدخول) 
connect.use(loginUser)
// استخدام ملفات بوستات المستخدم في السيرفر 
// ملف رؤية البوستات عشوائي
connect.use(seeAllpost)
// انشاء بوست
connect.use(CreatePost)
// حذف بوست منشور
connect.use(DeletePost)
// تحديث بوست كان موجود
connect.use(UpdatePost)
// بعد التعليق دة كل ملفات plugin هتتعرف هنا زي jwt ,joi
console.log("connection true")
export default connect
