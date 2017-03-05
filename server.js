
var express = require('express')
var app = express()
var bodyParser= require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
app.set('views', './views')
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))
app.use('jquery', express.static(__dirname + '/node_modules/jquery/dist/'))

var router = express.Router();
var path = __dirname + '/views/';

router.use(function (req,res,next) {
  console.log('/' + req.method);
  next();
});

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

app.post('/contact', (req, res) => {
  res.render('/')
})

// issues page
app.get('/issues', (req, res) => {
    res.render('pages/issues')
})

app.post('/issues', (req,res) => {
  var user = {
    name: req.body.name,
    email: req.body.email,
    message: req.body.message
  }
  console.log(res.body);
  console.log(user.name);
  res.render('pages/report', user)

});

// reports page
app.post('/report', (req, res) => {
  var suggestion = req.body.suggestion
  res.render('/')
})

// Projects page
app.get('/projects', (req, res) => {
    res.render('pages/projects')
})


app.use("/",router);

// app.use("*",function(req,res){
//   res.sendFile(path + "404.html");
// });

app.listen(3000,function(){
  console.log('Listening on Port 3000');
});
