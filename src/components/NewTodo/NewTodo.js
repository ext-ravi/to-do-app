import TodoForm from './TodoForm'
import './NewTodo.css'

const NewTodo = (props) => {
    const saveTodoDataHandler = (enteredTodoData) => {
        const todoData = {
            ...enteredTodoData,
            id: 10*Math.random().toString()
        };
        props.onAddTodos(todoData)
    }

    return(
        <div className="new-expense">
            <TodoForm onSaveTodoData={saveTodoDataHandler} />
        </div>
    )
}

export default NewTodo