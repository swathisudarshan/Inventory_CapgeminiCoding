
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , listProducts = require('./routes/listProducts')
  , modifyProducts = require("./routes/modifyProducts")
  , removeProducts = require("./routes/removeProducts")
  , newProduct = require("./routes/newProduct")
  , login = require("./routes/login")
  , checkout = require("./routes/checkout")
  , http = require('http')
  , path = require('path')
  , expressSession = require('express-session');

var app = express();

app.use(expressSession({   
	cookieName: 'session',    
	secret: 'inventory',    
	duration: 30 * 60 * 1000,    
	activeDuration: 5 * 60 * 1000,  }));

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

app.get('/', routes.index);
app.get('/users', user.list);

app.get('/listProductsA',listProducts.listProductA);
app.get('/listProductsAdmin',listProducts.listProductsAdmin);
app.get('/listProductsU',listProducts.listProductsU);
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
app.post('/addProduct',newProduct.signupProduct);
app.get('/displayAddProduct',user.displaynewProduct);
app.post('/storeProductInfo',modifyProducts.storeProductInfo);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
