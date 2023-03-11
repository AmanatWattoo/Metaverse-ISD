'use client'
import { useState } from "react"

const TodoItem = () => {
  
  const [todo,setTodo]=useState('')
  const [todos, settodos] = useState([
    {todotext: 'Task 1', status:false},
    {todotext: 'Task 2', status:true},
    {todotext: 'Task 3', status:false},
    {todotext: 'Task 4', status:true},
  ])
  const onclickHandler=(newElem:any)=>{
    console.log('Newelam:',newElem)
  
  // inorder to change status on click
  // map runs on an array and returns new array
  const newTodos = todos.map(todo=>{
    console.log('newtodos',todo);
    if(todo.todotext == newElem.todotext){
      todo.status =! todo.status
    }

    return todo 
  })
  console.log('newtodos', newTodos);

  settodos(newTodos)
};
const addTodo =()=>{
  const newTodo ={todotext:todo, status:false}
  const newTodos =[...todos,newTodo]
  settodos(newTodos);
  setTodo('')
  
}
const deleteTodo =(newElem:any)=>{
const newTodos= todos.filter(todo=>{
  if(todo.todotext ==newElem.todotext)return false;

  return true
})
  settodos(newTodos)
}
  return (

    <>

    <div className="">
      <input className="border-r-black" type={'text'} placeholder='Add the Task' value={todo} onChange ={(e)=>{setTodo(e.target.value)}}/>
      <button onClick={addTodo}>Add</button>
      <div>
      <ul>
        {todos.map((elem)=>{
          return<li style={{color:elem.status?'green':'red'}} key={elem.todotext}>
            <input type={'checkbox'} 
            checked={elem.status} 
            onChange={()=>{onclickHandler(elem)}}/>
            {elem.todotext}
            <button onClick={()=>{deleteTodo(elem)}} style={{backgroundColor: 'red'}}>Delete</button>
            </li>
        })}
      </ul>
      </div>
    </div>
    </>
  )
}

export default TodoItem