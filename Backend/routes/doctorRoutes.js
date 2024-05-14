const express = require('express')
const router = express.Router()
const {
    medicines,
    bones,
    derematology,
    gynaecology,
  } = require("../models/doctormodel");
const jwt = require('jsonwebtoken')

const models = {
    medicines,
    bones,
    derematology,
    gynaecology,
  };

const createToken = (_id)=>{
   return jwt.sign({_id},process.env.SECRET,{expiresIn:'3d'})
}

const logindoctor = async(req,res) =>{
    const {email,password,department} = req.body
    
    try{
        const doctor = await models[department].login(email,password)
        const token = createToken(doctor._id)
        const id = doctor._id
        res.status(200).json({ id,token})
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

const signupdoctor = async(req,res) =>{
    const { Name,email, password,phonenumber,department,workingDays } = req.body
    try{
        const doctor = await models[department].signup(Name,email,password,phonenumber,department,workingDays)
        const token = createToken(doctor._id)
        const id = doctor._id
        res.status(200).json({ id,token})
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

router.post('/login', logindoctor)

router.post('/signup', signupdoctor)

module.exports = router;