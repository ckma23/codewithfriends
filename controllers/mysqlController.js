var mysql = require ('mysql');
var express = require('express');
var bodyParser = require('body-parser');
var dbservice = require('./helper/dbservice.js');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


module.exports.getfunction = function (req,res){
  const getquery = "Select * from Places"
  dbservice.gethandler(getquery, function(err,results){
    if (err) {
      console.log("Error")
    }
    res.send(results)
  });
}

module.exports.getfunctionid = function (req,res){
  const getquery = "Select * from Places where id=?"
  dbservice.gethandlerid(getquery,req.params.id,function(err,results){
    if (err) {
      console.log("Error")
    }
    res.send(results)
  });
}

// module.exports.postfunction = function(req,res) {
//   const insertquery = "INSERT INTO Places(date, time, name, address) VALUES('2017-12-12','15:00:00','Coffee','Portland')"
//   dbservice.inserthandler(insertquery)
//   res.status(200);
//   res.json({"status":"success"})
// }

module.exports.postfunction = function(req,res){
  const insertquery = 'INSERT INTO Places SET ?'
  let postData = req.body;
  // let postData={"date":"2017-12-15","time":"15:00:00","name":"beer","address":"Belltown"}
  console.log(postData);
  dbservice.posthandler(insertquery,postData,function(err,results){
    if (err) {
      console.log("Error")
    }
    res.send(results)
  });
}

module.exports.putfunction = function(req,res) {
  const putquery = "UPDATE Places SET name = 'Bowling' WHERE name = 'Brewery'"
  dbservice.puthandler(putquery)
  res.send("Record was updated successfully")
}

module.exports.deletefunction = function(req,res) {
  const deletequery = "DELETE FROM Places WHERE name = 'Bowling'"
  dbservice.deletehandler(deletequery)
  res.send("Record was deleted successfully")
}
