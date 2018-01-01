var yelpApiSetup = require ('../config/yelpapi.json')

'use strict';

var yelpApiParams = {
  apiKey: process.env.YELPAPIKEY || yelpApiSetup.apiKey,
};


function getYelphandler(){
  console.log("Working")
}

module.exports.getYelphandler = getYelphandler;
