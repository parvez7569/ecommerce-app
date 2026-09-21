import React from 'react'
import "../css/Cart.css"
import { useNavigate } from 'react-router-dom'
import Footer from '../Components/Footer'


const Cart = ({cart,removecart, decreaseQuantity, increaseQuantity}) => {
  const navigate = useNavigate();
   
  const totalprice=cart.reduce((total,product)=>{
    return  total + product.price * product.quantity
  },0)
  const buynow=(product)=>(
    alert(`${product.title} ordered successfully!`)
    , navigate("/checkout")
  )
  
  const ordernow=()=>{
    if(cart.length ===0){
    alert("Your cart is empty")
    return
    }else{
      // alert("Your order has been placed successfully!")
      navigate("/checkout")
    }
  }

  return (
    <>
    <div className="cart-page">
        <h1>Your Cart</h1>
      {
        cart.map((product) => (
        <div v className="cart-item" key={product.id}>

          <img
            src={product.thumbnail}
            width="100"
            alt={product.title}
          />

          <h2>{product.title}</h2>

          <p className="price">${product.price}</p>
          <div  className="quantity">
            <button onClick={()=>decreaseQuantity(product.id)}>
              -
            </button>
            <span>{product.quantity}</span>
             <button onClick={()=>increaseQuantity(product.id)}>
              +
            </button>
          </div>
          <p className="product-total">
            {(product.price * product.quantity).toFixed(2)}
          </p>
          <div className="cart-buttons">
            <button  className="buy-btn" onClick={()=>buynow(product)}> Buy Now</button>
        <button   className="remove-btn" onClick={()=> removecart(product.id)}>Remove</button>
           </div> 
        </div>
          
      ))}
        <div className="cart-summary">

        <h2>
          Cart Total: ${totalprice.toFixed(2)}
        </h2>

        <button
          className="order-btn"
          onClick={ordernow}
        >
          Order Now
        </button>

      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Cart
