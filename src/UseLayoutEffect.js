import { useLayoutEffect,useEffect,useRef } from "react";


function UseLayoutEffect(){
    
    const inputRef =useRef(null);

    useLayoutEffect (()=>{
        console.log(inputRef.current.value);
    },[]);


useEffect (()=>{
    // console.log("UseEffect");
    inputRef.current.value = "hllo"

},[]);

return <div>
    <input ref={inputRef} value="perdo" style={{width:400,height :100}} />
</div>;
}
export default UseLayoutEffect;