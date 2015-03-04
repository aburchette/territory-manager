'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var GroupSchema = new Schema({
  _id: {
    type: Number
  },
  created: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String
  },
  active: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('Group', GroupSchema);
