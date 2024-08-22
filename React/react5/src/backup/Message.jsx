import "./Message.css"
import React from 'react'
const Message = ()=>{
    let msgStyle_Internal ={color:"blue"}

    return <div>
        <h1>Message Component</h1>
        <hr />
        <h1 style={{color:'red', backgroundColor:'lightgreen'}}>Good Morning</h1>
        <h1 style= {msgStyle_Internal}>Good Evening</h1>
        <h1 className='msgStyle2'>Good Night</h1>
    </div>
}
export default Message