import { useState } from "react";
import data from "../../../starter-code/data.json";

import commander from "../assets/crew/image-douglas-hurley.webp";
import specialist from "../assets/crew/image-mark-shuttleworth.webp";
import pilot from "../assets/crew/image-victor-glover.webp";
import engineer from "../assets/crew/image-anousheh-ansari.webp";

const CrewCard = () => {
  const [selected, setSelected] = useState(0);

  const crewImages = [commander, specialist, pilot, engineer];

  const crew = data.crew[selected];
  const currentImage = crewImages[selected];

  return (
    <div className="text-white px-6 md:px-27 lg:px-20 pt-32">
      <p className="font-mono text-lg text-center md:text-center lg:text-left mb-10">
        <span className="text-gray-400 mr-4">02</span>
        MEET YOUR CREW
      </p>

      <section className="flex flex-col md:flex-col lg:flex-row items-center gap-12 md:gap-12 lg:gap-30">
        <div className="flex flex-col items-center md:items-center lg:items-start text-center md:text-center lg:text-left max-w-md">
          <h3 className="text-xl md:text-4xl lg:text-2xl text-gray-400 font-serif mb-2">
            {crew.role}
          </h3>
          <h1 className="text-4xl md:text-6xl lg:text-6xl font-serif mb-4">{crew.name}</h1>
          <p className="text-gray-300 leading-relaxed mb-8  ">{crew.bio}</p>
          <div className="flex gap-4 mt-4">
            {crewImages.map((_, index) => (
              <div
                key={index}
                onClick={() => setSelected(index)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  selected === index
                    ? "bg-white"
                    : "bg-gray-500 hover:bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <img src={currentImage} alt={crew.name} className="w-56 md:w-96" />
        </div>
      </section>
    </div>
  );
};

export default CrewCard;
