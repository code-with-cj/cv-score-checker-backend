import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        const uniqueName =
        Date.now() + "-" + Math.round(Math.random()*1e9);
    },
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = [
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new error("Only PDF and DOCX files are allowed"), false);
    }
};

const upload = multer({
    storage,
    fileFilter,
    limits: {fileSize: 2*1024*1024}, //2Mb Limit
});

export default upload;