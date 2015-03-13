'use strict';

angular.module('tmApp')
  .controller('RecordsCtrl', ['$scope', 'Record', 'RecordList', function ($scope, Record, RecordList) {
    $scope.nameFilter = '';
    $scope.addressFilter = '';
    $scope.orderRecords = 'address';
    $scope.perPage = 20;
    $scope.page = 0;

    $scope.countPages = function(){
      return Math.ceil($scope.records.length / $scope.perPage) - 1;
    };

    // cache the model
    if(!RecordList.list){
      $scope.records = RecordList.list = Record.query();
      $scope.countPages();
    } else {
      $scope.records = RecordList.list;
      $scope.countPages();
    }

    // sort order, clicking a second time adds the descending order prefix
    $scope.setOrder = function(s){
      if($scope.orderRecords === s){
        s = '-' + s;
      }
      $scope.orderRecords = s;
    };

    $scope.nextPage = function(){
      if($scope.page < $scope.countPages()){
        $scope.page++;
      }
    };

    $scope.prevPage = function(){
      if($scope.page > 0){
        $scope.page--;
      }
    };

    $scope.nextPageDisabled = function() {
      return $scope.page === $scope.countPages() ? "disabled" : "";
    };

    $scope.prevPageDisabled = function() {
      return $scope.page === 0 ? "disabled" : "";
    };

    $scope.setPage = function(n){
      $scope.page = n;
    };

    $scope.range = function(){
      var t = $scope.countPages();
      if($scope.page < 5){
        return [0,1,2,3,4,5,6,7,8,9];
      } else if($scope.page > (t - 5)){
        return [t-9,t-8,t-7,t-6,t-5,t-4,t-3,t-2,t-1,t];
      } else {
        return [$scope.page-4,$scope.page-3,$scope.page-2,$scope.page-1,$scope.page,$scope.page+1,$scope.page+2,$scope.page+3,$scope.page+4,$scope.page+5];
      }
    }

  }]);
