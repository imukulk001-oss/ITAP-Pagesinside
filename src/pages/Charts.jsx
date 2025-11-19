// src/pages/Charts.jsx
import React, { useState } from "react";
import KPICarousel from "../components/KPICarousel";

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
  // KPI Summary
  const kpiStats = [
    { title: "Total Requests", value: "1,248", change: "+8.3%" },
    { title: "Avg. Response Time", value: "214 ms", change: "+3.1%" },
    { title: "Error Rate", value: "0.7%", change: "+0.2%" },
    { title: "CPU Utilization", value: "72%", change: "+1.2%" },
    { title: "Memory Usage", value: "65%", change: "+0.8%" },
    { title: "Throughput", value: "17.4k ops", change: "+4.7%" },
    { title: "SLA Compliance", value: "99.1%", change: "+0.4%" },
    { title: "API Success Rate", value: "99.8%", change: "+0.3%" },
    { title: "DB Latency", value: "98ms", change: "+0.5%" },
    { title: "Cache Hit Rate", value: "94%", change: "+0.3%" },
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
        <h1>Operations Dashboard</h1>
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
                  <BarChart data={chart.barData}>
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
