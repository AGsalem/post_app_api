import { Router } from "express";
import Create_user from "../routes/users/create.user.js";
import seeuser from "../routes/users/see.user.js";
const connect =Router()
connect.use(seeuser)
connect.use(Create_user)
console.log("connection true")
export default connect
