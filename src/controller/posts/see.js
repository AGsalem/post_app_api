import e from "express";
import db from "../../plugin/db.js";
const seeAllpost = async (req, res) => {
    try {

        const [see] = await db.query("SELECT * FROM posts ORDER BY RAND()")
        return res.status(201).json(see)
    } catch (err) {
        return res.status(500).json("Internal Server Error")
    }
}
export default seeAllpost 