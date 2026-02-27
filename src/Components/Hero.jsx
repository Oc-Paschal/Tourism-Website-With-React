import React from "react";

const Hero = () => {
  return (
    <div>
    <div className="flex justify-between pt-31 pb-9 px-20 text-white">
      <div>
        <div>
          <h3 className="font-mono text-2xl"> SO, YOU WANT TO TRAVEL TO </h3>
        </div>
        <div>
          <h1 className="text-7xl md:text-8xl font-serif">SPACE</h1>
        </div>
        <div>
          <p className=" w-120 word-break">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
      </div>
 
      <div>

        <h3 className=" flex bg-white h-35 w-35 rounded-full mt-10 text-center items-center justify-center text-black"> EXPLORE </h3>
      </div>
      
      </div>
    </div>
  );
};

export default Hero;
