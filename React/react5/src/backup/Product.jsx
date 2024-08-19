import { useState } from 'react'

export default function () {
    let [qty,setQty]= useState(1)
    let incrHandler=()=>{
        setQty(qty+1)
    }

  return (
    <div>
        <h1>Product Component</h1>
        <hr/>
        <button onClick={()=>{setQty(qty-1)}}>-</button>
        {qty}
        <button onClick={incrHandler}>+</button>
    </div>
  )
}
