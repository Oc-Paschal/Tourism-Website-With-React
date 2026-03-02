import React from "react";
import ImageVehicle from "../assets/image-launch-vehicle-portrait.jpg";

const TechnologyCard = () => {
  return (
    <div className="relative text-white top-30 pl-10 ">
      <div className="pl-12 font-mono text-xl">
        <p>
          <span className="text-gray-400 p-3">03</span>SPACE LAUNCH 101
        </p>
      </div>
      <section className="px-18 pt-18 flex gap-30">
        <div className="flex gap-10">
          <div className="flex flex-col gap-3">
            <div className="h-15 w-15 bg-white rounded-full flex text-center items-center justify-center text-black cursor-pointer">
              1
            </div>
            <div  className="h-15 w-15  rounded-full flex text-center items-center justify-center border border-gray-100 cursor-pointer ">2</div>
            <div  className="h-15 w-15  rounded-full flex text-center items-center justify-center border border-gray-100 cursor-pointer ">3</div>
          </div>
          <div>
            <h3 className="text-gray-400">THE TERMINOLOGY...</h3>
            <h1 className="text-4xl md:text-5xl font-serif">LAUNCH VEHICLE</h1>
            <p className="w-100 pt-5 text-gray-200">
              {" "}
              A launch vehicle or carrier rocket is a rocket-propelled vehicle
              used to carry a payload from Earth's surface to space, usually to
              Earth orbit or beyond. Our WEB-X carrier rocket is the most
              powerful in operation. Standing 150 metres tall, it's quite an
              awe-inspiring sight on the launch pad!
            </p>
          </div>
        </div>
        <div>
          <img src={ImageVehicle} alt="ImageVehicle" className="w-100 h-82 " />
        </div>
      </section>
    </div>
  );
};

export default TechnologyCard;
