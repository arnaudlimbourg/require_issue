/* @flow */
var ServerActionCreators = require('../actions/ServerActionCreators.js');
var objectAssign = require('object-assign');

module.exports = {

  getAllItems: function(id) {
    setTimeout(function() {
      var results = [
        {'id': 0, 'name': 'item 1'},
        {'id': 1, 'name': 'item 2'}
      ];
      ServerActionCreators.receiveAll(results);
    }, 600);
  },

  search: function(term) {
    setTimeout(function() {
      var results = {
        0: {'id': 0, 'name': 'search 1'},
        1: {'id': 1, 'name': 'search 2'},
      };
      ServerActionCreators.receiveSearch(results);
    }, 600);
  }
};

