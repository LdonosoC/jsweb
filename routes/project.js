var app			= require('../app');
var controller 	= require('../controllers/project');

app.get('/:owner/:repo', controller.show);
app.get('/:owner/:repo/settings', controller.settings);