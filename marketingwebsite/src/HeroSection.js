import React from 'react';

import HeroMainImage from './images/test.png';

const HeroSection = () => (
  <div className="hero-section-container">
    <div className="hero">
      <h1>Ask<span>Vox</span></h1>
      <p>A voice-activated knowledge assistant designed to support gamers with real-time information without interrupting gameplay.</p>
    </div>
    <div className="hero-image">
      <img src={HeroMainImage} alt="HeroImage" />
    </div>
  </div>
);

export default HeroSection;