import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { MenuIcon } from 'lucide-react'
import Link from 'next/link'
const NavigationItems = [
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
    name: "Politics",
    href: "/category/Politics",
  },

  {
    name: "Entertainment",
    href: "/category/Entertainment",
  },
  {
    name: "Breaking news",
    href: "/category/Breakingnews",
  },
    {
    name: "Business & Finance",
    href: "/category/Finance",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];
export const ExtraSheet = () => {
  return (
    <Sheet>
        <SheetTrigger>
        <MenuIcon className=' size-8  text-neutral-100 cursor-pointer font-bold'/>
        </SheetTrigger>
        <SheetContent side={"left"}>
           <div className=' h-full flex flex-col gap-y-4'>
                  {NavigationItems.map((item,idx)=>(

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
  )
}
