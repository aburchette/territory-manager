/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Territory = require('./territory.model');

exports.register = function(socket) {
  Territory.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Territory.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('territory:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('territory:remove', doc);
}