const express = require("express");
const app = express();
app.use(express.urlencoded());

/*res.sendFile(__dirname + '/index.html');
app.get('/', function(req, res){
});

app.post('/', function(req, res){
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);
    var result = num1 + num2;
    res.send("Thanks for posting that! The result of that calculation is: " + result);
});
*/
app.get("/", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req, res){
    var weight = Number(req.body.w);
    var height = Number(req.body.h);
    var bmi = (weight / (height * height)); 
    res.send("Your BMI is: " + bmi);

});

app.listen(3000, function(){
    console.log("Starting up on port 3000");
});
