import React, {useReducer} from 'react';
import Todo from './components/Todo.js'
import './App.css';
import AddTodo from './components/AddTodo.js'
import {initialState, reducer} from './reducers/reducer.js'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const addTodo = item => {
    dispatch({ type: "addTodo", payload: item });
  };

  return (
    <div className="App">
      <Todo />
      <AddTodo addTodo={addTodo}/>
    </div>
  );
}

export default App;
