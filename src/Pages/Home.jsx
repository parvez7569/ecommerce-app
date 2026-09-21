import React from 'react'
import { useNavigate } from 'react-router-dom'
import Hero from "../Components/Hero";
import Categories from '../Components/Categories'
import FeaturedProducts from '../Components/FeaturedProducts'
import WhyChooseUs from '../Components/WhyChooseUs'
import SpecialOffer from '../Components/SpecialOffer'
import Footer from '../Components/Footer'
import Map from '../Components/Map';


function Home() {
  const navigate=useNavigate()
  return (
    <div>
      <Hero/>
      <Categories/>
      <FeaturedProducts/>
      <WhyChooseUs/>
      <SpecialOffer/>
      <Map/>
      <Footer/>
      
    </div>
  )
}

export default Home






{/* <h1>This is Home Page</h1>
      <button onClick={()=> navigate('/p')}>Go to Products</button><br></br>
       <button onClick={()=> navigate('/login')}>Go to login</button><br></br> */}