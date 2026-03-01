import React from "react";
import DestinationCard from "../Components/DestinationCard";
import DestinationimIage from "../assets/background-destination-desktop.jpg";

const Destinations = () => {
  return (
    <div
      style={{ backgroundImage: `url(${DestinationimIage})` }}
      className="bg-cover bg-center min-h-screen"
    >
      <DestinationCard />
    </div>
  );
};

export default Destinations;
