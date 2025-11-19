import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "./DashboardLayout.css";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="layout">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      <div className={`main-content ${collapsed ? "collapsed" : "expanded"}`}>
        <Outlet />  {/* <-- This will load the current route */}
      </div>
    </div>
  );
};

export default DashboardLayout;
