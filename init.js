var app 	= require('./app');
var fs  	= require('fs');
var routes 	= fs.readdirSync('./routes').sort();

// load all the routes
routes.forEach(function (file) {
	console.log("Loading route " + file);
	require('./routes/' + file);
});

var server = app.listen(8080, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
});