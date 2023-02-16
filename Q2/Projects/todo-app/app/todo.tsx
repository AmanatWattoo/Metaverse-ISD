"use client"

import { Box, color, Flex, Heading, Input } from "@chakra-ui/react"
import { useState } from "react"

export default function Todo(){
   const [kaam , setkaam] = useState([
     {todoText: "Task 1", completed: false},
     {todoText: "Task 2", completed: true},
     {todoText: "Task 3", completed: true},
     {todoText: "Task 4", completed: false}, 
]);
     const onClickHandler=(newElam:any)=>{
        const newKaam=kaam.map(todo=>{
            if(todo.todoText == newElam.todoText){

                todo.completed = ! todo.completed
            }
            return
            todo
        })
        setkaam(newKaam)
     }
    return(
        <>
        <ul>
            {kaam.map((elm)=>{
                return <li style={{color: elm.completed?"Orange" : "teal",
                 fontStyle: "oblique"}}
                  key={ elm.todoText}>
                  <input type="checkbox" checked={elm.completed}
                   onClick={()=>{onClickHandler(elm)}}/>  
                    {elm.todoText}</li>
            })}
        </ul>
         </>
    )
}