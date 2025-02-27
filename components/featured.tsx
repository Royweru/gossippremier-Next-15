import { urlFor } from '@/app/(routes)/blogs/[slug]/page'
import { PostType } from '@/types'
import Image from 'next/image'
import React from 'react'
import { SectionHeader } from './section-header'

export const FeaturedStories = ({posts}:{
    posts:PostType[]
}) => {
    const postImageUrl1 = posts[0].mainImage
    ? urlFor(posts[0].mainImage)?.url()
    : null;
    const postImageUrl2 = posts[1].mainImage
    ? urlFor(posts[1].mainImage)?.url()
    : null;
    const postImageUrl3 = posts[2].mainImage
    ? urlFor(posts[2].mainImage)?.url()
    : null;
    const postImageUrl4 = posts[3].mainImage
    ? urlFor(posts[3].mainImage)?.url()
    : null;
  return (
    <div >
      <SectionHeader title='Featured posts'/>
     <div className="grid md:grid-cols-2 gap-6 mb-12">
    <div className="relative  rounded-3xl overflow-hidden">
        {posts[0].mainImage && (
          <>
            <img
              src={postImageUrl1||"/image.png" }
              alt={ posts[0].title}      
               className="object-cover w-full h-full absolute -z-10"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20" />
          </>
        )}
        
        <div className="relative p-8 h-full flex flex-col justify-end text-white">
          <span className="text-sm bg-zinc-700/90 text-white shadow-sm px-3 py-1 rounded-full w-fit">
            {posts[0].category.title}
          </span>
          <h1 className="text-4xl font-bold mt-2 mb-4">
            {posts[0].title || 'Want a Career in Technology?'}
          </h1>
          <time className=" text-lg">
                {new Date(posts[1].publishedAt).toLocaleDateString('en-us',{
                  year:'numeric',
                  month:'long',
                  day:'numeric'
                }
                )}
              </time>
        </div>
      </div>
      
      <div className="space-y-4">

          <div className="  flex h-32 items-center justify-between w-full ">
            <div className=' h-32 w-full relative rounded-2xl'>
            {posts[1]?.mainImage && (
              <>
                <Image
                  src={postImageUrl2||"/image.png" }
                  alt={posts[1].title}
                  fill
                  className="object-cover rounded-2xl"
                />
               
              </>
            )}
            </div>
         
            <div className="relative p-1.5 h-full flex w-full flex-col justify-between  text-gray-900">
            <span className="text-sm bg-sky-500/80 shadow-sm px-3 py-1 rounded-full text-white w-fit">
           {posts[1]?.category?.title || 'Technology'}
          </span>
          <a href={`/blogs/${posts[1].currentSlug}`}>
          <h2 className="md:text-base text-sm font-semibold hover:underline cursor-pointer">
                {posts[1]?.title || '15 Shocking Elon Musk Tweets'}
              </h2>
          </a>
            
              <time className="text-gray-500 text-sm italic">
                {new Date(posts[1].publishedAt).toLocaleDateString('en-us',{
                  year:'numeric',
                  month:'long',
                  day:'numeric'
                }
                )}
              </time>
            </div>
          </div>

          <div className="  flex h-32 items-center justify-between w-full ">
            <div className=' h-32 w-full relative rounded-2xl'>
            {posts[2]?.mainImage && (
              <>
                <Image
                  src={postImageUrl3||"/image.png" }
                  alt={posts[2].title}
                  fill
                  className="object-cover rounded-2xl"
                />
               
              </>
            )}
            </div>
         
            <div className="relative p-1.5 h-full w-full flex flex-col justify-between text-gray-900">
            <span className="text-sm bg-pink-600/75 px-3 text-white py-1 rounded-full w-fit">
            {posts[2]?.category?.title || 'Technology'}
          </span>
          <a href={ `/blogs/${posts[2].currentSlug}`}>
          <h2 className="md:text-base text-sm font-semibold cursor-pointer hover:underline ">
                {posts[2]?.title || '15 Shocking Elon Musk Tweets'}
              </h2>
          </a>
             
              <time className="text-gray-500 text-sm italic">
                {new Date(posts[1].publishedAt).toLocaleDateString('en-us',{
                  year:'numeric',
                  month:'long',
                  day:'numeric'
                }
                )}
              </time>
            </div>
          </div>

          <div className="  flex h-32 items-center justify-between w-full ">
            <div className=' h-32 w-full relative rounded-2xl'>
            {posts[3]?.mainImage && (
              <>
                <Image
                  src={postImageUrl4||"/image.png" }
                  alt={posts[3].title}
                  fill
                  className="object-cover rounded-2xl"
                />
               
              </>
            )}
            </div>
         
            <div className="relative px-1.5 justify-between h-full w-full flex flex-col  text-gray-900">
            <span className="text-sm bg-lime-500/80 px-3 py-1 rounded-full w-fit">
            {posts[3]?.category?.title || 'Technology'}
          </span>
          <a href={ `/blogs/${posts[1].currentSlug}`}>
          <h2 className="md:text-base text-sm font-semibold cursor-pointer hover:underline ">
                {posts[1]?.title || '15 Shocking Elon Musk Tweets'}
              </h2>
          </a>
              <time className="text-gray-500 text-sm italic">
                {new Date(posts[1].publishedAt).toLocaleDateString('en-us',{
                  year:'numeric',
                  month:'long',
                  day:'numeric'
                }
                )}
              </time>
            </div>
          </div>

          

        
        </div>
     
    </div>
    </div>
   
  )
}
