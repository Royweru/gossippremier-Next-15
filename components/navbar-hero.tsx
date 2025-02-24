"use client"

import { MobileNavHero } from "./mobile-nav-hero"

// import { useEffect, useRef, useState } from 'react'


// Add this style to your css file

export const NavbarHero =  () => {



  const navigation =[
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


  return (
    <div>
        <MobileNavHero />
        <div className="relative z-20 hidden md:flex flex-col items-center justify-center max-w-5xl mx-auto py-3">
    <div className="w-full relative flex items-center justify-center">
      <h3 className="text-4xl lg:text-5xl font-bold text-neutral-900">
        Gossippremier
      </h3>
    </div>
    <nav className="bg-transparent relative w-full">
      <ul className="flex items-center justify-center md:gap-x-4 lg:gap-x-6 w-full px-4 py-2">
        {navigation.map((item, index) => (
          <li key={index} className="text-neutral-900/80 shadow-sm cursor-pointer hover:text-blue-600 font-semibold text-base transition duration-300">
            {item.name}
          </li>
        ))}
      </ul>
    </nav>
  </div>
    </div>
   
   
  )
}
