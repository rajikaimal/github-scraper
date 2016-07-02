import AppDispatcher from '../../dispatcher/AppDispatcher';
import { EventEmitter } from 'events';
import usercontainerConstants from '../../constants/user/usercontainerConstants';
import assign from 'object-assign';

const CHANGE_EVENT = 'change';

let userObj = {};

const usercontainerStoreStore = assign({}, EventEmitter.prototype, {
  saveUser: function (user) {
    userObj = user;
  },

  retrieveUser: function() {
    return userObj;
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
      usercontainerStoreStore.saveUser(payload.action.user);
      usercontainerStoreStore.emitChange();
      break;
  }
});

export default usercontainerStoreStore;