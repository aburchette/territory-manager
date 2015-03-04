'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ConfigSchema = new Schema({
  group_id: {
    type: Number,
    required: 'Group ID required'
  },
  name: {
    type: String,
    unique: true,
    trim: true
  },
  value: {
    type: String
  }
});

module.exports = mongoose.model('Config', ConfigSchema);
