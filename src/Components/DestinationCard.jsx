import {useState} from "react";
import Marsimage from "../assets/image-mars.webp";
import data from '../../../starter-code/data.json'



const DestinationCard = () => {
  const [selected, setSelected] = useState(0);
  const destination = data.destinations[selected]
  return (
    <div className="relative top-28 text-white px-25">
      <div>
        <p className='font-mono text-xl'>
          <span className='p-4 text-gray-400'>01</span>PICK YOUR DESTINATION
        </p>
      </div>
      <div className="flex gap-50 p-10">
        <div>
          <img src={Marsimage} className="h-81 w-81" />
        </div>
        <div className='flex flex-col gap-4'>
          <div>
            <nav className=" flex gap-5">
              <p onClick={  () => setSelected(0)}>MOON</p>
              <p onClick={ () => setSelected(1)}>MARS</p>
              <p onClick={ () => setSelected(2) }>EUROPA</p>
              <p onClick={ () => setSelected(3) }>TITAN</p>
            </nav>
          </div>
          <div>
            <h1 className=' text-6xl md:text-7xl font-serif'> {destination.name} </h1>
          </div>
          <div>
            <p className="w-100">
              {destination.description}
            </p>
          </div>
          <div className='pt-5'>
            <div>
              <hr></hr>
            </div>
            <div className="flex gap-10">
            <div>
              <h3>AVG. DISTANCE</h3>
              <h1 className='text-xl md:text-2xl font-serif'> {destination.distance} </h1>
            </div>
            <div>
              <h3>EST. TRAVEL TIME</h3>
              <h1 className='text-xl md:text-2xl font-serif'> {destination.travel} </h1>
            </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default DestinationCard;
