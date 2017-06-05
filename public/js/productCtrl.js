var inventory= angular.module('app',[]);
 inventory.controller('productCtrl', function($scope, $http, $location) {
	 $scope.addProduct = function(){
		 $http({
				method : "POST",
				url : '/addProduct',
				data : {
					"productName" : $scope.productName,
					"productPrice" : $scope.productPrice,
					"productQuantity" : $scope.productQuantity,
					"modelNumber" : $scope.modelNumber
				}
			}).success(function(data) {
				if (data.status == 400) {
					console.log("Error in adding product");
					//$scope.invalid_signup = true;
					//$scope.valid_signup = false;
					//$scope.unexpected_error_signup = true;
				} else {
//					$scope.invalid_signup = false;
//					$scope.valid_signup = true;
//					$scope.unexpected_error_signup = true;
					console.log("Success in adding product");
					//window.location.assign("/addProduct");
				}
			}).error(function(error) {
//				$scope.invalid_signup = true;
//				$scope.valid_signup = true;
//				$scope.unexpected_error_signup = false;
			});

	 }; //Working
	 
		$scope.products = {};
		$scope.displayProducts = function(){
			console.log("inside displayProducts function");
			$http({
				method: 'GET',
				url: '/listProductsAdmin',
				data: {}
			}).success(function(data){
				if(data)
					{
						console.log("Response is :" + JSON.stringify(data));
						console.log("Product List is :" + JSON.stringify(data.products));
						$scope.products = data.products;
						console.log("Success");
					}
			}).error(function(err){
				console.log(err);
			});
		} //Working
	
		$scope.deleteProduct = function(product)
		{
			$http({
				method: 'POST',
				url: '/removeProducts',
				data: {"productId" : product.productId}
			}).success(function(data){
				if(data)
				{
					console.log("Response is :" + JSON.stringify(data));
					console.log("Success");
					window.location.assign('/listProductsA');
				}
			}).error(function(err){
				console.log(err);
			});
		} //Working
		
		$scope.product;
		$scope.modifyProduct = function(product){
			$scope.product = product;
			window.location.assign("/updateProduct");
		}
//		$scope.formDetails = {};
//		$scope.modifyProduct = function(product){
//			$http({
//				method: 'POST',
//				url: '/displayProductDetails',
//				data: {"productId" : product.productId}
//			}).success(function(data){
//				if(data)
//				{
//						console.log("Response is :" + JSON.stringify(data));
//						console.log("Success");
//						$scope.formDetails = data.product;
//						console.log("value of $scope from product controller " + JSON.stringify($scope.formDetails));
//						console.log($scope.formDetails[0].productId);
//						console.log($scope.formDetails[0].productName);
//						window.location.assign("/updateProduct");
//				}
//			}).error(function(err){
//				console.log(err);
//			});
//		}
		
		$scope.formDetails = {};
		$scope.displayProductDetail = function(){
			console.log("ProductId is: "+$scope.product.productId);
			$http({
				method: 'POST',
				url: '/displayProductDetails',
				data: {"productId" : $scope.product.productId}
			}).success(function(data){
				if(data)
				{
						console.log("Response is :" + JSON.stringify(data));
						console.log("Success");
						$scope.formDetails = data.product;
						console.log("value of $scope from product controller " + JSON.stringify($scope.formDetails));
						console.log($scope.formDetails[0].productId);
						console.log($scope.formDetails[0].productName);
						//window.location.assign("/updateProduct");
				}
			}).error(function(err){
				console.log(err);
			});
		}
		
		$scope.checkoutProductA = function(product)
		{
			$http({
				method: 'POST',
				url: '/checkoutProducts',
				data: {"productId" : product.productId}
			}).success(function(data){
				if(data)
				{
					console.log("Response is :" + JSON.stringify(data));
					console.log("Success");
					window.location.assign('/listProductsA');
				}
			}).error(function(err){
				console.log(err);
			});
		} //Working
		
		$scope.checkoutProductU = function(product)
		{
			$http({
				method: 'POST',
				url: '/checkoutProducts',
				data: {"productId" : product.productId}
			}).success(function(data){
				if(data)
				{
					console.log("Response is :" + JSON.stringify(data));
					console.log("Success");
					window.location.assign('/listProductsA');
				}
			}).error(function(err){
				console.log(err);
			});
		} //Working
 });
      	
	
