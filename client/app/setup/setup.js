'use strict';

angular.module('tmApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('setup', {
        url: '/setup',
        templateUrl: 'app/setup/views/setup.html',
        controller: 'SetupCtrl'
      })
      .state('setup.agents', {
        url: '/agents',
        templateUrl: 'app/setup/views/agents.html'
      })
      .state('setup.agents.detail', {
        url: '/:id',
        templateUrl: 'app/setup/views/agent.html'
      })
      .state('setup.agents.detail.edit', {
        url: '/agents',
        templateUrl: 'app/setup/views/agent-edit.html'
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
