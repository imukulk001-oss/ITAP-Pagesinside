// import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";

import {
  FaTasks,
  FaLifeRing,
  FaCogs,
  FaChartBar,
  FaPlus,
  FaList,
  FaPlay,
  FaStop,
  FaHistory,
} from "react-icons/fa";

const DashboardLayout = () => {
  const sections = [
    {
      title: "Task",
      items: [
        {
          title: "Task",
          subtitle: "Create & Track",
          icon: <FaTasks />,
          features: [
            { title: "Create Task", icon: <FaPlus /> },
            { title: "Task List", icon: <FaList /> },
            { title: "Assign Task", icon: <FaTasks /> },
            { title: "Status", icon: <FaChartBar /> },
          ],
        },
      ],
    },
    {
      title: "Support",
      items: [
        {
          title: "Support",
          subtitle: "Service Desk",
          icon: <FaLifeRing />,
          features: [
            { title: "Raise Ticket", icon: <FaPlus /> },
            { title: "Track Ticket", icon: <FaList /> },
            { title: "Close Issue", icon: <FaStop /> },
          ],
        },
      ],
    },
    {
      title: "Chron",
      items: [
        {
          title: "Chron",
          subtitle: "Scheduler",
          icon: <FaCogs />,
          features: [
            { title: "Add Job", icon: <FaPlus /> },
            { title: "Run Job", icon: <FaPlay /> },
            { title: "Stop Job", icon: <FaStop /> },
            { title: "History", icon: <FaHistory /> },
            { title: "Logs", icon: <FaList /> },
          ],
        },
      ],
    },
  ];

  const handleFeatureSelect = (feature) => {
    console.log("Selected feature:", feature.title);
    // You can navigate or trigger actions here
  };

  return (
    <div className="layout">
      <Sidebar data={sections} onSelect={handleFeatureSelect} />
      <div className="main-content">
        <Dashboard sections={sections} />
      </div>
    </div>
  );
};

export default DashboardLayout;

// =============================================================================
// Revised Code Below
// src/components/DashboardLayout.jsx
// ============================================================================
// import React, { useState } from "react";
// import Header2 from "./Header2";
// import Sidebar from "./Sidebar";
// import "./DashboardLayout.css";

// const DashboardLayout = ({ children }) => {
//   const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

//   return (
//     <div className="layout">
//       <Header2 />
//       <div className="layout-main">
//         <Sidebar
//           isCollapsed={isSidebarCollapsed}
//           toggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
//         />
//         <main
//           className={`dashboard-content ${
//             isSidebarCollapsed ? "expanded" : ""
//           }`}
//         >
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;
