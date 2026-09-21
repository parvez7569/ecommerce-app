import React from "react";
import { useNavigate } from "react-router-dom";


const CategoryProducts = ({ category, title }) => {

  const navigate = useNavigate();

  function showProducts() {
    navigate(`/p?category=${category}`);
  }

  return (
    <>
    <div className="category-products">

      <h3>{title}</h3>

      <button onClick={showProducts}>
        View Products
      </button>

    </div>
    
    
    </>
  );
};

export default CategoryProducts;