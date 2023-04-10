import express from "express";
import { login, logout, register } from "../controllers/auth.controller.js";

const router = express.Router();

// Register Router
router.post("/register", register);

// Login Router
router.post("/login", login);

// LogOut Router
router.post("/logout", logout);

export default router;
