'use strict';

angular.module('tmApp')
  .controller('RecordsCtrl', ['$scope', 'Record', 'RecordList', function ($scope, Record, RecordList) {
    $scope.nameFilter = '';
    $scope.addressFilter = '';
    $scope.orderRecords = 'address';

    // cache the model
    if(!RecordList.list){
      RecordList.list = $scope.records = Record.query();
    } else {
      $scope.records = RecordList.list;
    }

    // sort order, clicking a second time adds the descending order prefix
    $scope.setOrder = function(s){
      if($scope.orderRecords === s){
        s = '-' + s;
      }
      $scope.orderRecords = s;
    }
  }]);
