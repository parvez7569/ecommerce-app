import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

const Search = ({ addtocart, cart }) => {

  const [searchParams] = useSearchParams();

  const query = searchParams.get("query") || "";

  const [products, setProducts] = useState([]);

  useEffect(() => {

    const searchProducts = async () => {

      const response = await fetch(
        `https://dummyjson.com/products/search?q=${encodeURIComponent(query)}`
      );

      const data = await response.json();

      console.log(data);

      setProducts(data.products);
    };

    if (query.trim() !== "") {
      searchProducts();
    }

  }, [query]);


  return (
    <div className="products-page">

      <h1 className="products-title">
        Search Results: {query}
      </h1>

      <div className="product-container">

        {products.map((product) => (

          <div
            className="product-card"
            key={product.id}
          >

            <img
              src={product.thumbnail}
              alt={product.title}
            />

            <h2>{product.title}</h2>

            <p>${product.price}</p>

            <Link to={`/p/${product.id}`}>
              View
            </Link>

            <button
              className="cart-btn"
              onClick={() => addtocart(product)}
              disabled={cart.some(
                (item) => item.id === product.id
              )}
            >
              {cart.some(
                (item) => item.id === product.id
              )
                ? "Added ✓"
                : "Add to Cart"}
            </button>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Search;