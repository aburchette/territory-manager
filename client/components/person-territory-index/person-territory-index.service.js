'use strict';

angular.module('tmApp')
  .factory('PersonTerritoryIndex', ['$resource', function ($resource) {

    return $resource('/api/person-territory-index/:id', { id: '@_id' });

  }]);
