var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// validate email for mongoose
require('mongoose-type-email');


var eventSchema = new Schema({
  name : {
    type : String,
    required : true,
    unique : true,
    trim: true // make sure no space availabe before and after the name
  },
  date : {
    type: Date,
    default: Date.now
  },
  description : {
    type: String,
    required : true
  },
  email: {
    type: mongoose.SchemaTypes.Email,
    unique: true,
    required : true // email cannot be empty
  }
})

module.exports = mongoose.model('Event', eventSchema);
