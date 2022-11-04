import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useState, useEffect } from "react";

const Chart = ({ data, name }) => {
  const userData = {
    labels: data.map(
      (dati) => dati.time || dati.trend || dati.date || dati.year
    ),
    datasets: [
      {
        label: name,
        data: data.map((dati) => dati.land || dati.trend || dati.extent),
        borderColor: "#495057",
        fill: {
          target: "origin",
          above: "#37b24d",
          below: "#37b24d",
        },
      },
    ],
  };

  return (
    <>
      <div className="chart-container">
        <Line data={userData} />
      </div>
    </>
  );
};

export default Chart;
