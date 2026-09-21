import React, { useEffect, useState } from "react";
import "../css/Hero.css";

const slides = [
  {
    id: 1,
    title: "Big Deals Are Here!",
    text: "Shop the latest products at amazing prices.",
    button: "Shop Now",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=90",
  },

  {
    id: 2,
    title: "New Collection",
    text: "Discover the latest products and trending styles.",
    button: "Explore Now",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=90",
  },

  {
    id: 3,
    title: "Shop The Latest Trends",
    text: "Quality products at amazing prices.",
    button: "Shop Now",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1600&q=90",
  },
  {
  id: 4,
  title: "Mega Electronics Sale",
  text: "Upgrade your tech with amazing deals.",
  button: "Shop Electronics",
  image:
    "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?auto=format&fit=crop&w=1600&q=90",
},
{
  id: 5,
  title: "Step Into Style",
  text: "Discover trending shoes at great prices.",
  button: "Shop Shoes",
  image:
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1600&q=90",
},
];
const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const previousSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="hero">

      <img
        src={slides[current].image}
        alt={slides[current].title}
        className="hero-image"
      />

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>{slides[current].title}</h1>

        <p>{slides[current].text}</p>

        <button>{slides[current].button}</button>
      </div>

      <button
        className="hero-arrow prev"
        onClick={previousSlide}
      >
        ❮
      </button>

      <button
        className="hero-arrow next"
        onClick={nextSlide}
      >
        ❯
      </button>

      <div className="hero-dots">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={current === index ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          ></button>
        ))}
      </div>

    </section>
  );
};

export default Hero;






// import React from 'react'
// import './Hero.css'
// import heroImage from '../assets/Hero1.png';

// const Hero = () => {
//   return (
//     <div>
//       <section className="hero">
//         <img src={heroImage}
//         alt='ShopNow hero banner'
//         className='hero-image'/>
//       </section>
//     </div>
//   )
// }

// export default Hero
