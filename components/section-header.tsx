import React from 'react'

export const SectionHeader = ({
    title}:{
    title:string
}) => {
  return (
    <div className=' my-3 flex flex-col w-full gap-y-2'>
        <h2 className='lg:text-4xl text-2xl font-semibold text-gray-900'>
            {title}
             </h2>
    <div className=' h-[1.5px] bg-neutral-800/95 w-1/2'/>
    </div>
  )
}
