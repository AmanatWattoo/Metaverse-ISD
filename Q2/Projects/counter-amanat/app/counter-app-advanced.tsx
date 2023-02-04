"use client"
import React, { useState } from "react";

export default function CounterApp1(){
    const [counter, setCounter] = useState(0);
    const decrement = (kitna = 1)=>{
        setCounter(counter-kitna);
    };
    const increment = ( kitna = 2 )=>{
        setCounter(counter+kitna)
    }    
    return(
        <>
        {counter}
        <br/><br/>
        <button color="Teal" onClick={()=>decrement(3)}> Decremented Value by 3 : </button><br/>{counter}
        <button color="Teal" onClick={()=>decrement(5)}> Decremented Value by 5 : </button><br/>{counter}
        <button color="Teal" onClick={()=>decrement(7)}> Decremented Value by 7 : </button><br/>{counter}
        <button color="Teal" onClick={()=>decrement(9)}> Decremented Value by 9 : </button><br/>{counter}
        <button color="Teal" onClick={()=>decrement(11)}> Decremented Value by 11 : </button><br/>{counter}
        <br/>
        <button color="Blue" onClick={()=>increment(3)}>Incrmented Value 3: {counter} </button><br/>
        <button color="Blue" onClick={()=>increment(5)}>Incrmented Value 5:{counter} </button><br/>
        <button color="Blue" onClick={()=>increment(7)}>Incrmented Value 7: {counter}</button><br/>
        <button color="Blue" onClick={()=>increment(9)}>Incrmented Value 9:{counter} </button><br/>
        <button color="Blue" onClick={()=>increment(11)}>Incrmented Value 11:{counter} </button><br/>

        
        </>
    )
}