/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryDetailsClient = ({posts}:{
    posts:any[]
}) => {
  return (
    <div className=" w-full space-y-2">
    <div className=" overflow-hidden border-b border-gray-900 flex flex-col w-full  last:border-0 relative sm:flex-row">
        <div className='sm:w-1/2 md:w-1/3 w-full'>
        <div className="relative sm:h-full h-[300px] w-full rounded-xl">
        <Image
          src="/culture1.jpg"
          alt="Palm trees at sunset"
          fill
          className="transition-transform  rounded-xl
          duration-300 hover:scale-105 bg-cover bg-center "
        />
      </div>
        </div>
     
      <div className="px-4 relative sm:w-1/2 md:w-2/3 w-full py-3">
        <div className="uppercase tracking-wide text-sm text-pink-500 font-semibold mb-2">
         {posts[0]?.category?.title}
        </div>
        <Link href="/lifestyle/uk-outdoor-restaurants" className="block">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 hover:text-pink-500 transition-colors">
            The UK&apos;s Best Outdoor Restaurants and Terraces
          </h2>
        </Link>
        <p className="mt-3 text-gray-600 md:text-sm text-xs font-montserrat">
          With the promise of warm weather and sunshine (finally!) on the
          horizon, travel editor Delilah Khomo has the inside track on the
          best outdoor dining spots across the UK...
        </p>
        <div className="mt-4 flex items-center text-sm text-gray-500">
          <span>By {posts[0]?.author?.name}</span>
          <span className="mx-2">•</span>
          <span>2 Comments</span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CategoryDetailsClient