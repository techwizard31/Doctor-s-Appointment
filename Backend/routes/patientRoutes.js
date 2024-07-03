const express = require("express");
const router = express.Router();
const Patient = require("../models/patientmodel");
const { doctors } = require("../models/doctormodel");
const jwt = require("jsonwebtoken");
const { Resend } = require("resend");
const randomstring = require("randomstring");
const resend = new Resend(process.env.RESEND);
const bcrypt = require('bcrypt')

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "2d" });
};

const loginpatient = async (req, res) => {
  const { email, password } = req.body;
  try {
    const patient = await Patient.login(email, password);
    const token = createToken(patient._id);
    const _id = patient._id;
    res.status(200).json({ _id, token, email });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  // res.json({mssg:'login user'})
};
const reloginpatient = async (req, res) => {
  const { email, password } = req.body;
  try {
    const salt = await bcrypt.genSalt(10)
   const hash = await bcrypt.hash(password,salt)
    const patient = await Patient.findOneAndUpdate({email:email, password:hash});
    const token = createToken(patient._id);
    const _id = patient._id;
    res.status(200).json({ _id, token,email });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const googleloginpatient = async (req, res) => {
  const { email } = req.body;
  try {
    const patient = await Patient.googlelogin(email);
    const token = createToken(patient._id);
    const _id = patient._id;
    res.status(200).json({ _id, token,email });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  // res.json({mssg:'login user'})
};

const signuppatient = async (req, res) => {
  const { email, password } = req.body;
  try {
    const patient = await Patient.signup(email, password);
    const token = createToken(patient._id);
    const _id = patient._id;
    res.status(200).json({ _id, token,email });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  // res.json({mssg:'signup user'})
};
const googlesignuppatient = async (req, res) => {
  const { email } = req.body;
  try {
    const patient = await Patient.googlesignup(email);
    const token = createToken(patient._id);
    const _id = patient._id;
    res.status(200).json({ _id, token,email });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  // res.json({mssg:'signup user'})
};

const depdoctors = async (req, res) => {
  const { department } = req.body;
  try {
    const depdoctors = await doctors.find({ department: department });
    res.status(200).json(depdoctors);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const namedoctors = async (req, res) => {
  const { Name } = req.body;
  try {
    const depdoctors = await doctors.find({
      Name: { $regex: Name, $options: "i" },
    });
    res.status(200).json(depdoctors);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const doctordetails = async (req, res) => {
  const { doctor_id } = req.body;
  try {
    const depdoctors = await doctors.findById(doctor_id);
    res.status(200).json(depdoctors);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const otpgenerate = async (req, res) => {
  const { email } = req.body;
  try {
    const otp = randomstring.generate({ length: 4, charset: "numeric" });
    const patient = await Patient.find({email:email});
    if(!patient){
      res.status(200).json("No such email in the directory")
    }
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: `${email}`,
      subject: "Email Verification OTP",
      html: `<html>
      <strong>The OTP is ${otp}</strong>
       <p>
      This OTP is valid for a limited time. Please enter it on the verification page to complete the process.
    </p>
    
    <p>If you did not request this verification, please ignore this email.</p>
    
    <p>Best regards,<br><strong>MEDDICAL</strong></p>
      </html>`,
    });
     res.status(200).json(otp)
  } catch (error) {
    res.status(400).json(error.message);
  }
};

router.post("/login", loginpatient);
router.post("/relogin", reloginpatient);
router.post("/otp", otpgenerate);
router.post("/googlelogin", googleloginpatient);
router.post("/depdoctors", depdoctors);
router.post("/doctordetail", doctordetails);
router.post("/namedoctors", namedoctors);
router.post("/signup", signuppatient);
router.post("/googlesignup", googlesignuppatient);

module.exports = router;
