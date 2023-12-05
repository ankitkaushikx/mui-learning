import PostModel from "../models/postModels.js";

async function getAllPosts(req, res) {
  try {
    const posts = await PostModel.find();
    res.status(200).json(posts);
    console.log("---ALL POSTS----", posts);
  } catch (error) {
    console.log("---Error Retriving All Posts", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export { getAllPosts };
