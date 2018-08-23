let redux =require('redux');
let {searchTextReducer,showCompletedReducer, todosReducer}=require('reducers');

export let configure = (initialSate={})=>{
    let reducer =redux.combineReducers({
       searchText: searchTextReducer,
       showCompleted: showCompletedReducer,
       todos:todosReducer
    });
    let store = redux.createStore(reducer,initialSate,redux.compose(
        window.devToolsExtension ? window.devToolsExtension() : f=>f
    ));

    return store;
};