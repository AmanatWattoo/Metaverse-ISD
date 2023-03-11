'use client'
import React, { useState } from 'react'

const TodoList = () => {
  const [todo,setTodo] =useState("")
  const [todos, setTodos]= useState([
    {todoTex: 'Add Task 1', completed: false},
    {todoTex: 'Add Task 2', completed: true},
    {todoTex: 'Add Task 3', completed: true},
    {todoTex: 'Add Task 4', completed: false},

  ]);
  const onClickHandler =(newElam:any)=>{
    const newTodos= todos.map((todo)=>{
      if(todo.todoTex ==newElam.todoTex){
        todo.completed = !todo.completed
      }
      return todo
    });
    setTodos(newTodos)
  };
     const addTodo = ()=>{
        const newTodo = {todoText: todo, completed: false}
        const newTodos = {...todos, newTodo}
        setTodos(newTodos)
     };
  return (
    <>
    <div>TodoList</div>
    <input type={'text'} 
    value={todo} 
    onChange={(e)=>{
      setTodo(e.target.value)
    }}

    placeholder='Add your task'/>
    <button className='bg-blue-600' onClick={addTodo}>Add</button>
    <ul>
      {todos.map(elm=>{
        return<li style={{color: elm.completed?'green': 'red'}} key={elm.todoTex}>
          <input type={'checkbox'}
           checked = {elm.completed} 
           onChange= {()=>{onClickHandler(elm)}}/>
          {elm.todoTex}
          </li>
      })}
    </ul>
    </>
  )
}

export default TodoList