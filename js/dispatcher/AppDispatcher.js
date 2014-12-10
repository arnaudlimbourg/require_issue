/**
 * app dispatcher
 */
var Dispatcher = require('flux').Dispatcher;
var objectAssign = require('object-assign');

var AppDispatcher = objectAssign(new Dispatcher(), {

  handleServerAction: function(action) {
    payload = {
      source: 'SERVER_ACTION',
      action: action
    };
    this.dispatch(payload);
  },

  handleViewAction: function(action) {
    payload = {
      source: 'VIEW_ACTION',
      action: action
    };
    this.dispatch(payload);
  }

});

module.exports = AppDispatcher;
