var request = require('request');

function show(req, res) {
	var owner 	= req.params.owner;
	var repo 	= req.params.repo;
	var project = owner + '/' + repo;

	var URL 	= 'https://api.github.com/repos/'+ project +'/issues';
	var options = {
	    url: URL,
	    headers: {
	        'User-Agent': 'NodeJS User-Agent'
	    }
	};

	function onIssues(issues) {
		res.render('project.twig', {
			issues: issues,
			project: project,
			owner: owner,
			repo: repo
		});
	};

	request(options, function (err, res, body) {
		if (err) {
			console.log(err);
			return;
		}

		var issues = JSON.parse(body);
		onIssues(issues);
	});
};

function settings(req, res) {
	res.render('settings.twig');
};

module.exports = {
	show: show,
	settings: settings
};