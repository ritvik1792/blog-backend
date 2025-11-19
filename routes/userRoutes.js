import express from "express";
const router = express.Router();
import {
  registerUser,
  loginUser,
  userProfile,
  updateProfile,
  updateProfilePicture,
  getAllUsers,
  deleteUser,
  becomeWriter,
  updateWriter,
} from "../controllers/userControllers.js";
import { adminGuard, authGuard } from "../middleware/authMiddleware.js";

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post('/becomeWriter', becomeWriter);
router.post('/updateWriter', updateWriter);
router.get("/profile", authGuard, userProfile);
router.put("/updateProfile/:userId", authGuard, updateProfile);
router.put("/updateProfilePicture", authGuard, updateProfilePicture);
router.get("/", authGuard, adminGuard, getAllUsers);
router.delete("/:userId", authGuard, adminGuard, deleteUser);

export default router;
