import React, {useState} from 'react';

export default function AddTodo(props) {
  const { addTodo } = props;
  const [newTodo, setNewTodo] = useState('')

  const handleChange = event => {
    setNewTodo(event.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault();
    //addnewTodo function
    addTodo(newTodo);
    setNewTodo('');
  }

  return (

    <form onSubmit={handleSubmit}>
      <input type='text' name='newTodo' placeholder='Add a new todo' onChange={handleChange} value={newTodo} />
      <button type='submit'>Add a new Todo</button>
    </form>

  )
}