let React = require('react');
let ReactDom = require('react-dom');
let TestUtils = require('react-addons-test-utils');
let expect = require('expect');
let $ =require('jquery');

let {Todo} = require('Todo');

describe('Todo',()=>{
    it('should exist',()=>{
        expect(Todo).toExist();
    });

    it('should dispatch onToggle action on click',()=>{
        let todoDate={
            id:199,
            text:'write todo.test..jsx test',
            completed:false,
        }

        let spy = expect.createSpy();
        let todo = TestUtils.renderIntoDocument(<Todo {...todoDate} dispatch={spy}/>);


        let $el= $(ReactDom.findDOMNode(todo));

        TestUtils.Simulate.click($el[0]);

        expect(spy).toHaveBeenCalledWith({
            type:'TOGGLE_TODO',
            id:todoDate.id
        });
    });
});
