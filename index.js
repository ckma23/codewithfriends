var express = require('express'); //require express as the Javascript framework for Node
var bodyParser = require('body-parser');
var routes = require('./routes/mainroutes.js')
var app = express(); // pass express now known as app
var port = process.env.PORT || 4000
// var environment = app.get('env')
var environment = process.env
var cors = require('./services/cors')


app.use(cors)
app.use(bodyParser.json());
app.use('/', routes);

// app.use(function(req,res,next){
//   res.header("Access-Control-Allow-Origin","*");
//   res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   next();
// })

var server = app.listen(port, function(){
  console.log('Listening on port', server.address().port)
})

function startupprint(Welcome,Message,environment) {
  console.log("App is up and running now",Welcome);
  console.log("To seed the database and tables is mapped here",Message)
  console.log("The environment is", environment);
}
startupprint("CodewithFriends","--> mainroutes.js",environment)

module.exports = app;
exports.environment = environment;

// might need to remove the start instructions in the package.json file "node index.js" because there is a procfile now
