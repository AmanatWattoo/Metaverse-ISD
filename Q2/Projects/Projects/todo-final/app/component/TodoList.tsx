 'use client'
import { useState } from "react"
    const [data,setdata] = useState('')
    const handleClick =(somedata:any)=>{
        setdata('')
    }
const TodoList = () => {
        
    return (
        <div>
            <input value={data} type={'text'} placeholder ='Enter the task'/>
            <button onClick={()=>handleClick(data)} className="bg-purple-500 rounded text-white">Add</button>
            <div>
                <h1>tasks are</h1>
                {data}
            </div>
        </div>
            
  )
}

export default TodoList