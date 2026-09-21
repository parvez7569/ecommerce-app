import React from 'react'
import { Link,useSearchParams } from'react-router-dom'
import { useEffect,useState } from 'react'
import '../css/Products.css'
import Footer from '../Components/Footer'

const Products = ({addtocart,cart}) => {
const [products,setproducts]=useState([])
const [isLoggedIn,setisLoggrdin]=useState(true)
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");
 const  search = searchParams.get("search") || "";


const call=async()=> {
  let url="https://dummyjson.com/products?limit=200"

    if (category) {
      url = `https://dummyjson.com/products/category/${category}`;
    }

    let response= await fetch(url);
    let data=await response.json();
    console.log(data)
    setproducts(data.products)
    setisLoggrdin(false)
}
useEffect(()=>{
    call()
},[category])


  return (
    <>
    <div  className="products-page">
         <h1 className="products-title">
        {category
          ? category.replace("-", " ").toUpperCase()
          : "All Products"}
      </h1>
        <div  className="product-container">
      {
        products.map((product)=>(
            <div  className="product-card" key={product.id}>
                <img src={product.thumbnail} alt={product.thumbnail}/>
                <h2>Title:{product.title}</h2>
                <div>
                <Link to={`/p/${product.id}`}>view</Link>
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
        ))
      }
      
       </div>
       {
        isLoggedIn &&
        <h1 className='lodinginbar'> Lodding...</h1>
      }
     </div>
     <Footer/>
     </>
  )
}

export default Products
