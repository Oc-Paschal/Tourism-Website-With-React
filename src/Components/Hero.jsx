import React from "react";
const Hero = () => {
  return (
    <div className="relative ">
      <div
        className="flex flex-col lg:flex-row items-center justify-center text-center lg:justify-between lg:text-left
       lg:px-20 min-h-screen  pt-2 lg:pt-51 pb-5 lg:pb-9 px-5 text-white md:gap-10 "
      >
        <div className="flex flex-col gap-5  md:gap-10 lg:gap-1">
          <div>
            <h3 className="font-mono text-2xl md:text-4xl lg:text-2xl"> SO, YOU WANT TO TRAVEL TO </h3>
          </div>
          <div>
            <h1 className="text-7xl md:text-9xl lg:text-8xl font-serif">SPACE</h1>
          </div>
          <div>
            <p className=" w-screen md:w-135 lg:w-120 word-break ">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
        </div>

        <div>
          <h3 className=" flex bg-white h-35 w-35 md:h-50 md:w-50 lg:h-35 lg:w-35 rounded-full mt-10 text-center items-center justify-center text-black">
            EXPLORE
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
