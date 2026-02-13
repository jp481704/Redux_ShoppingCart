import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="hero-container">
      <div className="content-wrapper">
        <div className="hero-left">
          <h1>
            Welcome To <br /> Paradise Nursery
          </h1>
          <div className="divider"></div>
          <p className="tagline">Where Green Meets Serenity</p>
          <Link to="/product" className="btn-get-started">
            Get Started
          </Link>
        </div>

        <div className="hero-right">
          <h2>Welcome to Paradise Nursery, where green meets serenity!</h2>

          <div className="description-text">
            <p>
              At Paradise Nursery, we are passionate about bringing nature
              closer to you. Our mission is to provide a wide range of
              high-quality plants that not only enhance the beauty of your
              surroundings but also contribute to a healthier and more
              sustainable lifestyle.
            </p>
            <p>
              From air-purifying plants to aromatic fragrant ones, we have
              something for every plant enthusiast. Whether you're a seasoned
              gardener or just starting your green journey, we're here to
              support you every step of the way.
            </p>
            <p>
              Join us in our mission to create a greener, healthier world. Visit
              Paradise Nursery today and experience the beauty of nature right
              at your doorstep.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
