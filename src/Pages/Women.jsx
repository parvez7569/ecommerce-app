import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../css/SubCategories.css";

const Women = () => {
  return (
    <div className="subcategory-section">

      <h2>Women</h2>

      <div className="subcategory-container">

        <Link to="dresses" className="subcategory-card">
          👗
          <h3>Dresses</h3>
        </Link>

        <Link to="shoes" className="subcategory-card">
          👠
          <h3>Shoes</h3>
        </Link>

        <Link to="bags" className="subcategory-card">
          👜
          <h3>Bags</h3>
        </Link>

      </div>

      <Outlet />

    </div>
  );
};

export default Women;