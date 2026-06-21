import { NoToken } from "./error"

export default function ftoken(req, res, next) {
    const token = req.cookies.token
    if (!token) {
        return NoToken(req, res)
    } 
        next()
    
}