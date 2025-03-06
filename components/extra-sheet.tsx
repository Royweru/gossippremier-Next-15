import React from 'react'
import { Sheet, SheetTrigger } from './ui/sheet'
import { MenuIcon } from 'lucide-react'

export const ExtraSheet = () => {
  return (
    <Sheet>
        <SheetTrigger>
            <MenuIcon className='lg:size-8 size-7 text-neutral-50'/>
        </SheetTrigger>
    </Sheet>
  )
}
