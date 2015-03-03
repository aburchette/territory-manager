'use strict';

angular.module('tmApp')
  .controller('SetupCtrl', function ($scope) {
    $scope.setupNav = [
      { title: 'Agents', sref: 'setup.agents' },
      { title: 'Map', sref: 'setup.map' },
      { title: 'Streets', sref: 'setup.streets' },
      { title: 'Import', sref: 'setup.import' }
    ];
  })
  .controller('ImportCtrl', ['$scope', '$http', '$stateParams', 'Import',
    function ($scope, $http, $stateParams, Import) {
      if(Import.objectExists()){
        populateTable(Import.getObject());
      }

      $scope.$watch('obj', function(returnedObject){

        // watch for changes and persist the object as well as populate the table IF it is not undefined
        if(returnedObject) {
          Import.saveObject(returnedObject);
          populateTable(returnedObject);
        }
      });

      function populateTable(obj){
        $scope.result = {};
        $scope.result.headers = [];
        $scope.result.rows = [];
        $scope.noRows = obj.length;

        angular.forEach(obj[0], function (value, key) {
          $scope.result.headers.push(key);
        });

        for (var i = 0; i < 10; i++) {
          $scope.result.rows[i] = [];
          angular.forEach(obj[i], function (value) {
            $scope.result.rows[i].push(value);
          });
        }
      }

    }]);

