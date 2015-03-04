'use strict';

var _ = require('lodash');
var PersonTerritoryIndex = require('./person-territory-index.model');

// Get list of personTerritoryIndex
exports.index = function(req, res) {
  PersonTerritoryIndex.find(function (err, personTerritoryIndex) {
    if(err) { return handleError(res, err); }
    return res.json(200, personTerritoryIndex);
  });
};

// Get a single personTerritoryIndex
exports.show = function(req, res) {
  PersonTerritoryIndex.findById(req.params.id, function (err, personTerritoryIndex) {
    if(err) { return handleError(res, err); }
    if(!personTerritoryIndex) { return res.send(404); }
    return res.json(personTerritoryIndex);
  });
};

// Creates a new personTerritoryIndex in the DB.
exports.create = function(req, res) {
  PersonTerritoryIndex.create(req.body, function(err, personTerritoryIndex) {
    if(err) { return handleError(res, err); }
    return res.json(201, personTerritoryIndex);
  });
};

// Updates an existing personTerritoryIndex in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  PersonTerritoryIndex.findById(req.params.id, function (err, personTerritoryIndex) {
    if (err) { return handleError(res, err); }
    if(!personTerritoryIndex) { return res.send(404); }
    var updated = _.merge(personTerritoryIndex, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, personTerritoryIndex);
    });
  });
};

// Deletes a personTerritoryIndex from the DB.
exports.destroy = function(req, res) {
  PersonTerritoryIndex.findById(req.params.id, function (err, personTerritoryIndex) {
    if(err) { return handleError(res, err); }
    if(!personTerritoryIndex) { return res.send(404); }
    personTerritoryIndex.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
