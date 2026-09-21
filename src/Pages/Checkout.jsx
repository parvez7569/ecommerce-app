
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Checkout.css";
import Footer from "../Components/Footer";

const Checkout = ({ cart }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    payment: "Cash on Delivery",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const total = cart.reduce(
    (sum, product) => sum + product.price * (product.quantity || 1),
    0
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const order = {
      id: Date.now(),
      customer: formData,
      products: cart,
      total: total.toFixed(2),
      date: new Date().toLocaleDateString(),
      status: "Order Placed",
    };

    localStorage.setItem("order", JSON.stringify(order));

    alert("Order placed successfully!");

    navigate("/orders");
  };

  return (
    <>
    <div className="checkout-page">

      <h1>Checkout</h1>

      <div className="checkout-container">

        {/* Customer Details */}
        <div className="checkout-form">

          <h2>Delivery Information</h2>

          <form onSubmit={handleSubmit}>

            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <label>Address</label>
            <textarea
              name="address"
              placeholder="Enter your full address"
              value={formData.address}
              onChange={handleChange}
              required
            ></textarea>

            <div className="checkout-row">

              <div>
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label>State</label>
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>

            <label>Pincode</label>
            <input
              type="text"
              name="pincode"
              placeholder="Enter pincode"
              value={formData.pincode}
              onChange={handleChange}
              required
            />

            <h2>Payment Method</h2>

            <div className="payment-options">

              <label>
                <input
                  type="radio"
                  name="payment"
                  value="Cash on Delivery"
                  checked={formData.payment === "Cash on Delivery"}
                  onChange={handleChange}
                />
                Cash on Delivery
              </label>

              <label>
                <input
                  type="radio"
                  name="payment"
                  value="UPI"
                  checked={formData.payment === "UPI"}
                  onChange={handleChange}
                />
                UPI
              </label>

              <label>
                <input
                  type="radio"
                  name="payment"
                  value="Card"
                  checked={formData.payment === "Card"}
                  onChange={handleChange}
                />
                Card
              </label>

            </div>

            <button className="place-order-btn" type="submit">
              Place Order
            </button>

          </form>

        </div>


        {/* Order Summary */}
        <div className="order-summary">

          <h2>Order Summary</h2>

          {cart.map((product) => (
            <div className="summary-item" key={product.id}>

              <img
                src={product.thumbnail}
                alt={product.title}
              />

              <div>
                <h3>{product.title}</h3>

                <p>
                  Quantity: {product.quantity || 1}
                </p>

                <p>
                  ${(
                    product.price * (product.quantity || 1)
                  ).toFixed(2)}
                </p>
              </div>

            </div>
          ))}

          <div className="summary-total">
            <span>Total</span>
            <strong>${total.toFixed(2)}</strong>
          </div>

        </div>

      </div>

    </div>
    <Footer/>
    </>
  );
};

export default Checkout;

