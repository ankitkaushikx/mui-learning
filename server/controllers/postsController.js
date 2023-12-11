//postController.js
import PostModel from "../models/postModels.js";

async function getAllPosts(req, res) {
  try {
    const posts = await PostModel.find();
    res.status(200).json(posts);
    console.log("---ALL POSTS----", posts);
  } catch (error) {
    console.log("---Error Retrieving All Posts", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getPost(req, res) {
  const postId = req.params.id;
  try {
    const post = await PostModel.findOne({ postId: postId });
    console.log(post);
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export { getAllPosts, getPost };
