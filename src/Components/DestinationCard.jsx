import { useState } from "react";
import data from "../../../starter-code/data.json";
import moonDesktop from "../assets/destination/image-moon.webp";
import moonMobile from "../assets/destination/image-moon.png";
import marsDesktop from "../assets/destination/image-mars.webp";
import marsMobile from "../assets/destination/image-mars.png";
import europaDesktop from "../assets/destination/image-europa.webp";
import europaMobie from "../assets/destination/image-europa.png";
import titanDesktop from "../assets/destination/image-titan.webp";
import titanMobile from "../assets/destination/image-titan.png";

const DestinationCard = () => {
  const [selected, setSelected] = useState(0);

  const destinationImages = [
    {
      desktop: moonDesktop,
      mobile: moonMobile,
    },
    {
      desktop: marsDesktop,
      mobile: marsMobile,
    },
    {
      desktop: europaDesktop,
      mobile: europaMobie,
    },
    {
      desktop: titanDesktop,
      mobile: titanMobile,
    },
  ];
  const destination = data.destinations[selected];
  const currentImage = destinationImages[selected];
  return (
    <div className="relative top-28 text-white px-25">
      <div>
        <p className="font-mono text-xl">
          <span className="p-4 text-gray-400">01</span>PICK YOUR DESTINATION
        </p>
      </div>
      <div className="flex gap-50 p-10">
        <div>
          <picture>
            <source media="(min-width: 1024px)" srcSet={currentImage.desktop} />
            <source media="(min-width: 768px)" srcSet={currentImage.mobile} />
            <img src={currentImage.mobile}
            className="h-81 w-81" alt={destination.name} />
          </picture>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <nav className=" flex gap-5">
              <p onClick={() => setSelected(0)} className="cursor-pointer">
                MOON
              </p>
              <p onClick={() => setSelected(1)} className="cursor-pointer">
                MARS
              </p>
              <p onClick={() => setSelected(2)} className="cursor-pointer">
                EUROPA
              </p>
              <p onClick={() => setSelected(3)} className="cursor-pointer">
                TITAN
              </p>
            </nav>
          </div>
          <div>
            <h1 className=" text-6xl md:text-7xl font-serif">
              {" "}
              {destination.name}{" "}
            </h1>
          </div>
          <div>
            <p className="w-100">{destination.description}</p>
          </div>
          <div className="pt-5">
            <div>
              <hr></hr>
            </div>
            <div className="flex gap-10">
              <div>
                <h3>AVG. DISTANCE</h3>
                <h1 className="text-xl md:text-2xl font-serif">
                  {" "}
                  {destination.distance}{" "}
                </h1>
              </div>
              <div>
                <h3>EST. TRAVEL TIME</h3>
                <h1 className="text-xl md:text-2xl font-serif">
                  {" "}
                  {destination.travel}{" "}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
