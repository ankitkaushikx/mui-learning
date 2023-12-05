import express from "express";
import mainRouter from "./baseRoutes.js";
import postRouter from "./postRoutes.js";
const router = express.Router();

// Base Route
router.use("/posts", postRouter);
router.use("/", mainRouter);

export default router;
