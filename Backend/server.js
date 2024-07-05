const express = require("express");
const cors = require('cors');
// const mongoose = require("mongoose");
const patientRoutes = require('./routes/patientRoutes')
const doctorRoutes = require('./routes/doctorRoutes')
const patientAppointmentRoutes = require('./routes/appointmentRoutes')
const docAppointmentRoutes = require('./routes/docAppointmentRoutes')
const PORT = process.env.PORT
const path = require('path')
require("dotenv").config();
const app = express();

app.use(express.json());

const corsOptions = {
  origin: process.env.LINK,
  optionsSuccessStatus: 200,
  credentials: true,
};
app.options('*', cors(corsOptions));
app.use(cors(corsOptions));

const buildPath = path.join(__dirname, '../frontend/build');
app.use(express.static(buildPath));

app.get('/*', (req, res) => {
  res.sendFile(
    path.join(buildPath, 'index.html'),
    function(err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

try {
  app.listen(PORT, () => {
      console.log("connected to mongodb and listening at port");
    });
} catch (error) {
  console.log(error);
}

app.use("/", patientRoutes);
app.use('/doctor', doctorRoutes)
app.use('/appointment', patientAppointmentRoutes)
app.use('/docappointment', docAppointmentRoutes)
