import React from "react";
import DashboardCard from "./DashboardCard";

const DashboardSection = ({ title, items }) => {
  return (
    <div className="dashboard-section">
      <h3>{title}</h3>
      <div className="card-grid">
        {items.map((item, index) => (
          <DashboardCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default DashboardSection;
