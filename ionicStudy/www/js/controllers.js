angular.module('starter.controllers', [])

.controller('navCtrl', function($scope, $ionicHistory) {
   $scope.goBack = function() {
      $ionicHistory.goBack();
   };
})

.controller('mainCtrl', function($scope) {
	
    $scope.items = [
		{ title : "장치 정보"    , url : "#/dev_info" },
		{ title : "리스트 샘플"  , url : "#/sample1" },
		{ title : "리스트 샘플2" , url : "#/sample2" },
	];
	
})

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

.controller('sample1Ctrl', function($scope) {
})

.controller('sample2Ctrl', function($scope, $ionicHistory) {
})

;

