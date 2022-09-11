
const nodemailer = require('nodemailer');
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");




const app = express();
const port = 4500;

app.use(morgan("short"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());



app.post("/sendmail", (req) => {
  const names = req.body.names;
  const email = req.body.email;
  const subject = req.body.subject;
  const body = req.body.body;


  let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'qmolokwu@gmail.com',
    pass: 'jdiszolwlylxvktk'
  }
});
x

const mailOptions = {
  from: email, // sender address
  to: 'qmolokwu@gmail.com',// list of receivers
  subject: subject, // Subject line
  html: body// plain text body
};


transporter.sendMail(mailOptions, function(err, info) {
  if (err)
    console.log(err)
  else
    console.log(info);
});


});



app.use(express.static("./marvi-event"));


app.listen(process.env.PORT || port, () => {
  // console.log(`server started on ${port}`);
});