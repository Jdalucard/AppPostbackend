import { Router } from "express";
import {
  getPost,
  createPost,
  updatePost,
  deletePost,
  getPosts,
} from "../controllers/post.controllers.js";

const router = Router();

router.get("/posts", getPosts);
router.post("/posts", createPost);
router.put("/posts/:_id", updatePost);
router.delete("/posts/:_id", deletePost);
router.get("/posts/:_id", getPost);

export default router;
