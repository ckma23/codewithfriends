var express = require('express');
var router = express.Router();
var mysqlController = require ('../controllers/mysqlController.js')
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.get('/', function(req,res){
  res.send('Welcome to back end API');
});

router.get('/api',mysqlController.getfunction)
router.get('/api/:id?',mysqlController.getfunctionid)
router.put('/api',mysqlController.putfunction)
router.post('/api',mysqlController.postfunction)
router.delete('/api',mysqlController.deletefunction)


module.exports = router;
