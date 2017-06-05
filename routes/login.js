var mysql = require("./mysql");

function signupUser(req,response){
	var json_responses = {};
	var userid = req.param("userid");
	console.log("userid is: "+userid);
	var password = req.param("password");
	var email = req.param("email");
	var mobile = req.param("mobile");
	
	var query ="insert into users(userId,password ,email, phoneNumber, role) values(" +
	"\""+ userid +"\"," +
	"\""+password+"\", " +
	"\""+email+"\", " +
	"\"" + mobile +"\"," +
	"\"U\");";
	
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

function validateUserLogin(req,response){
	var json_responses = {};
	var userid = req.param("userid");
	var password = req.param("password");
	
	var query ="SELECT * FROM users WHERE userId = \""+userid+"\" AND password = \""+password+"\" AND role=\"U\"";
	
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

function validateAdminLogin(req,response){
	var json_responses = {};
	var userid = req.param("userid");
	var password = req.param("password");
	
	var query ="SELECT * FROM users WHERE userId = \""+userid+"\" AND password = \""+password+"\" AND role=\"A\"";
	
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

exports.signupUser = signupUser;
exports.validateUserLogin = validateUserLogin;
exports.validateAdminLogin = validateAdminLogin;