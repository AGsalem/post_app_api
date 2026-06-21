// دية للخطا500 
const ISE = (req, res) => {
    res.status(500).json({ "err": "Internal Server Error" })
}
// دية خطأ لو مفيش حاجة جت من req.body
const BODY = (req, res) => {
    res.status(401).json({ "message": "please Enter Body json" })
}
// لو المستخدم مش موجود
const UND = (req, res) => {
    res.status(401).json({ "error": "User Not defind" })
}
// دية لو الاسم = الكلمة المرور  ارجع بي الخطا فوري
const EREQ = (req, res) => {
    res.status(401).json({ "message": "Please Don't Enter name = pass " })
}
const NoToken=(req,res,next)=>{
return  res.status(401).json({"err":"Unauthorized users"})
next()
}
// المتغير دة مخصوص يعني هيتحط على كل الrouter عشان بيحميهم من كراش السيرفر
const NotFoundBody = (req, res,next) => {
    if (!req.body || Object.keys(req.body).length === 0) {
        return BODY(req, res)
    }
    next()
}
export { ISE, BODY, UND, EREQ, NotFoundBody,NoToken }