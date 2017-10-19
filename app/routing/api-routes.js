/*
 * Author: Alex P
 * Project Name: Friend Finder App - api routing
 * Version: 1.0
 * Date: 10.10.17
 * URL:  github.com/itsokayitsofficial/friend-finder
 */

// Variables - Dependencies
let express = require('express');
let path = require('path');
let jsonfile = require('jsonfile');
let file = './app/data/friends.js';

// Variables - Routing
let router = express.Router();


// GET - Route to friends.js
router.get('/api/friends', function (request, response) {
	response.json(jsonfile.readFileSync(file));
})

// POST - Request friend to client
router.post('/api/friends', function (request, response) {
	// Variables - Friends
	var friends = jsonfile.readFileSync(file);
	var index = findFriend(request.body, friends);

	// PUSH - Add friend to friends.js
	friends.push(request.body);
	jsonfile.writeFileSync(file, friends, {
		spaces: 2
	});

	// Response - Requested friend
	response.json({
		name: friends[index].name,
		photo: friends[index].photo,
	});
})


// Function - Find friend
let findFriend = function (self, friends) {
	// Variable - Object to pass in friend
	var friend = {};

	// For - Loop through friends object
	for (var i in friends) {
		var diff = 0;

		// For - Loop through friends scores
		for (var j in friends[i].scores) {
			// Examine difference
			diff += Math.abs(Number(self.scores[j]) - Number(friends[i].scores[j]));
		}

		// If - Difference is missing
		if (friend.diff === undefined) {
			friend.diff = diff;
			friend.index = i;
			// Else - Compare differences
		} else {
			if (diff < friend.diff) {
				friend.diff = diff;
				friend.index = i;
			}
		}
	}

	// Log - friend
	console.log(friend);
	return friend.index;
}


// Export - Router
module.exports = router;