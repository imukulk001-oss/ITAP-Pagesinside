import React, { useState } from "react";
import "./DashboardControls.css";
import { FaSortAlphaDown, FaStar, FaSearch } from "react-icons/fa";

const DashboardControls = ({ onSort, onFilter, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="dashboard-controls">
      <div className="control-item" onClick={() => onSort("asc")}>
        <FaSortAlphaDown className="control-icon" />
        <span>A–Z Sort</span>
      </div>

      <div className="control-item" onClick={() => onFilter("favourites")}>
        <FaStar className="control-icon" />
        <span>Favourites</span>
      </div>

      <div className="control-item search-box">
        <FaSearch className="control-icon" />
        <input
          type="text"
          placeholder="Search applications..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};

export default DashboardControls;
