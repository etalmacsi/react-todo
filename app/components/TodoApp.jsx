let React = require ('react');
let TodoList = require('TodoList');



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

        ]
      };
    },

    render:function () {
        let {todos}=this.state;

       return (
           <div>
             <h1>Todo</h1>
             <TodoList todos={todos} />
           </div>
       );
   }
});

module.exports=TodoApp;