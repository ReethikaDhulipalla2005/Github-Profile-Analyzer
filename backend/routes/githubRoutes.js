import express from "express";
import {analyzeProfile, fetchAllProfiles, fetchProfile} from "../controllers/githubController.js";

const router = express.Router();

router.post("/profile/:username", analyzeProfile);
router.get("/profiles", fetchAllProfiles);
router.get("/profile/:username", fetchProfile);

export default router;