import db from "../../plugin/db.js"
const searchUser = async (req, res) => {
    try {
        // اولا هنجيب المستخدم من الرابط
        const name = req.query.name
        if(!name&&name.length ===0){
           return res.status(302).json({"mes":"please Enter name"})
        }
        // ثانيا هنحط الي هيجيبة لنفس الطريقة المساوية لي sql
        const q=`%${name}%`
        // ثالثا البحث عن مستخدم بمعلوم حرف واحد بس
        const [findUserForSearch] = await db.query('SELECT name FROM users WHERE name LIKE  ?', [q])
        if(findUserForSearch.length===0){
            return res.status(401).json({"message":"user not found"})
        }
        return res.status(200).json({ "welcom": findUserForSearch})
    
} catch (err) {
       console.error(err)
        return res.status(500).json({"erorr":"Internal Server Erorr"})
     }
}
export default searchUser