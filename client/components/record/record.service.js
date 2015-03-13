'use strict';

angular.module('tmApp')
  .factory('Record', ['$resource', function($resource){

      return $resource('/api/records/:id', { id: '@_id' }, {
        // custom method for import
        'saveArray': {
          method: 'POST',
          isArray: true
        },
        'update': {
          method: 'PUT'
        }
      });

    }]);
