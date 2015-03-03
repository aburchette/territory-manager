'use strict';

angular.module('tmApp')
  .controller('NavbarCtrl', ['$scope', '$location', 'Auth',
    function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },{
      'title': 'Records',
      'link': '/records'
    },{
      'title': 'Territories',
      'link': '/territories'
    },{
      'title': 'Map',
      'link': '/map'
    },{
      'title': 'Setup',
      'link': '/setup'
    }, {
      'title': 'Help',
      'link': '/help'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isSiteAdmin = Auth.isSiteAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      // get the beginning of the path
      var basePath = '/' + $location.path().split('/')[1];
      return route === basePath;
    };
  }]);
