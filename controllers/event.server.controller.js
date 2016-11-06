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
  },

  findById: (req, res) => {
    Event.findOne({_id: req.params.id})
      .then(event => res.json(event))
      .catch(err => res.json(err))
  },

  update: (req, res) => {
    var id = {
      _id : req.params.id
    }

    var updateEvent = {
      name : req.body.name,
      date : req.body.date,
      description : req.body.description,
      email : req.body.email
    }

    var option = {
      new : true,
      upsert  : true
    }
    Event.findOneAndUpdate(id, updateEvent)
      .then(updated => res.json(updated))
      .catch(err => res.json(err))
  },

  delete: (req, res) => {
    Event.findOneAndRemove({_id: req.params.id})
      .then(() => Event.find()))
      .then(result => res.json(result))
      .catch(err => res.json(err))
  }
}
