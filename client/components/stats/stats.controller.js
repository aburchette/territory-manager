'use strict';

angular.module('tmApp')
  .controller('StatsCtrl', ['$scope', 'Territory', 'Record',
    function ($scope, Territory, Record) {
      var totalTerritories = Territory.getTotal() || 0,
          totalRecords = Record.getTotal() || 0;

      $scope.menu = [{
        'text': 'Total Territories:',
        'link': '/territories',
        'number': totalTerritories
      },{
        'text': 'Total Records',
        'link': '/records',
        'number': totalRecords
      }];

    }]);
