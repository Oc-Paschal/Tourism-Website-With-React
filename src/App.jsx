import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Destinations from './Pages/Destinations';
import Home from './Pages/Home';
import Crew from './Pages/Crew';
import Technology from './Pages/Technology';
import MainLayout from './Layouts/MainLayout';

const App = () => {
  return (
    <Routes>
      <Route element ={<MainLayout/>}>
      <Route path='/' element = {<Home/>}/>
      <Route path='/destinations' element = {<Destinations/>}/>
      <Route path='/crew' element = {<Crew/>}/>
      <Route path='/technology' element = {<Technology/>}/>
      
      </Route>
    </Routes>
  )
}

export default App