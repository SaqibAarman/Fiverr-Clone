import express from "express";
import { deleteUser } from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

// Delete User Based On Id
router.delete("/delete/:id", verifyToken, deleteUser);

export default router;
