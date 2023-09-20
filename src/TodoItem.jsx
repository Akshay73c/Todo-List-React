export function TodoItem({completed, id, title, toggleTodo, deleteTodo}) {
    return (
        <li>
              <label>
                <input type="checkbox" checked={completed}
                onChange={e => toggleTodo(id, e.target.checked)}
                />
                {title}
              </label>
              <button 
              onClick={() => deleteTodo(id)} //means passing a function
              
              // <button onClick={deleteTodo(todo.id} -----> This will mean, cpassing the result of calling todo i.e. it'll run the function return the answer right away
              className="btn btn-danger"
              >
                Delete
              </button>
            </li>
    )
}