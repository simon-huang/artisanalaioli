'use strict';

describe('Component: OptionsComponent', function() {
  // load the controller's module
  beforeEach(module('divyUpApp.options'));

  var OptionsComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    OptionsComponent = $componentController('options', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
