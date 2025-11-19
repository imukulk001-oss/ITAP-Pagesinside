import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
import Dashboard from "./components/Dashboard";
import Charts from "./pages/Charts";
import Header2 from "./components/Header2";

function App() {
  return (<>
    <Header2/>
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          
          {/* Default page inside layout */}
          <Route index element={<Dashboard />} />
          
          {/* Example feature routes */}
          <Route path="charts" element={<Charts />} />
        
        </Route>
      </Routes>
    </Router>
  </>

  );
}

export default App;
