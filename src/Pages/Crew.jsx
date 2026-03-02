import React from 'react'
import CrewCard from '../Components/CrewCard';
import BackgroundImage from '../assets/background-crew-desktop.jpg'

const Crew = () => {
  return (
    <div style={{backgroundImage: `url(${BackgroundImage})`}}
    className='bg-cover bg-center min-h-screen' >
      <CrewCard/>
    </div>
  )
}

export default Crew