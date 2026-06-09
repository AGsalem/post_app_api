//استعادات 
import express from 'express'
import cookieParser from 'cookie-parser'
import connect from './connect/connection.js'
import helmet from 'helmet'
import 'dotenv/config'
import cors from 'cors'
//تعريف الي هيشغل السيرفر
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(helmet())
app.use(cors())

app.get('/', async (req, res) => {
    res.json({ "message": "welcom to api" })
})
// app.get('/test-cookie', (req, res) => {
//     console.log("الكوكيز اللي واصلة للسيرفر هي:", req.cookies);
//     res.json({ cookiesReceived: req.cookies });
// })

app.use(connect)
const port = process.env.PORT || 5000
const start = async () => {
    await app.listen(port, () => {

        console.log(`port in ${port}`)
        // console.log(60 * 50)
        // console.clear()
    })
}
start()
app.use((req, res) => {
    res.status(404).json({ "error": "page not found please go /" })
});