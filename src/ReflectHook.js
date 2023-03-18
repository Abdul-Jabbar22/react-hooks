import React,{useRef} from "react";


import "./Hooks.css"
 
function ReflectHook(){
    
    const inputRef = useRef (null);
    const onClick = () =>{

        // console.log(inputRef.current.value);
        inputRef.current.value ="";
    };
    return(
    <div className="hook">

        <h1>Pedro</h1>
        <input type="text" placeholder  ="ex..." ref={inputRef}/>
        <button onClick={onClick}>Change Name</button>
        
    </div>
    );
}

export default ReflectHook;