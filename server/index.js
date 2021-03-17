const express = require('express');
const axios =require('axios');




const bodyParser =require('body-parser');
const cors = require('cors')
const app = express();

app.use(bodyParser.json());
app.use(cors());




const port=5000;

app.listen(port, ()=>{

    console.log('listening to port ', port);
})



//const {randomBytes} = require('crypto');

// const nodemailer = require("nodemailer")
// const mg = require("nodemailer-mailgun-transport")
// const handlebars = require("handlebars")
// const fs = require("fs")
// const path = require("path")


// const emailTemplateSource = fs.readFileSync(path.join(__dirname, "/emailTemplate.hbs"), "utf8")

// const mailgunAuth = {
//   auth: {
//     api_key: "b8b91a513e777313309b725e4ea0330d-3d0809fb-bfa65786",
//     domain: "sandboxd0cea7cfb91245df9224733bcc727b91.mailgun.org"
//   }
// }

 
// const smtpTransport = nodemailer.createTransport(mg(mailgunAuth))

// const template = handlebars.compile(emailTemplateSource)

// const htmlToSend = template({message: "Hello! enta sa7by yala oxem bellah"})

// const mailOptions = {
//     from: "ahmyasser97@gmail.com",
//     to: "ahmyasser97@gmail.com",
//     subject: "enta 7abebe fash5 yasta",
//     html: htmlToSend
//   }
  
//   smtpTransport.sendMail(mailOptions, function(error, response) {
//     if (error) {
//       console.log(error)
//     } else {
//       console.log("Successfully sent email.")
//     }
//   })
