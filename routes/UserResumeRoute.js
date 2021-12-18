const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const userResumeController = require("../controllers/UserResumeController");

router.get(
  "/api/user-resume/:userId",
  auth,
  userResumeController.getAllByUserId
);

router.get("/api/user-resume", auth, userResumeController.getAll);

router.post("/api/user-resume", auth, userResumeController.create);

router.put("/api/user-resume", auth, userResumeController.update);

router.delete("/api/user-resume/:id", auth, userResumeController.deleteById);

module.exports = router;
