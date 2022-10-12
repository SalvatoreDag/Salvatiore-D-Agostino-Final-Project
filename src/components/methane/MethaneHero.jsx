import React from "react";
import bycicle from "../../img/bycicle.jpg";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useState, useEffect } from "react";

function MethaneHero(props) {
  const userData = {
    labels: props.methane.map((data) => data.date),
    datasets: [
      {
        label: "Methane",
        data: props.methane.map((data) => data.average),
        borderColor: "#186A3B",
      },
    ],
  };

  return (
    <section className="chart-section">
      <div className="container">
        <div className="text-white lg:w-6/12">
          <h1 className="chart-title">
          We have underestimated methane
          </h1>
          <p className="mt-10 md:text-lg">
            Methane is a flammable gas formed by geological and biological
            processes. Some of the natural ones are leaks from natural gas
            systems and wetlands. 50-65% of total global methane emissions come
            from human activities. These include livestock, agriculture, oil and
            gas systems, waste from homes and businesses, landfills, and so on.
            Methane is a gas with a <span className="font-bold underline">global warming potential several times
            stronger than of CO2</span>. For more than 650,000 years, methane
            concentration in the atmosphere was between 350 – 800 ppb. From the
            beginning of the industrial revolution, human activities have
            increased this amount by around 150%.{" "}
          </p>
        </div>
        <div className="chart-container">
          <Line data={userData} />
          <p className="chart-source">
            Year 1983 to present data source: Global Monitoring Division of
            NOAA’s Earth System Research Laboratory Ed Dlugokencky, NOAA/GML. Data 800,000 years
            ago to 1983 source: United States, Environmental Protection Agency
            (EPA),
            From 1983.07 this data is measured on a monthly basis
          </p>
        </div>
      </div>
    </section>
  );
}

export default MethaneHero;
