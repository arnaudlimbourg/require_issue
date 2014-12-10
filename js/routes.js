var React = require('react');
var App = require('./components/App.react');
var ItemList = require('./components/ItemList.react');
var Search = require('./components/Search.react');
var Route = require('react-router').Route;

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="search" path="/" handler={Search} pageTitle="Search" />
    <Route name="item" path="/item/:id" handler={ItemList} pageTitle="Item list" />
  </Route>
);

module.exports = routes;
