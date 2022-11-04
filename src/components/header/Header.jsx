import React from "react";
import { FaBars, FaHome, FaTemperatureHigh, FaSmog } from "react-icons/fa";
import { AiFillCloud } from "react-icons/ai"
import { SiMoleculer } from "react-icons/si"
import { GiIceberg } from "react-icons/gi"
import { useRef, useState } from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import { IoEarth } from "react-icons/io5"


function Header() {
  const navRef = useRef();
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 300) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const showNav = (e) => {
    navRef.current.classList.toggle("hidden");
  };

  return (
    <header id="header" className={"bg-trasparent z-10 fixed w-screen"}>
      <div className="flex justify-between ">
        <div className="pt-2 w-20 md:w-28 md:pl-7">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            delay={500}
          >
            <NavLink to="/">
              <IoEarth className="cursor-pointer w-16 h-16 mt-1 ml-2 bg-green-primary rounded-full md:ml-0"></IoEarth>
            </NavLink>
          </Link>
        </div>
        <div className="flex flex-col items-end p-7 pr-4 ">
          <div className={navbar ? "change-black" : "change-white"}>
            <FaBars
              className="w-6 h-6 cursor-pointer md:w-8 md:h-8"
              onClick={showNav}
            ></FaBars>
          </div>
          <div>
            <nav
              className="bg-white hidden w-max shadow-2xl rounded-xl px-6 py-4  md:p-4"
              ref={navRef}
            >
              <ul className=" text-gray-700 font-bold flex flex-col gap-4 items-start md:gap-7">
                <li className="list">
                  <FaHome ></FaHome>
                  <NavLink onClick={showNav} to="/">
                    Home
                  </NavLink>
                </li>
                <li className="list">
                  <FaTemperatureHigh></FaTemperatureHigh>
                  <NavLink onClick={showNav} to="/render/temperature">
                    Temperatures
                  </NavLink>
                </li>
                <li className="list">
                <AiFillCloud />
                  <NavLink onClick={showNav} to="/render/co2">
                    CO2
                  </NavLink>
                </li>
                <li className="list">
                  <FaSmog />
                  <NavLink onClick={showNav} to="/render/methane">
                    Methane
                  </NavLink>
                </li>
                <li className="list">
                  <SiMoleculer/>
                  <NavLink onClick={showNav} to="/render/nitrous-oxide">
                    NO2
                  </NavLink>
                </li>
                <li className="list">
                  <GiIceberg />
                  <NavLink onClick={showNav} to="/render/arctic">
                    Polar Ice
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
