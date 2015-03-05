'use strict';

angular.module('tmApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('help', {
        url: '/help',
        templateUrl: 'app/help/views/help.html',
        controller: 'HelpCtrl'
      })
      .state('help.chat', {
        url: '/chat',
        templateUrl: 'app/help/views/chat.html',
        controller: 'ChatCtrl'
      });
  });
