var AppDispatcher = require('../dispatcher/AppDispatcher'),
  EventEmitter = require('events').EventEmitter,
  objectAssign = require('object-assign'),
  _ = require('lodash');

var CHANGE_EVENT = 'change';

var _results = {};

function _addResults(results) {
  _.each(results, function(item) {
    if (!_results[item.id]) {
      _results[item.id] = item;
    };
  });
};

var SearchStore = objectAssign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

 /**
  * @param {function} callback
  */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getAllResults: function() {
    return _results;
  }

});

SearchStore.dispatchToken = AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch (action.type) {

    case 'RECEIVE_SEARCH':
      _addResults(action.results);
      break;

    default:
      return true;
  }

  SearchStore.emitChange();
  return true;
});

module.exports = SearchStore;
