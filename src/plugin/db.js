import "dotenv/config"
import mysql2 from "mysql2/promise"
const db = await mysql2.createConnection(process.env.DB)
db.connect((err)=>{
   if(err){
      console.error(err)
   }
})
export default db
// ملاحظة مهمة جدا الاتصال بقاعدة البيانات مش بيتعرف في دالة .use