'use strict';

angular.module('tmApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('setup', {
        url: '/setup',
        templateUrl: 'app/setup/views/setup.html',
        controller: 'SetupCtrl'
      })
      .state('setup.people', {
        url: '/people',
        templateUrl: 'app/setup/views/people.html'
      })
      .state('setup.people.detail', {
        url: '/:id',
        templateUrl: 'app/setup/views/person.html'
      })
      .state('setup.people.detail.edit', {
        url: '/edit',
        templateUrl: 'app/setup/views/person-edit.html'
      })

      .state('setup.streets', {
        url: '/streets',
        templateUrl: 'app/setup/views/streets.html'
      })
      .state('setup.import', {
        url: '/import',
        templateUrl: 'app/setup/views/import.html',
        controller: 'ImportCtrl'
      })
      .state('setup.map', {
        url: '/map',
        templateUrl: 'app/setup/views/map.html'
      });
  });
