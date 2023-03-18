import { useState } from "react"






const UseState2 =()=>{
    const [inputValue,setInputValue] = useState("Pedro");

    let onChange = (event) =>{
        const newValue = event.target.value;
        setInputValue(newValue);

    };

    return(
        <div className="hook">
            <input placeholder="enter something" onChange={onChange}/>
            {inputValue}
        </div>
    )
}

export default UseState2;