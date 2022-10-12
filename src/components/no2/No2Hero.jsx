import React from "react";
import bycicle from "../../img/bycicle.jpg";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function No2Hero(props) {
  const userData = {
    labels: props.no2.map((data) => data.date),
    datasets: [
      {
        label: "NO2",
        data: props.no2.map((data) => data.average),
        borderColor: "#186A3B",
      },
    ],
  };

  return (
    <section className="chart-section">
      <div className="container">
        <div className="text-white lg:w-6/12">
          <h1 className="chart-title">
            NO2 is 300 times more potent than CO2{" "}
          </h1>
          <p className="mt-10 md:text-lg">
            Nitrous oxide is a gas that is produced by the combustion of fossil
            fuel and solid waste, nitrogen-base fertilizers, sewage treatment
            plants, natural processes, and other agricultural and industrial
            activities. It is the third largest heat-trapping gas in the
            atmosphere and the biggest ozone-destroying compound emitted by
            human activities. Nitrous oxide is 300 times more potent than carbon
            dioxide, and it also depletes the ozone layer. Since it also has a
            shorter life span, reducing it could have a faster, significant
            impact on global warming. But <span className="font-bold underline">the largest source of nitrous oxide is
            agriculture</span> , particularly fertilized soil and animal waste, and that
            makes it harder to rein in. One could imagine limiting carbon
            dioxide, less methane, less of lots of things. But nitrous oxide is
            so much a food production issue.
          </p>
        </div>
        <div className="chart-container">
          <Line data={userData} />
          <p className="chart-source">
            From 2001.01 the data is measured on a monthly basis
          </p>
        </div>
      </div>
    </section>
  );
}

export default No2Hero;
