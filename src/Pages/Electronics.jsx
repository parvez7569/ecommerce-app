import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../css/SubCategories.css";

const Electronics = () => {
  return (
    <div className="subcategory-section">

      <h2>Electronics</h2>

      <div className="subcategory-container">

        <Link to="smartphones" className="subcategory-card">
          📱
          <h3>Smartphones</h3>
        </Link>

        <Link to="laptops" className="subcategory-card">
          💻
          <h3>Laptops</h3>
        </Link>

        <Link to="tablets" className="subcategory-card">
          📱
          <h3>Tablets</h3>
        </Link>

      </div>

      <Outlet />

    </div>
  );
};

export default Electronics;