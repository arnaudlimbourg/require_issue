var React = require('react'),
  SearchInput = require('./SearchInput.react'),
  SearchResults = require('./SearchResults.react');

var Search = React.createClass({

  getInitialState: function() {
    return { value: '' };
  },

  render: function() {
    return (
      <div>
        <div className="ui vertical feature segment">
          <SearchInput />
        </div>

        <SearchResults />

      </div>
    );
  }

});

module.exports = Search;
