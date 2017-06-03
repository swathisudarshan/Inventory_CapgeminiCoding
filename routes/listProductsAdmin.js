var mysql= require("./mysql"); 

function listProducts(req, res){
	var json_responses={};
	var table="products";
	var query = "SELECT * FROM "+ table+" WHERE product_quantity != 0" ; 
	console.log(query);
	mysql.fetchData(function(err, res) {
		if(err){ 
			console.log("error in query");
			json_responses.status = 400;
			console.log(json_responses);
			res.send(json_responses);
		}
		else{
				console.log("query done");
				//callback(err,results);
				json_responses.status = 200;
				json_responses.data = res;
				console.log(json_responses);
				res.send(json_responses);
		}
	},query);
}

exports.listProducts = listProducts;