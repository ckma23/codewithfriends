var mysql = require ('mysql');
var express = require('express');
var dbservice = require('./helper/dbservice.js');
var app = express();

module.exports.getfunction = function (req, res){
  const getquery = "SELECT * from Places"
  dbservice.gethandler(getquery, function(err, results){
    if (err) {
      console.log("Error")
    }
    res.send(results);
  });
}

module.exports.postfunction = function(req,res) {
  const insertquery = "INSERT INTO Places(name, city) VALUES('Brewery','Seattle')"
  dbservice.inserthandler(insertquery)
  res.send("Post was successful")
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
