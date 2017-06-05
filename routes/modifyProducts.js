var mysql = require("./mysql");

function modifyProducts(req,response){
	var productId = req.param("productId");
	var price = req.param("productPrice");
	var quantity = req.param("productQuantity");
	var productId = req.param("productId");
	var json_responses = {};	
	var query = "UPDATE products SET productQuantity = "+quantity+" and productPrice = "+price+" where productId = "+productId; 
	console.log(query);
	
	mysql.fetchData(function(err, res) {
		if(err){ 
			console.log("error in query");
			json_responses.status = 400;
			console.log(json_responses);
			response.send(json_responses);
		}
		else{
				console.log("query done");
				json_responses.status = 200;
				json_responses.product = res;
				console.log(json_responses);
				response.send(json_responses);
		}
	},query);			
}

function displayProducts(req,response){
	var productId = req.param('productId');
	console.log("Trying to render display products page");
	var json_responses = new getProductDetails(productId);
	setTimeout(function() {
		console.log("Data from the page is: ");
		console.log(json_responses);
		response.send(json_responses);
		},500)
}

function getProductDetails(productId){
	var query = "SELECT * FROM products WHERE productId = "+productId;
	var json_responses = {};
	mysql.fetchData(function(err, res) {
		if(err){ 
			console.log("error in query");
			json_responses.status = 400;
			console.log(json_responses);
			
		}
		else{
				console.log("query done");
				json_responses.status = 200;
				json_responses.product = res;
				console.log(json_responses);
		}
	},query);
	return json_responses;
}

function updateProduct(req,res){
	res.render("updateProduct",{"productId":req.session.productId , "productName":req.session.productName, "productQuantity":req.session.productQuantity, "price":req.session.price, "modelNumber":req.session.modelNumber});
}


function storeProductInfo(req,res) {
	
	var productId = req.param("productId");
	var productName = req.param("productName"); 
	var productQuantity = req.param("productQuantity"); 
	var price = req.param("price"); 
	var modelNumber = req.param("modelNumber"); 
	
	var json_responses = {};

	req.session.productId = productId;
	req.session.productName = productName;
	req.session.productQuantity = productQuantity;
	req.session.price = price;
	req.session.modelNumber = modelNumber;
	
	console.log("******************");
	console.log(req.session.productId);
	
	json_responses.statusCode = 200;
	res.send(json_responses);	
}



exports.storeProductInfo = storeProductInfo;
exports.updateProduct = updateProduct;
exports.modifyProducts = modifyProducts;
exports.displayProducts = displayProducts;