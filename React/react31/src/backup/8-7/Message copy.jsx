import React from "react";
class Message extends React.Component{
    msg ='Hello'


    gmhandler=()=>{
        this.msg = "Good Morning"
        this.forceUpdate()
    }

    gnhandler=()=>{
        this.msg = "Good Night"
        this.forceUpdate()
    }



    render(){
        return <div>
                <h1>Message</h1>
                <hr/>
                <h3>Message:{this.msg}</h3>
                <button onClick={this.gmhandler} >GM</button>
                <button onClick={this.gnhandler}>GN</button>
                </div>
    }
}

export default Message;