/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Person = require('./person.model');

exports.register = function(socket) {
  Person.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Person.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('person:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('person:remove', doc);
}
