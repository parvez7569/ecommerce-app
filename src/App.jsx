import { useState,useEffect } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Navber from './Components/Navber'
import Products from './Pages/Products'
import Produtsdetails from './Pages/Produtsdetails'
import Cart from './Pages/Cart'
import Signup from './Pages/Signup'
import ProtectedRoute from './Components/ProtectedRoute'
import Search from './Components/Search'
import Checkout from './Pages/Checkout'
import Orders from './Pages/Orders'
import RouteLoading from './Components/RouteLoading'
import Profile from './Pages/Profile'
import NotFound from './Pages/NotFound'
import CategoriesPage from "./Pages/CategoriesPage";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import Electronics from "./Pages/Electronics";
import HomeCategory from "./Pages/HomeCategory";
import CategoryProducts from "./Pages/CategoryProducts"




function App() {
  
  const [cart, setCart] = useState(()=>{
    const savecart=localStorage.getItem("cart")
   return savecart
    ?JSON.parse(savecart)
    :[]  
  })
  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(cart))
  },[cart])
  const addtocart=(Products)=>{
  const  existingProduct = cart.find((item)=> item.id===Products.id)
   if (existingProduct){
    setCart(
      cart.map((item)=>item.id===Products.id
      ?{...item,quantity: item.quantity +1}
      :item
      )
    )
   }else{
    setCart([
      ...cart,
       {
        ...Products,
        quantity: 1
      }
    ])
   }
  }
  const increaseQuantity=(id)=>{
  setCart(
    cart.map((item)=>item.id===id
     ? { ...item, quantity: item.quantity + 1 }
        : item
  )
  )
  }
  const decreaseQuantity=(id)=>{
    setCart(
      cart.map((item)=>item.id===id && item.quantity > 1
      ? { ...item, quantity: item.quantity - 1 }
        : item
      ))
  }
  const removecart=(id)=>{
    // alert(`this item Remove From Cart`)
    setCart(cart.filter((Product) => Product.id !==id))

  }
    const  cartCount =cart.reduce((total,product)=>
       total + product.quantity,0
    )
  return (
<div>
<BrowserRouter>
<Navber  cartCount={cartCount}/>

<RouteLoading/>
<Routes>
  <Route path='/'element={<ProtectedRoute><Home/></ProtectedRoute>}/>
  <Route path='/about'element={<ProtectedRoute><About/></ProtectedRoute>}/>
  <Route path='/contact'element={<ProtectedRoute><Contact/></ProtectedRoute>}/>
  <Route path='/login'element={<Login/>}/>
  <Route path='/signup'element={<Signup/>}/>
   <Route path='/p'element={<ProtectedRoute><Products addtocart={addtocart} cart={cart}/></ProtectedRoute>}/>
   <Route path='/p/:id'element={<Produtsdetails  addtocart={addtocart} cart={cart}/>}/>
    <Route path='/cart'element={<ProtectedRoute><Cart cart={cart}  removecart={removecart}
    increaseQuantity={increaseQuantity}  decreaseQuantity={ decreaseQuantity}
    /></ProtectedRoute>}/>
    <Route path='/search' element={<ProtectedRoute><Search addtocart={addtocart} cart={cart}/></ProtectedRoute>} />
    <Route path='/checkout'element={<Checkout cart={cart} />}/>
     <Route path='/orders'element={<Orders />}/>
       <Route path='/profile'element={<ProtectedRoute><Profile /></ProtectedRoute>}/>

       <Route path="/categories" element={<ProtectedRoute><CategoriesPage /></ProtectedRoute>}>
       <Route path="men" element={<Men />}>
      <Route
      path="shirts"
      element={
        <CategoryProducts
          category="mens-shirts"
          title="Men's Shirts" /> } />
    <Route
      path="shoes"
      element={
        <CategoryProducts
          category="mens-shoes"
          title="Men's Shoes" />} />

    <Route
      path="watches"
      element={
        <CategoryProducts
          category="mens-watches"
          title="Men's Watches"/>}/>

     </Route>
     <Route path="women" element={<Women />}>
      <Route
      path="dresses"
      element={
        <CategoryProducts
          category="womens-dresses"
          title="Women's Dresses" />}/>

    <Route
      path="shoes"
      element={
        <CategoryProducts
          category="womens-shoes"
          title="Women's Shoes"/> }/>
    <Route
      path="bags"
      element={
         <CategoryProducts
          category="womens-bags"
          title="Women's Bags"/>}/>
</Route>
   <Route
    path="electronics"
    element={<Electronics />}
  >

    <Route
      path="smartphones"
      element={
        <CategoryProducts
          category="smartphones"
          title="Smartphones" /> } />

    <Route
      path="laptops"
      element={
        <CategoryProducts
          category="laptops"
          title="Laptops"/>}/>

    <Route
      path="tablets"
      element={
        <CategoryProducts
          category="tablets"
          title="Tablets"/> } />

  </Route>
<Route path="home" element={<HomeCategory />}>
   <Route
      path="furniture"
      element={
        <CategoryProducts
          category="furniture"
          title="Furniture"/>} />
      </Route>

</Route>
       {/* 404 route must be last */}
  <Route path="*" element={<NotFound />} />

</Routes>
</BrowserRouter>
</div>
  )
}

export default App
