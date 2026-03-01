import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full z-50">
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
            <Link to='/'><span className="font-extrabold">00</span> HOME</Link> 
            <Link to="/destination"> <span className="font-extrabold ">01</span> DESTINATION </Link>
            <Link to="/crew"> <span className="font-extrabold">02</span> CREW </Link>
            <Link to="/technology"><span className="font-extrabold">03</span> TECHNOLOGY</Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
