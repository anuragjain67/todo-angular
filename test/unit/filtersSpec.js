describe('filter tests', function() {
var truncateFilter;

//excuted before each "it" is run.
beforeEach(function(){
	
	//load the module.
	module('todoApp');

  //inject dependency
	inject(function($injector) {
    truncateFilter = $injector.get('truncateFilter');
  });
	
});

it('should truncate the input to 10 characters', function() {
	expect(truncateFilter('abcdefghijk',10).length).toBe(10);
});

});