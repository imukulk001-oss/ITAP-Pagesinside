import React from "react";
import "./Dashboard.css";

const DashboardCard = ({ title, subtitle, icon, features = [] }) => {
  const handleFeatureClick = (feature) => {
    console.log(`Clicked on feature: ${feature.title}`);
    // You can add navigation logic here later
  };

  return (
    <div className="dashboard-card">
      <div className="card-header">
        <div className="icon main-icon">{icon}</div>
        <div>
          <h4>{title}</h4>
          <p>{subtitle}</p>
        </div>
      </div>

      <div
        className={`features-container ${
          features.length > 3 ? "scrollable" : ""
        }`}
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className="feature-item"
            onClick={() => handleFeatureClick(feature)}
          >
            <div className="feature-icon">{feature.icon}</div>
            <span className="feature-text">{feature.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardCard;
