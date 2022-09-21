const express = require('express');
const request = require('request');
const app = express();
app.use(express.static('public'));
app.use(express.urlencoded());


// app.use(express.static('public'));
// app.use(express.static(__dirname));
 
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/signup.html');
});

app.post('/signup', function (req, res) {
    const firstName = req.body.inputFN;
    const lastName = req.body.inputLN;
    const email = req.body.inputEmail;
    res.write("Your name is: " + firstName + " " + lastName)
    res.write("\nYour email is: " + email)
    res.send();
})

app.listen(3000, function(){
    console.log("Running on port 3000");
})