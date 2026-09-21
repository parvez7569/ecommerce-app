import React from "react";
import "../css/WhyChooseUs.css";

const WhyChooseUs = () => {
  const features = [
    {
      icon: "🚚",
      title: "Fast Delivery",
      text: "Get your products delivered quickly and safely.",
    },
    {
      icon: "🔒",
      title: "Secure Payment",
      text: "Your payment information is protected and secure.",
    },
    {
      icon: "↩️",
      title: "Easy Returns",
      text: "Simple and hassle-free returns on eligible products.",
    },
    {
      icon: "⭐",
      title: "Quality Products",
      text: "We provide reliable and high-quality products.",
    },
  ];

  return (
    <section className="why-us">
      <h2>Why Choose Us?</h2>

      <p className="why-subtitle">
        We make your shopping experience simple and enjoyable.
      </p>

      <div className="why-container">
        {features.map((feature, index) => (
          <div className="why-card" key={index}>
            <div className="why-icon">
              {feature.icon}
            </div>

            <h3>{feature.title}</h3>

            <p>{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;