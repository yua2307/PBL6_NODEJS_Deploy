const nodeMailer = require("nodemailer");
const adminEmail = process.env.adminEmail;
const adminPassword = process.env.adminPasswordEmail;
const mailHost = "smtp.gmail.com";
const mailPort = 465;
const sendMail = (to, subject, htmlContent) => {
  const transporter = nodeMailer.createTransport({
    host: mailHost,
    port: mailPort,
    secure: true,
    auth: {
      user: adminEmail,
      pass: adminPassword,
    },
  });

  const options = {
    from: adminEmail,
    to: to,
    subject: subject,
    html: htmlContent,
  };

  return transporter.sendMail(options);
};

module.exports = {
  sendMail: sendMail,
};
