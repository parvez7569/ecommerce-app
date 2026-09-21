import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../css/CategoriesPage.css";
import Footer from "../Components/Footer";

const CategoriesPage = () => {
  return (
    <>
    <div className="categories-page">

      <h1>Shop By Category</h1>

      <p>
        Choose a category to explore our products
      </p>

      <div className="main-category-container">

        <Link to="men" className="main-category-card">
          <div>👔</div>
          <h2>Men</h2>
          <span>Shirts, Shoes & Watches</span>
        </Link>

        <Link to="women" className="main-category-card">
          <div>👗</div>
          <h2>Women</h2>
          <span>Dresses, Shoes & Bags</span>
        </Link>

        <Link to="electronics" className="main-category-card">
          <div>📱</div>
          <h2>Electronics</h2>
          <span>Smartphones, Laptops & Tablets</span>
        </Link>

        <Link to="home" className="main-category-card">
          <div>🛋️</div>
          <h2>Home</h2>
          <span>Furniture & Home Products</span>
        </Link>

      </div>

      <Outlet />

    </div>
    <Footer/>
    </>
  );
};

export default CategoriesPage;