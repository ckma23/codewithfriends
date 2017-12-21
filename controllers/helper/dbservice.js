var mysql = require ('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'test'
});

function mysqlconnectionopener() {
  console.log("We are connected", connection.threadId);
}

function mysqlconnectioncloser(){
  console.log("The connection is closed")
}

function gethandler(query, callback){
  mysqlconnectionopener();
  connection.query(query, function (error,results,fields) {
    callback(error, results);
  })
  mysqlconnectioncloser();
}

function posthandler(insertdata){
  mysqlconnectionopener();
  console.log("Connected and ready to inser into the db!");
  connection.query(insertdata, function(error, results,fields){
    if (error){
      console.log("There was an error in inserting the data", error)
    }
    else {
      console.log("record was inserted succesffuly", insertdata);
    }
  });
  mysqlconnectioncloser();
}

function puthandler(updatedata){
  mysqlconnectionopener();
  console.log("Connected and ready to update a value into the db!");
  connection.query(updatedata, function(error, results,fields){
    if (error){
      console.log("There was an error in inserting the data", error)
    }
    else {
      console.log("record was inserted succesffuly", updatedata);
    }
  });
  mysqlconnectioncloser();
}

function deletehandler(deletedata){
  mysqlconnectionopener();
  console.log("Connected and ready to update a value into the db!");
  connection.query(deletedata, function(error, results,fields){
    if (error){
      console.log("There was an error in inserting the data", error)
    }
    else {
      console.log("record was inserted succesffuly", deletedata);
    }
  });
  mysqlconnectioncloser();
}

module.exports.gethandler = gethandler;
module.exports.inserthandler = posthandler;
module.exports.puthandler = puthandler;
module.exports.deletehandler = deletehandler;
