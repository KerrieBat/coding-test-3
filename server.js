
var express = require('express')
var app = express()
var bodyParser= require('body-parser')
// var path = require('path')
var router = express.Router()


app.set('views', './views')
app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'))
app.use('jquery', express.static(__dirname + '/node_modules/jquery/dist/'))
app.use('/', router)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

router.use(function (req,res,next) {
  console.log('/' + req.method)
  next();
});

//home page
app.get('/', (req, res) => {
    res.render('pages/index')
})

// about page
app.get('/about', (req, res) => {
    res.render('pages/about')
})

// contact page
app.get('/contact', (req, res) => {
    res.render('pages/contact')
})

app.post('/contact', (req, res) => {
  var contact = {
    name: req.body.name,
    email: req.body.email,
    message: req.body.message
  }
  console.log(contact.name)
  res.render('pages/index')
})

// issues page
app.get('/issues', (req, res) => {
    res.render('pages/issues')
})

app.post('/issues', (req,res) => {
  var user = {
    name: req.body.name,
    email: req.body.email,
    issue: req.body.message
  }
  // console.log(res.body())
  console.log(user.name)
  console.log(user.email)
  console.log(user.issue)

  res.render('pages/report', user)

})

// reports page
app.get('/report', (req, res) => {
  console.log(user.name);
    res.render('pages/report', user)
})

app.post('/report', (req, res) => {
  var feedback = {
    suggestion: req.body.suggestion
  }

  console.log(feedback.suggestion)
  res.render('pages/index')
})

// Projects page
app.get('/projects', (req, res) => {
    res.render('pages/projects')
})



// app.use("*",function(req,res){
//   res.sendFile(path + "404.html");
// });

app.listen(3000,function(){
  console.log('Listening on Port 3000')
})
