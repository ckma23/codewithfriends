var express = require('express');
var router = express.Router(); // can be written as require('express').Router() to eliminate cross-file double variable naming of 'express'
var mysqlController = require ('../controllers/mysqlController.js')
var mysqlTripsApiController = require ('../controllers/mysqlTripsApiController.js')
var yelpApiController = require('../controllers/yelpController.js')

var mysqldbtablecreator = require('../models/mysqldbtablecreator.js')


router.get('/index', function(req,res){
  res.send('Welcome to back end API');
});

//this is for the Places API
router.get('/api',mysqlController.getfunction)
router.get('/api/:id?',mysqlController.getfunctionid)
router.put('/api',mysqlController.putfunction)
router.post('/api',mysqlController.postfunction)
router.delete('/api/:id?',mysqlController.deletefunction)

//this is for the trips API
router.get('/trips',mysqlTripsApiController.getfunction)
router.get('/trips/:id?',mysqlTripsApiController.getfunctionid)
router.put('/trips',mysqlTripsApiController.putfunction)
router.post('/trips',mysqlTripsApiController.postfunction)
router.delete('/trips/:id?',mysqlTripsApiController.deletefunction)

router.get('/yelp/:location?',yelpApiController.getYelpfunction)

router.get('/startdb',mysqldbtablecreator.startdbfunction) // this will startthedb create the database and the tables needed
router.get('/startplacestable',mysqldbtablecreator.startplacestablefunction) // this will startthedb create the database and the tables needed
router.get('/starttripstable',mysqldbtablecreator.starttripstablefunction) // this will startthedb create the database and the tables needed

module.exports = router;
