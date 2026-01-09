import express from "express";
import upload from "../middlewares/upload.middleware.js";
import { uploadAndAnalyzeCV } from "../controllers/cv.controller.js";

const router = express.Router();

router.post("/upload", upload.single("cv"), uploadAndAnalyzeCV);

export default router;
