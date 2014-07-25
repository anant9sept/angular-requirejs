define(['./module'], function(controllers) {
	'use strict';

	controllers.controller('HelloWorldCtrl', function($scope, $http) {
		$scope.message = 'Hello World!';
	});
});