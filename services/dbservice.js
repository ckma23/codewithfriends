var mysql = require ('mysql');

var connectionparams = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_DATABASE || 'test'
};

// var connection = mysql.createConnection(connectionparams)
var pool = mysql.createPool(connectionparams)

function mysqlconnectionerrorhandler(){
  connection.on('error',function(err){
    console.log("This was the handler error",err);
    connection.connect(function(err){
      console.log("Re-connection error",err);
      setTimeout(mysqlconnectionerrorhandler, 2000);
    });
  });
}

function gethandler(query,callback){
  pool.getConnection(function(err,connection){ // get pool connection
    connection.query(query, function (error,results,fields) {
      connection.release(); // release pool connection
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
  })
}

function databasecreator(query,callback){
  pool.getConnection(function(err,connection){ // get pool connection
    connection.query(query,function(error,results,fields){
      connection.release(); //release pool connection
      if (error){
        console.log("There was an error in creating the database",error)
        return
      }
      else {
        console.log("got a query back", query)
        // return JSON.stringify(results)
      }
      console.log(results)
      callback(error,results);
    })
  })
}

function databasetablecreator(query,callback){
  pool.getConnection(function(err,connection){ // get pool connection
    connection.query(query,function(error,results,fileds){
      connection.release(); //release pool connection
      if (error){
        console.log("There was an error in creating the database",error)
        return
      }
      else {
        console.log("got a query back", query)
        // return JSON.stringify(results)
      }
      console.log(results)
      callback(error,results);
    })
  })
}

function gethandlerid(query,id,callback){
  pool.getConnection(function(err,connection){ // get pool connection
    connection.query(query,id,function (error,results,fields){
      connection.release(); // release pool connection
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
    })
  })
}

function posthandler(insertdata,postData,callback){
  console.log("Connected and ready to insert into the db!");
  pool.getConnection(function(err,connection){ // get pool connection
    connection.query(insertdata,postData,function(error, results,fields){
      connection.release(); //release pool connection
      if (error){
        console.log("There was an error in inserting the data", error)
      }
      else {
        console.log("record was inserted succesfully", insertdata);
      }
      callback(error,results);
    })
  })
}

function puthandler(updatedata,putData,callback){
  console.log("Connected and ready to update a value into the db!");
  pool.getConnection(function(err,connection){ // get pool connection
    connection.query(updatedata, putData,function(error, results,fields){
      connection.release(); //release pool connection
      if (error){
        console.log("There was an error in updating the value the data", error)
      }
      else {
        console.log("record was inserted succesffuly", updatedata);
      }
      callback(error,results);
    });
  })
}

function deletehandler(deletedata,deleteData,callback){
  console.log("Connected and ready to delete a value into the db!");
  pool.getConnection(function(err,connection){ // get pool connection
    connection.query(deletedata, deleteData, function(error, results,fields){
      connection.release(); // release pool connection
      if (error){
        console.log("There was an error in inserting the data", error)
      }
      else {
        console.log("record was inserted succesffuly", deletedata);
      }
      callback(error,results);
    });
  });
}

module.exports.gethandler = gethandler;
module.exports.gethandlerid = gethandlerid;
module.exports.posthandler = posthandler;
module.exports.puthandler = puthandler;
module.exports.deletehandler = deletehandler;
module.exports.databasecreator = databasecreator;
module.exports.databasetablecreator = databasetablecreator;
