import { useState } from "react";
import data from "../../../starter-code/data.json";

import moonDesktop from "../assets/destination/image-moon.webp";
import moonMobile from "../assets/destination/image-moon.png";

import marsDesktop from "../assets/destination/image-mars.webp";
import marsMobile from "../assets/destination/image-mars.png";

import europaDesktop from "../assets/destination/image-europa.webp";
import europaMobile from "../assets/destination/image-europa.png";

import titanDesktop from "../assets/destination/image-titan.webp";
import titanMobile from "../assets/destination/image-titan.png";

const DestinationCard = () => {
  const [selected, setSelected] = useState(0);

  const destinationImages = [
    { desktop: moonDesktop, mobile: moonMobile },
    { desktop: marsDesktop, mobile: marsMobile },
    { desktop: europaDesktop, mobile: europaMobile },
    { desktop: titanDesktop, mobile: titanMobile },
  ];

  const destination = data.destinations[selected];
  const currentImage = destinationImages[selected];

  return (
    <div className="text-white px-6 md:px-10 lg:px-20 pt-32">
      <p className="font-mono text-lg text-center md:text-left mb-10">
        <span className="text-gray-400 mr-4">01</span>
        PICK YOUR DESTINATION
      </p>

      <div className="flex flex-col md:flex-col lg:flex-row items-center gap-10 md:gap-10 lg:gap-50">
        <div className="flex justify-center">
          <picture>
            <source media="(min-width:1024px)" srcSet={currentImage.desktop} />
            <img
              src={currentImage.mobile}
              alt={destination.name}
              className="w-40 md:w-80"
            />
          </picture>
        </div>

        <div className="flex flex-col items-center md:items-center lg:items-start text-center md:text-center lg:text-left max-w-md">
          <nav className="flex gap-6 mb-6 font-mono text-sm tracking-widest">
            {["MOON", "MARS", "EUROPA", "TITAN"].map((planet, index) => (
              <p
                key={planet}
                onClick={() => setSelected(index)}
                className={`cursor-pointer pb-2 border-b-2 ${
                  selected === index
                    ? "border-white"
                    : "border-transparent hover:border-gray-500"
                }`}
              >
                {planet}
              </p>
            ))}
          </nav>
          <h1 className="text-5xl md:text-8xl lg:text-7xl font-serif mb-4">
            {destination.name}
          </h1>
          <p className="text-gray-300 leading-relaxed mb-8">
            {destination.description}
          </p>

          <hr className="w-full border-gray-600 mb-6" />

          <div className="flex flex-col md:flex-row gap-6 md:gap-16">

            <div>
              <h3 className="text-sm text-gray-400 tracking-widest">
                AVG. DISTANCE
              </h3>
              <p className="text-2xl font-serif">
                {destination.distance}
              </p>
            </div>

            <div>
              <h3 className="text-sm text-gray-400 tracking-widest">
                EST. TRAVEL TIME
              </h3>
              <p className="text-2xl font-serif">
                {destination.travel}
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default DestinationCard;