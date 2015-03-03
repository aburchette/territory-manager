'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AgentTerritoryIndexSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('AgentTerritoryIndex', AgentTerritoryIndexSchema);