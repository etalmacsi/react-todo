let React = require('react');
let ReactDom = require('react-dom');
let TestUtils = require('react-addons-test-utils');
let expect = require('expect');
let $ =require('jquery');

let TodoApp =require('TodoApp');

describe('TodoApp', ()=>{
   it('should exist',()=>{
       expect(TodoApp).toExist();
   });

   it('should add todo to the todos states on handleAddTodo',()=>{
       let todoText='test text';
       let todoApp = TestUtils.renderIntoDocument(<TodoApp/>);


       todoApp.setState({
           todos:[]
       });
      todoApp.handleAddTodo(todoText);

      expect(todoApp.state.todos[0].text).toBe(todoText);
   });
});