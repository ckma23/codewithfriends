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

module.exports.startplacestablefunction = function(req,res) {
  const getquery = "CREATE TABLE IF NOT EXISTS Places(id INT Primary Key AUTO_INCREMENT, trip_id VARCHAR(50), date DATE NOT NULL,time TIME NOT NULL, name VARCHAR(50) NOT NULL,address VARCHAR(50) NOT NULL);"
  dbservice.databasetablecreator(getquery, function(err,results){
    if (err) {
      console.log("Error")
    }
    res.send(results)
  });
}

module.exports.starttripstablefunction = function(req,res) {
  const getquery = "CREATE TABLE IF NOT EXISTS Trips(id INT Primary Key AUTO_INCREMENT, trip_id VARCHAR(50),trip_name VARCHAR(50),date_start DATE NOT NULL,date_end DATE NOT NULL,creatoruserid VARCHAR(50),friend1userid VARCHAR(50),friend2userid VARCHAR(50),friend3userid VARCHAR(50),friend4userid VARCHAR(50));"
  dbservice.databasetablecreator(getquery, function(err,results){
    if (err) {
      console.log("Error")
    }
    res.send(results)
  });
}
