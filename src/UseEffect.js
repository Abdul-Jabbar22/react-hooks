import React, { useEffect, useState } from "react";
import "./Hooks.css"
import axios from 'axios';

function UseEffect (){

    const [data,setData]= useState("");
    const [count,setCount] = useState(0);

    useEffect (()=>{
        // console.log("hello world");
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((response)=>{ 
           
            setData(response.data[0].email)
            console.log("API CALL WAS CALLED");

        })
    }, []);

    return <div className="hook">Hellow world
    
<h1>{data}</h1>
<h1>{count}</h1>
<button
onClick={()=>{
    setCount(count + 1) 
}}
>
  onClick
  </button>
    </div>
}

export default UseEffect;