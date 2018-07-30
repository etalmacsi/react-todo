let React = require ('react');


let TodoList = require('TodoList');
let AddTodo=require('AddTodo');
let TodoSearch=require('TodoSearch');


let TodoApp = React.createClass({
    getInitialState:function(){
      return{
        todos:[
            {
             id:1,
             text:'Walk the dog'
            },
            {
                id:2,
                text:'Walk the cat'
            },
            {
                id:3,
                text:'Walk the horse'
            },
            {
                id:4,
                text:'Walk the elephant'
            },
            {
                id:5,
                text:'Walk the fish'
            },

        ],
          showCompleted:false,
          searchText:'',
      };
    },

    handleAddTodo:function(text){
        alert('new todo: ' + text);
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