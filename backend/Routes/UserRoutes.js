const express = require("express");
const router = express.Router();
const ErrorHandeler = require("./../utils/ErrorHandler");
const CatchAsyncError = require("./../utils/CatchAsyncErrors");
const User = require("./../Models/Usermodel");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

router.post(
  "/register",
  CatchAsyncError(async (req, res, next) => {
    try {
      const { name, email, password } = req.body;
      const alreadyRegistered = await User.findOne({ email });
      if (alreadyRegistered) {
        return res.send({
          success: false,
          message: "Email is already Registered!!",
        });
      } else {
        const Newuser = new User({
          name,
          email,
          password,
        });
        //verification Token
        Newuser.verificationToken = crypto.randomBytes(20).toString("hex");
        //saving user to the database
        await Newuser.save();
        //sending mail to verified user
        sendVerificationEmail(Newuser.email, Newuser.verificationToken);
        res.send({
          success: true,
          message: "User registered successfully!",
        });
      }
    } catch (error) {
      return res.send({
        success: false,
        message: error.message,
      });
    }
  })
);

router.get(
  "/verify",
  CatchAsyncError(async (req, res, next) => {
    const { verification_token } = req.query;
    try {
      const user = await User.findOne({
        verificationToken: verification_token,
      });
      if (!user) {
        return res.send({
          success: false,
          message: "Invalid verification token",
        });
      } else {
        user.verified = true;
        await user.save();
        res.send({
          success: true,
          message: "User Verification successful!!",
        });
      }
    } catch (error) {
      return res.send({
        success: false,
        message: error.message,
      });
    }
  })
);

//sending VerificationMail
const sendVerificationEmail = async (userEmail, token) => {
  const transporter = nodemailer.createTransport({
    port: process.env.SMPT_PORT,
    host: process.env.SMPT_HOST,
    service: process.env.SMPT_SERVICE,
    auth: {
      user: process.env.SMPT_MAIL,
      pass: process.env.SMPT_PASSWORD,
    },
  });
  await transporter.sendMail({
    subject: "You have successfully been registered!!",
    from: "ShopO",
    text: `Please click the link below to register: http://localhost:8000/verify/${token}`,
    to: userEmail,
  });
};

module.exports = router;
