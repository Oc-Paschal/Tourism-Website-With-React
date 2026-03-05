import React from 'react'
import Hero from '../Components/Hero';

const Home = () => {
  return (
    <div 
      className="
      bg-[url('../../public/home/background-home-mobile.jpg')]
      sm-[url('../../public/home/background-home-tablet.jpg')]
      md-[url('../../public/home/background-home-mobile.jpg')]
      
      bg-cover bg-center min-h-screen">
        <Hero/>
        







      </div>
  )
}

export default Home