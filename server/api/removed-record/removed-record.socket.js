/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var RemovedRecord = require('./removed-record.model');

exports.register = function(socket) {
  RemovedRecord.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  RemovedRecord.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('removed-record:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('removed-record:remove', doc);
}