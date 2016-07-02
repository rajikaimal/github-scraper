const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const GitHubApi = require("github");
const bodyParser = require('body-parser');
let router = express.Router();

app.use(bodyParser.json());
app.use('/', express.static('src'));

let userRoutes = require('./routes');
app.use(router);

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../src/index.html'));
});

const github = new GitHubApi({
    // optional 
    debug: true,
    protocol: "https",
    host: "api.github.com", // should be api.github.com for GitHub 
    pathPrefix: "", // for some GHEs; none for GitHub 
    headers: {
        "user-agent": "My-Cool-GitHub-App" // GitHub is happy with a unique user agent 
    },
    Promise: require('bluebird'),
    followRedirects: false, // default: true; there's currently an issue with non-get redirects, so allow ability to disable follow-redirects 
    timeout: 5000
});


app.use('/api/v1/user', userRoutes(router, github));

app.listen(port, () => {
	console.log('Server listening on port', port);
});