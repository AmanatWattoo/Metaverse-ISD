import { useState } from 'react'

const TodoForm = ({addTodo}:any) => {
  const [text, setText] = useState('')

  const handleSubmit = (e:any) => {
    e.preventDefault()
    addTodo(text)
    setText('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button type="submit">Add Todo</button>
    </form>
  )
}

export default TodoForm
