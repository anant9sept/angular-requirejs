require.config({
	paths: { 
		angular: '../assets/js/angularjs/angular',
		domReady: '../assets/js/requirejs-domready/domReady'
	},

	shim: {
		'angular': { 
			exports : 'angular' 
		}
	},

	urlArgs: "bust=" + (new Date()).getTime(),

	deps: [
		'./bootstrap'
	]
});