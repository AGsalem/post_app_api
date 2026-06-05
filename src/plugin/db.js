import "dotenv/config"
import mysql2 from "mysql2/promise"
const db = await mysql2.createConnection({
   host: process.env.HOST
   , user: process.env.USER
   , password: process.env.PASS
   , database: process.env.DB
})
db.connect()

export default db
// ملاحظة مهمة جدا الاتصال بقاعدة البيانات مش بيتعرف في دالة .use