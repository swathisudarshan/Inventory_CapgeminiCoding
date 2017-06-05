
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , listProducts = require('./routes/listProducts')
  , addProduct = require("./routes/addProduct")
  , modifyProducts = require("./routes/modifyProducts")
  , removeProducts = require("./routes/removeProducts")
  , login = require("./routes/login")
  , checkout = require("./routes/checkout")
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' === app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', addProduct.displayAddProduct);
app.get('/users', user.list);

app.get('/listProductsA',listProducts.listProductA);
app.get('/listProductsAdmin',listProducts.listProductsAdmin);
app.get('/listProductsU',listProducts.listProductsU);
app.get('/addProductPage', addProduct.displayAddProduct);
app.post('/addProduct', addProduct.addProduct);
app.post('/modifyProducts',modifyProducts.modifyProducts);
app.post('/removeProducts',removeProducts.removeProducts);
app.post('/displayProductDetails', modifyProducts.displayProducts);
app.get('/updateProduct', modifyProducts.updateProduct);
app.post('/checkoutProducts', checkout.checkoutProducts);
app.get('/userLogin', user.userLogin);
app.post('/validateUserLogin', login.validateUserLogin);
app.post('/addUser', login.signupUser);
app.get('/adminLogin', user.adminLogin);
app.get('/logout',user.logout);
app.post('/validateAdminLogin', login.validateAdminLogin);
	
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
