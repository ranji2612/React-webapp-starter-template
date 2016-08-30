var path = require('path');

Routes = function(app) {
	app.get('/', function(req, res) {
		res.sendFile(
			'public/html/index.html',
			{root : __dirname + './../../'}
		);
	});
};

module.exports = Routes;
