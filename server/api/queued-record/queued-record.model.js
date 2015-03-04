'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var QueuedRecordSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  active: {
    type: Boolean,
    default: true
  },
  group_id: {
    type: Number,
    required: 'Group ID is required'
  },
  territory_id: {
    type: Number
  },
  contact_name: {
    type: String
  },
  address: {
    type: String,
    required: 'Address is required'
  },
  address2: {
    type: String
  },
  city: {
    type: String,
    required: 'City is required'
  },
  state: {
    type: String,
    enum: ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'],
    uppercase: true,
    required: 'Select a valid state'
  },
  phone: {
    type: String
  },
  notes: {
    type: String
  },
  lat: {
    type: Number
  },
  lon: {
    type: Number
  }
});

module.exports = mongoose.model('QueuedRecord', QueuedRecordSchema);
