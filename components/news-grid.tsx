import { urlFor } from '@/lib/imageBuilder';
import { PostType } from '@/types';
import React from 'react';

export const NewsGrid = ({
  posts
}:{
  posts:PostType[]
}) => {
  return (
  <div className="font-sans min-h-screen">
    {/* Header - Mobile-first approach */}
    <header className="bg-gradient-to-r from-pink-300 to-purple-800 via-blue-900 text-white p-4">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-neutral-100">
          Latest News
          <span className="block text-sm md:text-base lg:text-lg italic opacity-90">
            See All Latest News
          </span>
        </h1>
      </div>
    </header>

    {/* Main Grid - Mobile-first grid system */}
    <main className="container mx-auto lg:px-12 md:px-8 px-6 py-6 md:py-11">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
        {/* Left Column - Full width on mobile */}
        <div className="md:col-span-3 space-y-4">
          <article className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <a href={`/blogs/${posts[0]?.currentSlug}`} className="block">
              <img
                src={posts[0]?.mainImage && urlFor(posts[0]?.mainImage)?.url() || "/https://via.placeholder.com/400x300"}
                alt={posts[0]?.title || "Article thumbnail"}
                className="w-full h-48 md:h-40 lg:h-48 object-cover rounded-md mb-3"
              />
              <h2 className="text-lg md:text-xl font-serif font-bold text-gray-900 hover:text-purple-600 transition-colors duration-200">
                {posts[0]?.title}
              </h2>
            </a>
          </article>
        </div>

        {/* Center Column - Full width on mobile */}
        <div className="md:col-span-6 space-y-4">
          <article className="relative bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200">
            <img
              src={posts[4]?.mainImage && urlFor(posts[4]?.mainImage)?.url() || "/https://via.placeholder.com/800x600"}
              alt="Featured Article"
              className="w-full h-56 md:h-72 lg:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 flex items-end p-4">
              <a href={`/blogs/${posts[4]?.currentSlug}`} className="text-white text-xl md:text-2xl font-bold hover:text-purple-300 transition-colors duration-200">
                {posts[4]?.title}
              </a>
            </div>
          </article>
        </div>

        {/* Right Column - Full width on mobile */}
        <div className="md:col-span-3 space-y-4">
          <article className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <a href={`/blogs/${posts[1]?.currentSlug}`} className="block">
              <img
                src={posts[1]?.mainImage && urlFor(posts[1].mainImage)?.url() || "https://via.placeholder.com/400x300"}
                alt={posts[1]?.title || "Article thumbnail"}
                className="w-full h-48 md:h-40 lg:h-48 object-cover rounded-md mb-3"
              />
              <h2 className="text-lg md:text-xl font-serif font-bold text-gray-900 hover:text-purple-600 transition-colors duration-200">
                {posts[1]?.title}
              </h2>
            </a>
          </article>
        </div>
      </div>
    </main>
  </div>
  );
};
