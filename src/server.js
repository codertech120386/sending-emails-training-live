const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

let transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
  port: 587,
  secure: false,
});

let mailOptions = {
  from: process.env.EMAIL_USERNAME,
  to: "abcd@masaischool.com",
  subject: "NodeJS Test Email",
  text: "Testing sending email...",
};

transporter.sendMail(mailOptions, (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Email sent to abcd@masaischool.com");
  }
});

const start = () => {
  app.listen(2244, () => {
    console.log("listening on port 2244");
  });
};

module.exports = start;
