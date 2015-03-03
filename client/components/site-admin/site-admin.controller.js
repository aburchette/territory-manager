'use strict';

angular.module('tmApp')
  .controller('SiteAdminCtrl', ['$scope', '$location', 'Auth',
    function ($scope, $location, Auth) {
      $scope.menu = [{
        'title': 'Site Admin',
        'link': '/site-admin'
      },{
        'title': 'Change Group',
        'link': '/site-admin/group'
      },{
        'title': 'Users',
        'link': '/site-admin/users'
      }];
  }]);
