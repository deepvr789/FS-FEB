import React from "react";

class Counter extends React.Component{

    state={
        counter:1
    }
    decrHandler= ()=>{
        this.setState({counter:this.state.counter-1})
    }
    incrHandler= ()=>{  
        this.setState({counter:this.state.counter+1})   
        }

    render(){
        return <div>
                    <h2>Counter Component</h2>
                    <h3>Counter: {this.state.counter}</h3>
                    
                    <button onClick ={this.decrHandler} >DECR</button>
                    <button onClick ={this.incrHandler}>INCR</button>
                    </div>
    }
}
export default Counter

