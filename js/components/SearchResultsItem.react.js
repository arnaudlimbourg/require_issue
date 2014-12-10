var React = require('react');
var ItemActions = require('../actions/ItemActionCreators.js');

var SearchResultsItem = React.createClass({

  propTypes: {
    data: React.PropTypes.object
  },

  render: function() {
    var id = {id: this.props.data.id};

    return (
      <a className="item" onClick={this._select}>
        <i className="circle icon"></i>
        <div className="content">
          <div className="header">{id}</div>
          {name}
        </div>
      </a>
    );
  },

  _select: function(event) {
    var id = this.props.data.id;
    ItemActions.getAllSubItems(id);
  }

});

module.exports = SearchResultsItem;
