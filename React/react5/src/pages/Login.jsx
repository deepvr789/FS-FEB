import React, { useState } from 'react'

const Login = () => {
  let [user,setUser]=useState({email:"",password:""})

  let emailHandler = (event)=>{
    //console.log(event)
    console.log(event.target.value)
    setUser({email:event.target.value})
  }
  let passwordHandler = (event)=>{
    setUser({password:event.target.value})
  }
 return <>
 <div className="container">
 <h3>Logi Details</h3>
  <pre>{JSON.stringify(user)}</pre>
  <div className="row">
  
    <div className="col-5">
    <form>
        <div className='form-group'>
           <label >Email Id:</label> 
           <input  className='form-control' type="text" onChange={emailHandler} /> 
        </div>
        <div className='form-group'>
          <label >Password:</label>
          <input className='form-control' type="password" onChange={passwordHandler} />
        </div>
        <input type="submit" value="Login"  className='btn btn-warning'/>      
      </form>
    </div>
  </div>
 </div>
     
     
      </>
}

export default Login