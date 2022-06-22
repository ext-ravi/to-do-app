import react, { useState } from 'react';
import './Todo.css'

function Todo(props) {
    return(
        <div>
        {props.todos.map((todo) => (
            <h1>
            {todo.title}
            </h1>
          ))}
        </div>
    );
}

export default Todo;
