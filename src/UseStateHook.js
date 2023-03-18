import React, { useState } from "react";
import "./Hooks.css"

 
const UseStateHook =()=>{
    // let counter = 0;
    const[counter,setCounter] =useState(0);

    const indcrement =()=>{

        setCounter(counter + 1)
        // counter = counter + 1;
        // console.log(counter);
    }

    return (
    
    <div className="hook"> 
    {counter}
    <button  onClick={indcrement}>Increment</button>
    
    </div>
    )
};

export default UseStateHook; 