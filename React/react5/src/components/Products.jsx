import React from "react";
import Cart from "./Cart";
class Products extends React.Component{
    Products;
    constructor (props){
    super(props);
    this.Products= {
            pid : 101,
            pName : "IPhone 15",
            Price : "65,000",
            color:['white']

        }
    }
    render(){
        return <div>
            <h1>Product Component</h1>
            <hr/>
            <Cart Products={this.Products}/>
            </div>
    }
}
export default Products
