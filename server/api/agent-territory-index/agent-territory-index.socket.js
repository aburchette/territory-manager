/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var AgentTerritoryIndex = require('./agent-territory-index.model');

exports.register = function(socket) {
  AgentTerritoryIndex.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  AgentTerritoryIndex.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('agent-territory-index:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('agent-territory-index:remove', doc);
}