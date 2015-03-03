'use strict';

describe('Controller: RecordsCtrl', function () {

  // load the controller's module
  beforeEach(module('tmApp'));

  var RecordsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RecordsCtrl = $controller('RecordsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
