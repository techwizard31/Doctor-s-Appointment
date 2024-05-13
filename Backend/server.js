const express = require("express");
const cors = require('cors');
// const mongoose = require("mongoose");
const patientRoutes = require('./routes/patientRoutes')
const doctorRoutes = require('./routes/doctorRoutes')
const patientAppointmentRoutes = require('./routes/appointmentRoutes')
const docAppointmentRoutes = require('./routes/docAppointmentRoutes')
const PORT = process.env.PORT
require("dotenv").config();
const app = express();

app.use(express.json());

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 
};

app.use(cors(corsOptions));

try {
  app.listen(PORT, () => {
      console.log("connected to mongodb and listening at port");
    });
} catch (error) {
  console.log(error);
}

app.use("/", patientRoutes);
app.use('/doctor',doctorRoutes)
app.use('/appointment',patientAppointmentRoutes)
app.use('/docappointment',docAppointmentRoutes)
