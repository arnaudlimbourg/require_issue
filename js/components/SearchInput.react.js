var React = require('react');
var SearchActions = require('../actions/SearchActionCreators');

var ENTER_KEY_CODE = 13;

var SearchInput = React.createClass({

  getInitialState: function() {
    return { value: '' };
  },

  render: function() {
    return (
      <div className="ui fluid action left icon input">
        <i className="search icon"></i>
        <input placeholder="Search..." type="text" onKeyDown={this._onKeyDown} onChange={this._onChange} value={this.state.value} />
        <div className="ui teal button" onClick={this._search} onKeyDown={this._onKeyDown}>Search</div>
      </div>
    );
  },

  _onChange: function(e) {
    this.setState({ value: event.target.value });
  },

  _onKeyDown: function(e) {
    if (e.keyCode === ENTER_KEY_CODE) {
      this._search();
    }
  },

  _search: function() {
    console.log('perform search', this.state.value);
    SearchActions.performSearch(this.state.value);
  }

});

module.exports = SearchInput;
