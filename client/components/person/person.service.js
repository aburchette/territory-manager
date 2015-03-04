'use strict';

angular.module('tmApp')
  .factory('Person', ['$resource', function ($resource) {

    return $resource('/api/people/:id', { id: '@_id' });

  }]);
