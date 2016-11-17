var express = require('express');
var router = express.Router();
var EventController =  require('../controllers/event.server.controller')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET All Event. */
router.get('/events', EventController.list);

/* POST Event */
router.post('/events', EventController.create)

/* GET Event By Id */
router.get('/events/:id', EventController.findById)

/* PUT event By its id */
router.put('/events/:id', EventController.update)

/* Delete event By its id */
router.delete('/event/:id', EventController.update)
module.exports = router;
