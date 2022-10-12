import React from "react";
import { FaBars } from "react-icons/fa";
import { useRef, useState } from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import { ImEarth } from "react-icons/im";

function Header() {
  const navRef = useRef();
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
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
    <header
      id="header"
      className={
        navbar
          ? "bg-trasparent z-10 fixed w-screen md:bg-green-primary"
          : "bg-trasparent fixed w-screen"
      }
    >
      <div className="flex justify-between md:items-center">
        <div className="pt-2 w-20 md:w-28 md:pl-5">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            delay={500}
          >
            <NavLink to="/">
              <ImEarth className="cursor-pointer w-16 h-16 bg-green-primary rounded-full"></ImEarth>
            </NavLink>
          </Link>
        </div>
        <div className="flex flex-col items-end p-7 pr-4 ">
          <div className={navbar ? "change-black" : "change-white"}>
            <FaBars
              className="w-6 h-6 cursor-pointer"
              onClick={showNav}
            ></FaBars>
          </div>
          <div>
            <nav
              className="bg-white hidden w-28 shadow-2xl rounded-xl pl-2 py-2  md:w-max md:shadow-none md:pr-4 md:bg-transparent md:block"
              ref={navRef}
            >
              <ul className=" text-gray-700 font-bold flex flex-col  gap-2 items-start md:flex-row md:text-white md:gap-7 lg:text-lg">
                <li className="cursor-pointer md:hidden">
                  <NavLink onClick={showNav} to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={showNav} to="/temperature">
                    Temperatures
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={showNav} to="/co2">
                    CO2
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={showNav} to="/methane">
                    Methane
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={showNav} to="/no2">
                    NO2
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={showNav} to="/ice">
                    Polar Ice
                  </NavLink>
                </li>
              </ul>
              {/* </div> */}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
