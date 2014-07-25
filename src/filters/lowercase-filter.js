define(['./module'], function(filters) {
	'use strict';

	filters.filter('lowercaseFilter', function() {
		return function(input) {
			return input.toLowerCase();
		}
	});
});