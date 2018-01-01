var yelpservice = require('../services/yelpservice.js');

module.exports.getYelpfunction = function (req,res){
  console.log(req.params.location)
  yelpservice.getYelphandler(req.params.location, function(err,results){
    if (err) {
      console.log("Is this is an error",err)
      // res.status(500).send("Internal server error")
    }
    console.log("This is hit!")
    res.status(200).send(err)
  });
}
