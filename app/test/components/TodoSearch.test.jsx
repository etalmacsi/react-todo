let React = require('react');
let ReactDom = require('react-dom');
let TestUtils = require('react-addons-test-utils');
let expect = require('expect');
let $ =require('jquery');

import {TodoSearch} from 'TodoSearch';

describe('TodoSearch',()=>{

    it('should exist',()=>{
     expect(TodoSearch).toExist();
   });

    it('should dispatch SET SEARCH TEXT on input change',()=>{
    let searchText='Dog';
    let spy =expect.createSpy();
    let todoSearch =TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

    let action={
        type:'SET_SEARCH_TEXT',
        searchText
    };

    todoSearch.refs.searchText.value=searchText;
    TestUtils.Simulate.change(todoSearch.refs.searchText);
    expect(spy).toHaveBeenCalledWith(action);
    });


    it('should dispatch toggle show completedd when checkbox checked',()=>{
        let spy =expect.createSpy();
        let todoSearch =TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

        let action={
            type:'TOGGLE_SHOW_COMPLETED'
        };

        TestUtils.Simulate.change(todoSearch.refs.showCompleted);

        expect(spy).toHaveBeenCalledWith(action);
    });
});