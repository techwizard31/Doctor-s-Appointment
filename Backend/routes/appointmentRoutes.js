const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Patient = require("../models/patientmodel");
const Appointment = require("../models/appointmentmodel");
const AverageTime = require("../AverageTime.js");
require("dotenv").config();
const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND);

const requireAuth = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required" });
  }

  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, process.env.SECRET);
    req.patient = await Patient.findOne({ _id }).select("_id");
    next();
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Request is not authorized" });
  }
};

function Timedifference(timeRange) {
  // console.log(timeRange.trim().includes(' - '))
  if (
    !timeRange ||
    typeof timeRange !== "string" ||
    !timeRange.trim().includes(" - ")
  ) {
    console.error("Invalid time range format");
    return null;
  }
  const [startTime, endTime] = timeRange.split("-").map((time) => time.trim());
  if (!startTime || !endTime) {
    console.error("Invalid start time or end time");
    return null;
  }

  const [startHour, startMinute] = startTime
    .split(/:|\s/)
    .map((part) => parseInt(part, 10));
  const [endHour, endMinute] = endTime
    .split(/:|\s/)
    .map((part) => parseInt(part, 10));
  if (
    isNaN(startHour) ||
    isNaN(startMinute) ||
    isNaN(endHour) ||
    isNaN(endMinute)
  ) {
    console.error("Invalid time format");
    return null;
  }
  const startTimeInMinutes = startHour * 60 + startMinute;
  const endTimeInMinutes = endHour * 60 + endMinute;
  const timeDifferenceInMinutes = endTimeInMinutes - startTimeInMinutes;

  return timeDifferenceInMinutes;
}

const availableslots = async (req, res) => {
  const { doctor_id, day, time, department, date } = req.body;
  const slots = Timedifference(time) / AverageTime[department];
  try {
    const appointments = await Appointment.find({
      doctor_id: doctor_id,
      day: day,
      time: time,
      date: date,
    });
    const availableslots = slots - appointments.length;
    if (availableslots > 0) {
      res.status(200).json(availableslots);
    } else {
      res.status(200).json("slots are not available");
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const patientAppointments = async (req, res) => {
  const { patient_id } = req.body;
  if (!mongoose.Types.ObjectId.isValid(patient_id)) {
    return res.status(404).json({ error: "no such patient" });
  }
  const appointments = await Appointment.find({ patient_id: patient_id });

  if (!appointments) {
    return res.status(404).json({ error: "No appointment in directory" });
  }
  res.status(200).json(appointments);
};

const createAppointment = async (req, res) => {
  const {
    patient_id,
    doctor_id,
    day,
    time,
    date,
    department,
    patientname,
    Age,
    Sex,
    phonenumber,
    email
  } = req.body;
  if (!mongoose.Types.ObjectId.isValid(patient_id)) {
    return res.status(404).json({ error: "no such patient" });
  }
  if (!mongoose.Types.ObjectId.isValid(doctor_id)) {
    return res.status(404).json({ error: "no such doctor" });
  }
  try {
    const appointment = await Appointment.create({
      patient_id,
      doctor_id,
      day,
      time,
      date,
      patientname,
      Age,
      Sex,
      phonenumber,
    });
    res.status(200).json(appointment);
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: `${email}`,
      subject: "Appointment Booked!",
      html: `<html>
  <body>
    <p>Dear <strong>${patientname}</strong>,</p>

    <p>
      We are pleased to confirm your appointment at <strong>MEDDICAL</strong>.
      Below are the details of your scheduled appointment:
    </p>

    <ul>
      <li><strong>Patient Name:</strong>${patientname}</li>
      <li><strong>Age:</strong> ${Age}</li>
      <li><strong>Sex:</strong> ${Sex}</li>
      <li><strong>Date:</strong> ${date}</li>
      <li><strong>Day:</strong> ${day}</li>
      <li><strong>Time:</strong> ${time}</li>
    </ul>

    <p>
      Please ensure to arrive at least 15 minutes prior to your appointment time for any necessary paperwork.
      If you have any questions or need to reschedule, do not hesitate to contact us at 
      <strong>7440086922</strong> or reply to this email.
    </p>

    <p>We look forward to providing you with the best possible care.</p>

    <p>
      <strong>Best Regards,</strong><br>
      MEDDICAL
    </p>
  </body>
</html>
`,
    });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const cancelAppointment = async (req, res) => {
  const { _id,patientname,date,time ,email } = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res
      .status(404)
      .json({ error: "this appointment does not exist !!!" });
  }

  try {
    await Appointment.findByIdAndDelete(_id);
    res.status(200).json("Appointment Cancelled");
    await resend.emails.send({
      from: "onboarding@resend.dev",
       to: `${email}`,
      subject: "Appointment Cancelled!",
      html: `<html>
    <body>
      <p>Dear <strong>${patientname}</strong>,</p>

      <p>
        We regret to inform you that your appointment at <strong>MEDDICAL</strong> scheduled for 
        <strong>${date}</strong> at <strong>${time}</strong> has been cancelled.
      </p>

      <p>
        If you have any questions or need any help, please contact us at 
        <strong>7440086922</strong> or reply to this email.
      </p>

      <p>We apologize for any inconvenience this may cause.</p>

      <p>
        <strong>Best Regards,</strong><br>
      MEDDICAL
      </p>
    </body>
  </html>`,
    });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const reschedule = async (req, res) => {
  const { _id, day, time, date, Sex, Age, phonenumber, patientname,email } = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res
      .status(404)
      .json({ error: "this appointment does not exist !!!" });
  }
  try {
    const reschedule = await Appointment.findByIdAndUpdate(
      { _id: _id },
      { ...req.body },
      { new: true }
    );
    const rescheduled = await reschedule.save();
    res.status(200).json("Appointment Rescheduled");
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: `${email}`,
      subject: "Appointment Rescheduled!",
      html: `<html>
  <body>
    <p>Dear <strong>${patientname}</strong>,</p>

    <p>
      We are pleased to inform you that your appointment at <strong>MEDDICAL</strong> has been rescheduled.
      Below are the updated details of your appointment:
    </p>

    <ul>
      <li><strong>Patient Name:</strong>${patientname}</li>
      <li><strong>Age:</strong> ${Age}</li>
      <li><strong>Sex:</strong> ${Sex}</li>
      <li><strong>Date:</strong> ${date}</li>
      <li><strong>Day:</strong> ${day}</li>
      <li><strong>Time:</strong> ${time}</li>
    </ul>

    <p>
      Please ensure to arrive at least 15 minutes prior to your appointment time for any necessary paperwork.
      If you have any questions or need to reschedule, do not hesitate to contact us at 
      <strong>7440086922</strong> or reply to this email.
    </p>

    <p>We look forward to providing you with the best possible care.</p>

    <p>
      <strong>Best Regards,</strong><br>
      MEDDICAL
    </p>
  </body>
</html>
`,
    });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

router.use(requireAuth);

router.post("/myappointments", patientAppointments);
router.post("/checkavailibility", availableslots);
router.post("/createappointment", createAppointment);
router.delete("/cancelappointment", cancelAppointment);
router.patch("/Patientreschedule", reschedule);

module.exports = router;
