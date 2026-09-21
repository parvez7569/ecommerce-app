import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/About.css";
import Footer from "../Components/Footer";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about-page">

      {/* Hero Section */}
      <section className="about-hero">

        <div className="about-hero-text">
          <p className="about-small-title">WELCOME TO SHOPEASE</p>

          <h1>
            Your Shopping,
            <span> Made Easy.</span>
          </h1>

          <p>
            ShopEase is your one-stop destination for quality products,
            great prices, and a simple online shopping experience.
          </p>

          <button onClick={() => navigate("/p")}>
            Start Shopping
          </button>
        </div>

        <div className="about-hero-image">
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80"
            alt="Online Shopping"
          />
        </div>

      </section>


      {/* About Section */}
      <section className="about-intro">

        <div className="about-intro-image">
          <img
            src="https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=900&q=80"
            alt="ShopEase"
          />
        </div>

        <div className="about-intro-text">

          <p className="section-label">WHO WE ARE</p>

          <h2>
            Making Online Shopping
            <span> Simple & Enjoyable</span>
          </h2>

          <p>
            At ShopEase, we believe shopping online should be simple,
            convenient, and enjoyable. Our platform brings together
            a wide range of products so you can find what you need
            without the hassle.
          </p>

          <p>
            From electronics and fashion to everyday essentials,
            ShopEase helps you discover products at competitive prices
            while providing a smooth shopping experience.
          </p>

          <button onClick={() => navigate("/p")}>
            Explore Products
          </button>

        </div>

      </section>


      {/* Why Choose Us */}
      <section className="why-us">

        <div className="section-heading">
          <p className="section-label">WHY SHOPEASE?</p>

          <h2>
            Everything You Need,
            <span> In One Place</span>
          </h2>

          <p>
            We focus on making every step of your shopping journey
            easy and convenient.
          </p>
        </div>


        <div className="about-features">

          <div className="about-feature">
            <div className="feature-icon">🚚</div>
            <h3>Fast Delivery</h3>
            <p>
              Get your favorite products delivered quickly
              and conveniently to your doorstep.
            </p>
          </div>


          <div className="about-feature">
            <div className="feature-icon">🔒</div>
            <h3>Secure Shopping</h3>
            <p>
              Your shopping experience is designed with
              security and privacy in mind.
            </p>
          </div>


          <div className="about-feature">
            <div className="feature-icon">💰</div>
            <h3>Great Prices</h3>
            <p>
              Discover quality products at competitive
              and affordable prices.
            </p>
          </div>


          <div className="about-feature">
            <div className="feature-icon">❤️</div>
            <h3>Customer First</h3>
            <p>
              We focus on creating a smooth and enjoyable
              experience for every shopper.
            </p>
          </div>

        </div>

      </section>


      {/* Statistics */}
      <section className="about-stats">

        <div className="stat">
          <h2>1000+</h2>
          <p>Products</p>
        </div>

        <div className="stat">
          <h2>500+</h2>
          <p>Happy Customers</p>
        </div>

        <div className="stat">
          <h2>50+</h2>
          <p>Categories</p>
        </div>

        <div className="stat">
          <h2>24/7</h2>
          <p>Support</p>
        </div>

      </section>


      {/* CTA */}
      <section className="about-cta">

        <div>
          <p className="section-label">START SHOPPING TODAY</p>

          <h2>
            Find Something You'll
            <span> Love</span>
          </h2>

          <p>
            Explore our collection and discover products
            made for your everyday needs.
          </p>

          <button onClick={() => navigate("/p")}>
            Shop Now
          </button>
        </div>

      </section>
      <Footer/>
    </div>
  );
};

export default About;