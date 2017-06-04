var mysql = require("./mysql");

function modifyProducts(req,res){
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
			//res.send(json_responses);
		}
		else{
				console.log("query done");
				json_responses.status = 200;
				json_responses.data = res;
				console.log(json_responses);
				//res.send(json_responses);
		}
	},query);			
}

exports.modifyProducts = modifyProducts;