let expect =require('expect');
let reducers= require('reducers');
let df=require('deep-freeze-strict');



describe('Reducers',()=>{

    describe('searchTextReducers',()=>{

        it('should set search text',()=>{
           let action={
               type:'SET_SEARCH_TEXT',
               searchText:'doggy'
           };
           let res=reducers.searchTextReducer(df(''),df(action));

           expect(res).toEqual(action.searchText);
        });
    });

    describe('showCompletedReducer',()=>{

        it('should toggle show completed',()=>{
            let action={
                type:'TOGGLE_SHOW_COMPLETED',
            };
            let res =reducers.showCompletedReducer(df(false),df(action));

            expect(res).toEqual(true);
        });
    });
});