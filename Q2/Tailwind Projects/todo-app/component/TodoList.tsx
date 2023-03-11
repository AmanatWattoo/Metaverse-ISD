'use client'
import React, { useState } from 'react'

const TodoList = () => {
    const[newtodo,newTodos]= useState("")
    const [todos, setTodos] = useState([
    {todoText: 'Task 1', completed: true},
    {todoText: 'Task 2', completed: false},
    {todoText: 'Task 3', completed: false},
    {todoText: 'Task 4', completed: true},
  ]);
  const onChangeHandler =(newelm:any)=>{
    const newtodos=todos.map((newtodo)=>{
        if(newtodo.todoText=== newelm.todoText){
            newtodo.completed =! newtodo.completed
        }
        return newtodo
    })};
  setTodos(newTodos)
    return (
    <div>
        <ul>
          {todos.map((elm)=>{return<li
           style={{color:elm.completed? 'green':'red'}} 
           key={elm.todoText}>
            <input type={'checkbox'} onChange = {()=>{onChangeHandler(elm)}}/>
            {elm.todoText}
            <button>Delete</button>
            </li>})}  
        </ul>
    </div>
  )
}

export default TodoList