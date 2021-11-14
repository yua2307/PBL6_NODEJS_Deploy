const express = require("express");
const router = express.Router();

const userResumeController = require("../controllers/UserResume");
router.post("/api/user-resume");
router.delete("api/user-resume/:id");
// router.put("");
router.get("api/user-resume", userResumeController.get);
