
var express = require('express')
var app = express()
var bodyParser= require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
app.set('views', './views')
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))
app.use('jquery', express.static(__dirname + '/node_modules/jquery/dist/'))

var router = express.Router();
// var path = __dirname + '/views/';

router.use(function (req,res,next) {
  console.log('/' + req.method);
  next();
});

// router.get('/',function(req,res){
//   res.render('/pages/index')
// });




//home page
app.get('/', (req, res) => {
    res.render('pages/index')
})

// about page
app.get('/about', function(req, res) {
    res.render('pages/about')
})

// contact page
app.get('/contact', (req, res) => {
    res.render('pages/contact')
})

// FAQ page
app.get('/FAQ', (req, res) => {
    res.render('pages/FAQ')
})

// Projects page
app.get('/projects', (req, res) => {
    res.render('pages/projects')
})

// Volunteering page
app.get('/volunteer', (req, res) => {
    res.render('pages/volunteer')
})


//
// router.get("/about",function(req,res){
//   res.sendFile(path + "about.html");
// });
//
// router.get("/contact",function(req,res){
//   res.sendFile(path + "contact.html");
// });
//
// app.use("/",router);
//
// app.use("*",function(req,res){
//   res.sendFile(path + "404.html");
// });

app.listen(3000,function(){
  console.log('Listening on Port 3000');
});
