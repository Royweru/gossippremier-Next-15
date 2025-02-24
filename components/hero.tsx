import React from "react";
import { NavbarHero } from "./navbar-hero";

export const Hero = () => {
  return (
    <div className=" space-y-4">
      
      <div
      className="relative h-screen w-full bg-cover bg-center rounded-xl pt-2 lg:pt-4"
      style={{ backgroundImage: "url(/hero.webp)" }}
    >
      <NavbarHero />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from"></div>

      {/* Content */}
      <div className="relative z-10 flex lg:w-1/2 w-full   h-full flex-col items-start justify-center  text-white pl-4 lg:pl-12 pt-11">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Stay up to date with the latest updates
        </h1>
        <p className="text-base md:text-lg mb-6 text-neutral-800 font-montserrat max-w-md font-semibold leading-relaxed">
          Explore cutting-edge innovations that shape our world
        </p>
        <button className="bg-purple-400 hover:bg-purple-500 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
          Explore Now
        </button>

        {/* Decorative Elements */}
        `
      </div>
       <div className="absolute inset-0 pointer-events-none">
    {/* Bubble 1: Electric Blue, Floating Up */}
    <div className="absolute w-10 h-10 bg-blue-400/30 rounded-full top-20 left-20 animate-float-up-slow"></div>
    {/* Bubble 2: Coral Pink, Pulsing */}
    <div className="absolute w-6 h-6 bg-pink-500/40 rounded-full top-40 right-40 animate-pulse"></div>
    {/* Bubble 3: Lime Green, Bouncing */}
    <div className="absolute w-12 h-12 bg-green-500/30 rounded-full bottom-20 left-60 animate-bounce-slow"></div>
    {/* Bubble 4: Electric Blue Gradient, Rotating */}
    <div className="absolute w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full top-60 right-20 animate-rotate-slow"></div>
    {/* Bubble 5: Coral Pink Gradient, Floating Up */}
    <div className="absolute w-14 h-14 bg-gradient-to-r from-pink-500 to-pink-700/50 rounded-full bottom-40 left-40 animate-float-up"></div>
  </div>
  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-green-500/10 animate-pulse-slow"></div>
    </div>
    </div>
   
  );
};
