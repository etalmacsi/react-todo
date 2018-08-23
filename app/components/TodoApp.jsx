let React = require ('react');

let TodoAPI = require('TodoAPI');
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
let uuid =require('uuid');
let moment = require('moment');


let TodoApp = React.createClass({
    getInitialState:function(){
      return{
        todos:TodoAPI.getTodos(),
          showCompleted:false,
          searchText:'',
      };
    },

    componentDidUpdate:function(){
        TodoAPI.setTodos(this.state.todos);
    },

    handleAddTodo:function(text){
        this.setState({
            todos:[
                ...this.state.todos,
                {
                    text: text,
                    id:uuid(),
                    completed:false,
                    createdAt: moment().unix(),
                    completedAt:undefined,
                }
            ]
        })
    },

    handleSearch:function(showCompleted, searchText){
        this.setState({
            showCompleted:showCompleted,
            searchText:searchText.toLowerCase(),
        });
    },

    render:function () {
        let {todos,showCompleted,searchText}=this.state;
        let filteredTodos = TodoAPI.filterTodos(todos,showCompleted,searchText);

       return (
           <div>
             <h1 className="page-title">Todo</h1>
               <div className="row">
                <div className="column small-centered small-11 medium-6 large-5">
                    <div className="container">
                        <TodoSearch onSearch={this.handleSearch}/>
                        <TodoList/>
                        <AddTodo onAdd={this.handleAddTodo}/>
                    </div>
                </div>
               </div>
           </div>
       );
   }
});

module.exports=TodoApp;