// var yelpApiSetup = require ('../config/yelpapi.json')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
  console.log("The process environment is not in production")
}

'use strict';
const yelp = require('yelp-fusion');

var yelpApiParams = {
  apiKey: process.env.YELPAPIKEY || process.env.apiKey,
};


const client = yelp.client(yelpApiParams.apiKey);

function getYelphandler(locationString,callback){
  const searchRequest = {location: locationString}
  client.search(searchRequest).then(response =>{
    const results = response.jsonBody.businesses;
    console.log("Search Returned",results);
    callback(results);
  }).catch(error => {
    console.log(error);
  });
}

module.exports.getYelphandler = getYelphandler;
