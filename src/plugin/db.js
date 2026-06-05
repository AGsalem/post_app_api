import "dotenv/config"
import mysql2 from "mysql2/promise"
const db = await mysql2.createConnection({
   host: "localhost"
   , user: "root"
   , password: ""
   , database: "post_test"
})

export default db
// ملاحظة مهمة جدا الاتصال بقاعدة البيانات مش بيتعرف في دالة .use