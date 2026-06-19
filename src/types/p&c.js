import jwt from "jsonwebtoken"
const ida = (req, res) => { req.params.id }
export default function tokens(req, res, next) {
    const retoken = req.cookies.token
    const vtoken = jwt.verify(retoken, process.env.TOKEN, (err) => {
        if (err) { return res.status(401).json({ "mes ": "Unauthorized to Create post" }) }
    })
    if (!retoken || !vtoken) {
        return res.status(401).json({ "mes ": "Unauthorized to Create post" })
    }
    next()
}
export { ida }