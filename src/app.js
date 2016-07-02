//entry point for flux application

import React from 'react';
import ReactDOM from 'react-dom';

//Router components

import { Router, Route, Link, browserHistory } from 'react-router';

import ScraperContainer from './components/core/scraper.react';
import Repos from './components/repo/repocontainer.react';
import User from './components/user/usercontainer.react';

ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={ScraperContainer}>
      	<Route path="user/:username" component={User} >
      		<Route path="repos" component={Repos} />
      	</Route>
      </Route> 
    </Router>
  ),
  document.getElementById('target-node')
);