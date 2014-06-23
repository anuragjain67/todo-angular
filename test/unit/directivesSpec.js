describe('directive tests', function() {
	var $rootScope, scope, $compile;

	//excuted before each "it" is run.
	beforeEach(function(){

		//load the module.
		module('todoApp');
		
		//inject dependency
		inject(function($injector) {
			$rootScope = $injector.get('$rootScope');
			scope = $rootScope.$new();
			$compile = $injector.get('$compile');
		});

	});
	it('should set background to rgb(128, 128, 128)', function() {
		scope = $rootScope.$new();
		elem = angular.element("<span custom-color=\"rgb(128, 128, 128)\">sample</span>");
		scope=$rootScope.$new();
		$compile(elem)(scope);
		expect(elem.css("background-color")).toEqual('rgb(128, 128, 128)');
	});
});