var Event = require('../models/event.server.model');


module.exports = {
  create: (req, res) => {
    var eventDetail = {
      name : req.body.name,
      description : req.body.description,
      date: req.body.date,
      email : req.body.email
    }
    Event.create(eventDetail)
    .then(detail => res.json(detail))
    .catch(err => res.json(err))
  },

  list: (req, res) => {
    Event.find()
      .then(result => res.json(result))
      .catch(err => res.json(err))
  }
}
