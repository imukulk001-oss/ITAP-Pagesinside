import React, { useState } from "react";
import "./Sidebar.css";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { dashboardSections } from "./DashboardData";

const Sidebar = ({ onSelect }) => {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (title) => {
    setOpenMenus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">IT Apps Portal</h2>
      <div className="sidebar-menu">
        {dashboardSections.map((section) =>
          section.items.map((item, index) => (
            <div key={index} className="menu-item">
              <div
                className="menu-header"
                onClick={() => toggleMenu(item.title)}
              >
                <div className="menu-header-left">
                  <span className="menu-icon">{item.icon}</span>
                  <span>{item.title}</span>
                </div>
                {openMenus[item.title] ? <FaChevronDown /> : <FaChevronRight />}
              </div>

              {openMenus[item.title] && (
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

// =============================================================================
// Revised Code Below
// src/components/DashboardLayout.jsx
// ============================================================================

// import React, { useState } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import "./Sidebar.css";

// const Sidebar = ({ isCollapsed, toggleCollapse }) => {
//   const apps = [
//     {
//       name: "Task",
//       icon: "📝",
//       subfeatures: ["Create Task", "Task List"],
//     },
//     {
//       name: "Support",
//       icon: "🛠️",
//       subfeatures: ["Service Request"],
//     },
//     {
//       name: "Enter Details for Portals",
//       icon: "📄",
//       subfeatures: ["MyList", "History", "Logs"],
//     },
//     {
//       name: "Help Content",
//       icon: "💡",
//       subfeatures: ["Add", "List"],
//     },
//     {
//       name: "GGDM",
//       icon: "⚙️",
//       subfeatures: ["Fill Form", "List Form"],
//     },
//     {
//       name: "IPP",
//       icon: "📘",
//       subfeatures: ["Add User", "IP Proposal Form", "IP Proposal List"],
//     },
//     {
//       name: "CHRON",
//       icon: "📅",
//       subfeatures: [],
//     },
//     {
//       name: "LCM",
//       icon: "📂",
//       subfeatures: [],
//     },
//   ];

//   const [openMenu, setOpenMenu] = useState(null);

//   const handleMenuClick = (index) => {
//     setOpenMenu(openMenu === index ? null : index);
//   };

//   return (
//     <aside className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
//       <div className="sidebar-header">
//         {!isCollapsed && <h2>IT Apps Portal</h2>}
//         <button className="collapse-btn" onClick={toggleCollapse}>
//           {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
//         </button>
//       </div>

//       <nav className="sidebar-menu">
//         {apps.map((app, index) => (
//           <div key={index} className="menu-item">
//             <div
//               className="menu-title"
//               onClick={() => handleMenuClick(index)}
//               title={app.name}
//             >
//               <span className="icon">{app.icon}</span>
//               {!isCollapsed && <span className="text">{app.name}</span>}
//               {!isCollapsed && app.subfeatures.length > 0 && (
//                 <span className="arrow">
//                   {openMenu === index ? "▲" : "▶"}
//                 </span>
//               )}
//             </div>

//             {!isCollapsed && openMenu === index && app.subfeatures.length > 0 && (
//               <div className="submenu">
//                 {app.subfeatures.map((feature, i) => (
//                   <div key={i} className="submenu-item">
//                     • {feature}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </nav>
//     </aside>
//   );
// };

// export default Sidebar;
