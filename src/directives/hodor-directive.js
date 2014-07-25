define(['./module'], function(directives) {
	'use strict';

	directives.directive('hodor', function() {
		return {
			restrict: 'A',
			template: 'Hodor'
		}
	});
});