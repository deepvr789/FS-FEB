import React from "react";

class Counter extends React.Component{

    state={
        counter:1
    }
    incrHandler=()=>{
        this.setState({counter: this.state.counter + 1})
    }
    decrHandler=()=>{
        this.setState({counter: this.state.counter - 1})
    }


    render(){
        return <div>
            <h1>Counter Component</h1>
            <h3>Counter Value:::::{this.state.counter}</h3>
            <button onClick={this.incrHandler}>+</button>{this.state.counter}
            <button onClick={this.decrHandler}>-</button>
        </div>
    }
}
export default Counter
