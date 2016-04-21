angular.module('starter.controllers')

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

;

