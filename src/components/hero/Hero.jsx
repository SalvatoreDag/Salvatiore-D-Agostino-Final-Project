import React from "react";
import friday from "../../img/friday.png";
import unfccc from "../../img/unfccc.png";
import green from "../../img/green2.png";
import { AiOutlineArrowDown } from "react-icons/ai";
import { BsRecycle } from "react-icons/bs";
import { Link as Scroll } from "react-scroll";

function Hero() {
  return (
    <section id="hero" className=" h-screen w-12/12 bg-hero-pattern bg-auto">
      <div className="h-screen flex flex-col justify-center items-center gap-20">
        <div>
          <h1 className="text-white uppercase text-3xl font-bold md:text-4xl lg:text-5xl">
            There is no planet b
          </h1>
          <p className="text-white text-center text-sm md:text-lg">
            let's stop climate change together
          </p>
        </div>
        <div className="flex gap-4">
          <Scroll
            to="charts"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            delay={500}
          >
            <button className="bg-white text-gray-700 py-2 px-3 rounded-xl border-2 border-white flex items-center gap-2 hover:text-white hover:bg-gray-700 hover:border-gray-700 transition ease-out duration-500">
              <AiOutlineArrowDown />
              <span>Learn More</span>
            </button>
          </Scroll>
          <Scroll
            to="how"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            delay={500}
          >
            <button className=" bg-gray-700 text-white py-2 px-3 rounded-xl border-2 border-gray-700 flex items-center gap-2 hover:text-gray-700 hover:bg-white hover:border-white transition ease-out duration-500">
              <BsRecycle />
              <span>Save the earth</span>
            </button>
          </Scroll>
        </div>
        <div className="mx-auto bg-white flex justify-center gap-3 py-5  px-5 rounded-full items-center">
          <a href="https://fridaysforfuture.org/" target="_blank">
            <img src={friday} className="w-10" alt="fridays for future logo" />
          </a>
          <a href="https://unfccc.int/" target="_blank">
            <img src={unfccc} className="w-11" alt="unfccc logo" />
          </a>
          <a href="https://www.greenpeace.org/international/" target="_blank">
            <img src={green} className="w-11" alt="greenpeace logo" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
