'use strict';

var _ = require('lodash');
var QueuedRecord = require('./queued-record.model');

// Get list of queuedRecord
exports.index = function(req, res) {
  QueuedRecord.find(function (err, queuedRecord) {
    if(err) { return handleError(res, err); }
    return res.json(200, queuedRecord);
  });
};

// Get a single queuedRecord
exports.show = function(req, res) {
  QueuedRecord.findById(req.params.id, function (err, queuedRecord) {
    if(err) { return handleError(res, err); }
    if(!queuedRecord) { return res.send(404); }
    return res.json(queuedRecord);
  });
};

// Creates a new queuedRecord in the DB.
exports.create = function(req, res) {
  QueuedRecord.create(req.body, function(err, queuedRecord) {
    if(err) { return handleError(res, err); }
    return res.json(201, queuedRecord);
  });
};

// Updates an existing queuedRecord in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  QueuedRecord.findById(req.params.id, function (err, queuedRecord) {
    if (err) { return handleError(res, err); }
    if(!queuedRecord) { return res.send(404); }
    var updated = _.merge(queuedRecord, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, queuedRecord);
    });
  });
};

// Deletes a queuedRecord from the DB.
exports.destroy = function(req, res) {
  QueuedRecord.findById(req.params.id, function (err, queuedRecord) {
    if(err) { return handleError(res, err); }
    if(!queuedRecord) { return res.send(404); }
    queuedRecord.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
