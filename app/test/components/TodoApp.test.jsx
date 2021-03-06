let React = require('react');
let ReactDom = require('react-dom');
let TestUtils = require('react-addons-test-utils');
let expect = require('expect');
let $ =require('jquery');
let {Provider}=require('react-redux');

let configureStore=require('configureStore');
let TodoApp =require('TodoApp');
import TodoList from 'TodoList';


describe('TodoApp', ()=>{
   it('should exist',()=>{
       expect(TodoApp).toExist();
   });

   it ('should render Todolist',()=>{
       let store= configureStore.configure();
       let provider =TestUtils.renderIntoDocument(
         <Provider store={store}>
            <TodoApp/>
         </Provider>
       );

       let todoApp = TestUtils.scryRenderedComponentsWithType(provider,TodoApp)[0];
       let todoList =TestUtils.scryRenderedComponentsWithType(todoApp,TodoList);

       expect(todoList.length).toEqual(1);
   });
});