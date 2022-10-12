import React from "react";
import bycicle from "../../img/bycicle.jpg";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useState, useEffect } from "react";

function Co2Hero(props) {
  const userData = {
    labels: props.co2.map((data) => data.year),
    datasets: [
      {
        label: "CO2",
        data: props.co2.map((data) => data.trend),
        borderColor: "#186A3B",
      },
    ],
  };

  return (
    <section className="chart-section">
      <div className="container">
        <div className="text-white lg:w-6/12">
          <h1 className="chart-title">
            CO2 higher than pre-industrial levels
          </h1>
          <p className="mt-10 md:text-lg">
            Carbon dioxide concentrations are rising mostly because of the
            fossil fuels that people are burning for energy. Fossil fuels like
            coal and oil contain carbon that plants pulled out of the atmosphere
            through photosynthesis over many millions of years; we are returning
            that carbon to the atmosphere in just a few hundred. Since the
            middle of the 20th century, <span className="font-bold underline">annual emissions from burning fossil
            fuels have increased every decade</span> , from an average of 3 billion tons
            of carbon (11 billion tons of carbon dioxide) a year in the 1960s to
            9.5 billion tons of carbon (35 billion tons of carbon dioxide) per
            year in the 2010s
          </p>
        </div>
        <div className="chart-container">
          <Line data={userData} />
          <p className="chart-source">
            From 1958, the measurements of carbon dioxide concentrations are
            done by Mauna Loa Observatory. Source: Ed Dlugokencky and Pieter
            Tans, NOAA/GML.
            From 2010.01.01 the data is measured on a quasi daily basis
          </p>
        </div>
      </div>
    </section>
  );
}

export default Co2Hero;
