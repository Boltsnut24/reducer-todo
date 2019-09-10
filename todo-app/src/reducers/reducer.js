export const initialState = [
{
  item: 'Learn about reducers',
  completed: false,
  id: 3892987589
},

{
  item: 'Learn about other things',
  completed: true,
  id: 3892387589
},

{
  item: 'Learn about more things',
  completed: false,
  id: 3892982589
}
]

export function reducer(state, action){
  switch(action.type){
      case "addTodo":
        const newTodo = {
            item: action.payload,
            completed: false,
            id: Date.now()
        };
        return {
          ...state,
          todoArray: [...state.todoArray, newTodo]
        };
    default: 
      return state
  }
}
