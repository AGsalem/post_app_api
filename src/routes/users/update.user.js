import e from "express";
import db from "../../plugin/db.js";
const UpdateUser = e.Router()
UpdateUser.use(e.json())
UpdateUser.get('/users/:id',async(req,res)=>{
    const id=req.params.id
    const {name,pass}=req.body
        if(!id){
        res.status(401).json({"mess":"err"})
    }

    const [al]=await db.query("SELECT * FROM users WHERE id = ?",[id])
   
    return res.status(201).json({"message":id,
        all:al
    })
})

export default UpdateUser
