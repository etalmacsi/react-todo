let React = require('react');
let ReactDOM = require('react-dom');
let {Route, Router, IndexRoute, hashHistory} =require('react-router');

import './../playground/index';


let TodoApp =require('TodoApp');

//load Fundation
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');

ReactDOM.render(

	<TodoApp/>,
  document.getElementById('app')
);
