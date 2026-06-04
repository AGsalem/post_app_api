import mysql from 'mysql'
import "dotenv/config"
import {Router}from 'express'
const db = Router()
try{
 const sql =mysql.createConnection({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASS,
    database:process.env.DB,
 })
}
 catch(err){
   throw err
 }
console.log("db")
export default db
