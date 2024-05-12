const mongoose = require('mongoose')
const Schema = mongoose.Schema

const appointmentSchema = new Schema({
     patient_id:{
        type:String,
        required:true
     },
     doctor_id:{
        type:String,
        required:true
     },
     day:{
        type:String,
        required:true
     },
     time:{
        type:String,
        required:true
     },
     delay:{
      type:String,
      default:0
     }
},{timestamps:true})

module.exports= mongoose.model('Appointment', appointmentSchema);