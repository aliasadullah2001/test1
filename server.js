
// https://difficult-calf-long-johns.cyclic.app/

var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();
var path = require("path");
function onHttpStart(){
    console.log("Express http server listening on: " + HTTP_PORT);
}
// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    let resText = "<h2>Declaration(Instruction: text size in heading 2)</h2> <br>";
    resText += "<a> instruction: The rest text is displayed in paragraph  as shown in screenshot. </a><br><br>";
    resText += "<a> I declare that this test is my own work in accordance with Seneca Academic Policy. No part of this has<br> been copied manually or electronically from any other source.</a> <br><br>";
    resText += "<a> Name:</a><b><mark> Ali Asadullah</b></mark><br> <br>";
    resText += "<a> Student Number:</a><mark><b>174606210</b></mark><br> <br>";
    resText += "<a href = './test1'> Go to Test1 </a><br> <br>";
    resText += "<a> Instruction: Test1 is a link, which directs users to the route test1</a> <br>";
    
    res.send(resText);
});
app.get("/test1", function (req, res){
    var resText ="<h2><mark>Good Luck! </h2></mark> <br>";
    resText += "<a> instruction: text <q>Good luck!</q> in the heading 1. Text color is red, and background color is yellow.</a><br><br>";
    resText += "<a href='/'> <h3> Go home </h3><br><br>";
    resText += "<a> instruction: <q>Go Home</q> is in heading 3. It is hyperlink directing user to the home route.</a><br><br>";
    res.send(resText);
});


// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, onHttpStart);