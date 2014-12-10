var React = require('react'),
  _ = require('lodash'),
  cx = require('react/lib/cx'),
  SearchResultsItem = require('./SearchResultsItem.react'),
  SearchStore = require('../stores/SearchStore');

var Router = require('react-router');

function getStateFromStores() {
  return {
    results: SearchStore.getAllResults(),
  };
}

var SearchResults = React.createClass({

  mixins: [ Router.State ],

  getInitialState: function() {
    return getStateFromStores();
  },

  componentDidMount: function() {
    SearchStore.addChangeListener(this._onchange);
  },

  componentWillUnmount: function() {
    SearchStore.removeChangeListener(this._onchange);
  },

  componentWillReceiveProps: function(nextProps) {
    var s = getStateFromStores();
    this.setState(s);
  },

  render: function() {
    var items = _.collect(this.state.results, function(item) {
      return <SearchResultsItem data={item} key={item.id} />;
    });


    var classes = cx({
          'ui': true,
          'vertical': true,
          'segment': true
        });

    return (
      <div className={classes}>
        <div className="ui very relaxed link list">
          <h4 className="ui header">Search Results</h4>
          {items}
        </div>
      </div>
    );
  },

  _onchange: function() {
    if (!this.isMounted()) {
        return;
    }
    this.setState(getStateFromStores());
  }

});

module.exports = SearchResults;
