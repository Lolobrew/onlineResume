var express = require("express");

var PORT = 3306;

var app = express();

app.use(express.static('index.js'));

app.listen(PORT, function(){
    console.log("Listening on Port" + PORT);
});