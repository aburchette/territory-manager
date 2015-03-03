'use strict';

var _ = require('lodash');
var Territory = require('./territory.model');

// Get list of territorys
exports.index = function(req, res) {
  Territory.find(function (err, territorys) {
    if(err) { return handleError(res, err); }
    return res.json(200, territorys);
  });
};

// Get a single territory
exports.show = function(req, res) {
  Territory.findById(req.params.id, function (err, territory) {
    if(err) { return handleError(res, err); }
    if(!territory) { return res.send(404); }
    return res.json(territory);
  });
};

// Creates a new territory in the DB.
exports.create = function(req, res) {
  Territory.create(req.body, function(err, territory) {
    if(err) { return handleError(res, err); }
    return res.json(201, territory);
  });
};

// Updates an existing territory in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Territory.findById(req.params.id, function (err, territory) {
    if (err) { return handleError(res, err); }
    if(!territory) { return res.send(404); }
    var updated = _.merge(territory, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, territory);
    });
  });
};

// Deletes a territory from the DB.
exports.destroy = function(req, res) {
  Territory.findById(req.params.id, function (err, territory) {
    if(err) { return handleError(res, err); }
    if(!territory) { return res.send(404); }
    territory.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}