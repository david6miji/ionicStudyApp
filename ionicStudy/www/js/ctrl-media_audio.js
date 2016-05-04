angular.module('starter.controllers')

.controller('mediaAudioCtrl', function($scope,$ionicPlatform, $cordovaMedia ) {
	
	var audio = [{
		id: 1,
		key: 'InYourHands',
		title: "In Your Hands",
		track: 'res/InYourHands.mp3',
		info: "This will be card Description"
	} ];
	
	$scope.audioTracks = Array.prototype.slice.call(audio, 0);
  
	$scope.player = {
		key: '' // Holds a last active track
	}
	
	$ionicPlatform.ready(function() {
		console.log('CALL mediaAudioCtrl - $ionicPlatform.ready');
	
		// var src = "http://www.stephaniequinn.com/Music/Commercial%20DEMO%20-%2013.mp3";
//		var src = "res/InYourHands.mp3";
		var src = '/android_asset/www/res/InYourHands.mp3';
//		if( $ionicPlatform.is('android') ){ 
//			src = '/android_asset/www/' + src;
//		}
		
		var media = new Media(src,
			function () {
				console.log('Media Success'); 
			}, 
			function (error) {
				switch( error.code ){
					case 1 	: console.log('MediaError.MEDIA_ERR_ABORTED'       ); break;
					case 2 	: console.log('MediaError.MEDIA_ERR_NETWORK'       ); break;
					case 3 	: console.log('MediaError.MEDIA_ERR_DECODE'        ); break;
					case 4 	: console.log('MediaError.MEDIA_ERR_NONE_SUPPORTED'); break;
					default	: console.log('Unknown code <' + error.code +'>'   ); break;
				}
			}, 
			function (status) {
				switch( status ){
					case 0 	: console.log('Media.MEDIA_NONE'		); break;
					case 1 	: console.log('Media.MEDIA_STARTING'	); break;
					case 2 	: console.log('Media.MEDIA_RUNNING'		); break;
					case 3 	: console.log('Media.MEDIA_PAUSED'		); break;
					case 4 	: console.log('Media.MEDIA_STOPPED'		); break;
					default	: console.log('Unknown code <' + status +'>'   ); break;
				}
			}
		);		
				
		console.log('src = ' + src);
		console.log('media = ' + (JSON.stringify(media, null, 4)));
		
		$scope.playTrack = function(track, key) {
			media.play();
		}	
		$scope.stopTrack = function() {
			media.stop();
		}
		
//		var media = new Media(src, null, null, mediaStatusCallback);
//        $cordovaMedia.play(media);
 //   }
 
//    var mediaStatusCallback = function(status) {
//        if(status == 1) {
//            $ionicLoading.show({template: 'Loading...'});
//        } else {
//            $ionicLoading.hide();
//        }
//    }
		
//		var media = $cordovaMedia.newMedia(src, 
//		    function () {
//				// success
//				console.log('Media Success'); 
//		 }, function () {
//			    // error 
//				console.log('Media Error'); 
//		 }, function (state) {
//			    // status change 
//				console.log('Media Change'); 
//				
//		 });
		 

//		media.play(); // Android
		

		$scope.$on('destroy', function() {
			media.release();
		});
		
	});
	
  
//			$scope.my_media = new Media( '/res/InYourHands.mp3' ); // onSuccess, onError
//		$scope.my_media.play();

	
//	$ionicPlatform.ready(function() {
//	
//		$scope.playTrack = function(track, key) {
//		// Preload an audio track before we play it
//		window.plugins.NativeAudio.preloadComplex(key, track, 1, 2, 0, function(msg) {
//			// If this is not a first playback stop and unload previous audio track
//			if ($scope.player.key.length > 0) {
//			window.plugins.NativeAudio.stop($scope.player.key); // Stop audio track
//			window.plugins.NativeAudio.unload($scope.player.key); // Unload audio track
//			}
//	
//			window.plugins.NativeAudio.play(key); // Play audio track
//			$scope.player.key = key; // Set a current audio track so we can close it if needed 
//		}, function(msg) {
//			console.log('error: ' + msg); // Loading error
//		});
//		};
//	
//		$scope.stopTrack = function() {
//			// If this is not a first playback stop and unload previous audio track
//			if ($scope.player.key.length > 0) {
//			window.plugins.NativeAudio.stop($scope.player.key); // Stop audio track
//			window.plugins.NativeAudio.unload($scope.player.key); // Unload audio track
//			$scope.player.key = ''; // Remove a current track on unload, it will break an app if we try to unload it again in playTrack function
//			}
//		};
//	});
  
	
})

;

