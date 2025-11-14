import React from "react";
import "./Header2.css";
const csirLogo = "/images/csir-logo.png";

const Header2 = () => {
  const handleLogoClick = () => {
    window.location.href = "https://www.csir.res.in";
  };

  return (
    <header className="header2">
      <div className="header2-content">
        <div
          className="header2-left clickable-logo-section"
          onClick={handleLogoClick}
        >
          <img src={csirLogo} alt="CSIR Logo" className="csir-logo" />
          <div className="header2-text">
            <p className="org-name">
              वैज्ञानिक तथा औद्योगिक अनुसंधान परिषद्
              <br />
              Council of Scientific & Industrial Research
              <br />
              (विज्ञान एवं प्रौद्योगिकी मंत्रालय, भारत)
              <br />
              Ministry of Science & Technology, Govt. of India
            </p>
          </div>
        </div>
        
      </div>
    </header>
  );
};

export default Header2;
