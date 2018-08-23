let React = require('react');
let ReactDom = require('react-dom');
let TestUtils = require('react-addons-test-utils');
let expect = require('expect');
let $ =require('jquery');

let {AddTodo}=require('AddTodo');


describe('Addtodo',()=>{
   it('should exist',()=>{
      expect(AddTodo).toExist();
   });

    it ('it should dispatch AddTodo ',()=>{
        let todoText='Check mail';
       let spy =expect.createSpy();
       let addTodo=TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
       let action ={
           type:'ADD_TODO',
           text:todoText
       };
       let $el =$(ReactDom.findDOMNode(addTodo));


       addTodo.refs.text.value=todoText;
       TestUtils.Simulate.submit($el.find('form')[0]);

       expect(spy).toHaveBeenCalledWith(action);
    });

    it ('it should not cispatc AddTodo when invalid todo text',()=>{
        let spy =expect.createSpy();
        let addTodo=TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);

        let $el =$(ReactDom.findDOMNode(addTodo));


        addTodo.refs.text.value='';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });





});