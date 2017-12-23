var dbservice = require('../services/dbservice.js');

module.exports.startdbfunction = function(req,res) {
  const getquery = "CREATE DATABASE IF NOT EXISTS test;"
  dbservice.databasecreator(getquery, function(err,results){
    if (err) {
      console.log("Error")
    }
    res.send(results)
  });
}

module.exports.starttablefunction = function(req,res) {
  const getquery = "CREATE TABLE IF NOT EXISTS Places(id INT Primary Key AUTO_INCREMENT,date DATE NOT NULL,time TIME NOT NULL, name VARCHAR(50) NOT NULL,address VARCHAR(50)) NOT NULL;"
  dbservice.databasetablecreator(getquery, function(err,results){
    if (err) {
      console.log("Error")
    }
    res.send(results)
  });
}
