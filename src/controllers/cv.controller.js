import fs from "fs";
import { extractTextFromCV } from "../services/cvParser.service.js";
import { analyzeCV } from "../services/cvAnalyzer.service.js";

export const uploadAndAnalyzeCV = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "CV file is required" });
    }

    const extractedText = await extractTextFromCV(req.file.path);
    const analysis = analyzeCV(extractedText);

    fs.unlinkSync(req.file.path);

    res.status(200).json({
      message: "CV analyzed successfully",
      fileName: req.file.originalname,
      score: analysis.score,
      recommendations: analysis.recommendations,
      isRewritePaid: true,
      rewritePriceUSD: 1,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "CV analysis failed",
      error: error.message,
    });
  }
};
