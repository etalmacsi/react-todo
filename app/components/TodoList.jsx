let React = require('react');
let Todo =require('Todo');

let TodoList = React.createClass({
   render:function () {
       let {todos}= this.props;


       let renderTodos=()=>{
        return todos.map((todo)=>{
            return (
              <Todo {...todo} />
            );
        });
       };

       return(
           <div>
               {renderTodos()}
           </div>
       );
   }  
});

module.exports=TodoList;