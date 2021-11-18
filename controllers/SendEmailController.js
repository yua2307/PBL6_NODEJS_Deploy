const { sendWelcomeEmail } = require("../middleware/email");
module.exports = {
  async send(req, res) {
    try {
      // co the co them noi dung title cac kieu o trong body, nen uu tien truyen vao 1 object
      sendWelcomeEmail(req.params.email, req.body);

      res.status(200).send({ ok: "oke" });
    } catch (err) {
      res.status(500).send();
    }
  },
};
