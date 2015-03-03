'use strict';

angular.module('tmApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('maintenance', {
        url: '/maintenance',
        templateUrl: 'app/maintenance/maintenance.html',
        controller: 'MaintenanceCtrl'
      });
  });