import React, { useState } from "react";
import "../CSS/Contact.css";
import Footer from "../Components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert("Please fill all fields");
      return;
    }
  console.log(formData)
    alert("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
    <div className="contact-page">

      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>
          Have a question? We'd love to hear from you.
          Get in touch with the ShopEase team.
        </p>
      </div>

      <div className="contact-container">

        <div className="contact-info">

          <h2>Get In Touch</h2>

          <p>
            We're here to help you with your orders, products,
            and any questions you may have.
          </p>

          <div className="contact-item">
            <span>📍</span>
            <div>
              <h3>Address</h3>
              <p>123 Main SangaReddy, India</p>
            </div>
          </div>

          <div className="contact-item">
            <span>📧</span>
            <div>
              <h3>Email</h3>
              <p>weAll@shopease.com</p>
            </div>
          </div>

          <div className="contact-item">
            <span>📞</span>
            <div>
              <h3>Phone</h3>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="contact-item">
            <span>🕒</span>
            <div>
              <h3>Working Hours</h3>
              <p>Monday - Saturday: 9 AM - 10 PM</p>
            </div>
          </div>

        </div>


        <div className="contact-form-container">

          <h2>Send Us A Message</h2>

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label>Name</label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>


            <div className="form-group">
              <label>Email</label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>


            <div className="form-group">
              <label>Subject</label>

              <input
                type="text"
                name="subject"
                placeholder="Enter subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>


            <div className="form-group">
              <label>Message</label>

              <textarea
                name="message"
                placeholder="Write your message..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>


            <button type="submit" className="contact-btn">
              Send Message
            </button>

          </form>

        </div>
        
      </div>
     
    </div>
     <Footer/>
     </>
  );
};

export default Contact;