import { useState } from "react";
import data from "../../../starter-code/data.json";

import launchVehicleLandscape from "../assets/technology/image-launch-vehicle-landscape.jpg";
import launchVehiclePortrait from "../assets/technology/image-launch-vehicle-portrait.jpg";

import spaceCapsuleLandscape from "../assets/technology/image-space-capsule-landscape.jpg";
import spaceCapsulePortrait from "../assets/technology/image-space-capsule-portrait.jpg";

import spacePortLandscape from "../assets/technology/image-spaceport-landscape.jpg";
import spacePortPortrait from "../assets/technology/image-spaceport-portrait.jpg";

const TechnologyCard = () => {
  const [selected, setSelected] = useState(0);

  const technologyImages = [
    {
      landscape: launchVehicleLandscape,
      portrait: launchVehiclePortrait,
    },
    {
      landscape: spaceCapsuleLandscape,
      portrait: spaceCapsulePortrait,
    },
    {
      landscape: spacePortLandscape,
      portrait: spacePortPortrait,
    },
  ];

  const technology = data.technology[selected];
  const currentImage = technologyImages[selected];

  return (
    <div className="text-white pt-32">

      {/* Title */}
      <p className="font-mono text-lg text-center md:text-left px-6 md:px-20 mb-10">
        <span className="text-gray-400 mr-4">03</span>
        SPACE LAUNCH 101
      </p>

      {/* Image (Top on Mobile) */}
      <div className="w-full flex justify-center mb-10">
        <picture>
          <source
            media="(min-width:1024px)"
            srcSet={currentImage.portrait}
          />
          <img
            src={currentImage.landscape}
            alt={technology.name}
            className="w-full md:w-96"
          />
        </picture>
      </div>

      {/* Content Section */}
      <section className="flex flex-col md:flex-row items-center gap-10 px-6 md:px-20">

        {/* Number Buttons */}
        <div className="flex md:flex-col gap-4">

          {[1, 2, 3].map((num, index) => (
            <div
              key={num}
              onClick={() => setSelected(index)}
              className={`h-12 w-12 md:h-16 md:w-16 rounded-full flex items-center justify-center cursor-pointer font-serif text-lg
                ${
                  selected === index
                    ? "bg-white text-black"
                    : "border border-gray-400 hover:border-white"
                }`}
            >
              {num}
            </div>
          ))}

        </div>

        {/* Text */}
        <div className="text-center md:text-left max-w-md">

          <h3 className="text-gray-400 tracking-widest mb-2">
            THE TERMINOLOGY…
          </h3>

          <h1 className="text-4xl md:text-5xl font-serif mb-4">
            {technology.name}
          </h1>

          <p className="text-gray-300 leading-relaxed">
            {technology.description}
          </p>

        </div>

      </section>

    </div>
  );
};

export default TechnologyCard;