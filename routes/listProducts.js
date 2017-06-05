var mysql= require("./mysql"); 

function listProductA(req,res){
	res.render('displayProducts');
}

function listProductsAdmin(req, response){
	var json_responses={};
	var table="products";
	var query = "SELECT * FROM "+ table ; 
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
				//callback(err,results);
				json_responses.status = 200;
				json_responses.products = res;
				console.log(json_responses);
				response.send(json_responses);
		}
	},query);
}

function listProductsUser(req, response){
	var json_responses={};
	var table="products";
	var query = "SELECT * FROM "+ table +" WHERE productQuantity != 0 AND deleted = \"N\"" ; 
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
				//callback(err,results);
				json_responses.status = 200;
				json_responses.data = res;
				console.log(json_responses);
				response.send(json_responses);
		}
	},query);
}

function listProductsU(req,res){
	res.render('displayProductsU');
}

exports.listProductsU = listProductsU; 
exports.listProductA = listProductA;
exports.listProductsAdmin = listProductsAdmin;
exports.listProductsUser = listProductsUser;