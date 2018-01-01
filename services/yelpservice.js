var yelpApiSetup = require ('../config/yelpapi.json')

'use strict';

const yelp = require('yelp-fusion');

var yelpApiParams = {
  apiKey: process.env.YELPAPIKEY || yelpApiSetup.apiKey,
};

const client = yelp.client(yelpApiParams.apiKey);

function getYelphandler(locationString,callback){
  console.log(yelpApiSetup.apiKey)
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
