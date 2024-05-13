const mongoose = require("mongoose");
// const express = require("express");
require("dotenv").config();
// const app = express();
// const PORT = process.env.PORT

const test = mongoose.createConnection(process.env.MONGO_URI1)
const Doctors = mongoose.createConnection(process.env.MONGO_URI2)

module.exports={test,Doctors}

