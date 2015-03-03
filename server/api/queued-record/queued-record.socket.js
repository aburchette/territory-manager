/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var QueuedRecord = require('./queued-record.model');

exports.register = function(socket) {
  QueuedRecord.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  QueuedRecord.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('queued-record:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('queued-record:remove', doc);
}