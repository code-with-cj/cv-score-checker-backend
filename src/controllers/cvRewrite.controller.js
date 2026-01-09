import { rewriteCVWithAI } from "../services/cvRewrite.service.js";

export const rewriteCV = async (req, res) => {
  try {
    const { cvText } = req.body;

    if (!cvText) {
      return res.status(400).json({
        success: false,
        message: "CV text is required for rewrite"
      });
    }

    const rewrittenCV = await rewriteCVWithAI(cvText);

    res.status(200).json({
      success: true,
      rewrittenCV
    });

  } catch (error) {
    console.error("CV rewrite failed:", error);
    res.status(500).json({
      success: false,
      message: "CV rewrite failed"
    });
  }
};
