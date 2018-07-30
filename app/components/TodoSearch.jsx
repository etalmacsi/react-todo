let React =require('react');

let TodoSearch = React.createClass({

   handleSearch:function(){
     let showCompleted =this.refs.showCompleted.checked;
     let searchText = this.refs.searchText.value;

     this.props.onSearch(showCompleted,searchText);
   },

    render:function () {
        return(
            <div>
                <h3>Search for To-Do</h3>
                <div>
                    <input type="search" ref="searchText" placeholder="Seaech Todos" onChange={this.handleSearch}/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
                        Show completed todos
                    </label>
                </div>
            </div>
        );
    }
});

module.exports=TodoSearch;