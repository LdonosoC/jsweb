var Project = require('../models/project');

function show(req, res) {
	var owner 	= req.params.owner;
	var repo 	= req.params.repo;
	var project = new Project(owner + '/' + repo);

	project.getIssues(function (issues) {
		res.render('project.twig', {
			issues: issues,
			project: project.name
		});
	});
};

function forks(req, res) {
	var owner 	= req.params.owner;
	var repo 	= req.params.repo;
	var project = new Project(owner + '/' + repo);

	project.getForks(function (forks) {
		res.render('forks.twig', {
			forks: forks,
			project: project.name
		});
	});
};

function settings(req, res) {
	var owner 	= req.params.owner;
	var repo 	= req.params.repo;
	var project = new Project(owner + '/' + repo);

	project.countIssues(function (count) {
		res.render('settings.twig', {
			issues: count,
			project: project.name
		});
	});
};

module.exports = {
	show: show,
	settings: settings,
	forks: forks
};