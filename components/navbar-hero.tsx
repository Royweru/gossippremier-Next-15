"use client";

import { ExtraSheet } from "./extra-sheet";
import { MobileNavHero } from "./mobile-nav-hero";

// import { useEffect, useRef, useState } from 'react'

// Add this style to your css file
export const navigation = [
  {
    name: "Home",
    href: "/",
  },
 
  {
    name: "Health",
    href: "/category/Health",
  },
  {
    name: "Technology",
    href: "/category/Technology",
  },
  {
    name: "Sports",
    href: "/category/Sports",
  },
  {
    name: "Science",
    href: "/category/Science",
  },
  {
    name: "Business & Finance",
    href: "/category/Finance",
  },
  {
    name: "Politics",
    href: "/category/Politics",
  },
  // {
  //   name: "Breaking news",
  //   href: "/category/Breakingnews",
  // },
  {
    name: "Entertainment",
    href: "/category/Entertainment",
  },
  
];

export const NavbarHero = () => {
  return (
    
    <nav className="relative z-20  w-full ">
      <MobileNavHero />
      <div
        className=" hidden md:flex flex-row items-center h-min justify-between max-w-screen-xl mx-auto py-3 lg:px-4
         md:px-3.5 px-3"
      >
        <div className=" flex items-center lg:gap-x-4 gap-x-4">
          <ExtraSheet />
          <div className=" h-[26px] relative w-px bg-white" />
          <div className=" font-bold lg:text-4xl md:text-3xl text-3xl">
            <h3 className=" text-white ">Gossipremier</h3>
          </div>
          <div className=" flex items-center justify-center h-full pt-2 ml-2 lg:ml-4 gap-x-2 ">
            {navigation.map((item,idx)=>(
              <div
               key={idx}
               className=" px-1 cursor-pointer "
              >
                <a href={item.href}>
                <span className=" font-normal text-white text-sm hover:scale-105 hover:text-blue-600">
                  {item.name}
                 </span>
                </a>
                
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center">
          <button className=" border-2 rounded-lg border-dotted bg-transparent hover:bg-slate-50/90 text-neutral-100
           hover:text-slate-900 transition duration-300 px-6 py-2.5 cursor-pointer">
              Subscribe
          </button>
        </div>
      </div>
    </nav>
  );
};
