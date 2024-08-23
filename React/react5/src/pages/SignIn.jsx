import React, { useState } from 'react'


const SignIn = () => {
    let [user,setUser]=useState({email:"",password:""})
    let updateHandler = (event)=>{
        setUser({...user,[event.target.name]:event.target.value})
    }
    let submitHandler = (event)=>{
        event.preventDefault();
        console.log(user)
    }
  return <>
        <pre>{JSON.stringify(user)}</pre>
        <h2>SignIn Details</h2>
            <form onSubmit={submitHandler}>
            Email Id:: <input type="text" onChange={updateHandler} name="email" />  <br /><br />
            Password:  <input type='text'  onChange={updateHandler} name="password"/>
            <input type="submit" value="Login" />
            </form>
        </>
}

export default SignIn