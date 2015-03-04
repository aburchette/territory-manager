'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AgentTerritoryIndexSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  group_id: {
    type: Number,
    required: 'Group ID is required'
  },
  agent_id: {
    type: Number,
    ref: 'Agent'
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

module.exports = mongoose.model('AgentTerritoryIndex', AgentTerritoryIndexSchema);
