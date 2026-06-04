import { Router } from "express";
import db from "../plugin/db.js" 
const connect =Router()
 connect.use(db)
console.log("connection true")
export default connect
