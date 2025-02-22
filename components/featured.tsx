import { PostType } from '@/types'
import Image from 'next/image'
import React from 'react'

export const FeaturedStories = ({posts}:{
    posts:PostType[]
}) => {
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-12">
    <div className="relative h-96 rounded-3xl overflow-hidden">
        {posts[0].mainImage && (
          <>
            <Image
              src={posts[0].mainImage }
              alt={posts[0].mainImage }
              fill
              className="object-cover"
              priority
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20" />
          </>
        )}
        
        <div className="relative p-8 h-full flex flex-col justify-end text-white">
          <span className="text-sm bg-white/20 px-3 py-1 rounded-full w-fit">
            Featured
          </span>
          <h1 className="text-4xl font-bold mt-6 mb-4">
            {posts[0].mainImage || 'Want a Career in Technology?'}
          </h1>
          <p className="text-lg opacity-90">
            {posts[0].publishedAt
              ? new Date(posts[0].publishedAt ).toLocaleDateString()
              : 'June 28, 2021'}
          </p>
        </div>
      </div>
      
      <div className="space-y-6">
        <div className="relative h-48 rounded-2xl overflow-hidden">
          {posts[1]?.mainImage && (
            <>
              <Image
                src={posts[1].mainImage}
                alt={posts[1].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
            </>
          )}
          <div className="relative p-6 h-full flex flex-col justify-end text-white">
            <h2 className="text-2xl font-bold mb-3">
              {posts[1]?.title || '15 Shocking Elon Musk Tweets'}
            </h2>
            {/* <p className="text-gray-200">
              {posts[0]?.excerpt || 'About Stock Market'}
            </p> */}
          </div>
        </div>

        <div className="relative h-48 rounded-2xl overflow-hidden bg-orange-100">
          {posts[2]?.mainImage && (
            <>
              <Image
                src={posts[2].mainImage}
                alt={posts[2].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
            </>
          )}
          <div className="relative p-6 h-full flex flex-col justify-end text-white">
            <h2 className="text-2xl font-bold mb-3">
              {posts[2]?.title || 'Stock Market Gender Differences'}
            </h2>
            {/* <p className="text-gray-200">
              {posts[1]?.excerpt || 'Current laculis etiam in...'}
            </p> */}
          </div>
        </div>
      </div>
    </div>
  )
}
