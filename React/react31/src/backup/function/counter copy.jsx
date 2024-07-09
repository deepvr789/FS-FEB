import React from "react";
let Counter = ()=>{
    let [Counter,setCounter]=React.useState(1)

   /*  let incrHandler=()=>{
        setCounter(Counter+1)

    } */
   /*  let decrHandler=()=>{
        setCounter(Counter-1)
        } */

    return<div>
        <h1>Counter - Component</h1>
        <h2>Counter:::::{Counter}</h2>
       
        <button onClick={()=>setCounter(Counter+1)} >INCR</button>
        <button onClick={()=>setCounter(Counter-1)} >DECR</button>

    </div>
}
export default Counter;