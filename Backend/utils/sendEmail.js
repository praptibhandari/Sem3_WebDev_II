const nodemailer = require('nodemailer');

const sendEmail = async (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail', 
    auth: {
      user: 'praptibhandari1249@gmail.com', 
      pass: 'cryz ihkl vufx tpyj', 
    },
  });

  const mailOptions = {
    from: 'praptibhandari1249@gmail.com',
    to,
    subject,
    text,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };

