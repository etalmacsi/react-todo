let React = require('react');
let moment = require('moment');

let Todo= React.createClass({

   render:function () {
       let {text,completed,id, createdAt,completedAt}=this.props;
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
            <div onClick={()=>{
                this.props.onToggle(id);
            }}>

                    <input type="checkbox" defaultChecked checked={completed} />

                    <p>{text}</p>
                    <p>{renderDate()}</p>
            </div>
       );
   } 
});

module.exports=Todo;