import express from "express";
import { getAllPosts } from "../controllers/postsController.js";
const postRouter = express.Router();
// -------------------------------------------------POSTs------
postRouter.get("/", getAllPosts);

export default postRouter;
