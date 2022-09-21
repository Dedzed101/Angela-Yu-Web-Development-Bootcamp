const express = require('express');
const https = require('https');
const app = express();
app.use(express.urlencoded({extended: true}));

app.get('/', function (req, res){
    res.sendFile(__dirname + "/index.html");

});

app.post('/', function(req, res){
    const city = req.body.cityname;
    const apiKey = "8dee836a5d619141ecd86ebe1b88028e";
    const units = "metric"
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=" + units
    https.get(url, function (response){
        console.log(response.statusCode);
        
        response.on('data', function(data){
            const weatherdata = JSON.parse(data);
            const temp = weatherdata.main.temp;
            const description = weatherdata.weather[0].description;
            const icon = weatherdata.weather[0].icon
            const imageURL = 'https://openweathermap.org/img/wn/' + icon + '@2x.png'
            res.write("<h1>The Temperature in " + city +  " is " + temp + " degrees Celcius.</h1>");
            res.write("<p>The weather: " + description + "</p>");
            res.write("<img src =" + imageURL +">");
            res.send();
        })
    })

})


app.listen(3000, function(){
    console.log("Server is running on port 3000");
})