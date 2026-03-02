import React from 'react'
import TechnologyCard from '../Components/TechnologyCard'
import backgroundImage from '../assets/background-technology-desktop.jpg'

const Technology = () => {
  return (
    <div style={{backgroundImage:`url(${backgroundImage})` }} 
    className='bg-cover bg-center min-h-screen ' >
      <TechnologyCard/>

    </div>
  )
}

export default Technology