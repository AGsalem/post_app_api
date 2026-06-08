import joi from 'joi'
const schema = joi.object({
    name: joi.string().min(8).max(30).required(),
    pass: joi.string().min(8).max(30).required()
})

const er = (req, res, next) => {
const {error}=schema.validate(req.body)
if(error){
    return res.status(406).json({"error":" please enter name > 8 and pass > 8"})
}
next()
}
export default er