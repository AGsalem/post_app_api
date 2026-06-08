import e from "express";
// استعادة بوستات المستخدم 
import seeAllpost from '../controller/posts/seepost.js'
import CreatePost from "../controller/posts/create.post.js";
import UpdatePost from "../controller/posts/update.post.js";
import DeletePost from "../controller/posts/delete.post.js";
const posts = e.Router()
// رؤية جميع الوستات
posts.get('/post', seeAllpost)
// انشاء بوست بيid المستخدم
posts.post('post/:id', CreatePost)
//  تحديث المستخدم بمعلوم ال id
posts.put('/post/:id', UpdatePost)
// حذف البوست 
posts.delete('/post/:id', DeletePost)
export default posts