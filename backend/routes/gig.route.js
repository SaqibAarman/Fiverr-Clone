import express from "express";
import {
  createGig,
  deleteGig,
  getAllGig,
  getGig,
} from "../controllers/gig.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

// TO Create A New Gig
router.post("/", verifyToken, createGig);

// TO Delete Gig By Id
router.delete("/:id", verifyToken, deleteGig);

// TO Get A Gig By ID
router.get("/single/:id", verifyToken, getGig);

// TO Get All Gigs
router.get("/", verifyToken, getAllGig);

export default router;
