var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var App = React.createClass({


  render: function() {
    return (
      <div>

        <div className="ui two item teal menu">
          <Link to="search" className="item">Search</Link>
        </div>

        <div className="container">
          <div className="ui vertical segment">
            <RouteHandler/>
          </div>
        </div>

      </div>
    );
  }

});

module.exports = App;
