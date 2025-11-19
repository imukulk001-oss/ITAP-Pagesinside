// src/pages/Charts.jsx
import KPICarousel from "../components/KPICarousel";
import React from "react";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Tooltip,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
} from "recharts";
import "./Charts.css";

const Charts = () => {
  // KPI Summary cards data
  const kpiStats = [
    { title: "Total Requests", value: "1,248", change: "+8.3%" },
    { title: "Avg. Response Time", value: "214 ms", change: "+3.1%" },
    { title: "Error Rate", value: "0.7%", change: "+0.2%" },
    { title: "CPU Utilization", value: "72%", change: "+1.2%" },
    { title: "Memory Usage", value: "65%", change: "+0.8%" },
    { title: "Throughput", value: "17.4k ops", change: "+4.7%" },
    { title: "SLA Compliance", value: "99.1%", change: "+0.4%" },
    { title: "API Success Rate", value: "99.8%", change: "+0.3%" },
    { title: "API Success Rate", value: "99.8%", change: "+0.3%" },
    { title: "API Success Rate", value: "99.8%", change: "+0.3%" },
  ];

  // Chart Data
  const pieData = [
    { name: "Success", value: 70 },
    { name: "Warning", value: 20 },
    { name: "Error", value: 10 },
  ];

  const pieColors = ["#4CAF50", "#FFCA28", "#E57373"];

  const barData = [
    { name: "Mon", value: 400 },
    { name: "Tue", value: 500 },
    { name: "Wed", value: 300 },
    { name: "Thu", value: 550 },
    { name: "Fri", value: 450 },
  ];

  return (
    <div className="dashboard-container">
      {/* ======================== PAGE HEADER ======================= */}
      <div className="charts-header">
        <h1>Operations Dashboard</h1>
        <p>
          Viewing: <span className="view-title">KPI Dashboard</span>
        </p>
      </div>

      {/* ======================== KPI CARDS ========================= */}
      {/* KPI SCROLL AREA
      <div className="kpi-scroll-wrapper">
        <div className="kpi-grid">
          {kpiStats.map((kpi, i) => (
            <div key={i} className="kpi-card">
              <h4>{kpi.title}</h4>
              <h2>{kpi.value}</h2>
              <p className="kpi-change">{kpi.change} vs last week</p>
            </div>
          ))}
        </div>
      </div> */}

      <KPICarousel kpiStats={kpiStats} />

      {/* ======================== CHART ROW ========================= */}
      <div className="chart-row">
        {/* Chart Card 1 */}
        <div className="chart-card">
          <h3>Metric Group 1</h3>
          <p>Pie + Bar insight</p>

          <div className="chart-section">
            {/* Pie Chart */}
            <div className="pie-container">
              <ResponsiveContainer width="100%" height={220}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    dataKey="value"
                    label
                  >
                    {pieData.map((entry, i) => (
                      <Cell key={i} fill={pieColors[i]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Bar Chart */}
            <div className="bar-container">
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#7A8EF8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Chart Card 2 */}
        <div className="chart-card">
          <h3>Metric Group 2</h3>
          <p>Pie + Bar insight</p>

          <div className="chart-section">
            <div className="pie-container">
              <ResponsiveContainer width="100%" height={220}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    dataKey="value"
                    label
                  >
                    {pieData.map((entry, i) => (
                      <Cell key={i} fill={pieColors[i]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="bar-container">
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#7A8EF8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
