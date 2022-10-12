import React from "react";
import bycicle from "../../img/bycicle.jpg";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function IceHero(props) {
  const userData = {
    labels: props.ice.map((data) => data.year),
    datasets: [
      {
        label: "Extent",
        data: props.ice.map((data) => data.extent),
        borderColor: "#1971c2",
      },
      {
        label: "Area",
        data: props.ice.map((data) => data.area),
        borderColor: "#74c0fc",
      },
    ],
  };
  return (
    <section className="chart-section">
      <div className="container">
        <div className="text-white lg:w-6/12">
          <h1 className="chart-title">
            Polar ice is disappearing
          </h1>
          <p className="mt-10 md:text-lg">
            The arctic is warming around twice as fast as global average. Some
            of the reasons for this are: The arctic amplification, the albedo
            effect, and black carbon. From 1979 to 1996, we lost 2.2 – 3% of the
            arctic ice cover. From 2010 to present we are losing 12.85% per
            decade! Another consequence is permafrost thawing. This is a process
            in which large amounts of methane is released to the atmosphere,
            fueling more the process of global warming. We lose Arctic sea ice
            at a rate of almost 13% per decade, and over the past 30 years, the
            oldest and thickest ice in the Arctic has declined by a stunning
            95%. If emissions continue to rise unchecked, <span className="font-bold underline"> the Arctic could be
            ice-free in the summer by 2040.</span>
          </p>
        </div>
        <div className="chart-container">
          <Line data={userData} />
          <p className="chart-source">
            Data source: Satellite observations. Credit:NASA
          </p>
        </div>
      </div>
    </section>
  );
}

export default IceHero;
