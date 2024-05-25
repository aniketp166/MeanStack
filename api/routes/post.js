import express from "express";
import Role from "../models/Post.js";
import {
  createPost,
  getAllPosts,
  updatePost,
} from "../controllers/post.controller.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// Create new Post in Db
router.post("/create", verifyAdmin, createPost);

// update role in DB
router.put("/update/:id", verifyAdmin, updatePost);

router.get("/getAll", verifyAdmin, getAllPosts);

//router.delete("/delete/:id", verifyAdmin, deleteRole);

export default router;
