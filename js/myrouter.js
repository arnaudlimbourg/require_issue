var routes = require('./routes');
var Router = require('react-router');

var router = Router.create({
  routes: routes,
  location: Router.HistoryLocation,
});

module.exports = router;
