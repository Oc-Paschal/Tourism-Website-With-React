import { useState } from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import menuIcon from "../../shared/icon-hamburger.svg";
import closeIcon from "../../shared/icon-close.svg";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-6 md:px-10 pt-6">
        <img src={logo} alt="Website Logo" />
        <div className="md:hidden">
          <img
            src={openMenu ? closeIcon : menuIcon}
            alt="menu icon"
            className="w-7 cursor-pointer"
            onClick={() => setOpenMenu(!openMenu)}
          />
        </div>
        <div className="hidden md:hidden lg:flex flex-1 h-px bg-white/30 mx-8"></div>
        <nav className="hidden md:flex bg-white/5 backdrop-blur-md px-10 py-6 text-white gap-10 tracking-widest text-sm">
          <Link to="/">
            <span className="font-bold mr-2">00</span>HOME
          </Link>

          <Link to="/destinations">
            <span className="font-bold mr-2">01</span>DESTINATION
          </Link>

          <Link to="/crew">
            <span className="font-bold mr-2">02</span>CREW
          </Link>

          <Link to="/technology">
            <span className="font-bold mr-2">03</span>TECHNOLOGY
          </Link>
        </nav>
      </div>
      {openMenu && (
        <div className="absolute right-0 top-0 h-screen w-2/3 bg-white/10 backdrop-blur-lg p-10 md:hidden">
          <nav className="flex flex-col gap-8 text-white tracking-widest">
            <Link to="/" onClick={() => setOpenMenu(false)}>
              <span className="font-bold mr-2">00</span>HOME
            </Link>

            <Link to="/destinations" onClick={() => setOpenMenu(false)}>
              <span className="font-bold mr-2">01</span>DESTINATION
            </Link>

            <Link to="/crew" onClick={() => setOpenMenu(false)}>
              <span className="font-bold mr-2">02</span>CREW
            </Link>

            <Link to="/technology" onClick={() => setOpenMenu(false)}>
              <span className="font-bold mr-2">03</span>TECHNOLOGY
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
