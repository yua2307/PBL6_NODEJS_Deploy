const express = require("express");
const router = express.Router();

const sendEmailController = require("../controllers/SendEmailController");

router.post("/api/mailing/:email", sendEmailController.send);

module.exports = router;
