// jshint esversion:6

const express = require("express");
const app = express();
app.use(express.urlencoded());

app.get("/", function(request, response){
    response.send("Hello there");
});

app.get("/contact", function(req, res){
    res.send("my phone number is 555-4445");
});

app.get("/bio", function(req, res){
    res.send("My name is Daniel");
});

app.listen(3000, function(){
    console.log("Server has started on port 3000");
});