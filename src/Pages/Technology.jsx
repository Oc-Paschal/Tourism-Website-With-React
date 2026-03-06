import React from 'react'
import TechnologyCard from '../Components/TechnologyCard'

const Technology = () => {
  return (
    <div 
    className="
    bg-[url('../../src/assets/technology/background-technology-mobile.jpg')]
    sm:bg-[url('../src/assets/technology/background-technology-tablet.jpg')]
    md:bg-[url('../src/assets/technology/background-technology-desktop.jpg')]
    bg-cover bg-center min-h-screen " >
      <TechnologyCard/>

    </div>
  )
}

export default Technology