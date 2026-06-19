import e from "express";
import seeuser from "../controller/admin/see.js";
import admin from "../controller/admin/admin.js";
const ad = e()
// ad.use()
// تموية المستخدم عشان نستغل ثغرات الفضول
ad.post('/admin', seeuser);
ad.get('/admin', seeuser);
// دية بقى بتاعتي الي دكر يعرف يولد الكلمة المرور 
ad.post('/page/page/admin', admin)
export default ad