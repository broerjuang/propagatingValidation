var express = require('express');
var router = express.Router();
var EventController =  require('../controllers/event.server.controller')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/event', EventController.list);
router.post('/event', EventController.create)

module.exports = router;
