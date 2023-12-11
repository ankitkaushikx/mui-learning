import express from "express";
import { getAllPosts, getPost } from "../controllers/postsController.js";
const postRouter = express.Router();
// -------------------------------------------------POSTs------
postRouter.get("/:id", getPost);
postRouter.get("/", getAllPosts);

export default postRouter;
