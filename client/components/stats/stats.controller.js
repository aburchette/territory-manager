'use strict';

angular.module('tmApp')
  .controller('StatsCtrl', ['$scope', 'Territory', 'Record',
    function ($scope, Territory, Record) {
      $scope.territories = Territory.query();
      $scope.records = Record.query();

    }]);
