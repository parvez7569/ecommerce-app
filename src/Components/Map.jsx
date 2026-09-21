import React from "react";
import "../css/Map.css";

const Map = () => {
  return (
    <section className="map-section">

      <h2>Visit Us</h2>

      <p>
        Find our ShopEase store on the map
      </p>

      <div className="map-container">

        <iframe
          src="https://www.google.com/maps?q=Sangareddy,India&output=embed"
          title="ShopEase Location"
          loading="lazy"
          allowFullScreen
        ></iframe>

      </div>

    </section>
  );
};

export default Map;