let React = require('react');
let moment = require('moment');
let {connect} = require('react-redux');
let actions = require('actions');

export let Todo= React.createClass({

   render:function () {
       let {text,completed,id, createdAt,completedAt,dispatch}=this.props;
       let todoClassname = completed ?  'todo todo-completed' :'todo';
       let renderDate =()=>{
         let message='Created';
         let timestamp =createdAt;

         if(completed){
             message ='Completed ';
            timestamp=completedAt;
         }

         return message + moment.unix(timestamp).format( 'MMM Do YYYY @ h:mmm ');
       };

       return(
            <div className={todoClassname} onClick={()=>{
                dispatch(actions.toggleTodo(id));
            }}>
                    <input type="checkbox" defaultChecked checked={completed} />

                    <div>
                        <p >{text}</p>
                        <p className="todo__subtext">{renderDate()}</p>
                    </div>

            </div>
       );
   } 
});

export default connect()(Todo);