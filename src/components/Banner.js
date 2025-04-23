import React from 'react';
import '../styles/Banner.css';

const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <h2 className="banner-slogan">
          Turn your startup idea into a working product in weeks - not months
        </h2>
        <button className="cta-button">Get Started</button>
      </div>
    </section>
  );
};

export default Banner;
