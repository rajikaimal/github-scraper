import AppDispatcher from '../../dispatcher/AppDispatcher';
import { EventEmitter } from 'events';
import usercontainerConstants from '../../constants/user/usercontainerConstants';
import assign from 'object-assign';

const CHANGE_EVENT = 'change';

let userObj = {};
let followersArr = [];
let followingArr = [];
let orgsArr = [];

const usercontainerStore = assign({}, EventEmitter.prototype, {
  saveUser: function (user) {
    userObj = user;
  },

  saveFollowers: function (followers) {
    followersArr = followers;
  },

  saveFollowing: function (following) {
    followingArr = following;
  },

  saveOrgs: function(orgs) {
    orgsArr = orgs;
  },

  retrieveUser: function() {
    return userObj;
  },

  retrieveFollowers: function() {
    return followersArr;
  },

  retrieveFollowing: function() {
    return followingArr;
  },

  retrieveOrgs: function() {
    return orgsArr;
  },

  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function (payload) {
  switch (payload.action.actionType) {
    case (usercontainerConstants.GETUSER):
      usercontainerStore.saveUser(payload.action.user);
      usercontainerStore.emitChange();
      break;
    case (usercontainerConstants.GETFOLLOWERS):
      usercontainerStore.saveFollowers(payload.action.followers);
      usercontainerStore.emitChange();
      break;
    case (usercontainerConstants.GETFOLLOWING):
      usercontainerStore.saveFollowing(payload.action.following);
      usercontainerStore.emitChange();
      break;
    case (usercontainerConstants.GETORGS):
      usercontainerStore.saveOrgs(payload.action.orgs);
      usercontainerStore.emitChange();
      break;
  }
});

export default usercontainerStore;