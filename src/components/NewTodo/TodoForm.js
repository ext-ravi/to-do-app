import React, {useState} from 'react'
import './TodoForm.css'

const TodoForm = (props) => {
  
  const [enteredTitle, setEnteredTitle] = useState('');
  
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
  
    const todoData = {
      title: enteredTitle
    }
  
    props.onSaveTodoData(todoData);
    setEnteredTitle('');
  }
  
  
  return (
    <form onSubmit={submitHandler}>
      <div>
        <div>
          <label>New ToDo</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  )
}
export default TodoForm;
