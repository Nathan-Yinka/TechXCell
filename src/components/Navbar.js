import React, { useState } from "react";
import Logo from "../assets/IMG_8764.PNG";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const closeNavbar = () => {
    setNavbar(false);
  };

  const handleClick = () => {
    setNavbar(!navbar);
  };

  return (
    <div className="sticky z-40 inset-x-0 top-0 nav-container flex justify-center bg-[rgba(22,24,35,0.7)] backdrop-blur-lg border-b">
      <div className="max-w-[85%] w-[100%] flex justify-between items-center py-7 lg:py-4 text-white">
        <Link to="home" smooth={true} duration={500}>
          <img src={Logo} alt="logo" className="w-[150px] cursor-pointer" />
        </Link>
        <div>
          <div onClick={handleClick} className="lg:hidden text-2xl">
            {navbar ? <IoCloseSharp /> : <GiHamburgerMenu />}
          </div>
          <ul
            className={`lg:flex items-center lg:space-x-12 ${
              navbar
                ? "absolute z-50 right-0 top-[5.6rem] max-w-[300px] text-lg w-full bg-[rgba(22,24,35,0.5)] backdrop-blur-lg divide-y-2 p-10 flex flex-col items-baseline mt-1"
                : "hidden"
            }`}
          >
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="w-full lg:w-auto cursor-pointer"
              onClick={closeNavbar}
            >
              <li className="py-5 w-full text-lg hover:text-red-400">Home</li>
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="w-full lg:w-auto cursor-pointer"
              onClick={closeNavbar}
            >
              <li className="py-5 w-full text-lg hover:text-red-400">
                About Us
              </li>
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="w-full lg:w-auto cursor-pointer"
              onClick={closeNavbar}
            >
              <li className="py-5 w-full text-lg hover:text-red-400">
                Contact Us
              </li>
            </Link>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="w-full lg:w-auto cursor-pointer"
              onClick={closeNavbar}
            >
              <li className="py-5 w-full text-lg hover:text-red-400">
                Services
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
