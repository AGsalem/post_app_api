// استدعائات
import e from "express";
// تعريفات
const Create_user=(e.Router())
Create_user.use(e.json())
//عمل apiانشاء حساب مع التأكد  
Create_user.post("/users", async (req, res) => {
    try{
   const {name,pass}=req.body
   const Createuser= "INSERT INTO `users` (`name`,`pass`) VALUES (`?`,`?`)"
   if (Createuser){
    return{
        "mes":"welcom",
        name:name,
        pass:pass
    }
   }}catch(err){
    console.error(err)
    return err
   }
})
// استخراج
export default Create_user