/* @flow */
var AppDispatcher = require('../dispatcher/AppDispatcher');
//var router = require('../myrouter.js');

module.exports = {

  receiveAll: function(results) {
    AppDispatcher.handleServerAction({
      type: 'RECEIVE_ALL',
      results: results
    });
  },

  receiveSearch: function(results) {
    AppDispatcher.handleServerAction({
      type: 'RECEIVE_SEARCH',
      results: results
    });
  }

};
