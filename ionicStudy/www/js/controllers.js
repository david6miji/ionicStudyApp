angular.module('starter.controllers', [])

.controller('navCtrl', function($scope, $ionicHistory) {
   $scope.goBack = function() {
      $ionicHistory.goBack();
   };
})

.controller('mainCtrl', function($scope) {
	
    $scope.items = [
		{ title : "리스트 샘플"  , url : "#/sample1" },
		{ title : "리스트 샘플2" , url : "#/sample2" },
	];
	
	$scope.click = function (item) {
		
	} 
	
})

.controller('sample1Ctrl', function($scope) {
})

.controller('sample2Ctrl', function($scope, $ionicHistory) {
})

;

