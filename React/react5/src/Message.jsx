import React, { useState } from "react";


export default function Message() {

    let[msg,setMsg]= useState("Hello")
    let gmHandler=()=>{
        setMsg("Good Morning")
    }
    let gnHandler=()=>{
        setMsg("Good Night")
    }
  return (
    <div>
        <h1>Message Component</h1>
        <h3>Value:{msg}</h3>
        <button onClick={gmHandler}>GM</button>
        <button onClick={gnHandler}>GN</button>
        <button onClick={()=>{setMsg("Good Evening")}}>GE</button>

        </div>
  )
}
