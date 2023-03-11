import TodoItem from './TodoItem'

const TodoList = ({ todos, deleteTodo }:any) => {
  return (
    <ul>
      {todos.map((todo:any) => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  )
}

export default TodoList
