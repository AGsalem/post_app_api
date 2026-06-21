import { BODY } from "./error.js"
export default function item(req, res, next) {
    const { name, pass } = req.body
    if (!name||name.length===0||pass.length===0 || !pass) {
        return BODY(req, res)
    }
    req.item = { name, pass }
    next()
}
