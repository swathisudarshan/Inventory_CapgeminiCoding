var mysql = require("./mysql");

function checkoutProducts (req,response){
	var json_responses = {};
	var parameter = req.param("productId");
	//var params = "";
//	for(var i = 0; i < productId.length; i++) {
//		console.log(productId[i]);
//	  params = params + productId[i] + ",";
//	}
//	var parameter = params.substring(0, (params.length-1));
//	
	var query = "UPDATE products set productQuantity = (productQuantity-1) WHERE productId IN ("+parameter+")";
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
				json_responses.data = res;
				console.log(json_responses);
				response.send(json_responses);
		}
	},query);
}

exports.checkoutProducts = checkoutProducts;