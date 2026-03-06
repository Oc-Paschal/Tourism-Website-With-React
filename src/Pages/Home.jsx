import React from 'react'
import Hero from '../Components/Hero';

const Home = () => {
  return (
    <div 
      className="
      bg-[url('../../src/assets/home/background-home-mobile.jpg')]
      sm:bg-[url('../../src/assets/home/background-home-tablet.jpg')]
      md:bg-[url('../../src/assets/home/background-home-desktop.jpg')]
      
      bg-cover bg-center min-h-screen">
        <Hero/>


      </div>
  )
}

export default Home