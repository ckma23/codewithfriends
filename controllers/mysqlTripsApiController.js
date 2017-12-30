var dbservice = require('../services/dbservice.js');

module.exports.getfunction = function (req,res){
  const getquery = "Select * from Trips"
  dbservice.gethandler(getquery, function(err,results){
    if (err) {
      console.log("Error")
      // res.status(500).send("Internal server error")
    }
    console.log("Hello")
    res.status(200).send(results)
  });
}

module.exports.getfunctionid = function (req,res){
  const getquery = "Select * from Places as p join Trips as t on t.trip_id = p.trip_id where t.trip_id= ?"
  dbservice.gethandlerid(getquery,req.params.id,function(err,results){
    if (err) {
      console.log("Error")
    }
    res.send(results)
  });
}

// Template of expected POST
// const insertquery = "INSERT INTO Places(date, time, name, address) VALUES('2017-12-12','15:00:00','Coffee','Portland')"
  // let postData={"date":"2017-12-15","time":"15:00:00","name":"beer","address":"Belltown"}

module.exports.postfunction = function(req,res){
  let postData = req.body;
  const postquery = 'INSERT INTO Trips SET ?'
  console.log('req', req.body);
  console.log(postData);
  dbservice.posthandler(postquery,postData,function(err,results){
    if (err) {
      console.log("Error")
    }
    res.send(results)
  });
}

module.exports.putfunction = function(req,res) {
  let putData = [req.body.date,req.body.time,req.body.name,req.body.address,req.body.id];
  console.log(putData);
  const putquery = "UPDATE Trips SET `date_start`=?,`date_end`=?,`trip_name`=? WHERE `id`=?"
  console.log('req',req.body);
  dbservice.puthandler(putquery,putData,function(err,results){
    if (err) {
      console.log("Error")
    }
    res.send(results)
  });
}

module.exports.deletefunction = function(req,res) {
  let deleteData = req.params.id
  const deletequery = "DELETE FROM Trips WHERE id=?"
  console.log(deleteData);
  dbservice.deletehandler(deletequery,deleteData,function(err,results){
    if (err){
      console.log("Error")
    }
    res.send(results)
  })
}
