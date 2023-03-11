const TodoItem = ({ todo, deleteTodo }:any) => {
    const handleClick = () => {
      deleteTodo(todo.id)
    }
  
    return (
      <li>
        {todo.text}
        <button onClick={handleClick}>Delete</button>
      </li>
    )
  }
  
  export default TodoItem
  