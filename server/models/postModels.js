import mongoose from "mongoose";
import CounterModel from "./counterModel.js";
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  excerpt: String,
  postId: { type: Number, unique: true },
  date: { type: Date, default: Date.now },
});

postSchema.pre("save", async function (next) {
  const doc = this;

  try {
    const counter = await CounterModel.findOneAndUpdate(
      { type: "postId" },
      { $inc: { counter: 1 } },
      { new: true, upsert: true }
    );

    console.log("Counter value after update:", counter.counter);

    doc.postId = counter.counter;
    next();
  } catch (error) {
    console.error("Error in pre middleware:", error);
    next(error);
  }
});

const PostModel = mongoose.model("Post", postSchema);

export default PostModel;
