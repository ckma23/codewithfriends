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

function databasecreator(){
  connection.query()
}

function gethandler(query,callback){
  mysqlconnectionopener();
  connection.query(query, function (error,results,fields){
    if (error){
      console.log("There was an error in obtaining the query", error)
      return
    }
    else {
      console.log("got a query back", query)
      // return JSON.stringify(results)
    }
    console.log("There was a total of", results.length)
    console.log(results)
    callback(error,results);
    // return results
  })
  mysqlconnectioncloser();
}

function gethandlerid(query,id,callback){
  mysqlconnectionopener();
  connection.query(query,id,function (error,results,fields){
    if (error){
      console.log("There was an error in obtaining the query", error)
      return
    }
    else {
      console.log("got a query back", query)
      // return JSON.stringify(results)
    }
    console.log("There was a total of", results.length)
    console.log(results)
    callback(error,results);
    // return results
  })
  mysqlconnectioncloser();
}

function posthandler(insertdata,postData,callback){
  mysqlconnectionopener();
  console.log("Connected and ready to insert into the db!");
  connection.query(insertdata,postData,function(error, results,fields){
    if (error){
      console.log("There was an error in inserting the data", error)
    }
    else {
      console.log("record was inserted succesfully", insertdata);
    }
    callback(error,results);
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
module.exports.gethandlerid = gethandlerid;
module.exports.posthandler = posthandler;
module.exports.puthandler = puthandler;
module.exports.deletehandler = deletehandler;
