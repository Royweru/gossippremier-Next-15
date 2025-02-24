import { MenuIcon } from 'lucide-react'
import React from 'react'

export const MobileNavHero = () => {
  return (
    <div className='md:hidden relative w-full flex justity-end items-center'>
      
      <MenuIcon className=' size-7 text-neutral-900 cursor-pointer'/>
    </div>
  )
}
