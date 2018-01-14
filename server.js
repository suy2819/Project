const express = require('express')
const http = require('http').Server(app);
const app = express();
const watson = require('watson-developer-cloud');
var auth = require('./auth/auth.js');
var requirejs = require('requirejs');

requirejs.config({
    baseUrl: __dirname,
    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    nodeRequire: require
});

var bodyParser = require('body-parser')
// var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
// var time = 0;
var form_No = 0;
var form1 = function(body) {
  // do something
  // console.log(time)
  // auth.time = time
  auth.content = body;
  auth.form_No = 1
  auth.logic();
};

var form2 = function(body){
    // do something
  // console.log(time)
  // auth.time = time
  auth.content = body;
  auth.form_No = 2
  auth.logic();
}

app.post('/', function(req, res) {
  // console.log(req.body.para);
  // res.send(200);
  var body = req.body
  var formInfo1 = body.day + ' ' + body.describe + ' ' + body.feel + ' ' + body.accomplishment + ' ' + body.book + ' ' + body.job + ' ' + body.hero;
  console.log(formInfo1)
  form1(formInfo1)
  // sending a response does not pause the function
  // form1(req.body.para);
  // res.redirect('/')
  
  res.sendFile(__dirname+'/views/index2.html');
});
app.get('/second', function (req, res) {
  
  res.sendFile(__dirname+'/views/index2.html');
})
app.post('/final', function(req, res) {
  // console.log(req.body.para);
  // res.send(200);
  var body = req.body
  var formInfo2 = body.feel + ' ' + body.content + ' ' + body.fun + ' ' + body.risk + ' ' + body.meaning + ' ' + body.toughTime + ' ' + body.networking + ' ' + body.hard + ' ' + body.hope + ' ' + body.learn + ' ' ;
  console.log(formInfo2)
  form2(formInfo2)
  // sending a response does not pause the function
  // form2(req.body.para);
  // res.redirect('/')
  
  res.sendFile(__dirname+'/views/graph.html');
});

// app.get('/final', function (req, res) {
  
//   res.sendFile(__dirname+'/views/graph.html');
// })

app.get('/', function (req, res) {
  
  res.sendFile(__dirname+'/views/index.html');
})
 
app.listen(8080, function(){
  // console.log(watson)
  console.log('listening on localhost..8080');
  console.log('change the AUTH details then push the code');
});