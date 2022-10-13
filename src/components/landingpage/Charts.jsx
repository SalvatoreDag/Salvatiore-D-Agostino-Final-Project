import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";

function Charts() {

   useEffect(() => {
     Aos.init({ duration: 1000 });
   }, []);

  return (
    <>
      <section id="charts" data-aos="fade-left"  className="h-max my-20 px-5">
        <div className="  flex flex-col gap-7 items-center lg:flex-row lg:justify-center">
          <div className="card " >
            <div className="p-4">
              <h4 className="card-title">
              We are on fire
              </h4>
              <p className="card-text">
                Earth's temperature has risen by 0.14° Fahrenheit (0.08°
                Celsius) per decade since 1880, but the rate of warming since
                1981 is more than twice that: 0.32° F (0.18° C) per decade
              </p>
              <button className="card-button " data-mdb-ripple="true">
                <NavLink to="/temperature">Read more</NavLink>
              </button>
            </div>
          </div>
          <div className="card">
            <div className="p-4">
              <h4 className="card-title">
                CO2 is rising
              </h4>
              <p className="card-text">
                Carbon dioxide in the atmosphere warms the planet, causing
                climate change. Human activities have raised the atmosphere's
                carbon dioxide content by 50% in less than 200 years.
              </p>
              <button className="card-button">
              <NavLink to="/co2">Read more</NavLink>
              </button>
            </div>
          </div>
          <div className="card">
            <div className="p-4">
              <h4 className="card-title">
              Methane moment is now
              </h4>
              <p className="card-text">
                Methane is four times more sensitive to global warming than
                previously thought. A new study suggests
                that methane related warming will escalate
                in the decades to come
              </p>
              <button className="card-button">
              <NavLink to="/methane">Read more</NavLink>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-7 flex flex-col gap-7 items-center lg:flex-row lg:justify-center lg:mt-20">
          <div className="card">
            <div className="p-4">
              <h4 className="card-title">
                NO2 is dangerous than CO2
              </h4>
              <p className="card-text">
                Nitrogen dioxide (NO2) is a pollutant of concern in urban areas
                around the world. The main sources in urban environments are
                related to the burning of fuel and include transportation,
                electricity generation, and industrial and residential
                activities
              </p>
              <button className="card-button">
              <NavLink to="/no2">Read more</NavLink>
              </button>
            </div>
          </div>
          <div className="card">
            <div className="p-4">
              <h4 className="card-title">
              Sea ice is melting
              </h4>
              <p className="card-text">
                Polar ice caps are melting as global warming causes climate
                change. We lose Arctic sea ice at a rate of almost 13% per
                decade, and over the past 30 years, the oldest and thickest ice
                in the Arctic has declined by a stunning 95%
              </p>
              <button className="card-button">
              <NavLink to="/ice">Read more</NavLink>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Charts;
