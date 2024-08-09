/* function CompB(props){

    return <div>
            <h2>Component B</h2>
            <h3>{JSON.stringify(props)}</h3>
            <h2>Employee Id:  {props.emp_id}</h2>
            <h2>Employee Name:  {props.emp_Name}</h2>
            </div>
}

export default CompB

 */

function CompB(props){

    return <div>
            <h2>Component B</h2>
            <pre>{JSON.stringify(props)}</pre>
            <h3>Employee Id:{props.employee_id}</h3>
            <h3>Employee Name:{props.emp_Name}</h3>
            </div>
}

export default CompB


