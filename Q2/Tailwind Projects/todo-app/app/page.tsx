import AddNewTodo from '@/component/AddNewTodo'
import TodoList from '@/component/TodoList'
import React from 'react'

const Home = () => {
  return (
        <div>
          <AddNewTodo/>
        <div>
          <TodoList/>
          </div>
        </div>
  )
}

export default Home