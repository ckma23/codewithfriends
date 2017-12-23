var express = require('express');
var router = express.Router(); // can be written as require('express').Router() to eliminate cross-file double variable naming of 'express'
var mysqlController = require ('../controllers/mysqlController.js')
var mysqldbtablecreator = require('../models/mysqldbtablecreator.js')

router.get('/', function(req,res){
  res.send('Welcome to back end API');
});

router.get('/api',mysqlController.getfunction)
router.get('/api/:id?',mysqlController.getfunctionid)
router.put('/api',mysqlController.putfunction)
router.post('/api',mysqlController.postfunction)
router.delete('/api',mysqlController.deletefunction)

router.get('/startdb',mysqldbtablecreator.startdbfunction) // this will startthedb create the database and the tables needed
router.get('/starttable',mysqldbtablecreator.starttablefunction) // this will startthedb create the database and the tables needed

module.exports = router;
