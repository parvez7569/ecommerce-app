import React, { useEffect, useState } from "react";
import "../css/Categories.css";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const navigate = useNavigate();

 

  const popularCategories = [
    "smartphones",
    "laptops",
    "mens-shoes",
    "womens-dresses",
    "groceries",
    "beauty",
    "sunglasses",
    "fragrances",
    "sports-accessories",
     "mens-watches",
    "furniture",
     "mens-shirts",
  ];
   function product(category) {
    navigate(`/p/?category=${category}`);
  }

  return (
    <section className="categories">
      <h2>Shop By Category</h2>

      <div className="category-container">
        {categories
          .filter((category) =>
            popularCategories.includes(category.slug)
          )
          .map((category) => (
            <div className="category-card" key={category.slug}>
              <h3>{category.name}</h3>

              <button onClick={()=> product(category.slug)}>
                Shop Now
              </button>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Categories;