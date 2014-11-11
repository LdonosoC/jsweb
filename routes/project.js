var app			= require('../app');
var controller 	= require('../controllers/project');

app.get('/:owner/:repo', controller.show);
app.get('/:owner/:repo/issues', controller.issues);
app.get('/:owner/:repo/settings', controller.settings);
app.get('/:owner/:repo/forks', controller.forks);