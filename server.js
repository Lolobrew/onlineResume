var express = require("express");
var path = require("path");
//nodemailer
const nodemailer = require('nodemailer');

var PORT = process.env.PORT || 8080;

var app = express();

var smtpTransport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "jsonlineresume@gmail.com",
        pass: "Apass4you!"
    }
});


app.use(express.static('public'));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index2.html"));
});

app.get('/send', function(req, res) {

  var mailOptions={
    to : "jeffschultz.js@gmail.com",
    from: req.query.from,
    subject : req.query.subject,
    text : req.query.text
  }

  //console.log(mailOptions);

  smtpTransport.sendMail(mailOptions, function(error, response){
    if (error){
      console.log(error);
      res.end("error");
    }
    else {
      console.log("Message sent");
      res.end("sent");
    }
  });
});

app.listen(PORT, function(){
    console.log("Listening on Port " + PORT);
});