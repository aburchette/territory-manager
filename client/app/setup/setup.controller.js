'use strict';

angular.module('tmApp')
  .controller('SetupCtrl', ['$scope', function ($scope) {
    $scope.setupNav = [
      { title: 'People', sref: 'setup.people' },
      { title: 'Map', sref: 'setup.map' },
      { title: 'Streets', sref: 'setup.streets' },
      { title: 'Import', sref: 'setup.import' }
    ];
  }])
  .controller('ImportCtrl', ['$scope', '$http', '$stateParams', 'Import',
    function ($scope, $http, $stateParams, Import) {
      $scope.databaseOptions = Import.databaseOptions;
      $scope.selectDatabase = $scope.databaseOptions[0];
      $scope.message = '';

      if(Import.modelExists()){
        populateTable(Import.getModel());
      }

      // import the object to the database selected
      $scope.submitImport = function(){
        Import.importObject($scope.selectDatabase.value);
      };

      $scope.$on('import:success', function(e, data){
        $scope.message = data;
      });
      $scope.$on('import:error', function(e, data){
        $scope.message = data.data;
      });

      $scope.$watch('obj', function(returnedObject){

        // watch for changes and persist the object as well as populate the table IF it is not undefined
        if(returnedObject) {
          Import.persistModel(returnedObject);
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

