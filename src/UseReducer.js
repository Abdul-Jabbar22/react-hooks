import React, {useReducer} from "react";
import "./Hooks.css"

const reducer = (state,action) =>{
    switch(action.type){
        case "INCREMENT":
            return{count : state.count + 1, showText: state.showText};
            case "toggleShowText":
                return{count : state.count, showText: !state.showText};
                default :
                return state
            
    }
}

const UseReducer =()=>{
    // const [count, setCount] = useState(0);
    // const [showText, setShowText] = useState(true);
    const [state,dispatch] = useReducer(reducer,{count: 0,showText:true});
  
return (
    <>
    <div className="hook">
        <h1>{state.count}</h1>
        <button onClick={() =>{
           dispatch({type: "INCREMENT"});
           dispatch({ type : "toggelShowText"});

        }}
        >
            click me
        </button>
        { state.showText && <p>This is a text</p>}
    </div>
    </>
)

}

export default UseReducer;