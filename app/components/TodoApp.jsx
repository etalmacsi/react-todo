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
             text:'Walk the dog',
                completed:false,
            },
            {
                id:uuid(),
                text:'Walk the cat',
                completed:false,
            },
            {
                id:uuid(),
                text:'Walk the horse',
                completed:false,
            },
            {
                id:uuid(),
                text:'Walk the elephant',
                completed:false,

            },
            {
                id:uuid(),
                text:'Walk the fish',
                completed:true,
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
                    completed:false,
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
    handleToggle:function(id){
        let updateTodos= this.state.todos.map((todo)=> {
            if(todo.id===id){
                todo.completed = !todo.completed;
            }
             return todo;
        });

        this.setState({
            todos:updateTodos,
        });
    },

    render:function () {
        let {todos}=this.state;

       return (
           <div>
             <h1>Todo</h1>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={todos} onToggle={this.handleToggle}/>
                <AddTodo onAdd={this.handleAddTodo}/>
           </div>
       );
   }
});

module.exports=TodoApp;