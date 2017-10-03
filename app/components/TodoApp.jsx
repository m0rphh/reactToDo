var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var ToDoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'ocisti stan'
        },
        {
          id: uuid(),
          text: 'sredi ormar'
        },
        {
          id: uuid(),
          text: 'pogledaj kad ide bus'
        },
        {
          id: uuid(),
          text: 'povuci potegni'
        }
      ]
    }
  },
  handleAddTodo: function(text) {
    // alert('New todo: ' + text);
    this.setState({
         todos: [
           ...this.state.todos,
           {
             id: uuid(),
             text: text
           }
         ],
    });
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
