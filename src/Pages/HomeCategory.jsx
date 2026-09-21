import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../css/SubCategories.css";


const HomeCategory = () => {
  return (
    <>
    <div className="subcategory-section">

      <h2>Home</h2>

      <div className="subcategory-container">

        <Link to="furniture" className="subcategory-card">
          🛋️
          <h3>Furniture</h3>
        </Link>

      </div>

      <Outlet />

    </div>
  
    </>
  );
};

export default HomeCategory;