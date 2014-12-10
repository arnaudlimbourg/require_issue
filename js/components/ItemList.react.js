var React = require('react');
var ItemList = require('./ItemList.react');
var ItemStore = require('../stores/ItemStore');

function getStateFromStores() {
  return {
    itemList: ItemStore.getAllItems(),
  };
}

var MainSection = React.createClass({

  getInitialState: function() {
    return getStateFromStores();
  },

  componentDidMount: function() {
    ItemStore.addChangeListener(this._onchange);
  },

  componentWillUnmount: function() {
    ItemStore.removeChangeListener(this._onchange);
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState(getStateFromStores());
  },

  render: function() {
    var items = this.state.itemList;

    return (
      <div>
        <ItemsList data={items} />
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

module.exports = MainSection;
