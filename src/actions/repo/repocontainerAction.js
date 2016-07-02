import AppDispatcher from '../../dispatcher/AppDispatcher';
import repocontainerConstants from '../../constants/repo/repocontainerConstants';
import 'whatwg-fetch';

var repocontainerAction = {
  getRepos: function (username) {
  	fetch(`/api/v1/user/repos?username=${username}`)
	  .then((response) => {
	    console.log(response);
	    return response.json();
    }).then((repojson) => {
      console.log(typeof repojson.repos);
      console.log(repojson.repos);
      if(repojson != null || repojson == '') {
        AppDispatcher.handleViewAction({
          actionType: repocontainerConstants.GETREPOS,
          repos: repojson.repos,
        });
      } else {
        //error handling
      }

    });
  },
};

export default repocontainerAction;