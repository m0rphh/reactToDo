var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI');


var ToDoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    }
  },
  componentDidUpdate: function () {
    TodoAPI.setTodos(this.state.todos);
  },
  handleToggle: function(id) {
      var updatedTodos = this.state.todos.map(function (todo){
        if(todo.id === id) {
          todo.completed = !todo.completed;
          todo.completedAt = todo.completed ? moment().unix() : undefined;
        }
        return todo;
      });
      this.setState({todos: updatedTodos});
  },
  handleAddTodo: function(text) {
    // alert('New todo: ' + text);
    this.setState({
         todos: [
           ...this.state.todos,
           {
             id: uuid(),
             text: text,
             completed: false,
             createdAt: moment().unix(),
             completedAt: undefined
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
    var {todos, showCompleted, searchText} = this.state;
    var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
    return  (

      <div>
        <h1>Todo App</h1>
        <div className="container__search">
        <TodoSearch onSearch={this.handleSearch}/>
        </div>
        <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }


});


module.exports = ToDoApp;
