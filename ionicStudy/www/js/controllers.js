angular.module('starter.controllers', [])

.controller('navCtrl', function($scope, $ionicHistory) {
   $scope.goBack = function() {
      $ionicHistory.goBack();
   };
})

.controller('mainCtrl', function($scope) {
	
    $scope.items = [
		{ title : "장치 정보"    		, url : "#/dev_info" 		},
		{ title : "로컬 파일 시스템"    , url : "#/filesystem" 		},
		{ title : "전원 관리"  			, url : "#/power_manager" 	},
		{ title : "리스트 샘플1"  		, url : "#/sample1" 		},
		{ title : "리스트 샘플2" 		, url : "#/sample2" 		},
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

// .controller('filesystemCtrl', function($scope, $ionicPlatform,$cordovaFileTransfer) {
// 	
// //	$ionicPlatform.ready(function() {
// //	});
// 		
// 	$scope.items = [];
// 	
// 	$scope.items.push( '테스트 중 3' );
// 	
// //	if( !window.cordova ){
// //	
// //		// 이곳에서 해당 처리를 해야 한다. 
// //		$scope.items.push( 'cordova 지원 불가 상태' );
// //		return;
// //		
// //	} 
// //	
// //	$scope.items.push( 'cordova 지원 상태' );
// 	
// //	console.log( cordova.file );
// //	
// //	if( cordova.file ) {
// //		$scope.items.push( 'cordova.file OK' );
// //		
// //	} else {
// //		
// //	}
// //	
// //		console.log($cordovaFileTransfer ); 
// //		var targetPath = cordova.file.externalRootDirectory + "logo_radni.png";
// 		
// //		console.log(targetPath);
// //		cordova.file.externalRootDirectory
// 		
// //		$cordovaFile.getFreeDiskSpace()
// //		.then(function (success) {
// //			// success in kilobytes
// //			console.log(success); 
// //			
// //		}, function (error) {
// //			// error
// //			console.log(error); 
// //		});
// 
// 		
// })

.controller('powerManagerCtrl', function($scope) {
	
	$scope.PowerOn = function(){
		if( window.powerManagement ){
			console.log( "OK window.powerManagement" );
			window.powerManagement.acquire(function() {
				console.log('Wakelock acquired');
			}, function() {
				console.log('Failed to acquire wakelock');
			});
		}
		console.log( "power on" );
	}
	
	$scope.PowerOff = function(){
		console.log( "power off" );
		if( window.powerManagement ){
			
			window.powerManagement.release(function() {
				console.log('Wakelock released');
			}, function() {
				console.log('Failed to release wakelock');
			});			
		}
	}
	
})

.controller('sample1Ctrl', function($scope) {
	
	if(window.cordova ) {
		$scope.beenCordova = "Ok Cordova";
    } else {
		$scope.beenCordova = "No Cordova";
	}
	
})

.controller('sample2Ctrl', function($scope, $ionicHistory) {
})

;

