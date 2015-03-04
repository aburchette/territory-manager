'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var LogSchema = new Schema({
  _id: {
    type: Number
  },
  name: {
    type: String,
    trim: true
  },
  value: {
    type: String
  }
});

module.exports = mongoose.model('Log', LogSchema);
