import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../css/SubCategories.css";


const Men = () => {
  return (
    <>
    <div className="subcategory-section">

      <h2>Men</h2>

      <div className="subcategory-container">

        <Link to="shirts" className="subcategory-card">
          👕
          <h3>Shirts</h3>
        </Link>

        <Link to="shoes" className="subcategory-card">
          👟
          <h3>Shoes</h3>
        </Link>

        <Link to="watches" className="subcategory-card">
          ⌚
          <h3>Watches</h3>
        </Link>

      </div>

      <Outlet />
    
    </div>
     
    </>
  );
};

export default Men;