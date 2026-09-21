import React from 'react'
import {useParams,useSearchParams} from "react-router-dom"
import { useState,useEffect } from 'react'
import "../css/Productsdetails.css"
import Footer from '../Components/Footer'

const Produtsdetails = ({addtocart,cart}) => {
    const {id}=useParams()
    // const [search]=useSearchParams()
    // let category=search.get('category')
    const [product,setproduct]=useState(null)

const call=async()=> {
    let response= await fetch(`https://dummyjson.com/products/${id}`);
    let data=await response.json();
    console.log(data)
    setproduct(data)
    setisLoggrdin(false)
}
useEffect(()=>{
    call()
},[id])

  if (product === null) {
    return <h2 className='lodingin'>Loading...</h2>
  }
//  let product=products.find((item)=>(item.id)===Number(id))

  return (
    <>
    <div className="product-details-page">
       {
      <div  className="product-details">
                <img src={product.thumbnail} alt={product.title}/>
                <div  className="product-info">
                   <h2>
              Title: {product.title}
            </h2>

            <p className="product-price">
              Price: ${product.price}
            </p>

            <p>
              Description: {product.description}
            </p>

            <p>
              Brand: {product.brand}
            </p>
            <p>
              Category: {product.category}
            </p>
             <button  className={`cart-btn ${
             cart.some((item) => item.id === product.id)
                ? "added"
                : ""
                }`} onClick={() => addtocart(product)}
                disabled={cart.some((item) => item.id === product.id)}>
                 {cart.some((item) => item.id === product.id)
                  ? "Added ✓"
                  : "Add to Cart"}
                </button>
           </div>
          
        </div>
            
        
      }
       
    </div>
    <Footer/>
    </>
  )
}

export default Produtsdetails
