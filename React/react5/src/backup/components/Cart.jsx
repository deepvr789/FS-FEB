import { Fragment } from "react"

let Cart = (props)=>{
    return <Fragment>
        <h1>Cart Component</h1>
        <pre>{JSON.stringify(props)}</pre>
        <h3>Product Name :{props.Products.pName}</h3>
        <img src ={props.Products.image } alt='Iphone'/>
    </Fragment>

}
export default Cart

