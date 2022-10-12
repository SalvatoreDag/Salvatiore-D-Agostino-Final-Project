import React from "react";
import bycicle from "../../img/bycicle.jpg";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useState, useEffect } from "react";

function TemperatureHero(props) {
  const userData = {
    labels: props.temperature.map((data) => data.time),
    datasets: [
      {
        label: "Temperature",
        data: props.temperature.map((data) => data.land),
        borderColor: "#f03e3e",
        
      },
    ],
    
  };

  console.log("sono qui");

  return (
    <section className="chart-section">
      <div className="container">
        <div className="text-white lg:w-6/12">
          <h1 className="chart-title">
            Atmospheric temperature is rising
          </h1>
          <p className="mt-5 md:text-lg">
            Given the tremendous size and heat capacity of the global oceans, it
            takes a massive amount of heat energy to raise Earth’s average
            yearly surface temperature even a small amount. The roughly 2-degree
            Fahrenheit (1 degrees Celsius) increase in global average surface
            temperature that has occurred since the pre-industrial era
            (1880-1900) might seem small, but it means a significant increase in
            accumulated heat. The current global warming rate is not natural.
            From 1880 to 1981 was (0.07°C / 0.13°F) per decade. <span className="font-bold underline">Since 1981 this
            rate has increased to (0.18°C / 0.32°F)</span> . Some of the past sudden
            increase on global temperature present in this graph, correspond to
            the Roman Warm Period and the Medieval Warm Period.
          </p>
        </div>
        <div className="chart-container">
          <Line data={userData} />
          <p className="chart-source">
            Source: GISTEMP Team, 2020: GISS Surface Temperature Analysis
            (GISTEMP), version 4. NASA Goddard Institute for Space Studies.
            Dataset accessed 20YY-MM-DD.
            Source data 1880 - present: Lenssen, N., G. Schmidt, J. Hansen, M.
            Menne, A. Persin, R. Ruedy, and D. Zyss, 2019: Improvements in the
            GISTEMP uncertainty model. J. Geophys. Res. Atmos., 124, no. 12,
            6307-6326, doi:10.1029/2018JD029522
          </p>
        </div>
      </div>
    </section>
  );
}

export default TemperatureHero;
