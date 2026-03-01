import React from "react";
import Marsimage from "../assets/image-mars.webp";
const DestinationCard = () => {
  return (
    <div className="relative top-28 text-white px-25">
      <div>
        <p className='font-mono text-xl'>
          <span className='p-4'>01</span>PICK YOUR DESTINATION
        </p>
      </div>
      <div className="flex gap-50 p-10">
        <div>
          <img src={Marsimage} className="h-81 w-81" />
        </div>
        <div className='flex flex-col gap-4'>
          <div>
            <nav className=" flex gap-5">
              <a href="#">MOON</a>
              <a href="#">MARS</a>
              <a href="#">EUROPA</a>
              <a href="#">TITAN</a>
            </nav>
          </div>
          <div>
            <h1 className=' text-6xl md:text-7xl font-serif'>MARS</h1>
          </div>
          <div>
            <p className="w-100">
              Don’t forget to pack your hiking boots. You’ll need them to tackle
              Olympus Mons, the tallest planetary mountain in our solar system.
              It’s two and a half times the size of Everest!
            </p>
          </div>
          <div className='pt-5'>
            <div>
              <hr></hr>
            </div>
            <div className="flex gap-10">
            <div>
              <h3>AVG. DISTANCE</h3>
              <h1 className='text-xl md:text-2xl font-serif'>225 MIL.KM</h1>
            </div>
            <div>
              <h3>EST. TRAVEL TIME</h3>
              <h1 className='text-xl md:text-2xl font-serif'>9 MONTHS</h1>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
