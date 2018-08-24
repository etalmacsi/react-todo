let expect = require('expect');
let reducers = require('reducers');
let df = require('deep-freeze-strict');


describe('Reducers', () => {

    describe('searchTextReducers', () => {

        it('should set search text', () => {
            let action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'doggy'
            };
            let res = reducers.searchTextReducer(df(''), df(action));

            expect(res).toEqual(action.searchText);
        });
    });

    describe('showCompletedReducer', () => {

        it('should toggle show completed', () => {
            let action = {
                type: 'TOGGLE_SHOW_COMPLETED',
            };
            let res = reducers.showCompletedReducer(df(false), df(action));

            expect(res).toEqual(true);
        });
    });

    describe('todoReducer', () => {

        it('should add new todo', () => {
            let action = {
                type: 'ADD_TODO',
                text: 'wáááá'
            };
            let res = reducers.todosReducer(df([]), df(action));

            expect(res.length).toEqual(1);
            expect(res[0].text).toEqual(action.text)
        });

        it('should toggle todo', () => {
            let todos = [{
                id: '12',
                text: 'st',
                completed: true,
                createdAt: 12,
                completedAt: 125
            }];
            let action = {
                type: 'TOGGLE_TODO',
                id: '12'
            };
            let res = reducers.todosReducer(df(todos), df(action));

            expect(res[0].completed).toEqual(false);
            expect(res[0].completedAt).toEqual(undefined);
        });

        it ('should add existing todos',()=>{
            let todos =[{
                id:'111',
                text:'dsadas',
                completed:false,
                completedAt:undefined,
                createdAt:33000
            }];
            let action ={
                type:'ADD_TODOS',
                todos:todos
            };

            let res = reducers.todosReducer(df([]),df(action));

            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(todos[0]);
        });
    });
});