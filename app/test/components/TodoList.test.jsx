let React = require('react');
let ReactDom = require('react-dom');
let TestUtils = require('react-addons-test-utils');
let expect = require('expect');
let $ =require('jquery');

let TodoList = require('Todolist');
let Todo =require('Todo');

describe('Todolist',()=>{
   it('should exist',()=>{
       expect(TodoList).toExist();
   });

   it('should render on Todo component for each todo item',()=>{
      let todos=[
          {
              id:1,
              text:'valami',
          },
          {
              id:2,
              text:'valami másodjára',
          },
      ];

      let todoList =TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
      let todosComponenst =TestUtils.scryRenderedComponentsWithType(todoList,Todo);

      expect(todosComponenst.length).toBe(todos.length);


   });
});