let React = require('react');
let ReactDOM = require('react-dom');
let {Route, Router, IndexRoute, hashHistory} = require('react-router');
let {Provider} = require('react-redux');
import './../playground/index';


let TodoApp = require('TodoApp');

let actions = require('actions');
let store = require('configureStore').configure();
let TodoAPI = require('TodoAPI');

store.subscribe(() => {
    let state =store.getState();
    console.log('new state', state);
    TodoAPI.setTodos(state.todos);
});

let initalTodos=TodoAPI.getTodos();
store.dispatch(actions.addTodos(initalTodos));

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
