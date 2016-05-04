// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova','starter.controllers'])

.run( function($rootScope, $ionicPlatform,$ionicHistory, $ionicPopup) {
	
  $ionicPlatform.ready(function() {
	  
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
  
	$ionicPlatform.registerBackButtonAction(function () {
		console.log( 'EVENT onHardwareBackButton()' );
		
		var state_name = $ionicHistory.currentStateName();
		console.log( 'state_name =', state_name );
		if( state_name == 'main' ) {
			
			var confirmPopup = $ionicPopup.confirm({
                        title: '종료 확인',
                        template: "FA-BLE를 종료 하시겠습니까?",
						 buttons: [
									{ text: '취소' },
									{ text: '확인' ,  
									  type: 'button-positive',
									  onTap: function(event) {
												ionic.Platform.exitApp();
												event.preventDefault();
												return false;
									   }
									 },
								]	
                    });
					
		} else {
			console.log( 'no Main View Exit' );
			$ionicHistory.goBack();
		}
		
	}, 101); 
		
})

.config(function($stateProvider, $urlRouterProvider) {
	
	$stateProvider
	.state('main', 						{ url: '/', 				
										templateUrl: 'views/main.html'    	, 	
										controller: 'mainCtrl'			})
							
	.state('device info', 				{ url: '/dev_info',			
										templateUrl: 'views/dev_info.html'	,
										controller: 'deviceInfoCtrl' 	})
							
	.state('file system', 				{ url: '/filesystem',		
										templateUrl: 'views/filesystem.html', 	
										controller: 'filesystemCtrl' 	})
							
	.state('file browser', 				{ url: '/filebrowser',		
										templateUrl: 'views/filebrowser.html', 
										controller: 'fileBrowserCtrl' 	})
							
	.state('power manager', 			{ url: '/power_manager',	
										templateUrl: 'views/power_manager.html', 
										controller: 'powerManagerCtrl' 	})
							
	.state('native audio', 				{ url: '/native_audio',		
										templateUrl: 'views/native_audio.html', 
										controller: 'nativeAudioCtrl' 	})
							
	.state('native audio background', 	{ url: '/native_audio_background',		
										templateUrl: 'views/native_audio_background.html', 
										controller: 'nativeAudioBackgroundCtrl' 	})
							
	.state('media audio', 				{ url: '/media_audio',		
										templateUrl: 'views/media_audio.html', 
										controller: 'mediaAudioCtrl' 	})
										
	.state('sample1', 					{ url: '/sample1', 			
										templateUrl: 'views/sample1.html' 	, 	
										controller: 'sample1Ctrl' 		})
							
	.state('sample2', 					{ url: '/sample2', 			
										templateUrl: 'views/sample1.html' 	, 	
										controller: 'sample2Ctrl' 		})
	;
  
	$urlRouterProvider.otherwise('/');
  
})

;
	