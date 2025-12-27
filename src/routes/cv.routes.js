import express from "express";
import upload from "../middlewares/upload.middleware.js";

const router = express.Router();

router.post("/upload", upload.single("cv"),(req, res)=>{
    if (!req.file) {
        return res.status(400).json({message:"CV File is required"});
    }

    res.status(200).json({
        message: "CV uploaded Successfully",
        fileName: req.file.filename,
        originalName: req.file.originalname,
    });
});

export default router;