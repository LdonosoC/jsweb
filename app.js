var express = require('express'); 
var app = express();

app.get('/', function (req, res) {
	res.render('hello.twig', {
		name: 'perry',
	});
});

app.get('/:owner/:repo', function (req, res) {
	var owner 	= req.params.owner;
	var repo 	= req.params.repo;

	res.render('project.twig', {
		project: owner + '/' + repo,
		owner: owner,
		repo: repo
	});
});

app.get('/settings', function (req, res) {
	res.render('settings.twig');
});

var server = app.listen(8080, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
});