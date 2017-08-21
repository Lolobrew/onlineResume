var express = require("express");
var path = require("path");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static('public'));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, function(){
    console.log("Listening on Port " + PORT);
});