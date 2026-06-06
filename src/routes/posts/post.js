import e from "express";
import db from "../../plugin/db.js";
const seeAllpost = e.Router()
 seeAllpost.get('/post',async(req,res)=>{
    const [see]=await db.query("SELECT * FROM posts ORDER BY RAND()")
    return res.status(201).json(see)
 })
export default seeAllpost 