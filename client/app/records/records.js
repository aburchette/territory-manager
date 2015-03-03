'use strict';

angular.module('tmApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('records', {
        url: '/records',
        templateUrl: 'app/records/records.html',
        controller: 'RecordsCtrl'
      });
  });