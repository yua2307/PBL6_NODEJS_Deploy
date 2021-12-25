const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const userResumeController = require("../controllers/UserResumeController");

router.get("/api/user-resume/:userId", userResumeController.getAllByUserId);

router.get("/api/user-resume", userResumeController.getAll);

router.post("/api/user-resume", userResumeController.create);

router.put("/api/user-resume", userResumeController.update);

router.delete("/api/user-resume/:id", userResumeController.deleteById);

module.exports = router;
