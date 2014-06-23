'use strict';

describe('TodoController Test', function() {
	var $rootScope, $controller, scope, TodoController, 
		mockService = {
			notes:['test1','test2'],
			get: function (){
				return this.notes;
			},
			put:function(content){
				this.notes.push(content);
			}
		};

  //excuted before each "it" is run.
  beforeEach(function(){

    //load the module.
    module('todoApp');
    
    //inject dependency
    inject(function($injector) {
      $rootScope = $injector.get('$rootScope');
      scope = $rootScope.$new();
      $controller = $injector.get('$controller');
      TodoController = $controller('TodoController',{
        '$scope': scope,
        notesFactory: mockService
      });
    });
  });

  it('should return notes array with 2 elements initially', function() {
  	expect(scope.notes.length).toBe(2);
  	scope.note="test3";
  	scope.createNote();
  	expect(scope.notes.length).toBe(3);
  });

});
