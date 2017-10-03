var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');


var ToDoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: 1,
          text: 'ocisti stan'
        },
        {
          id: 2,
          text: 'sredi ormar'
        },
        {
          id: 3,
          text: 'pogledaj kad ide bus'
        },
        {
          id: 4,
          text: 'povuci potegni'
        }
      ]
    }
  },
  handleAddTodo: function(text) {
    alert('New todo: ' + text);
  },
  handleSearch: function(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  },
  render: function() {
    var {todos} = this.state;
    return  (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }


});


module.exports = ToDoApp;
