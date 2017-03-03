
var express = require('express');
var app = express();
// app.get('/', function (req, res) {
// res.send('<h1>Open Source For You!</h1>');
// });
// app.listen(3000, function () {
// console.log('Example app listening on port 3000!');
// });


var router = express.Router();
var path = __dirname + '/views/';

router.use(function (req,res,next) {
  console.log('/' + req.method);
  next();
});

router.get('/',function(req,res){
  res.sendFile(path + 'index.html');
});

router.get("/about",function(req,res){
  res.sendFile(path + "about.html");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(3000,function(){
  console.log('Listening on Port 3000');
});
