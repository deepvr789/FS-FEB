import React, { useState } from "react";


export default function Message() {

    let[msg,setMsg]= useState("Hello")
   
  return (
    <div>
        <h1>Message Component</h1>
        <h3>Value:{msg}</h3>
        <button onClick={()=>{setMsg("Good Morning")}}>GM</button>
        <button onClick={()=>{setMsg("Good Night")}}>GN</button>
        <button onClick={()=>{setMsg("Good Evening")}}>GE</button>

        </div>
  )
}
