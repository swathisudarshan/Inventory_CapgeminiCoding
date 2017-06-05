var mysql = require("./mysql");

function signupProduct(req,response){
	var json_responses = {};
	var productName = req.param("productName");
	var productQuantity = req.param("productQuantity");
	var productPrice = req.param("productPrice");
	var modelNumber = req.param("modelNumber");
	
	var query ="insert into products(productName,productQuantity ,productPrice, modelNumber, deleted) values(" +
	"\""+ productName +"\"," +
	productQuantity + ", " +
	productPrice + ", " +
	"\""+modelNumber+"\", " +
	"\"N\");";
	
	
	console.log(query);
	mysql.fetchData(function(err, data) {
		if(err){ 
			console.log("error in query");
			json_responses.status = 400;
			console.log(json_responses);
			response.send(json_responses);
		}
		else{
				console.log("query done");
				json_responses.status = 200;
				console.log(json_responses);
				response.send(json_responses);
		}
	},query);
	
}

exports.signupProduct = signupProduct;
