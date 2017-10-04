var React = require('react');
var moment = require('moment');

var ToDo = React.createClass({
   render: function() {
     var {id, text, completed, createdAt, completedAt} =  this.props;
     var todoClassName = completed ? 'todo todo-completed' : 'todo';
     var renderDate = () => {
        var message = 'Craated ';
        var timestamp = createdAt;
          if (completed) {
            message = 'Completed ';
            timestamp = completedAt;
          }
        return message + moment.unix(timestamp).format('MMM Do YYYY @ HH:mm a');
     };

     return (
       <div className={todoClassName} onClick={() => {
           this.props.onToggle(id);
         }}>
         <input type="checkbox" checked={completed}/>
          <p className="text">{text}</p>

          <p className="date">{renderDate()}</p>
       </div>
     )
   }
});

module.exports = ToDo;
