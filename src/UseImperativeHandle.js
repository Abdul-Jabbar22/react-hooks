import React,{useRef} from "react";
import Button from "./Button";

function UseImperativeHandle(){
    const buttonRef = useRef(null);
    return(
        <div  className="hook" >
            
            <button onClick={() => {
        buttonRef.current.alertToggle()
            
            }}
            >
            Button from Parent
            </button>
            <br/>
            <Button ref={buttonRef}/>           
        </div>
    );
}

export default UseImperativeHandle;