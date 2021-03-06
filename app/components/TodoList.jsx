var React = require('react');
var ToDo = require('ToDo');

var TodoList = React.createClass({
   render: function() {
     var {todos} = this.props;
     var renderTodos = () => {
       if (todos.length === 0) {
         return (
            <p className="no-todos-message">Nothing to do</p>
         );
       }
        return todos.map((todo) => {
          return (
            <ToDo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
          );
        });
     };
     return (
       <div className="todo-list">
         {renderTodos()}
       </div>
     )
   }
});

module.exports = TodoList;
