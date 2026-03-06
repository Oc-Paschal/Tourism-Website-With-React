import React from "react";
import DestinationCard from "../Components/DestinationCard";

const Destinations = () => {
  return (
    <div
      className="
       bg-[url('../../src/assets/destination/background-destination-mobile.jpg')]     
       sm:bg-[url('../src/assets/destination/background-destination-tablet.jpg')]   
       md:bg-[url('../src/assets/destination/background-destination-desktop.jpg')]  
         bg-cover bg-center min-h-screen"
    >
      <DestinationCard />
    </div>
  );
};

export default Destinations;
