/* function Message(){
    let eid=101
    let ename = "Rahul Gandhi"
    let loc = ["Wayanad", "New Delhi"]
    let details = {
        sal : 45000,
        avail:true
    }
    return <div>
            <h2>Message Component</h2>
            <h3>Employee Id : {eid}</h3>
            <h3>Employee Name : {ename}</h3>
            <h3>Location : {loc[0]} , {loc[1]}</h3>
            <h3>Salary : {details.sal}</h3>

            <h3>Details :{JSON.stringify(details)} </h3>
            </div>
}

export default Message */

import React from 'react'

class Message extends React.Component{
    eid=101;
    ename="Rahul";
    loc=["Wayanad","New Delhi","Banglaore"]
    detials={
        sal:45000,
        avail:false
    }
    render(){
        return <div>
                <h2>Message Component</h2>
                <h3>Employee Id: {this.eid}</h3>
                <h3>Employee Name: {this.ename}</h3>
                <h3>Employee Location: {this.loc}</h3>
                <h3>Employee Details: {JSON.stringify(this.detials)}</h3>
                </div>
    }
}
export default Message