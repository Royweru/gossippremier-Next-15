import Image from 'next/image'
import React from 'react'


export const StayConnected = () => {
    const socialmedia = [
        {
            name:"Instagram",
            imageSrc:'/instagram.png',
            fans:45000
        },
        {
            name:"Facebook",
            imageSrc:'/facebook.png',
            fans:253000
        },
        {
            name:"Youtube",
            imageSrc:'/youtube.png',
            fans:100000
        }
    ]
  return (
    <div className=' flex flex-col  md:gap-y-8 gap-y-6 items-center '>
        <h4 className=' lg:text-2xl md:text-xl text-lg text-accents-charcoalBlack'>
         Stay connected
        </h4>
        <div className=' w-full flex justify-between items-center'>
           {socialmedia.map((platform,idx)=>(
            <div 
             key={idx}
             className=' flex flex-col items-center w-full space-y-1'
            >
            <div className='relative lg:size-32 md:size-28 sm:size-16 size-12'>
             <Image
              src={platform.imageSrc}
              alt={platform.name}
              className=' bg-cover bg-center'
              fill
              />
            </div>
            <div className=' w-full flex flex-col items-center gap-y-2'>
              <h5 className=' text-base font-semibold'>
               {platform.name}
              </h5>
              <p className=' text-sm font-normal'>
                 {platform.fans.toLocaleString('en-US')} <span className=' ml-2 text-accents-electricBlur'>
                    fans
                 </span>
              </p>
            </div>
            </div>
           ))}
        </div>
        <div className='relative md:w-4/5 w-full h-[300px] sm:h-[320px] md:h-[380px] lg:h-[400px] bg-cover bg-center' style={{ backgroundImage: 'url("/skyscrappers.jpg")' }}>
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
            <div className='relative z-20 flex flex-col justify-end h-full gap-y-2 md:p-4 p-2 text-white'>
            <h3 className='text-2xl font-bold text-white'>Want to stay visible</h3>
            <p className='text-base'>
                You can advertise your job or write an article for others to see your thoughts
            </p>
            <a href="/contact">
            <span className=' italic hover:underline cursor-pointer text-base font-montserrat'>
               Contact us 
            </span>
            </a>
          
            </div>
        </div>
    </div>
  )
}
