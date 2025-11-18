import React from "react";
import "./Sidebar.css";
import { FaChevronRight } from "react-icons/fa";
import { dashboardSections } from "./DashboardData";

const Sidebar = ({ onSelect }) => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">IT Apps Portal</h2>
      <div className="sidebar-menu">
        {dashboardSections.map((section) =>
          section.items.map((item, index) => (
            <div key={index} className="menu-item">
              <div className="menu-header">
                <div className="menu-header-left">
                  <span className="menu-icon">{item.icon}</span>
                  <span className="menu-label">{item.title}</span>
                </div>

                {item.features?.length > 0 && (
                  <FaChevronRight className="menu-chevron" />
                )}
              </div>

              {/* Always render submenu; visibility is controlled via CSS hover */}
              {item.features?.length > 0 && (
                <div className="submenu">
                  {item.features.map((feature, i) => (
                    <div
                      key={i}
                      className="submenu-item"
                      onClick={() => onSelect(feature)}
                    >
                      <span className="submenu-icon">{feature.icon}</span>
                      <span>{feature.title}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Sidebar;