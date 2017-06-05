
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.userLogin = function(req,res){
	res.render("userLogin");
};

exports.logout = function(req,res){
	res.render("signup");
};

exports.adminLogin = function(req,res){
	res.render("adminLogin");
};
