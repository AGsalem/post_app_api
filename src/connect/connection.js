// استعادة من node_modules
import { Router } from "express";
// استعادة ملفات المستخدم
import UpdateUser from "../routes/users/update.user.js";
import CreateUser from "../routes/users/create.user.js";
import seeuser from "../routes/users/see.user.js";
import DeleteUser from "../routes/users/delete.user.js";
// استعادة بوستات المستخدم 
import seeAllpost from "../routes/posts/post.js";
import UpdatePost from "../routes/posts/update.post.js";
import CreatePost from "../routes/posts/create.post.js";
import DeletePost from "../routes/posts/delete.post.js";
// دة الملف الغلبان الوحيد الي هيتعرف ههنا منolugin
import limit from "../plugin/limit.js";
// تعريف المتغير 
const connect =Router()
// تعريف الplugin قبل كلة عشان يحد الطلبات ويمنع مخاولة الاختبار
connect.use(limit)
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
