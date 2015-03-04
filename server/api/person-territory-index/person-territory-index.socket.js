/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var PersonTerritoryIndex = require('./person-territory-index.model');

exports.register = function(socket) {
  PersonTerritoryIndex.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  PersonTerritoryIndex.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('person-territory-index:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('person-territory-index:remove', doc);
}
