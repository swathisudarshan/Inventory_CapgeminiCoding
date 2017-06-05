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
				} else {
					console.log("Success in adding product");
				}
			}).error(function(error) {
			});

	 }; //Working
	 
		$scope.changeProduct = function()
		{
			console.log("Entering Change product");
			$http({
				method: 'POST',
				url: '/modifyProducts',
				data: {
					"productId" : $scope.productId,
					"productName" : $scope.productName,
					"productPrice" : $scope.productPrice,
					"productQuantity" : $scope.productQuantity,
					"modelNumber" : $scope.modelNumber
					}
			}).success(function(data){
				if(data)
				{
					console.log("Response is :" + JSON.stringify(data));
					console.log("Success");
				}
			}).error(function(err){
				console.log(err);
			});
		} //Working
	 	 
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
		
		//$scope.product;
		$scope.modifyProduct = function(product){
			
			console.log("ProductId is: "+ product.productId);
			$http({
				method: 'POST',
				url: '/displayProductDetails',
				data: {"productId" : product.productId}
			}).success(function(data){
				if(data)
				{
						console.log("Response is :" + JSON.stringify(data));
						console.log("Success");
						$scope.formDetails = data.product;
						console.log("value of $scope from product controller " + JSON.stringify($scope.formDetails));
						console.log($scope.formDetails[0].productId);
						console.log($scope.formDetails[0].productName);
						$http({
							method : "POST",
							url : '/storeProductInfo',
							data : {
								"productId" : $scope.formDetails[0].productId,
								"productName" : $scope.formDetails[0].productName,
								"productQuantity" : $scope.formDetails[0].productQuantity,
								"price" : $scope.formDetails[0].productPrice,
								"modelNumber" : $scope.formDetails[0].modelNumber
							}
						}).success(function(data) {
							//checking the response data for statusCode
							if (data.statusCode == 401) {
								console.log("error in storing sessions");
							}
							else
								//Making a get call to the '/redirectToHomepage' API
								window.location.assign("/updateProduct");
								
						}).error(function(error) {
								console.log(error);
						});
				}
			}).error(function(err){
				console.log(err);
			});	
		}

		$scope.formDetails = {};
		$scope.displayProductDetail = function(product){
			console.log("ProductId is: "+ product.productId);
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
      	
	
