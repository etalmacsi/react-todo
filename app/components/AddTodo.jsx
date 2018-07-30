let React=require('react');


let AddTodo = React.createClass({

    onFormSubmit:function(e){
        e.preventDefault();

        let text=this.refs.text.value;

        if(text.length>0){
            this.refs.text.value='';

            this.props.onAdd(text);
        }else{
            this.refs.text.focus();
        }

    },

    render:function () {
      return(
          <div>
              <form onSubmit={this.onFormSubmit}>
                  <input type="text" ref="text" placeholder="What do you need to do?"/>
                    <button>
                         Add Todo
                   </button>
              </form>
          </div>
      );
    },
});

module.exports=AddTodo;