'use strict';

angular.module('tmApp')
  .factory('Territory', ['$resource',
    function($resource){

      return $resource('/api/territories/:id', { id: '@_id' });

    }]);
