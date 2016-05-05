angular.module('starter.controllers')

.controller('intervalCtrl', function($scope,$interval ) {
	
	$scope.count = 0;
	var intgerval_handle;

	$scope.start = function(){
		if ( angular.isDefined(intgerval_handle) ) return;
		
		$scope.count = 0;
		
		intgerval_handle = $interval( function (){
			$scope.count = $scope.count + 1;
		},500);
	};
  
	$scope.stop = function(){
		if (angular.isDefined(intgerval_handle)) {
            $interval.cancel(intgerval_handle);
            intgerval_handle = undefined;
        }		
	};
		  
	$scope.$on('$destroy', function() {
		console.log( 'EVENT destroy()');
		$scope.stop();
	});
	
})

;

