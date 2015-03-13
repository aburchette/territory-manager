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
      var totalPages = $scope.countPages(),
        rangeCount = totalPages > 9 ? 9 : totalPages,
        middlePageCount = Math.floor(rangeCount / 2),
        a = [],
        startNumber;

      if($scope.page < middlePageCount){
        startNumber = 0;
      } else if($scope.page > (totalPages - middlePageCount)){
        startNumber = totalPages - (middlePageCount * 2);
      } else {
        startNumber = ($scope.page - middlePageCount);
      }
      console.log(startNumber);

      for(var c = 0; c < rangeCount; c++){
        a.push(c + startNumber);
      }

      return a;
    }

  }]);
