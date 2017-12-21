var mysql = require ('mysql');
var express = require('express');
var dbservice = require('./helper/dbservice.js');
var app = express();

module.exports.getfunction = function (req,res){
  res.send(dbservice.gethandler("SELECT * FROM Places"))
  // dbservice.gethandler("SELECT * FROM Places")
  // res.send("Get was successful")
}

module.exports.postfunction = function(req,res) {
  dbservice.inserthandler("INSERT INTO Places(name, city) VALUES('Brewery','Seattle')")
  res.send("Post was successful")
}

module.exports.putfunction = function(req,res) {
  dbservice.puthandler("UPDATE Places SET name = 'Bowling' WHERE name = 'Brewery'")
  res.send("Record was updated successfully")
}

module.exports.deletefunction = function(req,res) {
  dbservice.deletehandler("DELETE FROM Places WHERE name = 'Bowling'")
  res.send("Record was deleted successfully")
}
