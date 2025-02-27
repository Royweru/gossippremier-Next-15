import { MenuIcon } from 'lucide-react'
import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { navigation } from './navbar-hero'
import Link from 'next/link'

export const MobileNavHero = () => {

  return (
    <div className='md:hidden relative w-full flex justity-end items-center'>
      <Sheet>
        <SheetTrigger>
        <MenuIcon className=' size-7 text-neutral-100 cursor-pointer'/>
        </SheetTrigger>
        <SheetContent side={"left"}>
           <div className=' h-full flex flex-col gap-y-4'>
                  {navigation.map((item,idx)=>(

                    <div
                     key={idx}
                     className=' w-full py-1 hover:bg-neutral-500/80 cursor-pointer font-semibold text-center'
                    >
                      <Link href={item.href}>
                      {item.name}
                      </Link>
                         
                    </div>
                  ))}
           </div>
        </SheetContent>
      </Sheet>

    </div>
  )
}
