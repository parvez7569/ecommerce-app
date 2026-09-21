import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/FeaturedProducts.css";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=16")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  return (
    <section className="featured">
      <h2>Featured Products</h2>
      <p>Check out our popular products</p>

      <div className="featured-container">

        {products.map((product) => (
          <div className="featured-card" key={product.id}>

            <img
              src={product.thumbnail}
              alt={product.title}
            />

            <h3>{product.title}</h3>

            <h4>${product.price}</h4>

            <Link to={`/p/${product.id}`}>
              View Product
            </Link>

          </div>
        ))}

      </div>
    </section>
  );
};

export default FeaturedProducts;