"use client";

import { useState } from "react"

const home = ()=>{
  // to change the value dynamically we use the hook. 
  const [val, setVal]=useState("")
  const[val1, setval1]=useState("")
  const onChangeHandler = (e:any)=>{
    setVal(e.target.value);
  }
  const onChangeHandler1 = (e:any)=>{
    setval1(e.target.value);
  }
  return(  
  <>
      <h1><b><u>Input String Counter</u></b> </h1>
      <h3><u>By Amanat Ali</u></h3>
      <input value={val} onChange={onChangeHandler} type={"text"} placeholder="Enter the value to count" /> <br/>
      <input value={val1} onChange={onChangeHandler1} type={"text"} placeholder="Enter the Second value to count"/><br/>
      <br/> Length value 1: {val.length}
      <br/> Length of value 2: {val1.length}
    </>
  )
}
export default home; 