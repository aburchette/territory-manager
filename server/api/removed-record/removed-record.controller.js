'use strict';

var _ = require('lodash');
var RemovedRecord = require('./removed-record.model');

// Get list of removedRecord
exports.index = function(req, res) {
  RemovedRecord.find(function (err, removedRecord) {
    if(err) { return handleError(res, err); }
    return res.json(200, removedRecord);
  });
};

// Get a single removedRecord
exports.show = function(req, res) {
  RemovedRecord.findById(req.params.id, function (err, removedRecord) {
    if(err) { return handleError(res, err); }
    if(!removedRecord) { return res.send(404); }
    return res.json(removedRecord);
  });
};

// Creates a new removedRecord in the DB.
exports.create = function(req, res) {
  RemovedRecord.create(req.body, function(err, removedRecord) {
    if(err) { return handleError(res, err); }
    return res.json(201, removedRecord);
  });
};

// Updates an existing removedRecord in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  RemovedRecord.findById(req.params.id, function (err, removedRecord) {
    if (err) { return handleError(res, err); }
    if(!removedRecord) { return res.send(404); }
    var updated = _.merge(removedRecord, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, removedRecord);
    });
  });
};

// Deletes a removedRecord from the DB.
exports.destroy = function(req, res) {
  RemovedRecord.findById(req.params.id, function (err, removedRecord) {
    if(err) { return handleError(res, err); }
    if(!removedRecord) { return res.send(404); }
    removedRecord.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
