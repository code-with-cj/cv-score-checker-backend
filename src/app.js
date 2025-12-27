import express from "express";
import cors from "cors";
import cvRoutes from "./routes/cv.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/cv", cvRoutes);

app.get("/", (req, res) => {
  res.json({ status: "CV Checker API is Running" });
});

export default app;
