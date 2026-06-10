// استعادة من node_modules
import { Router } from "express";
// استعادة ملفات المستخدم
// استعادة ملفين users,postsبس عشان دول roter 
import users from "../routes/user.js";
import posts from "../routes/post.js";
// دة الملف الغلبان الوحيد الي هيتعرف هنا منplugin
import limit from "../plugin/limit.js";
// استعادة multer 
import multer from "../plugin/multer.js";
// تعريف المتغير 
const connect = Router()
// دة مهم جدا لازم تعرف routes هنا عشان يشتغلو في السيرفر
connect.use(posts)
connect.use(users)
// تعريف الplugin قبل كلة عشان يحد الطلبات ويمنع مخاولة الاختبار
connect.use(limit)
// لتعريف ملف multer في السيرفر
connect.use(multer)
export default connect
