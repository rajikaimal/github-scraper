const express = require('express');

const userRoutes = function(router, github) {
	/**get following users 
	* {param} username
	*/
	router.get('/following', function(req, res) {
		let username = req.query.username;
		github.users.getFollowingForUser({
		    user: username
		}, function(err, response) {
		    //console.log(JSON.stringify(response));
		    res.json({ 
		    	following: response
		    });
		});
	})
	/**get followers
	* {param} username
	*/
	.get('/followers', (req, res) => {
		let username = req.query.username;
		github.users.getFollowersForUser({
		    user: username
		}, function(err, response) {
		    //console.log(JSON.stringify(response));
		    res.json({
		    	followers: response
		    });
		});	
	})
	/**get repos
	* {param} username
	*/
	.get('/repos', (req, res) => {
		let username = req.query.username;
		github.repos.getForUser({
			user: username,
			type: 'owner'
		}, (err, response) => {
			res.json({
				repos: response	
			});
		});
	})
	/**get user data
	* {param} username
	*/
	.get('/data', (req, res) => {
		let username = req.query.username;
		console.log(`username ${username}`);
		github.users.getForUser({
			user: username
		}, (err, response) => {
			res.json({
				user: response
			});
		});
	});

	return router;
}

module.exports = userRoutes;