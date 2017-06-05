var mysql = require("./mysql");

function modifyProducts(req,response){
	var price = 10.99;
	var quantity = 3;
	var productId = 1;
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
	//res.render('updateProduct');
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
	res.render("updateProduct");
}

exports.updateProduct = updateProduct;
exports.modifyProducts = modifyProducts;
exports.displayProducts = displayProducts;