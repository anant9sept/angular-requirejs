'use strict';

define([
	'angular',
	'./controllers/index',
	'./services/index',
	'./directives/index',
	'./filters/index'
], function(angular) {
	return angular.module('angularRequire', [
		'app.controllers',
		'app.services',
		'app.directives',
		'app.filters'
	]);
});