'use strict';

/*
 *
 */
angular.module('tmApp')
  .factory('Config', ['$resource', function ($resource) {

    return $resource('/api/config/:id', { id: '@_id' }, {
      // custom method for import
      saveArray: {
        method: 'POST',
        isArray: true
      },

      // cache the options to prevent repeat loading
      list: {
        method: 'GET',
        cache: true
      }
    });

  }]);
