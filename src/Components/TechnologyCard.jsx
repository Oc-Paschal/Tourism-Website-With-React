import {useState} from "react";
import data from '../../../starter-code/data.json';
import launchVehicleLandscape from '../../../starter-code/assets/technology/image-launch-vehicle-landscape.jpg';
import launchVehiclePotrait from '../../../starter-code/assets/technology/image-launch-vehicle-portrait.jpg';
import spaceCapsuleLandscape from '../../../starter-code/assets/technology/image-space-capsule-landscape.jpg';
import spaceCapsulePotrait from '../../../starter-code/assets/technology/image-space-capsule-portrait.jpg';
import spacePortLandscape from '../../../starter-code/assets/technology/image-spaceport-landscape.jpg';
import spacePortPotrait from '../../../starter-code/assets/technology/image-spaceport-portrait.jpg';

const TechnologyCard = () => {
  const [selected,setSelected] = useState(0);
  const technologyImages = [
    {
      desktop:launchVehicleLandscape,
      mobile: launchVehiclePotrait,
    },
    {
      desktop:spaceCapsuleLandscape,
      mobile:spaceCapsulePotrait,
    },
    {
      desktop:spacePortLandscape,
      mobile:spacePortPotrait,
    },
  ];
   const technology = data.technology[selected];
  const currentImage = technologyImages[selected];
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
            <div onClick={() => setSelected(0)}   className=" h-15 w-15 bg-white rounded-full flex text-center items-center justify-center text-black cursor-pointer">
              1
            </div>
            <div onClick={() => setSelected(1)} className="h-15 w-15  rounded-full flex text-center items-center justify-center border border-gray-100 cursor-pointer ">2</div>
            <div onClick={() => setSelected(2)} className="h-15 w-15  rounded-full flex text-center items-center justify-center border border-gray-100 cursor-pointer ">3</div>
          </div>
          <div>
            <h3 className="text-gray-400">THE TERMINOLOGY...</h3>
            <h1 className="text-4xl md:text-5xl font-serif"> {technology.name} </h1>
            <p className="w-100 pt-5 text-gray-200">
             {technology.description}
            </p>
          </div>
        </div>
        <div>
         <picture>
          <source media="(min-width: 1024px)" srcSet= {currentImage.desktop}/>
          <source media="(min-width: 768px)" srcSet= {currentImage.mobile}/>
          <img src={currentImage.mobile} className="w-100 h-82"/>
         </picture>
        </div>
      </section>
    </div>
  );
};

export default TechnologyCard;
