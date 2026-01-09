import express from "express";
import upload from "../middlewares/upload.middleware.js";
import { uploadAndAnalyzeCV } from "../controllers/cv.controller.js";
import { rewriteCV } from "../controllers/cvRewrite.controller.js";

const router = express.Router();

router.post("/upload", upload.single("cv"), uploadAndAnalyzeCV);
router.post("/rewrite", rewriteCV);
export default router;
