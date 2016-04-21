angular.module('starter.controllers')

.controller('fileBrowserCtrl', function($window, $scope, $ionicPlatform, $cordovaFile) {

	$scope.files = [];
	
	function processEntries(entries, arr) {
		console.log("entries = " + (JSON.stringify(entries, null, 4)));	
 
		for (var i = 0; i < entries.length; i++) {
			var e = entries[i];
 
			// do not push/show hidden files or folders
			if (e.name.indexOf('.') !== 0) {
				arr.push({
					id			: i + 1,
					name		: e.name,
					isUpNav		: false,
					isDirectory	: e.isDirectory,
					nativeURL	: e.nativeURL,
					fullPath	: e.fullPath
				});
			}
        }
        return arr;
	}
	
	function fsResolver(url, callback) {
		$window.resolveLocalFileSystemURL(url, callback);
	}
	
	function processFile(url) {
		fsResolver(url, function(fs) {
			console.log("fs = " + (JSON.stringify(fs, null, 4)));	
			var directoryReader = fs.createReader();
 
			directoryReader.readEntries(function(entries) {
				console.log("entries = " + (JSON.stringify(entries, null, 4)));	
				if (entries.length > 0) {
					var arr = [];
					// push the path to go one level up
					if (fs.fullPath !== '/') {
						arr.push({
							id: 0,
							name: '.. One level up',
							actualName: fs.name,
							isDirectory: false,
							isUpNav: true,
							nativeURL: fs.nativeURL,
							fullPath: fs.fullPath
						});
					}
					processEntries(entries, arr);
					$scope.$apply(function() {
						$scope.files = arr;
					});
	
//					$ionicScrollDelegate.scrollTop();
				} else {

				}
            },
            function(error) {
				console.log(error);
            });
		});
	}
	
	$scope.showSubDirs = function(file) {
		console.log("file = " + (JSON.stringify(file, null, 4)));	
		if (file.isDirectory || file.isUpNav) {
			if (file.isUpNav) {
				processFile(file.nativeURL.replace(file.actualName + '/', ''));
			} else {
				processFile(file.nativeURL);
			}
        } else {
			
		}	
	}
	
	$ionicPlatform.ready(function() {
		console.log( 'CALL $ionicPlatform.ready()');
		if( !window.cordova ){
			console.log( 'INFO No support cordova');
			return;
		} 
		
//		var check_dir = cordova.file.dataDirectory;
		var check_dir = cordova.file.externalRootDirectory;
		
		$window.resolveLocalFileSystemURL( check_dir ,
		function(fileEntry) {
			console.log("fileEntry = " + (JSON.stringify(fileEntry, null, 4)));
			var directoryReader = fileEntry.createReader();
			directoryReader.readEntries(function(entries) {
				console.log("entries = " + (JSON.stringify(entries, null, 4)));	
				var arr = [];
				processEntries(entries, arr); 	// arr is pass by refrence
				$scope.files = arr;
			});
	
		},function(error) {
			console.log(error);
			console.log("error = " + (JSON.stringify(error, null, 4)));
        });	

		
/*		
		$window.requestFileSystem($window.LocalFileSystem.PERSISTENT, 0, 
		function(fs) {
			console.log("fs = ", fs);
			console.log("fs.root = " + (JSON.stringify(fs.root, null, 4)));
			
			fs.root.getDirectory( cordova.file.dataDirectory , {create:true}, 
			function(parent){
				// success Callback
				console.log("parent = " + (JSON.stringify(fileEntry, null, 4)));
			}, function(error){
				// error Callback
				console.log("error = "+ (JSON.stringify(error, null, 4)) );
			});
			
			

			
//			var directoryReader = fs.root.createReader();
// 
//			directoryReader.readEntries(function(entries) {
//				
//				console.log("entries = " + (JSON.stringify(entries, null, 4)));	
////				var arr = [];
////				processEntries(entries, arr); 	// arr is pass by refrence
////				
////				$scope.files = arr;
//				
//			},function(error) {
//				
//				console.log(error);
//				
//            });
//
				
		},function(error) {
				console.log(error);
        });	
*/
		
	});
	
/*	
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
	});
*/	
		
})
;

