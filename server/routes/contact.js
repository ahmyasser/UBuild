const express = require('express')
const router = express.Router()


const {API_KEY,DOMAIN} = require('../config/keys.js')


router.post('/contact',(req,res)=>{
  const {name,email,password} = req.body 
  
})
