const express = require("express");

const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.get("/bmiCalculator",function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/bmiCalculator", function(req, res) {
var Weight=Number(req.body.Weight);
var Height=Number(req.body.Height);
var result = Weight + Height;
    
    res.send("Thanks for posting result is "+ result);

});
app.listen(3000,function(){
    console.log("server started at port 3000");
});