var React = require('react');

var AddTodo = React.createClass({

  handleSubmit: function(e) {
      e.preventDefault();
      var todoText = this.refs.todoText.value;

      if(todoText.length > 0 ) {
          this.refs.todoText.value = '';
          this.props.onAddTodo(todoText);
      } else {
          this.refs.todoText.focus();
      }

  },

  render: function() {
    return (
      <div >
        <form className="form-group" onSubmit={this.handleSubmit}>
          <input type="text" className="form-control" ref="todoText" placeholder="What do you need to do?"/>
          <button className="btn btn-primary">Add Todo</button>
        </form>
      </div>
    )
  }
});

module.exports = AddTodo;
