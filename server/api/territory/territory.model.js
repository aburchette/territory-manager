'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TerritorySchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Territory', TerritorySchema);