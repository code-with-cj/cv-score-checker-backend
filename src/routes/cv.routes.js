import express from "express";
import upload from "../middlewares/upload.middleware.js";
import { extractTextFromCV } from "../services/cvParser.service.js";

const router = express.Router();

router.post("/upload", upload.single("cv"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "CV file is required" });
    }

    const extractedText = await extractTextFromCV(req.file.path);

    res.status(200).json({
      message: "CV uploaded and text extracted successfully",
      fileName: req.file.filename,
      originalName: req.file.originalname,
      textPreview: extractedText.substring(0, 500), // preview only
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to extract CV text",
      error: error.message,
    });
  }
});

export default router;
