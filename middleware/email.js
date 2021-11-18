const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = async (email, req) => {
  sgMail.send({
    to: email,
    from: "nhatnguyen522000@gmail.com",
    subject: "WELCOME TO HREO APP",
    // using req.title or req.body to get value and custom below
    html: ` <h2> design source trong nay </h2>
    `,
  });
};

module.exports = {
  sendWelcomeEmail,
};
