'use strict';

describe('Controller: TerritoriesCtrl', function () {

  // load the controller's module
  beforeEach(module('tmApp'));

  var TerritoriesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TerritoriesCtrl = $controller('TerritoriesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
