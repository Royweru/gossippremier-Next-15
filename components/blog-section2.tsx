import { PostType } from '@/types'
import {ArrowRightIcon } from 'lucide-react'
import React from 'react'
import { BlogSectionCard } from './blog-section-card'

export const  BlogSection2 = ({
  posts}:{
  posts:PostType[]
}) => {
  if(!posts) return

  return (
    <div className=' w-full py-6 lg:py-8 max-w-5xl mx-auto grid gap-5 md:grid-cols-2 md:px-0 px-2 '>
          <div className=' col-span-1  space-y-2'>
                  <div className=' w-full flex justify-between'>
                      <h5 className=' text-xl font-semibold '>
                          {posts[3].category.title}
                      </h5>
                      <div className=' flex gap-x-2 items-center '>
                        <a href={`/categories/${posts[3].category.title}`}>
                        <p className=' text-base italic hover:underline'>
                       View all
                       </p>
                        </a>
                     
                       <ArrowRightIcon className=' size-3.5 text-neutral-800 '/>
                      </div>
                  </div>
                  <BlogSectionCard
                   data={posts[3]} />
          </div>
          <div className=' col-span-1  space-y-2 '>
          <div className=' w-full flex justify-between'>
                      <h5 className=' text-xl font-semibold '>
                          {posts[1].category.title}
                      </h5>
                      <div className=' flex gap-x-2 items-center '>
                      <p className=' text-base italic'>
                       View all
                       </p>
                       <ArrowRightIcon className=' size-3.5 text-neutral-800 '/>
                      </div>
                  </div>
                  <BlogSectionCard
                   data={posts[1]}
                    />
          </div>
       </div>
  )
}
