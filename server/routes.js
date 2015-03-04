/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/removed-records', require('./api/removed-record'));
  app.use('/api/queued-records', require('./api/queued-record'));
  app.use('/api/logs', require('./api/log'));
  app.use('/api/configs', require('./api/config'));
  app.use('/api/person-territory-indexes', require('./api/person-territory-index'));
  app.use('/api/people', require('./api/person'));
  app.use('/api/groups', require('./api/group'));
  app.use('/api/records', require('./api/record'));
  app.use('/api/territories', require('./api/territory'));
  app.use('/api/things', require('./api/thing'));
  app.use('/api/users', require('./api/user'));

  app.use('/auth', require('./auth'));

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
