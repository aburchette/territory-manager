'use strict';

angular.module('tmApp')
  .controller('StatsCtrl', ['$scope', 'Territory', 'Record',
    function ($scope, Territory, Record) {
      var territories = Territory.query(),
          records = Record.query();

      $scope.menu = [{
        'text': 'Total Territories:',
        'link': '/territories',
        'number': territories.length
      },{
        'text': 'Total Records',
        'link': '/records',
        'number': records.length
      }];

    }]);
