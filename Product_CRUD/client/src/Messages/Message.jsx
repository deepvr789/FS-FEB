import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {gmAction,geAction,gnAction} from '../redux/Messages/message.action'
const Message = () => {
  
  let dispatch = useDispatch();
  let message = useSelector((state)=>{
    return state
  })

  let gmHandler=()=>{
    dispatch(gmAction())
  }
  let geHanlder=()=>{
    dispatch(geAction())
  }
  return <div>
                <h2>Message Compononent</h2>
                <pre>{JSON.stringify(message)}</pre>
                <h4>Value:{message.msg}</h4>
                <button onClick={gmHandler}>GM</button>
                <button onClick={geHanlder}>GE</button>
                <button onClick={()=>{
                  dispatch(gnAction())
                }}>GN</button>
            </div>
}

export default Message