var path = require('path');

Routes = function(app) {
	app.get('/', function(req, res) {
		res.sendFile(
			'public/html/404.html',
			{root: path.join(__dirname, './../../')});
	});
};

module.exports = Routes;
