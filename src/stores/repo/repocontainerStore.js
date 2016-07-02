import AppDispatcher from '../../dispatcher/AppDispatcher';
import { EventEmitter } from 'events';
import repocontainerStoreConstants from '../../constants/repo/repocontainerConstants';
import assign from 'object-assign';

const CHANGE_EVENT = 'change';

let repoList = [];

const repocontainerStore = assign({}, EventEmitter.prototype, {
  saveRepos: function (repos) {
    repoList = repos;
    console.log(typeof repoList);
  },

  getRepos: function() {
    return repoList;
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
    case (repocontainerStoreConstants.GETREPOS):
      repocontainerStore.saveRepos(payload.action.repos);
      repocontainerStore.emitChange();
      break;
  }
});

export default repocontainerStore;