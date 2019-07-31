import React, { Component } from "react";
import Chart from "react-google-charts";

{/*
  ________Sample Use of BarChart__________

  <BarChart
    title="What city are you from?"
    width="100%"
    data={[
      ["New York City, NY", 20, 40],
      ["Los Angeles, CA", 20, 36],
      ["Chicago, IL", 26, 28],
      ["Houston, TX", 20, 19],
      ["Philadelphia, PA", 15, 15]
    ]}
  />
*/}

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
