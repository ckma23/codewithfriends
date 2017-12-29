var mysql = require ('mysql');

var connectionparams = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_DATABASE || 'test'
};

// var connection = mysql.createConnection(connectionparams)
var pool = mysql.createPool(connectionparams)

function mysqlconnectionopener() {
  // connection.connection();
  console.log("We are connected", connection.threadId);
}

function mysqlconnectionerrorhandler(){
  connection.on('error',function(err){
    console.log("This was the handler error",err);
    connection.connect(function(err){
      console.log("Re-connection error",err);
      setTimeout(mysqlconnectionerrorhandler, 2000);
    });
  });
}

function mysqlconnectioncloser(){
  // connection.end(function(err){
  //   console.log("The sqlconnection",err)
  // });
  console.log("The connection is closed")
}

function gethandler(query,callback){
  // mysqlconnectionopener();
  mysqlconnectionerrorhandler();
  console.log("Checking heroku")
  connection.query(query, function (error,results,fields){
  console.log("Inside Error")
    connection.release();
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
  // mysqlconnectioncloser();
}


function gethandler(query,callback){
  // mysqlconnectionopener();
  pool.getConnection(function(err,connection){
    connection.query(query, function (error,results,fields){
      connection.release();
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
  // mysqlconnectioncloser();
}

function databasecreator(query,callback){
  mysqlconnectionopener();
  connection.query(query,function(error,results,fields){
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
  mysqlconnectioncloser();
}

function databasetablecreator(query,callback){
  mysqlconnectionopener();
  connection.query(query,function(error,results,fileds){
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

function puthandler(updatedata,putData,callback){
  mysqlconnectionopener();
  console.log("Connected and ready to update a value into the db!");
  connection.query(updatedata, putData,function(error, results,fields){
    if (error){
      console.log("There was an error in updating the value the data", error)
    }
    else {
      console.log("record was inserted succesffuly", updatedata);
    }
    callback(error,results);
  });
  mysqlconnectioncloser();
}

function deletehandler(deletedata,deleteData,callback){
  mysqlconnectionopener();
  console.log("Connected and ready to delete a value into the db!");
  connection.query(deletedata,deleteData, function(error, results,fields){
    if (error){
      console.log("There was an error in inserting the data", error)
    }
    else {
      console.log("record was inserted succesffuly", deletedata);
    }
    callback(error,results);
  });
  mysqlconnectioncloser();
}

module.exports.gethandler = gethandler;
module.exports.gethandlerid = gethandlerid;
module.exports.posthandler = posthandler;
module.exports.puthandler = puthandler;
module.exports.deletehandler = deletehandler;
module.exports.databasecreator = databasecreator;
module.exports.databasetablecreator = databasetablecreator;
