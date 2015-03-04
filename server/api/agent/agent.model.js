'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AgentSchema = new Schema({
  _id: {
    type: Number
  },
  created: {
    type: Date,
    default: Date.now
  },
  group_id: {
    type: Number,
    required: 'Group ID is required'
  },
  name: {
    type: String,
    trim: true,
    required: 'Full name required'
  },
  phone: {
    type: String,
    default: '',
    trim: true
  },
  active: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('Agent', AgentSchema);
