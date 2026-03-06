import {useState} from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import menuIcon from '../../shared/icon-hamburger.svg';
import closeIcon from '../../shared/icon-close.svg';

const Navbar = () => {
  const [openMenu,setOpenMenu] = useState(false);
  return (
    <div className="absolute top-0 left-0 w-full z-50">
      <div className=" flex  justify-between  pt-6">
        <div>
          <img
            src={logo}
            alt="Website Logo"
            className="bg-white rounded-4xl "
          />
        </div>
        <div className="md:hidden">
          <img src={openMenu? closeIcon: menuIcon}
          alt="menu icon"
          className="w-8 cursor-pointer"
          onClick={() => setOpenMenu(!openMenu)}/>
         </div>

        <div className=" flex hidden md:block flex-1  h-px bg-white/30 mx-6 mt-7"></div>

        <div className={`bg-white/5 backdrop-blur-md px-10 py-6 ${openMenu? 'block' : 'hidden'} md:block`}>
         
          <nav className="text-white flex flex-col md:flex-row gap-9 tracking-widest text-sm">
            <Link to='/'><span className="font-extrabold">00</span> HOME</Link> 
            <Link to="/Destinations"> <span className="font-extrabold ">01</span> DESTINATION </Link>
            <Link to="/crew"> <span className="font-extrabold">02</span> CREW </Link>
            <Link to="/technology"><span className="font-extrabold">03</span> TECHNOLOGY</Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
