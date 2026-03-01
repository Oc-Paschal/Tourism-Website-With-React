import React from 'react'
import backgroundimage from '../assets/background-home-desktop.jpg';
import Hero from '../Components/Hero';

const Home = () => {
  return (
    <div style={{ backgroundImage: `url(${backgroundimage})` }}
      className="bg-cover bg-center min-h-screen">
        <Hero/>
        







      </div>
  )
}

export default Home