var mysql= require("./mysql"); 

function listProductsAdmin(req, res){
	var json_responses={};
	var table="products";
	var query = "SELECT * FROM "+ table ; 
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

function listProductsUser(req, res){
	var json_responses={};
	var table="products";
	var query = "SELECT * FROM "+ table +" WHERE productQuantity != 0 AND deleted = \"N\"" ; 
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

exports.listProductsAdmin = listProductsAdmin;
exports.listProductsUser = listProductsUser;