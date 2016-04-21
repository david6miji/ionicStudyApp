angular.module('starter.controllers')

.controller('deviceInfoCtrl', function($scope) {
	
	var deviceInformation = ionic.Platform.device();
	
	console.log( deviceInformation );
	
	var isWebView = ionic.Platform.isWebView();
	var isIPad = ionic.Platform.isIPad();
	var isIOS = ionic.Platform.isIOS();
	var isAndroid = ionic.Platform.isAndroid();
	var isWindowsPhone = ionic.Platform.isWindowsPhone();
	
	var currentPlatform = ionic.Platform.platform();
	var currentPlatformVersion = ionic.Platform.version();
	
	console.log( 'isWebView = ', isWebView );
	console.log( 'isIPad    = ', isIPad    );
	console.log( 'isIOS     = ', isIOS     );
	console.log( 'isAndroid = ', isAndroid );
	console.log( 'isWindowsPhone = ', isWindowsPhone );
	console.log( 'currentPlatform = ', currentPlatform );
	console.log( 'currentPlatformVersion = ', currentPlatformVersion );

	$scope.items = [];
	
	$scope.items.push( 'isWebView = ' + isWebView );
	$scope.items.push( 'isIPad    = ' + isIPad );
	$scope.items.push( 'isIOS     = ' + isIOS  );
	$scope.items.push( 'isAndroid = ' + isAndroid );
	$scope.items.push( 'isWindowsPhone = ' + isWindowsPhone );
	$scope.items.push( 'currentPlatform = ' + currentPlatform );
	$scope.items.push( 'currentPlatformVersion = ' + currentPlatformVersion );
		
})

;

