angular.module('starter.controllers')

.controller('nativeAudioBackgroundCtrl', function($scope,$ionicPlatform) {
	
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
		
		// Enable background mode while track is playing
		cordova.plugins.backgroundMode.setDefaults({ text:'Doing back tasks.'});
		cordova.plugins.backgroundMode.enable();
 
		$scope.playTrack = function(track, key) {
			// Preload an audio track before we play it
			window.plugins.NativeAudio.preloadComplex(key, track, 1, 2, 0, function(msg) {
				// If this is not a first playback stop and unload previous audio track
				if ($scope.player.key.length > 0) {
				window.plugins.NativeAudio.stop($scope.player.key); // Stop audio track
				window.plugins.NativeAudio.unload($scope.player.key); // Unload audio track
				}
		
				window.plugins.NativeAudio.play(key); // Play audio track
				$scope.player.key = key; // Set a current audio track so we can close it if needed 
			}, function(msg) {
				console.log('error: ' + msg); // Loading error
			});
		};
	
		$scope.stopTrack = function() {
			// If this is not a first playback stop and unload previous audio track
			if ($scope.player.key.length > 0) {
				window.plugins.NativeAudio.stop($scope.player.key); // Stop audio track
				window.plugins.NativeAudio.unload($scope.player.key); // Unload audio track
				$scope.player.key = ''; // Remove a current track on unload, it will break an app if we try to unload it again in playTrack function
			}
		};
		
		// Called when background mode has been activated
		cordova.plugins.backgroundMode.onactivate = function() {
			console.log('CALL cordova.plugins.backgroundMode.onactivate()' ); 
			if ($scope.player.key.length > 0) {
				window.plugins.NativeAudio.play($scope.player.key); // Play audio track
			}
		}
		
	});
  
	
})

;

