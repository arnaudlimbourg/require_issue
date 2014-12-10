var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');
var _ = require('lodash');

var CHANGE_EVENT = 'change';

var _items = {};

function _addItems(list) {
  list.forEach(function(item) {
    if (!_items[item.id]) {
      _items[item.id] = item;
    }
  });
}

var ItemStore = objectAssign({}, EventEmitter.prototype, {

  _currentItem: 0,

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

   /**
  * @param {function} callback
  */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  get: function(id) {
    return _itemList[id];
  },

  getAllItems: function() {
    return _itemList;
  },

  getCurrentItem: function() {
    return _itemList[this._currentItem];
  }

});

ItemStore.dispatchToken = AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch (action.type) {

    case 'RECEIVE_ALL':
      _addItems(action.results);
      console.log("store updated");
      break;

    default:
      // do nothing
      return true;
  }

  console.log("emit");
  ItemStore.emitChange();
  return true;
});

module.exports = ItemStore;
