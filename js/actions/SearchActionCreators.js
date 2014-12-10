/* @flow */
var WebAPIUtils = require('../utils/WebAPIUtils.js');

module.exports = {

  performSearch: function(term) {
    console.log(WebAPIUtils);
    WebAPIUtils.search(term);
  }

};
