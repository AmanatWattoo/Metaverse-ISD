"use client"
import React, { useState } from "react";

export default function CounterApp(){
    const [counter, setCounter] = useState(0);
    const decrement = ()=>{
        setCounter(counter-1);
    };
    const increment = ()=>{
        setCounter(counter+1)
    }    
    return(
        <>
        {counter}
        <br/><br/>
        <button color="Teal" onClick={decrement}> Decremented Value : </button>
        <br/>
        <button color="Blue" onClick={increment}>Incrmented Value: </button>
        
        </>
    )
}