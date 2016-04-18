angular.module('starter.controllers')

//.controller('filesystemCtrl', function($scope, $ionicPlatform,$cordovaFileTransfer) {
.controller('filesystemCtrl', function($window, $scope, $ionicPlatform, $cordovaFile) {
	
		
	$scope.items = [];
	
//	$scope.items.push( { name : '알림', value : '테스트 중' }   );
	
	if( !window.cordova ){
	
		// 이곳에서 해당 처리를 해야 한다. 
		$scope.items.push( { name : '알림', value : 'cordova 지원 불가 상태' }  );
		return;
		
	} 
	
	$scope.items.push( { name : '알림', value : 'cordova 지원 상태' }  );
	
	console.log( "before event ready" );
	$ionicPlatform.ready(function() {
		
		console.log( "event ready" );
//		console.log( "cordova.file = " + cordova.file );
		$scope.items.push( { name : '변수', value : 'cordova.file' }  );
		
//		console.log( "cordova.file.applicationDirectory = " 				+ cordova.file.applicationDirectory 				);
//		console.log( "cordova.file.applicationStorageDirectory = " 			+ cordova.file.applicationStorageDirectory 			);
//		console.log( "cordova.file.dataDirectory = " 						+ cordova.file.dataDirectory 						);
//		console.log( "cordova.file.externalRootDirectory = " 				+ cordova.file.externalRootDirectory 				);
//		console.log( "cordova.file.cacheDirectory = " 						+ cordova.file.cacheDirectory 						);
//		console.log( "cordova.file.externalApplicationStorageDirectory = " 	+ cordova.file.externalApplicationStorageDirectory	);
//		console.log( "cordova.file.externalDataDirectory = " 				+ cordova.file.externalDataDirectory				);
//		console.log( "cordova.file.externalCacheDirectory = " 				+ cordova.file.externalCacheDirectory				);
//		console.log( "cordova.file.tempDirectory = " 						+ cordova.file.tempDirectory						);
//		console.log( "cordova.file.syncedDataDirectory = " 					+ cordova.file.syncedDataDirectory					);
//		console.log( "cordova.file.documentsDirectory = " 					+ cordova.file.documentsDirectory					);
//		console.log( "cordova.file.sharedDirectory = " 						+ cordova.file.sharedDirectory						);

		$scope.items.push( { name : 'applicationDirectory'					, value : cordova.file.applicationDirectory 				 }  );
		$scope.items.push( { name : 'applicationStorageDirectory'			, value : cordova.file.applicationStorageDirectory 			 }  );
		$scope.items.push( { name : 'dataDirectory'							, value : cordova.file.dataDirectory 						 }  );
		$scope.items.push( { name : 'externalRootDirectory'					, value : cordova.file.externalRootDirectory 				 }  );
		$scope.items.push( { name : 'cacheDirectory'						, value : cordova.file.cacheDirectory 						 }  );
		$scope.items.push( { name : 'externalApplicationStorageDirectory'	, value : cordova.file.externalApplicationStorageDirectory	 }  );
		$scope.items.push( { name : 'externalDataDirectory'					, value : cordova.file.externalDataDirectory				 }  );
		$scope.items.push( { name : 'externalCacheDirectory'				, value : cordova.file.externalCacheDirectory				 }  );
		$scope.items.push( { name : 'tempDirectory'							, value : cordova.file.tempDirectory						 }  );
		$scope.items.push( { name : 'syncedDataDirectory'					, value : cordova.file.syncedDataDirectory					 }  );
		$scope.items.push( { name : 'documentsDirectory'					, value : cordova.file.documentsDirectory					 }  );
		$scope.items.push( { name : 'sharedDirectory'						, value : cordova.file.sharedDirectory						 }  );

		$cordovaFile.getFreeDiskSpace()
			.then(function (size) {
				// success in kilobytes
//				console.log( "getFreeDiskSpace() = " + size + " kbyte" );	
				$scope.items.push( { name : 'getFreeDiskSpace()' , value : size + " kbyte" }  );
			}, function (error) {
				// error
				$scope.items.push( { name : 'getFreeDiskSpace()' , value : 'error' }  );
			});
		
//		console.log( "typeof $window.requestFileSystem = ", typeof $window.requestFileSystem	);			
//		console.log( "$window.LocalFileSystem.PERSISTENT = " 						+ $window.LocalFileSystem.PERSISTENT	);
		
		$window.requestFileSystem($window.LocalFileSystem.PERSISTENT, 0, 
			function(fs) {
//				console.log("fs = ", fs);
				
			},function(error) {
//				console.log(error);
        });	
			
//	// CHECK
//    $cordovaFile.checkDir(cordova.file.dataDirectory, "dir/other_dir")
//      .then(function (success) {
//        // success
//      }, function (error) {
//        // error
//      });
//
//
//    $cordovaFile.checkFile(cordova.file.dataDirectory, "some_file.txt")
//      .then(function (success) {
//        // success
//      }, function (error) {
//        // error
//      });
//
//
//    // CREATE
//    $cordovaFile.createDir(cordova.file.dataDirectory, "new_dir", false)
//      .then(function (success) {
//        // success
//      }, function (error) {
//        // error
//      });
//
//    $cordovaFile.createFile(cordova.file.dataDirectory, "new_file.txt", true)
//      .then(function (success) {
//        // success
//      }, function (error) {
//        // error
//      });
//
//
//    // REMOVE
//    $cordovaFile.removeDir(cordova.file.dataDirectory, "some_dir")
//      .then(function (success) {
//        // success
//      }, function (error) {
//        // error
//      });
//
//    $cordovaFile.removeFile(cordova.file.dataDirectory, "some_file.txt")
//      .then(function (success) {
//        // success
//      }, function (error) {
//        // error
//      });
//
//    $cordovaFile.removeRecursively(cordova.file.dataDirectory, "")
//      .then(function (success) {
//        // success
//      }, function (error) {
//        // error
//      });
//
//
//    // WRITE
//    $cordovaFile.writeFile(cordova.file.dataDirectory, "file.txt", "text", true)
//      .then(function (success) {
//        // success
//      }, function (error) {
//        // error
//      });
//
//    $cordovaFile.writeExistingFile(cordova.file.dataDirectory, "file.txt", "text")
//      .then(function (success) {
//        // success
//      }, function (error) {
//        // error
//      });
//
//
//    // READ
//    $cordovaFile.readAsText(cordova.file.dataDirectory, $scope.inputs.readFile)
//      .then(function (success) {
//        // success
//      }, function (error) {
//        // error
//      });
//
//
//    // MOVE
//    $cordovaFile.moveDir(cordova.file.dataDirectory, "dir", cordova.file.tempDirectory, "new_dir")
//      .then(function (success) {
//        // success
//      }, function (error) {
//        // error
//      });
//
//    $cordovaFile.moveFile(cordova.file.dataDirectory, "file.txt", cordova.file.tempDirectory)
//      .then(function (success) {
//        // success
//      }, function (error) {
//        // error
//      });
//
//
//    // COPY
//    $cordovaFile.copyDir(cordova.file.dataDirectory, "dir", cordova.file.tempDirectory, "new_dir")
//      .then(function (success) {
//        // success
//      }, function (error) {
//        // error
//      });
//
//    $cordovaFile.copyFile(cordova.file.dataDirectory, "file.txt", cordova.file.tempDirectory, "new_file.txt")
//      .then(function (success) {
//        // success
//      }, function (error) {
//        // error
//      });

	});
	
		
})
;

