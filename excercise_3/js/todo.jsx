/** @jsx React.DOM */
var TodoList = React.createClass({
  createItem: function(itemText) {
      // Create and return one item with itemText as the information that we added in the input, Remember to set the handle delete in each element
  },

  render: function() {
    return <ul>/*create a list of items using props.items*/</ul>;
  }
});

var TodoApp = React.createClass({

  getInitialState: function() {
    return {items: [], text: ''}; // We starts with no items
  },
  // Event that deletes a specific item
  handleDelete: function(itemToDelete, e) {
    var newItems = _.reject(this.state.items, function(item) {
        return item == itemToDelete
    });
    this.setState({items: newItems});
  },
  handleChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var nextItems = this.state.items.concat([this.state.text]);
    var nextText = '';
    this.setState({items: nextItems, text: nextText});
  },
  render: function() {
    return (
      // Render the proper element
    );
  }
});
React.renderComponent(<TodoApp />, document.getElementById('mount'));