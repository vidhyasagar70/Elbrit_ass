import React from 'react';
import './Herosection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <img src="/images/vita.png" alt="Vita" className="vita" />
        <img src="/images/vita2.png" alt="Vita2" className="vita2" />
      </div>
    </section>
  );
};

export default HeroSection;
