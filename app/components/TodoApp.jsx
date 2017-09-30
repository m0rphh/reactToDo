var React = require('react');
var TodoList = require('TodoList');

var ToDoApp = React.createClass({
  getInitialState: function() {
    return {
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
  render: function() {
    var {todos} = this.state;
    return  (
      <div>
        <TodoList todos={todos}/>
      </div>
    )
  }


});


module.exports = ToDoApp;
