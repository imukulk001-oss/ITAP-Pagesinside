// src/pages/Charts.jsx
import React, { useState } from "react";
import KPICarousel from "../components/KPICarousel";
import "./Charts.css";
// import { title } from "framer-motion/client";

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

const Charts = () => {
  // KPI Summary
  const kpiStats = [
    { title: "Total Proposals", value: "372" },
    { title: "Total FTT Proposals", value: "340" },
    { title: "Total FTC Proposals", value: "32" },
    { title: "Labs with No Proposals", value: "0" },
    { title: "Labs with Max Proposals", value: "32" },
    { title: "Labs with no Paticipation", value: "12" },
    { title: "Evaluated Proposals", value: "4" },
    { title: "Accepted Proposals", value: "3" },
    { title: "Rejected Proposals", value: "1" },
    // { title: "Cache Hit Rate", value: "94%" },
  ];

  // Sample chart data
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

  // List of charts on this page
  const chartGroups = [
    { title: "Metric Group 1", pieData, barData },
    { title: "Metric Group 2", pieData, barData },
    { title: "Metric Group 3", pieData, barData },
    { title: "Metric Group 4", pieData, barData },
    { title: "Metric Group 5", pieData, barData },
    { title: "Metric Group 6", pieData, barData },
    { title: "Metric Group 7", pieData, barData },
    { title: "Metric Group 8", pieData, barData },
    // { title: "Metric Group 9", pieData, barData },
    // { title: "Metric Group 10", pieData, barData },
  ];

  // Pagination logic
  const [page, setPage] = useState(1);
  const chartsPerPage = 2;
  const totalPages = Math.ceil(chartGroups.length / chartsPerPage);

  const start = (page - 1) * chartsPerPage;
  const end = start + chartsPerPage;
  const chartsToShow = chartGroups.slice(start, end);

  return (
    <div className="dashboard-container">
      <div className="charts-header">
        <h1>Dashboard</h1>
        <p>
          Viewing: <span className="view-title">KPI Dashboard</span>
        </p>
      </div>

      {/* KPI Carousel */}
      <KPICarousel kpiStats={kpiStats} />

      {/* Chart Cards */}
      <div className="chart-row">
        {chartsToShow.map((chart, index) => (
          <div key={index} className="chart-card">
            <h3>{chart.title}</h3>
            <p>Pie + Bar insight</p>

            <div className="chart-section">
              {/* Pie Chart */}
              <div className="pie-container">
                <ResponsiveContainer width="100%" height={220}>
                  <PieChart>
                    <Pie
                      data={chart.pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={80}
                      dataKey="value"
                      label
                      isAnimationActive={false}
                      animationDuration={0}
                    >
                      {chart.pieData.map((entry, i) => (
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
                  <BarChart data={chart.barData} isAnimationActive={false}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar
                      dataKey="value"
                      fill="#7A8EF8"
                      isAnimationActive={false}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Prev
        </button>

        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            className={page === i + 1 ? "active-page" : ""}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Charts;
