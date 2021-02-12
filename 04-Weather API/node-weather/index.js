const request = require('request');
require('dotenv').config()
const http=require('http')
const fs = require('fs')
// version 1
// const apiKey='9c7c6bb649f116a9ba16f7930b195075'
const apiKey = process.env.apiKey


  
const myserver = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      "<form method='post'> <input name='city'> <button>Submit</button> </form>"
    );
  
    let body = "";
    req.on("data", function (chunk) {
      //takes input value from DOM
      body += chunk;
      console.log(body);
  
      const city = body
      const url = "http://api.weatherstack.com/current?access_key=" + apiKey + "&query=" + city;
      request(url, function (err, response, body) {
        if (err) {
          console.log("error:", error);
        } else {
          const info = JSON.parse(body);
          console.log("body:", info.location.name);
          res.end(
            `Today ${info.current.temperature} degrees in ${info.location.name} `
          );
        }
      });
    });
  });
  myserver.listen(3000)