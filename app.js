
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

app.get('/', routes.index);
app.get('/users', user.list);

app.get('/listProductsA',listProducts.listProductsAdmin);
app.get('/listProductsU',listProducts.listProductsUser);
app.post('/addProduct', addProduct.addProduct);
app.post('/modifyProducts',modifyProducts.modifyProducts);
app.post('/removeProducts',removeProducts.removeProducts);
	
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
