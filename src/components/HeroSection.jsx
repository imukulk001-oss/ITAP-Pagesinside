import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const handleExplore = () => {
    // Scroll to apps catalog section
    const appsSection = document.getElementById('apps-catalog');
    if (appsSection) {
      appsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="main-content">
      <div className="hero-background">
        <img 
          src="/images/bgblue.jpg" 
          alt="CSIR IT Apps" 
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            CSIR-ITApps Portal
          </h1>
          <p className="hero-description">
            CSIR - ITApps portal is designed to provide various
            software applications<br />
            for different purposes / Sections / Divisions /
            Directorates of CSIR users
          </p>
        </div>
        <button className="hero-button" onClick={handleExplore}>
          Explore
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 4H9M9 4L6 1M9 4L6 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

