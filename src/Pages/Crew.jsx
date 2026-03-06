import React from 'react'
import CrewCard from '../Components/CrewCard';

const Crew = () => {
  return (
    <div 
    className="
    bg-[url('../../src/assets/crew/background-crew-mobile.jpg')]
    sm:bg-[url('../src/assets/crew/background-crew-tablet.jpg)]
    md:bg-[url('../src/assets/crew/background-crew-desktop.jpg)]
    
    bg-cover bg-center min-h-screen" >
      <CrewCard/>
    </div>
  )
}

export default Crew