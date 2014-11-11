var request = require('request');
var cache 	= {}

function Project(name) {
	var self = this;
	this.name = name;

	var getFromGithub = function (path, cb) {
		var URL 	= 'https://api.github.com' + path;
		var options = {
		    url: URL,
		    headers: {
		        'User-Agent': 'NodeJS User-Agent'
		    }
		};

		if (cache[URL] !== undefined) {
			cb(cache[URL]);
			return;
		}

		request(options, function (err, res, body) {
			if (err) {
				console.log(err);
				return;
			}

			var obj = JSON.parse(body);
			cache[URL] = obj;
			cb(obj);
		});
	};

	var getResources = function(cb, resource) {
		var path = '/repos/'+ self.name +'/' + resource;

		getFromGithub(path, cb);
	};

	this.getIssues = function (cb) {
		getResources(cb, 'issues');
	};

	this.getForks = function (cb) {
		getResources(cb, 'forks');
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