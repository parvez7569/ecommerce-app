import React from "react";
import { Link } from "react-router-dom";
import "../css/SpecialOffer.css";

const SpecialOffer = () => {
  return (
    <section className="special-offer">
      <div className="offer-content">
        <span className="offer-tag">LIMITED TIME OFFER</span>

        <h2>Get 30% Off Your First Order</h2>

        <p>
          Discover amazing products and enjoy an exclusive discount
          on your first purchase.
        </p>

        <Link to="/p" className="offer-btn">
          Shop Now →
        </Link>
      </div>
    </section>
  );
};

export default SpecialOffer;