// Initial configuration
var express = require('express');

// create our app w/ express
var app = express();

// Get Config File
var config = require('./app/config/config.json');

var port = config.port;
var ipaddr = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";

// Middle-tier configuration
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// static folder
app.use(express.static('public'));
app.use(express.static('build'));

// route file
require('./app/routes/routes.js')(app);

// Start the awesomeness
app.listen(port, ipaddr, function() {
  console.log('Magic happens on port ', port, ipaddr);
});
