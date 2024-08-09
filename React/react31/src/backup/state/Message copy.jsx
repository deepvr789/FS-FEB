import React from "react";
class Message extends React.Component{
    //msg ='Hello'
    state={
        msg:'Hello'
    }


    gmhandler=()=>{
        this.setState({msg:"Good Morning"}) 
        
    }

    gnhandler=()=>{
        this.setState({msg:"Good Night"})
        this.forceUpdate()
    }



    render(){
        console.log("render")
        return <div>
                
                <h1>Message Component</h1>
                <hr/>
                <h3>Message:{this.state.msg}</h3>
                <button onClick={this.gmhandler} >GM</button>
                <button onClick={this.gnhandler}>GN</button>
                </div>
    }
}

export default Message;