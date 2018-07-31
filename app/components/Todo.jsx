let React = require('react');

let Todo= React.createClass({

   render:function () {
       let {text,completed,id}=this.props;

       return(
            <div onClick={()=>{
                this.props.onToggle(id);
            }}>

                    <input type="checkbox" defaultChecked checked={completed} onChange={()=>{}} />
                    {text}

            </div>
       );
   } 
});

module.exports=Todo;