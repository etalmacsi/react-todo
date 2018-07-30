let React = require ('react');


let TodoList = require('TodoList');
let AddTodo=require('AddTodo');
let TodoSearch=require('TodoSearch');
let uuid =require('uuid');


let TodoApp = React.createClass({
    getInitialState:function(){
      return{
        todos:[
            {
                id:uuid(),
             text:'Walk the dog'
            },
            {
                id:uuid(),
                text:'Walk the cat'
            },
            {
                id:uuid(),
                text:'Walk the horse'
            },
            {
                id:uuid(),
                text:'Walk the elephant'
            },
            {
                id:uuid(),
                text:'Walk the fish'
            },

        ],
          showCompleted:false,
          searchText:'',
      };
    },

    handleAddTodo:function(text){
        this.setState({
            todos:[
                ...this.state.todos,
                {
                    text: text,
                    id:uuid(),
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
        let {todos}=this.state;

       return (
           <div>
             <h1>Todo</h1>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={todos} />
                <AddTodo onAdd={this.handleAddTodo}/>
           </div>
       );
   }
});

module.exports=TodoApp;