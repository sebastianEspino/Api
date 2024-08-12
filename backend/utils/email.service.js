const nodemailer = require("nodemailer");
// Esta función se encarga de enviar un correo electrónico por medio de nodemailer
// recibe como parámetros el correo electrónico del usuario, el asunto y el texto del correo.
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "sebasespinosa2016@gmail.com",
    pass: `${process.env.PASSWORDG}`,
  },
});

exports.sendEmail = async (email, subject, text) => {
  const mailOptions = {
    from: "sebasespinosa2016",
    to: email,
    subject: subject,
    text: text,
  };

  await transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Correo enviado "+ info.response);
    }
  });
};
