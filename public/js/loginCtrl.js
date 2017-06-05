var inventory= angular.module('app',[]);
 inventory.controller('loginCtrl', function($scope, $http, $location) {
	$scope.addUser = function()
	{
		var userid = $scope.userid;
		var password = $scope.password;
		var email = $scope.email;
		var mobile = $scope.mobile;
		
		$http({
			method : "POST",
			url : '/addUser',
			data : {
				"userid" : userid,
				"password" : password,
				"email" : email,
				"mobile" : mobile
			}
		}).success(function(data) {
			if (data.status == 400) {
				console.log("Error in adding product");
				//$scope.invalid_signup = true;
				//$scope.valid_signup = false;
				//$scope.unexpected_error_signup = true;
			} else {
//				$scope.invalid_signup = false;
//				$scope.valid_signup = true;
//				$scope.unexpected_error_signup = true;
				console.log("Success in adding user");
				window.location.assign("/userLogin");
				
			}
		}).error(function(error) {
//			$scope.invalid_signup = true;
//			$scope.valid_signup = true;
//			$scope.unexpected_error_signup = false;
		});

 }; //Working
		
	$scope.userLogin = function(){
		var userid = $scope.userid;
		var password = $scope.password;
		$http({
			method : "POST",
			url : '/validateUserLogin',
			data : {
				"userid" : userid,
				"password" : password
			}
		}).success(function(data) {
			if (data.status == 400) {
				console.log("Error in adding product");
				//$scope.invalid_signup = true;
				//$scope.valid_signup = false;
				//$scope.unexpected_error_signup = true;
			} else {
//				$scope.invalid_signup = false;
//				$scope.valid_signup = true;
//				$scope.unexpected_error_signup = true;
				console.log("Success in user login");
				window.location.assign("/listProductsU");	
			}
		}).error(function(error) {
//			$scope.invalid_signup = true;
//			$scope.valid_signup = true;
//			$scope.unexpected_error_signup = false;
		});
	}
	
	
	$scope.adminLogin = function(){
		var userid = $scope.userid;
		var password = $scope.password;
		$http({
			method : "POST",
			url : '/validateAdminLogin',
			data : {
				"userid" : userid,
				"password" : password
			}
		}).success(function(data) {
			if (data.status == 400) {
				console.log("User not found");
				//$scope.invalid_signup = true;
				//$scope.valid_signup = false;
				//$scope.unexpected_error_signup = true;
			} else {
//				$scope.invalid_signup = false;
//				$scope.valid_signup = true;
//				$scope.unexpected_error_signup = true;
				console.log("Success in admin login");
				window.location.assign("/listProductsA");	
			}
		}).error(function(error) {
//			$scope.invalid_signup = true;
//			$scope.valid_signup = true;
//			$scope.unexpected_error_signup = false;
		});
	}
 });