import React from "react";
import Footer from "../../components/footer/Footer";
import "./OurBusiness.css";

const OurBusiness = () => {
  return (
    <div className="our-business">
      <header className="hero-section">
        <h1 className="hero-title">Welcome to Our Food Truck</h1>
        <p className="hero-subtitle">
          Serving Fresh, Delicious, and Affordable Meals on the Go!
        </p>
      </header>

      <section className="about-section">
        <h2>About Us</h2>
        <p>
          At [Your Food Truck Name], we believe that great food doesn’t need to
          be expensive. We bring gourmet meals to your neighborhood, crafted
          with the freshest ingredients and served with love.
        </p>
      </section>

      <section className="features-section">
        <h2>Why Choose Us?</h2>
        <div className="features">
          <div className="feature">
            <h3>Fresh Ingredients</h3>
            <p>We source locally to ensure every dish is fresh and flavorful.</p>
          </div>
          <div className="feature">
            <h3>Convenient Locations</h3>
            <p>
              Find us at popular spots in the city, bringing great food closer
              to you.
            </p>
          </div>
          <div className="feature">
            <h3>Unique Menu</h3>
            <p>Our menu is inspired by global flavors and crafted to perfection.</p>
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <h2>Our Gallery</h2>
        <div className="gallery">
          <img src="/images/food-truck1.jpg" alt="Food Truck" />
          <img src="/images/food-item1.jpg" alt="Delicious Dish" />
          <img src="/images/food-item2.jpg" alt="Tasty Meal" />
        </div>
      </section>

     
    </div>
  );
};

export default OurBusiness;
