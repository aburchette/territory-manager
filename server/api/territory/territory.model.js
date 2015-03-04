'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TerritorySchema = new Schema({
  _id: {
    type: Number
  },
  created: {
    type: Date,
    default: Date.now
  },
  group_id: {
    type: Number,
    required: 'Group ID required'
  },
  name: {
    type: String,
    default: '',
    trim: true
  },
  polygon: {
    type: [Number],
    index: '2dsphere'
  },
  locale: {
    type: String,
    default: '',
    trim: true
  },
  notes: {
    type: String,
    default: '',
    trim: true
  },
  updated: {
    type: Date
  }
});

module.exports = mongoose.model('Territory', TerritorySchema);
