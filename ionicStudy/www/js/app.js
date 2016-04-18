// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova','starter.controllers'])

.run(function($ionicPlatform) {
	
  $ionicPlatform.ready(function() {
	  
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
	
	$stateProvider
	.state('main', 			{ url: '/', 				templateUrl: 'views/main.html'    	, 		controller: 'mainCtrl'})
	.state('device info', 	{ url: '/dev_info',			templateUrl: 'views/dev_info.html'	, 		controller: 'deviceInfoCtrl' })
	.state('file system', 	{ url: '/filesystem',		templateUrl: 'views/filesystem.html', 		controller: 'filesystemCtrl' })
	.state('power manager', { url: '/power_manager',	templateUrl: 'views/power_manager.html', 	controller: 'powerManagerCtrl' })
	.state('sample1', 		{ url: '/sample1', 			templateUrl: 'views/sample1.html' 	, 		controller: 'sample1Ctrl' })
	.state('sample2', 		{ url: '/sample2', 			templateUrl: 'views/sample1.html' 	, 		controller: 'sample2Ctrl' })
	;
  
	$urlRouterProvider.otherwise('/');
  
})

;
	