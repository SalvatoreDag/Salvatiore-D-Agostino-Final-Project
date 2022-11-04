import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
import { FaTemperatureHigh, FaSmog } from "react-icons/fa";
import { AiFillCloud } from "react-icons/ai";
import { SiMoleculer } from "react-icons/si";
import { GiIceberg } from "react-icons/gi";

function Charts() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <section id="charts" data-aos="fade-left" className="h-max my-20 px-5">
        <h1 className="text-gray-800 text-center font-bold text-xl mt-10 md:text-2xl my-10">LIVE CHARTS</h1>
        <div className="  flex flex-col gap-7 items-center lg:flex-row lg:justify-center">
          <NavLink to="/render/temperature">
            <div className="card">
              <FaTemperatureHigh className="chart-icon"></FaTemperatureHigh>
              <div className="p-4">
                <h4 className="card-title">We are on fire</h4>
                <p className="card-text">
                  Earth's temperature has risen by 0.14° Fahrenheit 
                   per decade since 1880, but the rate of warming since
                  1981 is more than twice that: 0.32° Fahrenheit  per decade
                </p>
              </div>
            </div>
          </NavLink>
          <NavLink to="/render/co2">
            <div className="card">
              <AiFillCloud className="chart-icon"></AiFillCloud>
              <div className="p-4">
                <h4 className="card-title">CO2 is rising</h4>
                <p className="card-text">
                  Carbon dioxide in the atmosphere warms the planet.
                   Human activities have raised the atmosphere's
                  carbon dioxide content by 50% in less than 200 years
                </p>
              </div>
            </div>
          </NavLink>
          <NavLink to="/render/methane">
            <div className="card">
            <FaSmog className="chart-icon"></FaSmog>
              <div className="p-4">
                <h4 className="card-title">Methane moment is now</h4>
                <p className="card-text">
                  Methane is four times more sensitive to global warming than
                  previously thought. A new study suggests that methane related
                  warming will escalate in the decades to come
                </p>
              </div>
            </div>
          </NavLink>
        </div>
        <div className="mt-7 flex flex-col gap-7 items-center lg:flex-row lg:justify-center lg:mt-20">
        <NavLink to="/render/nitrous-oxide">
          <div className="card">
            <SiMoleculer className="chart-icon"></SiMoleculer>
            <div className="p-4">
              <h4 className="card-title">NO2 is dangerous than CO2</h4>
              <p className="card-text">
                Nitrogen dioxide is a pollutant of concern in urban areas
                around the world. The main sources in urban environments are
                related to the burning of fuel and include transportation
                  and residential activities
              </p>
            </div>
          </div>
          </NavLink>
          <NavLink to="/render/arctic">
          <div className="card">
            <GiIceberg className="chart-icon"></GiIceberg>
            <div className="p-4">
              <h4 className="card-title">Sea ice is melting</h4>
              <p className="card-text">
                Polar ice caps are melting as global warming causes climate
                change. We lose Arctic sea ice at a rate of almost 13% per
                decade, and over the past 30 years, the oldest and thickest ice
                in the Arctic has declined by a stunning 95%
              </p>
            </div>
          </div>
          </NavLink>
        </div>
      </section>
    </>
  );
}

export default Charts;
