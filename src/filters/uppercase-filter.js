define(['./module'], function(filters) {
	'use strict';

	filters.filter('uppercaseFilter', function() {
		return function(input) {
			return input.toUpperCase();
		}
	});
});