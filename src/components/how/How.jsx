import React from "react";
import solar from "../../img/solar2.jpg";
import bycicle from "../../img/bycicle.jpg";
import vegetables from "../../img/vegetables2.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function How({}) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section id="how" data-aos="fade-right" className="px-10 lg:px-28">
      <h1 className="text-gray-800 text-center font-bold text-xl mt-10 md:text-2xl">
        LET'S MAKE THE WORLD GREEN AGAIN
      </h1>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="lg:m-auto">
          <h2 className="how-title">Switch the eco energy</h2>
          <p className="how-text">
            Ask your utility company if your home's energy comes from oil, coal,
            or gas. If possible, see if you can switch to renewable sources such
            as wind or solar power. Or install solar panels on the roof to
            produce energy for your home.
          </p>
        </div>
        <div>
          <img src={solar}></img>
        </div>

        <div className="lg:m-auto">
          <h2 className="how-title">Pedal, walk, use public transport</h2>
          <p className="how-text">
            The roads of the world are clogged with vehicles, most of which burn
            diesel or gasoline. Walking or cycling instead of driving will
            reduce greenhouse gas emissions and help your health and fitness.
            For longer distances, consider taking a train or bus and use shared
            car use whenever possible.
          </p>
        </div>
        <div>
          <img src={bycicle}></img>
        </div>

        <div className="lg:m-auto">
          <h2 className="how-title">Greens from original greens</h2>
          <p className="how-text">
            Eating more{" "}
            <a
              className=" rounded-lg text-white px-1 bg-green-primary cursor-pointer"
              href="https://goveggie.netlify.app/"
              target="_blank"
            >
              vegetables
            </a>
            , fruits, whole grains, legumes, nuts and seeds, and less meat and
            dairy products can significantly reduce your environmental impact.
            Generally, the production of plant-based foods results in fewer
            greenhouse gas emissions and requires less energy, land and water.
          </p>
        </div>
        <div>
          <img src={vegetables}></img>
        </div>
      </div>
    </section>
  );
}

export default How;
