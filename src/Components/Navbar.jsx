import React from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div>
      <div className=" flex  justify-between pt-6">
        <div>
          <img
            src={logo}
            alt="Website Logo"
            className="bg-white rounded-4xl "
          />
        </div>

        <div className=" flex hidden md:block flex-1  h-px bg-white/30 mx-6 mt-7"></div>

        <div className="bg-white/5 backdrop-blur-md px-10 py-6">
          <nav className="text-white flex gap-9 tracking-widest text-sm">
            <a href=""> <span className="font-extrabold">00</span> HOME</a>
            <a href=""> <span className="font-extrabold ">01</span> DESTINATION</a>
            <a href=""> <span className="font-extrabold">02</span> CREW </a>
            <a href=""><span className="font-extrabold">03</span> TECHNOLOGY</a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
