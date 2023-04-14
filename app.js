const express = require('express');
const bodyParser = require('body-parser');


var app = express();
const port = process.env.PORT || 5000

app.use(bodyParser.urlencoded({extended:true}));
app.get('/',function(req,res){
    res.sendFile(__dirname+"/index.html")
})
app.post('/',function(req,res){
   var w = parseFloat(req.body.weight);
   var h = parseFloat(req.body.height);
   var bmi = (w*10000)/(h*h);
   var min=(18.5*h*h)/10000;
   var max=(24.9*h*h)/10000;
   
   if (bmi>30){
    res.write("your BMI is "+bmi);
    res.write("\nyou are Obese");
    res.write(`\nyour ideal weight range is ${min} to ${max}`);
    res.end();
   }
   else if (bmi>25){
    res.send("your BMI is "+bmi);
    res.send("you are Overweight");
    res.write(`\nyour ideal weight range is ${min} to ${max}`);
    res.end();
   }
   else if (bmi>18.5){res.send("your BMI is "+bmi);
    res.send("you are Normal");
    res.write(`\nyour ideal weight range is ${min} to ${max}`);
    res.end();
   }
   else{res.send("your BMI is "+bmi);
    res.send("you are Underweight");
    res.write(`\nyour ideal weight range is ${min} to ${max}`);
    res.end();
   }
})
app.listen(port,()=>{
    console.log(`server started on port ${port}`);
});