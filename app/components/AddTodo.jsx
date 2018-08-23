let React=require('react');
let {connect} = require('react-redux');
let actions = require('actions');

export let AddTodo = React.createClass({

    onFormSubmit:function(e){
        e.preventDefault();

        let {dispatch}=this.props;
        let text=this.refs.text.value;

        if(text.length>0){
            this.refs.text.value='';
            dispatch(actions.addTodo(text));
        }else{
            this.refs.text.focus();
        }
    },

    render:function () {
      return(
          <div className="container__footer">
              <form onSubmit={this.onFormSubmit}>
                  <input type="text" ref="text" placeholder="What do you need to do?"/>
                    <button className="button expanded">
                         Add Todo
                   </button>
              </form>
          </div>
      );
    },
});

export default connect()(AddTodo);