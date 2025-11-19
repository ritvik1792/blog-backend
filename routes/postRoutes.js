import express from "express";
const router = express.Router();
import {
  createPost,
  deletePost,
  getAllPosts,
  getPost,
  updatePost,
  getPostsByUser,
} from "../controllers/postControllers.js";
import { authGuard, writerGuard } from "../middleware/authMiddleware.js";

router.route("/").post(authGuard, writerGuard, createPost).get(getAllPosts);
router
  .route("/:slug")
  .put(authGuard, writerGuard, updatePost)
  .delete(authGuard, writerGuard, deletePost)
  .get(getPost);

router.route("/user/:userId").get(getPostsByUser);
export default router;
