//استعادات 
import express from 'express'
import connect from './connect/connection.js'
import helmet from 'helmet'
import 'dotenv/config'
import cors from 'cors'
//تعريف الي هيشغل السيرفر
const app = express()
app.use(helmet())
app.use(cors())
app.get('/',async(req,res)=>{
    res.json({"welcom to api":""})
})

app.use(connect)
const port = process.env.PORT | 3000
 const start = async ()=>{
 await app.listen(port,()=>{
console.log(`port in ${port}`)
 })
}
start()
