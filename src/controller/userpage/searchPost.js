import db from '../../plugin/db.js';
const searchPost = async (req, res) => {
    // اولا تعريف اسم المتغير الي هيجي منة البوست منquery
    try {
        const searchpost = req.query.post
        if (searchpost == 0 || !searchpost) {
            return res.status(302).json("please enter a name of post")
        }
        const ep = `%${searchpost}%`
        const [findpost] = await db.query('SELECT post from posts WHERE post LIKE ?', [ep])
        if (findpost.length === 0) {
            return res.status(301).json({"mes":"post not found"})
        }
        else {
            return res.json({ message: findpost })
        }
    } catch (err) {
        return res.status(500).json({ "error": "ISE" })
    }
}
export default searchPost