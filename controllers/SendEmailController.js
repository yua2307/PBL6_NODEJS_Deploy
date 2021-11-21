const mailer = require("../middleware/mailer");
const fs = require("fs");
const ejs = require("ejs");
const htmlToText = require("html-to-text");
const juice = require("juice");
const path = require("path");
module.exports = {
  async send(req, res) {
    try {
      const { email, subject } = req.body;
      const template = fs.readFileSync(
        path.resolve(__dirname, "../template/emailTemplate.html")
      );
      const body = await mailer.sendMail(email, subject, template);

      res.status(200).send("<h3>Your email has been sent successfully.</h3>");
    } catch (error) {
      res.send(error.message);
    }
  },
};
