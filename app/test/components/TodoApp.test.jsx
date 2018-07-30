let React = require('react');
let ReactDom = require('react-dom');
let TestUtils = require('react-addons-test-utils');
let expect = require('expect');
let $ =require('jquery');

let Todo =require('Todo');

describe('TodoApp', ()=>{
   it('should exist',()=>{
       expect(Todo).toExist();
   });

});