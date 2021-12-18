const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const sendEmailController = require("../controllers/SendEmailController");

router.post("/api/mailing", auth, sendEmailController.send);

module.exports = router;
