import AppDispatcher from '../../dispatcher/AppDispatcher';
import usercontainerConstant from '../../constants/user/usercontainerConstants';
import 'whatwg-fetch';

var usercontainerAction = {
  getUser: function (username) {
    fetch(`/api/v1/user/data?username=${username}`)
	  .then((response) => {
	  	console.log('git it');
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
};

export default usercontainerAction;