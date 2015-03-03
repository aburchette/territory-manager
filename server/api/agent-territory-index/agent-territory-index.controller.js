'use strict';

var _ = require('lodash');
var AgentTerritoryIndex = require('./agent-territory-index.model');

// Get list of agentTerritoryIndex
exports.index = function(req, res) {
  AgentTerritoryIndex.find(function (err, agentTerritoryIndex) {
    if(err) { return handleError(res, err); }
    return res.json(200, agentTerritoryIndex);
  });
};

// Get a single agentTerritoryIndex
exports.show = function(req, res) {
  AgentTerritoryIndex.findById(req.params.id, function (err, agentTerritoryIndex) {
    if(err) { return handleError(res, err); }
    if(!agentTerritoryIndex) { return res.send(404); }
    return res.json(agentTerritoryIndex);
  });
};

// Creates a new agentTerritoryIndex in the DB.
exports.create = function(req, res) {
  AgentTerritoryIndex.create(req.body, function(err, agentTerritoryIndex) {
    if(err) { return handleError(res, err); }
    return res.json(201, agentTerritoryIndex);
  });
};

// Updates an existing agentTerritoryIndex in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  AgentTerritoryIndex.findById(req.params.id, function (err, agentTerritoryIndex) {
    if (err) { return handleError(res, err); }
    if(!agentTerritoryIndex) { return res.send(404); }
    var updated = _.merge(agentTerritoryIndex, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, agentTerritoryIndex);
    });
  });
};

// Deletes a agentTerritoryIndex from the DB.
exports.destroy = function(req, res) {
  AgentTerritoryIndex.findById(req.params.id, function (err, agentTerritoryIndex) {
    if(err) { return handleError(res, err); }
    if(!agentTerritoryIndex) { return res.send(404); }
    agentTerritoryIndex.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
