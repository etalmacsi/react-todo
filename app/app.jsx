let React = require('react');
let ReactDOM = require('react-dom');
let {Route, Router, IndexRoute, hashHistory} =require('react-router');
let {Provider} =require('react-redux');
import './../playground/index';


let TodoApp =require('TodoApp');

let actions = require('actions');
let store = require('configureStore').configure();

store.subscribe(()=>{
	console.log('new state',store.getState());
});


//load Fundation
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
	<Provider store={store}>
        <TodoApp/>
	</Provider>,
  document.getElementById('app')
);
