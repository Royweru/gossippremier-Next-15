import { urlFor } from '@/app/(routes)/blogs/[slug]/page';
import { PostType } from '@/types';
import React from 'react';


export const NewsGrid = ({
    posts
}:{
    posts:PostType[]
}) => {
      const postAuthorImageUrl1 = posts[0].author?.image
    ? urlFor(posts[0].author?.image)?.url()
    : null;
      const postAuthorImageUrl2 = posts[2].author?.image
    ? urlFor(posts[2].author?.image)?.url()
    : null;
    const postAuthorImageUrlFeatured = posts[4].author?.image
    ? urlFor(posts[4].author?.image)?.url()
    : null;
    const postImageUrlFeatured = posts[4].mainImage
    ? urlFor(posts[4].mainImage)?.url()
    : null;
    const postAuthorImageUrl3 = posts[1].author?.image
    ? urlFor(posts[1].author?.image)?.url()
    : null;
  return (
    <div className=" font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-pink-300 to-purple-800 via-blue-900 text-white p-6 flex justify-between items-center">
        <h1 className="text-3xl font-serif font-bold text-neutral-100">
          Latest News
          <span className="ml-2 text-sm italic">See All Latest News</span>
        </h1>
      </header>

      {/* Main Grid */}
      <main className="max-w-5xl mx-auto p-4 grid grid-cols-12 gap-8">
        {/* Left Column (25%) */}
        <div className="col-span-3 space-y-6">
          {/* Article 1 */}
          <article className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          <a href={`/blogs/${posts[0].currentSlug}`}>
            <h2 className="text-xl font-serif font-bold text-gray-900 mb-2 hover:underline">
             {posts[0].title}
            </h2>
            </a>
            <p className="text-gray-600 text-sm mb-2">
              Tips to enhance productivity in virtual meetings.
            </p>
            <div className="flex items-center text-gray-500 text-xs">
              <img
                src={postAuthorImageUrl1||"https://via.placeholder.com/20" }// Replace with actual author avatar URL
                alt="Author"
                className="w-5 h-5 rounded-full mr-2"
              />
              <span>{posts[0].author?.name}</span>
            </div>
            <span className="inline-block px-2 py-1 mt-2 bg-gray-100 text-gray-700 text-xs rounded-full border border-gold-200">
            {posts[0].category.title}
            </span>
          </article>

          {/* Article 2 */}
          <article className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <a href={`/blogs/${posts[2].currentSlug}`}>
            <h2 className="text-xl font-serif font-bold text-gray-900 mb-2 hover:underline">
             {posts[2].title}
            </h2>
            </a>
         
            <p className="text-gray-600 text-sm mb-2">
              This is the beggining of a new dawn
            </p>
            <div className="flex items-center text-gray-500 text-xs">
              <img
                src={postAuthorImageUrl2||"https://via.placeholder.com/20" }// Replace with actual author avatar URL
                alt="Author"
                className="w-5 h-5 rounded-full mr-2"
              />
              <span>{posts[2].author?.name}</span>
            </div>
            <span className="inline-block px-2 py-1 mt-2 bg-gray-100 text-gray-700 text-xs rounded-full border border-gold-200">
           {posts[2].category.title}
            </span>
          </article>

          {/* Add more articles as needed */}
        </div>

        {/* Center Column (50%) - Featured Article */}
        <div className="col-span-6 space-y-6">
          <article className="relative bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
            <img
              src={postImageUrlFeatured||"https://via.placeholder.com/600x400" }// Replace with actual image URL (e.g., tablet on orange background)
              alt="Featured Article"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <a href={`/blogs/${posts[4].currentSlug}`}>
                <h2 className="text-3xl font-serif font-bold mb-2 text-neutral-100 hover:underline">
                  The Rise of Crypto and Its Threat to Normal Currency
                </h2>
                </a>
               
                <p className="text-sm font-sans mb-4">
                  Bitcoin hits a new high of $107K, sparking debate on its impact on traditional finance.
                </p>
                <div className="flex justify-center text-xs text-white text-neutral-200/90 shadow-sm">
                  <img
                    src={postAuthorImageUrlFeatured||"https://via.placeholder.com/20" }// Replace with actual author avatar URL
                    alt="Author"
                    className="w-5 h-5 rounded-full mr-2"
                  />
                  <span>{posts[4].author?.name}</span>
                </div>
              </div>
            </div>
            <span className="absolute top-2 right-2 inline-block px-2 py-1 bg-gold-300 text-white text-xs rounded-full">
             {posts[4].category.title}
            </span>
          </article>
        </div>

        {/* Right Column (25%) */}
        <div className="col-span-3 space-y-6">
          {/* Article 3 */}
          <article className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <a href={`/blogs/${posts[1].currentSlug}`}>
            <h2 className="text-xl font-serif font-bold text-gray-900 mb-2 hover:underline">
              {posts[1].title}
            </h2>
            </a>
        
            <p className="text-gray-600 text-sm mb-2">
              A discussion on improving female sports ahead of the 2025 World Cup.
            </p>
            <div className="flex items-center text-gray-500 text-xs">
              <img
                src={postAuthorImageUrl3||"https://via.placeholder.com/20" }// Replace with actual author avatar URL
                alt="Author"
                className="w-5 h-5 rounded-full mr-2"
              />
              <span>{posts[1].author.name}</span>
            </div>
            <span className="inline-block px-2 py-1 mt-2 bg-gray-100 text-gray-700 text-xs rounded-full border border-gold-200">
             {posts [1].category.title}
            </span>
          </article>

          {/* Add more articles as needed */}
        </div>
      </main>
    </div>
  );
};

