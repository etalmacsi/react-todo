let expect =require('expect');

let TodoAPI =require('TodoAPI');

describe('TodoAPI',()=>{
    beforeEach(()=>{
       localStorage.removeItem('todos')
    });

    it('should exist',()=>{
        expect(TodoAPI).toExist();
    });

    describe('setTodos',()=>{
        it('should se valid todos array',()=>{
           let todos = [{
               id:23,
               text: 'dasdas',
               completed:false
           }] ;

           TodoAPI.setTodos(todos);

           let actualTodos= JSON.parse(localStorage.getItem('todos'));

           expect(actualTodos).toEqual(todos);
        });

            it('should not set invalid todos',()=>{

               let badTodos = {
                   a:'b',
               };
                TodoAPI.setTodos(badTodos);

                expect(localStorage.getItem('todos')).toBe(null);
            });
    });

    describe('getTodos',()=>{
        it('should return empty array for bad localstorage data',()=>{
           let actualTodos = TodoAPI.getTodos();
           expect(actualTodos).toEqual([]);
        });


        it('should return todo if valid array in localstorage',()=>{
            let todos = [{
                id:23,
                text: 'dasdas',
                completed:false
            }] ;

            localStorage.setItem('todos',JSON.stringify(todos));

            let actualTodos = TodoAPI.getTodos();
            expect(actualTodos).toEqual(todos);

        });

        describe('filterTodos', ()=>{
            let todos = [{
                id:1,
                text: 'dasdas',
                completed:true
            },{
                id:2,
                text: 'dasdas',
                completed:false
            },
            {
                 id:3,
                 text: 'dasdas',
                 completed:true
            }] ;


            it('should returns all items if showComleted is true',()=>{
                let filteredTodos =TodoAPI.filterTodos(todos,true,'');
                expect(filteredTodos.length).toBe(3);
            });

            it('should returns non completed items if showComleted is false',()=>{
                let filteredTodos =TodoAPI.filterTodos(todos,false,'');
                expect(filteredTodos.length).toBe(1);
            });

            it('should sort by complete status',()=>{
               let filteredTodos =TodoAPI.filterTodos(todos,true,'');
               expect(filteredTodos[0].completed).toBe(false);
            });

            it('should filter todos by searchText',()=>{
                let filteredTodos =TodoAPI.filterTodos(todos,true,'das');
                expect(filteredTodos.length).toBe(3);
            });

            it('should return all todos if searchtext is empty',()=>{
                let filteredTodos =TodoAPI.filterTodos(todos,true,'');
                expect(filteredTodos.length).toBe(3);
            });




        });

    });
});