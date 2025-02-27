"use client"

import { MobileNavHero } from "./mobile-nav-hero"

// import { useEffect, useRef, useState } from 'react'


// Add this style to your css file
export const navigation =[
  {
    name:'Home',
    href:'#'
  },
  {
    name:'latest',
    href:'#'
  },
  {
    name:'Finance',
    href:'#'
  },
  {
    name:'Technology',
    href:'#'
  },
  {
    name:'Sports',
    href:'#'
  },
  {
    name:'Science',
    href:'#'
  },
  {
    name:'About',
    href:'#'
  },
]


export const NavbarHero =  () => {



  

  return (
    <div className="relative z-20  w-full mt-16 md:mt-14 lg:mt-12">
        <MobileNavHero />
        <div className=" hidden md:flex flex-col items-center justify-center max-w-5xl mx-auto py-3">
 
    <nav className="bg-transparent relative w-full">
      <ul className="flex items-center justify-center md:gap-x-4 lg:gap-x-6 w-full px-4 py-2">
        {navigation.map((item, index) => (
          <li key={index} className="text-neutral-100/80 shadow-sm cursor-pointer hover:text-blue-600 font-semibold text-base transition duration-300">
            {item.name}
          </li>
        ))}
      </ul>
    </nav>
  </div>
    </div>
   
   
  )
}
