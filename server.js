/*
* Author: Alex P
* Project Name: Friend Finder App
* Version: 2.0
* Date: 10.13.17
* URL:  github.com/itsokayitsofficial/friend-finder
*/

// Variables - Dependencies
let express = require('express');
let bodyParser = require('body-parser');

// Variables - Paths & routes
let path = require('path');
let htmlRoutes = require('./app/routing/html-routes');
let apiRoutes = require('./app/routing/api-routes');


// Connect - Express
var app = express();
var PORT = process.env.PORT || 3000;

// Express - Deploy body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Express - Deploy static directory
app.use('/', express.static(__dirname + '/app/public'));

// Express - Connect to HTML routes
app.use('/', htmlRoutes);
app.use('/', apiRoutes);


// Listen - App running on PORT
app.listen(PORT, function(){
	console.log('App listening on PORT: ' + PORT);
})