'use strict';

angular.module('tmApp')
  .controller('HelpCtrl', ['$scope', function ($scope) {
    $scope.message = 'Hello';
  }])
  .controller('ChatCtrl', ['$scope', 'socket', function ($scope, socket) {

    $scope.messages = [];

    socket.on('chatMessage', function(message){
      $scope.messages.push(message);
    });

    $scope.sendMessage = function(){
      var message = {
        text: $scope.messageText
      };

      socket.emit('chatMessage', message);

      $scope.messageText = '';
    };

    $scope.$on('$destroy', function(){
      socket.removeListener('chatMessage');
    });

  }]);
