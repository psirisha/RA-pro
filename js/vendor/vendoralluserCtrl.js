resourceApp.controller('vendoruserlistCtrl',["$scope","$state","$stateParams","RAService",function($scope,$state,$stateParams,RAService){
	
	$scope.$on('$viewContentLoaded', function () {
	 	$scope.getUserDetails();
    });
    $scope.getUserDetails = function(){
    	RAService.userlist().then(function(data){
			$scope.userList = data;
			console.log($scope.userList);
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}
		})
    }
		
}]);

resourceApp.controller('vendoruseraddCtrl',["$scope","$state","$stateParams","RAService",function($scope,$state,$stateParams,RAService){
	
	$scope.$on('$viewContentLoaded',function(){
		$scope.alluser = {};
		$scope.getroles();
	})
	
	$scope.getroles = function(){
		RAService.allusergetroles().then(function(data){
			$scope.alluser1 = data;
			console.log($scope.alluser1);
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}
		})
	}
	
	
	
	
	
}]);

resourceApp.controller('vendoruserupdateCtrl',["$scope","$state","$stateParams","RAService",function($scope,$state,$stateParams,RAService){
	
	$scope.$on('$viewContentLoaded',function(){
		$scope.alluser = {};
		$scope.getroles();
	})
	
	$scope.userstatus = ["Enable","Disable"];
	
	$scope.getroles = function(){
		RAService.allusergetroles().then(function(data){
			$scope.alluser1 = data;
			console.log($scope.alluser1);
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}
		})
	}
	
}]);