/*
* Author: Alex P
* Project Name: Friend Finder App - html routing
* Version: 1.0
* Date: 10.10.17
* URL:  github.com/itsokayitsofficial/friend-finder
*/

// Variables - Dependencies
let express = require('express');
let path = require('path');

// Variables - Routing
let router = express.Router();


// GET - Route to home.html
router.get('/', function(req, res){
	res.sendFile(path.join(__dirname, '../public/home.html'));
})

// GET - Route to survey.html
router.get('/survey', function(req, res){
	res.sendFile(path.join(__dirname, '../public/survey.html'));
})


// Export - Router
module.exports = router;