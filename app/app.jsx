let React = require('react');
let ReactDOM = require('react-dom');
let {Route, Router, IndexRoute, hashHistory} =require('react-router');


//load Fundation
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');

ReactDOM.render(

	<p>Boilerplaete 3</p>,
  document.getElementById('app')
);
