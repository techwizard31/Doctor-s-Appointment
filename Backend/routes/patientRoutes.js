const express = require("express");
const router = express.Router();
const Patient = require("../models/patientmodel");
const {doctors} = require("../models/doctormodel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

const loginpatient = async (req, res) => {
  const { email, password } = req.body;
  try {
    const patient = await Patient.login(email, password);
    const token = createToken(patient._id);
    const _id = patient._id;
    res.status(200).json({ _id , token });
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
    res.status(200).json({ _id , token});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  // res.json({mssg:'signup user'})
};

const depdoctors = async (req, res) => {
  const { department } = req.body;
  try {
    const depdoctors = await doctors.find({department:department});
    res.status(200).json(depdoctors);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

router.post("/login", loginpatient);
router.post("/depdoctors", depdoctors);
router.post("/signup", signuppatient);

module.exports = router;