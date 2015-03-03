'use strict';

angular.module('tmApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('territories', {
        url: '/territories',
        templateUrl: 'app/territories/territories.html',
        controller: 'TerritoriesCtrl'
      });
  });