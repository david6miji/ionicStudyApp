angular.module('starter.controllers', [])

.controller('navCtrl', function($scope, $ionicHistory) {
   $scope.goBack = function() {
      $ionicHistory.goBack();
   };
})

.controller('mainCtrl', function($scope) {
	
    $scope.items = [
		{ title : "장치 정보"    				, url : "#/dev_info" 					},
		{ title : "로컬 파일 시스템"    		, url : "#/filesystem" 					},
		{ title : "파일 브라우저"    			, url : "#/filebrowser" 				},
		{ title : "전원 관리"  					, url : "#/power_manager" 				},
		{ title : "네이티브 오디오"  			, url : "#/native_audio" 				},
		{ title : "네이티브 오디오 백그라운드"  , url : "#/native_audio_background" 	},
		{ title : "미디어 오디오"  				, url : "#/media_audio" 				},
		{ title : "리스트 샘플1"  				, url : "#/sample1" 					},
		{ title : "리스트 샘플2" 				, url : "#/sample2" 					},
	];
	
})

.controller('sample1Ctrl', function($scope) {
})

.controller('sample2Ctrl', function($scope, $ionicHistory) {
})

;

