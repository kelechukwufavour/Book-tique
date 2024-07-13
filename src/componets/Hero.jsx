import React from "react";

const Hero = () => {
  return (
    <div className="h-[calc(100vh-120px)] w-full relative">
      <img
        src="/hero.png"
        alt="Hero background"
        className="absolute inset-0 -z-10 w-full h-full object-cover"
      />
      <div className="w-full h-full p-3 bg-[#6A5ACD80]/50 z-10 flex items-center justify-center">
        <div className="flex justify-center items-center flex-col text-center">
          <h1 className="text-white text-[40px] md:text-[60px] lg:text-[90px] font-bold mb-4 md:mb-6 lg:mb-10">
            Welcome to <br />
            Booktique
          </h1>
          <p className="text-white text-[16px] md:text-[20px] lg:text-[24px] px-2 md:px-4">
            Buy your books at an affordable price, and they will be delivered to you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;