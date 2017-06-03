var mysql = require('mysql');

function getConnection(){
var connection = mysql.createConnection({
	    host: 'localhost',
	    user: 'root',
	    password: 'root',
	    database: 'Inventory',
	    port:3306
	});
	return connection;
}

function fetchData(callback,sqlQuery){
	
	console.log("\nSQL Query::"+sqlQuery);
	
	var connection=getConnection();
	connection.query(sqlQuery,function(err, rows, fields) {
		if(err){
			console.log("ERROR: " + err.message);
		}
		else 
		{	// return err or result
			console.log("DB Results:"+rows);
			callback(err, rows);
		}
	});
	console.log("\nConnection closed..");
	connection.end();
}	


var executequery = function(callback, query, param){
	var con = getConnection();
	con.query(query,param , function(err, rows, fields) {
			if (err) {
				console.log("ERROR in fetching the data");
			} else {
				console.log("no rows");
				callback(err,rows);
			}
		});
	con.end();	
};


exports.fetchData=fetchData;
exports.executequery=executequery;