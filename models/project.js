var request = require('request');

function Project(name) {
	this.name = name;

	this.getIssues = function(cb) {
		var URL 	= 'https://api.github.com/repos/'+ this.name +'/issues';
		var options = {
		    url: URL,
		    headers: {
		        'User-Agent': 'NodeJS User-Agent'
		    }
		};

		request(options, function (err, res, body) {
			if (err) {
				console.log(err);
				return;
			}

			var issues = JSON.parse(body);
			cb(issues);
		});
	};

	this.countIssues = function(cb) {
		this.getIssues(function (issues) {
			cb(issues.length);
		});
	};
}

function sumar(numero, numero2) {
	return numero + numero2;
}

var num = 1;
sumar(num, 2);

// var project = new Project('joserobleda/jsweb');
// console.log(project);
// console.log(project.getIssues());
// console.log(project.countIssues());

module.exports = Project;