import Post from "../models/Post.js";
import { CreateError } from "../utils/error.js";
import { CreateSuccess } from "../utils/success.js";

export const createPost = async (req, res, next) => {
  try {
    const newPost = new Post(req.body);
    await newPost.save();
    return next(CreateSuccess(200, "Post Created"));
  } catch (e) {
    return next(CreateError(500, "Internal server Error"));
  }
};

export const updatePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post) {
      const newData = await Post.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      return res.status(200).send("Post Updated");
    } else {
      return res.status(404).send("Post not found");
    }
  } catch (error) {
    return res.status(500).send("Internal server Error!");
  }
};

export const getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find({});
    return res.status(200).send(posts);
  } catch (error) {
    return res.status(500).send("Internal server Error!");
  }
};
