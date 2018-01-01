var yelpservice = require('../services/yelpservice.js');

module.exports.getYelpfunction = function (req,res){
  yelpservice.getYelphandler(req.params.location, function(err,results){
    if (err) {
      console.log("Error")
      // res.status(500).send("Internal server error")
    }
    console.log("Hello")
    res.status(200).send(results)
  });
}
