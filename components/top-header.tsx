
import { HeadphonesIcon } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'

export const TopHeader = () => {
  return (
    <div className={`w-full left-0 transition-all duration-300 ${
      typeof window !== 'undefined' && window.scrollY > 50 
      ? 'bg-black/80 backdrop-blur-sm' 
      : 'bg-accents-charcoalBlack'
    } text-white fixed top-0 z-50`}>
        <div className='max-w-5xl mx-auto py-3 flex items-center justify-between'>
         <h4 className='text-xl font-semibold'>Gossippremier
         </h4>
         <div className='flex gap-x-4 items-center'>
            <a href="/podcast">
                <button className='py-2 bg-transparent hover:bg-neutral-400/90 cursor-pointer border-none text-white font-semibold px-3.5 flex items-center justify-center gap-x-2'>
                     <HeadphonesIcon className='size-4 text-white font-bold'/>   
                     <span className='italic'>Listen</span>    
                </button>
            </a>
            <a href="">
                <button className='py-2 bg-transparent hover:bg-neutral-400/90 cursor-pointer border-none text-white font-semibold px-3.5 flex items-center justify-center gap-x-2'>
                     <span className='italic'>Watch</span>    
                </button>
            </a>
            <Button variant={ "secondary"}
             className='font-semibold'
             size={"lg"}
            >
             Sign in 
            </Button>
         </div>
        </div>
    </div>
  )
}
