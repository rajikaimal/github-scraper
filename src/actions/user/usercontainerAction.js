import AppDispatcher from '../../dispatcher/AppDispatcher';
import usercontainerConstant from '../../constants/user/usercontainerConstants';
import 'whatwg-fetch';

var usercontainerAction = {
  getUser: function (username) {
    fetch(`/api/v1/user/data?username=${username}`)
	  .then((response) => {
	    return response.json();
	  }).then((json) => {
	  	if(json.user != null) {
	  		AppDispatcher.handleViewAction({
		      actionType: usercontainerConstant.GETUSER,
		      user: json.user,
		    });	
	  	}
	  	else {
	  		//error handling
	  		// AppDispatcher.handleViewAction({
		   //    actionType: usercontainerConstant.INCREMENT,
		   //    data: 'Sampledata',
		   //  });	
	  	}
	  });
  },
  getFollowers: function(username) {
  	fetch(`/api/v1/user/followers?username=${username}`)
	  .then((response) => {	  	
	    return response.json();
	  }).then((json) => {
	  	if(json.followers != null || json.followers != '') {
	  		AppDispatcher.handleViewAction({
		      actionType: usercontainerConstant.GETFOLLOWERS,
		      followers: json.followers,
		    });	
	  	}
	  	else {
	  		//error handling
	  		// AppDispatcher.handleViewAction({
		   //    actionType: usercontainerConstant.INCREMENT,
		   //    data: 'Sampledata',
		   //  });	
	  	}
	  });	
  },
  getFollowing: function(username) {
  	fetch(`/api/v1/user/following?username=${username}`)
	  .then((response) => {
	    return response.json();
	  }).then((json) => {
	  	
	  	if(json.following != null || json.following != '') {
	  		AppDispatcher.handleViewAction({
		      actionType: usercontainerConstant.GETFOLLOWING,
		      following: json.following,
		    });	
	  	}
	  	else {
	  		//error handling
	  		// AppDispatcher.handleViewAction({
		   //    actionType: usercontainerConstant.INCREMENT,
		   //    data: 'Sampledata',
		   //  });	
	  	}
	  });  	
  },
  getOrgs: function(username) {
  	fetch(`/api/v1/user/organizations?username=${username}`)
	  .then((response) => {	  	
	    return response.json();
	  }).then((json) => {
	  	if(json.following != null || json.following != '') {
	  		AppDispatcher.handleViewAction({
		      actionType: usercontainerConstant.GETORGS,
		      orgs: json.orgs,
		    });
	  	}
	  	else {
	  		//error handling
	  		// AppDispatcher.handleViewAction({
		   //    actionType: usercontainerConstant.INCREMENT,
		   //    data: 'Sampledata',
		   //  });	
	  	}
	  });  	
  }
};

export default usercontainerAction;