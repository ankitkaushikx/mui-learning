import "dotenv/config";
import express from "express";
import router from "./routes/index.js";
import mongoose from "mongoose";
import PostModel from "./models/postModels.js";
import cors from "cors";

const app = express();
app.use(cors());
// DATABASE
import connectDB from "./db.js";
import CounterModel from "./models/counterModel.js";
await connectDB();

// ----------------------------------------
const newPost = new PostModel({
  title: "2 Sample Title",
  content: "2 Lorem ipsum...",
  excerpt: "2 A short excerpt",
});

// Save the document
const ourNew = async function () {
  try {
    const savedPost = await newPost.save();
    console.log("Post Saved Successfully", savedPost);
  } catch (error) {
    console.error(error);
  }
};

// ourNew();
// ----------------------------------------
app.use(router);
app.listen(process.env.PORT, () => {
  console.log("----------------------------------------SERVER STARTED AT", process.env.PORT);
});
