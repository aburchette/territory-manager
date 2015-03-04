'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PersonTerritoryIndexSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  group_id: {
    type: Number,
    required: 'Group ID is required'
  },
  person_id: {
    type: Number,
    ref: 'Person'
  },
  territory_id: {
    type: Number,
    ref: 'Territory'
  },
  checkedOut: {

    type: Date
  },
  checkedIn: {
    type: Date
  }
});

module.exports = mongoose.model('PersonTerritoryIndex', PersonTerritoryIndexSchema);
