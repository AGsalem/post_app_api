import db from "../../plugin/db.js";
 const seeuser = async (req, res) => {
    try {
        const [CreateUser] = await db.query("SELECT * FROM `users`")
        const {admin} = req.body||{}
        const hashkeysec = process.env.ADD
        console.log(admin)
        console.log(hashkeysec)
        if (admin != hashkeysec) {
           
            return res.status(401).json({ "err": "Try Again" })
        }
        else if(admin==1234) {
            return res.json(CreateUser)
        }
    } catch (err) {
        // console.error(err)
        res.status(401).json({ "err": " please enter the hash of secret of pass key" })
    }
}
 export default seeuser
