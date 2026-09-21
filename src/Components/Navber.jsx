import React from "react";
import "../css/Navber.css";
import { Link,useNavigate } from "react-router-dom";
import { useState, } from "react";


function Navber({ cartCount }) {
  const  [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  let navigate=useNavigate()
  const logout=()=>{
    sessionStorage.removeItem('isLoggedIn')
     navigate("/login");
  }
  
 const handleSearchChange = async (e) => {

  const value = e.target.value;

  setSearch(value);

  if (value.trim() === "") {
    setSuggestions([]);
    return;
  }

  try {

    const response = await fetch(
      `https://dummyjson.com/products/search?q=${encodeURIComponent(value)}`
    );

    const data = await response.json();

    setSuggestions(
      data.products
        .slice(0, 5)
        .map((product) => product.title)
    );

  } catch (error) {
    console.log(error);
  }
};

const handleSearch = (e) => {
  e.preventDefault();

  if (search.trim() === "") 
    return;

  navigate(`/search?query=${encodeURIComponent(search)}`);
     setSearch("");
    setSuggestions([]);
};
  return (
    <nav className="navbar">

      {/* Logo */}
      <Link to="/" className="logo">
        <span className="logo-icon">🛍️</span>
        <span className="logo-text">ShopEase</span>
      </Link>
      <form className="search-form" onSubmit={handleSearch}>
      <input
     type="text"
     placeholder="Search products..."
     value={search}
     onChange={handleSearchChange}
      />

     <button type="submit">🔍</button>

       {suggestions.length > 0 && (

  <div className="search-suggestions">

    {suggestions.map((suggestion, index) => (

      <div
        className="suggestion-item"
        key={index}
        onClick={() => {
          setSearch(suggestion);
          setSuggestions([]);
        }}
      >
        {suggestion}
      </div>

    ))}

  </div>

       )}
         </form>

      {/* Navigation */}
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>

        <li>
          <Link to="/p">Products</Link>
        </li>
        <li>
          <Link to="/categories">
           Categories
          </Link>
        </li>
         <li>
          <Link to="/profile">👤Profile</Link>
        </li>

        <li>
          <Link to="/cart" className="cart-link">
            🛒 Cart
            <span className="cart-count">{cartCount}</span>
          </Link>
        </li>
          

         <button className="logout-btn"  onClick={logout}>Logout</button>
       
      </ul>

    </nav>
  );
}

export default Navber;
