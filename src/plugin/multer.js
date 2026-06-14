import e from "express";
const upload = e()
import multer from "multer";
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'image')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});
const uploa = multer({ storage: storage })
upload.post(('/upload'), uploa.single('image'), async (req, res) => {
    res.status(201).json({ "mes": "upload image finish" })


});
export default upload;
