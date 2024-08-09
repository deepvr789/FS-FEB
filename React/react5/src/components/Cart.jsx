let Cart = (props)=>{
    return <div>
        <h1>Cart Component</h1>
        <pre>{JSON.stringify(props)}</pre>
        <h3>Product Name :{props.Products.pName}</h3>
    </div>

}
export default Cart

