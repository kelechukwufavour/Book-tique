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
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-white  text-[90px]  font-bold mb-10">
            Welcome to <br />
            Booktique
          </h1>
          <p className=" text-white text-[24px]">
            Buy your books in an affordable price ,and it will be delivered to
            you.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
