var express = require('express');
var app = express();
app.use(app.router);
app.use(express.errorHandler());
app.set('view engine', 'jade');
app.get('/', function(req, res){
	res.render('index');
});
var port = (process.env.PORT || 3000);
app.listen(port);
console.log('App started on port ' + port);
