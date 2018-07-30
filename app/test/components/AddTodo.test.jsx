let React = require('react');
let ReactDom = require('react-dom');
let TestUtils = require('react-addons-test-utils');
let expect = require('expect');
let $ =require('jquery');

let AddTodo=require('AddTodo');


describe('Addtodo',()=>{
   it('should exist',()=>{
      expect(AddTodo).toExist();
   });

    it ('it should call onAdd prop with valid data',()=>{
       let spy =expect.createSpy();
       let addTodo=TestUtils.renderIntoDocument(<AddTodo onAdd={spy}/>);

       let $el =$(ReactDom.findDOMNode(addTodo));


       addTodo.refs.text.value='check mail';
       TestUtils.Simulate.submit($el.find('form')[0]);

       expect(spy).toHaveBeenCalledWith('check mail');
    });

    it ('it should not call onAdd prop with valid data',()=>{
        let spy =expect.createSpy();
        let addTodo=TestUtils.renderIntoDocument(<AddTodo onAdd={spy}/>);

        let $el =$(ReactDom.findDOMNode(addTodo));


        addTodo.refs.text.value='';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });





});