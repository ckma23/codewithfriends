var mongoose = require('mongoose');

var dbURI = 'mongodb://localhost:27017/collabbackendapp';

mongoose.connect(dbURI,{useMongoClient:true});

mongoose.connection.on('connected', function(){
  console.log("We are connected to mongo on " + dbURI);
});


require('./schemalayout.js'); // this will load up the schema
