var mysql = require("./mysql");

function addProduct(req, response)
{
	var json_responses = {};
	var table = "products";
	var productName = req.param("productName");
	var productQuantity = req.param("productQuantity");
	var productPrice = req.param("productPrice");
	var modelNumber = req.param("modelNumber");
	(function() {
	    Date.prototype.toYMD = Date_toYMD;
	    function Date_toYMD() {
	        var year, month, day;
	        year = String(this.getFullYear());
	        month = String(this.getMonth() + 1);
	        if (month.length == 1) {
	            month = "0" + month;
	        }
	        day = String(this.getDate());
	        if (day.length == 1) {
	            day = "0" + day;
	        }
	        return year + "-" + month + "-" + day;
	    }
	})();
	
	var date = new Date();
	var str = date.toYMD();
	
	var query ="insert into products(productName,productQuantity ,productPrice, modelNumber, addDate ,deleted) values(" +
	"\""+ productName +"\"," +
	productQuantity + ", " +
	productPrice + ", " +
	"\""+modelNumber+"\", " +
	"\"" + str +"\"," +
	"\"N\");";
	
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
				//json_responses.data = res;
				console.log(json_responses);
				response.send(json_responses);
		}
	},query);	
}

function displayAddProduct(req,response)
{
	response.render(addProduct);
}

exports.displayAddProduct = displayAddProduct;
exports.addProduct = addProduct;