import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './components/Todos/Todo'
import NewTodo from './components/NewTodo/NewTodo'
import reducer from '../reducers/index'

const DUMMY_TODOS = [{
  title: "Study",
},
{
  title: "Read",
},
{
  title: "Exercise",
},
{
  title: "Coffe",
}
];


function App() {
  let initialState = reducer(undefined, {})

  const [state, setState] = useLocalStorage(initialState, 'state')

  const dispatch = (action) => {
    setState(prevState => reducer(prevState, action))
  }

  let handleMarkDone = (id) => {
    dispatch({type: 'MARK_DONE_TODO', id})
  }

  const [todos, setTodos] = useState(DUMMY_TODOS)

  const addTodosHandler = todo => {
    setTodos((prevTodos) => {
      return [todo, ...prevTodos];
    });
  }

  
  return (
    <div className="App">
      <NewTodo onAddTodos = {addTodosHandler} />
      <Todo todos = {todos} handleMarkDone={handleMarkDone}/>
    </div>
  );
}

export default App;
