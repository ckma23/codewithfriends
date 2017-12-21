var express = require('express');
var router = express.Router();
var mysqlController = require ('../controllers/mysqlController.js')

router.get('/', function(req,res){
  res.send('Welcome to back end API');
});

router.get('/api',mysqlController.getfunction)
router.put('/api',mysqlController.putfunction)
router.post('/api',mysqlController.postfunction)
router.delete('/api',mysqlController.deletefunction)


module.exports = router;
