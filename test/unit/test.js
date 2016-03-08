'use strict';

describe('controllers', function() {

  beforeEach(module('testApp'));
  
  describe('testController', function(){
    var scope, ctrl;

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('testController', {$scope: scope});
    }));
    
    it('message', function() {
       expect(scope.message).toBe('Hello');
    });
  });
});
