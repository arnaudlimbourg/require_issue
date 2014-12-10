var AppDispatcher = require('../dispatcher/AppDispatcher.js'),
  WebUtils = require('../utils/WebAPIUtils.js');

var ApplicationActions = {

  routeChange: function(obj) {
    AppDispatcher.handleViewAction({
      type: 'ROUTE_CHANGE',
      routerstate: obj.routerState
    });
  }

};

module.exports = ApplicationActions;
