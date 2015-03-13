'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RecordSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  active: {
    type: Boolean,
    default: true
  },
  group_id: {
    type: Number
  },
  territory_id: {
    type: Number
  },
  name: {
    type: String
  },
  address: {
    type: String,
    required: 'Address is required',
    default: '',
    trim: true
  },
  address2: {
    type: String,
    default: '',
    trim: true
  },
  city: {
    type: String,
    required: 'City is required',
    default: '',
    trim: true
  },
  zip: {
    type: String
  },
  state: {
    type: String,
    enum: ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'],
    uppercase: true,
    required: 'Select a valid state'
  },
  phone: {
    type: String,
    default: '',
    trim: true
  },
  notes: {
    type: String,
    default: '',
    trim: true
  },
  location: {
    type: [Number],
    index: '2dsphere'
  }
});

module.exports = mongoose.model('Record', RecordSchema);
