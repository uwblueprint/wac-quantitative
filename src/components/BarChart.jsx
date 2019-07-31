import React, { Component } from "react";
import Chart from "react-google-charts";

const BarChart = ({ width, height, title, data }) => (
  <Chart
    width={width || "500px"}
    height={height || "300px"}
    chartType="BarChart"
    loader={<div>Loading Chart</div>}
    data={[["", "Target", "Sample"], ...data]}
    options={{
      title,
      chartArea: { width: "50%" },
      colors: ["#594FD1", "#FAB437"],
      hAxis: {
        minValue: 0,
        ticks: [0, 25, 50, 75, 100]
      }
    }}
  />
);

export default BarChart;
