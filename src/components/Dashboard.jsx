// import React from "react";
// import DashboardSection from "./DashboardSection";
// import { dashboardSections } from "./DashboardData.js";

// const Dashboard = () => {
//   return (
//     <div className="dashboard">
//       <h2>Dashboard</h2>
//       <div className="section-grid">
//         {dashboardSections.map((section, index) => (
//           <DashboardSection key={index} {...section} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// =============================================================================

import React, { useState } from "react";
import DashboardSection from "./DashboardSection";
import DashboardControls from "./DashboardControls";
import { dashboardSections } from "./DashboardData.js";

const Dashboard = () => {
  const [filteredSections, setFilteredSections] = useState(dashboardSections);

  const handleSort = () => {
    const sorted = filteredSections.map((section) => ({
      ...section,
      items: [...section.items].sort((a, b) =>
        a.title.localeCompare(b.title)
      ),
    }));
    setFilteredSections(sorted);
  };

  const handleFilter = (type) => {
    if (type === "favourites") {
      const fav = dashboardSections.map((section) => ({
        ...section,
        items: section.items.filter((item) => item.isFavourite),
      }));
      setFilteredSections(fav);
    } else {
      setFilteredSections(dashboardSections);
    }
  };

  const handleSearch = (query) => {
    const search = dashboardSections.map((section) => ({
      ...section,
      items: section.items.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      ),
    }));
    setFilteredSections(search);
  };

  return (
    <div className="dashboard">
      <DashboardControls
        onSort={handleSort}
        onFilter={handleFilter}
        onSearch={handleSearch}
      />
      <h2>Dashboard</h2>
      <div className="section-grid">
        {filteredSections.map((section, index) => (
          <DashboardSection key={index} {...section} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
