import e from "express";
// استعادة الدالة بتاعت التأكد من التوكن للمستخدم
import tokens from "../types/p&c.js";
// استعادة بوستات المستخدم 
import seeAllpost from '../controller/posts/see.js'
import CreatePost from "../controller/posts/create.js";
import UpdatePost from "../controller/posts/update.js";
import DeletePost from "../controller/posts/delete.js";
import searchPost from "../controller/userpage/searchPost.js";
const posts = e.Router()
// رؤية جميع الوستات

posts.get('/post', seeAllpost)
// انشاء بوست بيid المستخدم
posts.post('/post/:id',tokens, CreatePost)
//  تحديث المستخدم بمعلوم ال id
posts.put('/post/:id/:id_post',tokens, UpdatePost)
// حذف البوست 
posts.delete('/post/:id',tokens, DeletePost)
// البحث عن بوست 
posts.post("/searchP",searchPost)
export default posts