var express = require('express');
var router = express.Router();
var EventController =  require('../controllers/event.server.controller')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET All Event. */
router.get('/event', EventController.list);

/* POST Event */
router.post('/event', EventController.create)

/* GET Event By Id */
router.get('/event/:id', EventController.findById)

/* PUT event By its id */
router.put('/event/:id', EventController.update)

/* Delete event By its id */
router.put('/event/:id', EventController.update)
module.exports = router;
