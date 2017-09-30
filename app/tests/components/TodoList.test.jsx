var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoList = require('TodoList');
var ToDo = require('ToDo');
describe('TodoList', () => {
  if('should exist', () => {
    expect(ToDoList).toExist();
  });
  it('shoud render one Todo component for each todo item', () => {
    var todos = [{
      id: 1,
      text: 'do someting'
    },
    {
      id: 2,
      text: 'check mail'
    }
  ];
  var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
  var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ToDo );

  expect(todosComponents.length).toBe(todos.length);
  });
});
