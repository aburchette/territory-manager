'use strict';

angular.module('tmApp')
  .controller('FooterCtrl', ['$scope',
    function ($scope) {
    $scope.menu = [{
      'title': 'Setup',
      'link': '/setup'
    },{
      'title': 'Maintenance',
      'link': '/maintenance'
    },{
      'title': 'Chat',
      'link': '/help/chat'
    }];
  }]);
