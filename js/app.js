/* @flow */
var React = require('react/addons');
var ApplicationActions = require('./actions/ApplicationActionCreators');
var myrouter = require('./myrouter.js');

window.React = React; // export for http://fb.me/react-devtools

myrouter.run(function(Handler, state) {
  ApplicationActions.routeChange({routerState: state});
  React.render(<Handler/>, document.getElementById('testing'));
});
