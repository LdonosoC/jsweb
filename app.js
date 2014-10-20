var express = require('express');
var app = express();


app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.get('/settings', function (req, res){
	res.send('Estas en configuración!')
});

var server = app.listen(8080, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

});	

