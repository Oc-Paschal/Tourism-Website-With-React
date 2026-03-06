import React from "react";
import EngineerImage from '../assets/crew/image-anousheh-ansari.webp'

const CrewCard = () => {
  return (
    <div className=" relative text-white top-30 px-15 ">
      <div className="font-mono text-xl pb-7">
        <p>
          <span className="text-gray-400 p-3">02</span>MEET YOUR CREW
        </p>
      </div>
      <section className="flex gap-50">
        <div className="mt-16">
          <div className="text-xl text-gray-400 md:text-2xl font-serif">
            <h3>FLIGHT ENGINEER</h3>
          </div>
          <div className="text-4xl md:text-5xl font-serif pb-3">
            <h1>ANOUSHEH ANSARI</h1>
          </div>
          <div className="w-100">
            <p>
              Anousheh Ansari is an Iranian American engineer and co-founder of
              Prodea Systems. Ansari was the fourth self-funded space tourist,
              the first self-funded woman to fly to the ISS, and the first
              Iranian in space.
            </p>
          </div>
        </div>
        <div>
            <img src={EngineerImage} alt="Engineer Image" className="w-89"/>
        </div>
      </section>
    </div>
  );
};

export default CrewCard;
