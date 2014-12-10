var AppDispatcher = require('../dispatcher/AppDispatcher');
var WebAPIUtils = require('../utils/WebAPIUtils');

module.exports = {

  getAllSubItems: function(id) {
    WebAPIUtils.getAllItems(id);
  }

};
