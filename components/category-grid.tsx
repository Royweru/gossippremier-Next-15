import { PostType } from '@/types'
import React from 'react'
import Link from 'next/link'

export const CategoryGrid = ({posts}:{
    posts:PostType[]
}) => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
    <div className="bg-gray-50 p-6 rounded-2xl">
      <h3 className="text-2xl font-bold mb-4">Technology</h3>
      {posts.filter(p => p.category.title === 'Technology').slice(0, 3).map(post => (
        <Link key={post._id} href={`/posts/${post.currentSlug}`} className="block py-3 border-b last:border-0">
          <h4 className="font-medium hover:text-blue-600">{post.title}</h4>
        </Link>
      ))}
    </div>
    
    <div className="bg-gray-50 p-6 rounded-2xl">
      <h3 className="text-2xl font-bold mb-4">Finance</h3>
      {posts.filter(p => p.category.title === 'Finance').slice(0, 3).map(post => (
        <Link key={post._id} href={`/posts/${post.currentSlug}`} className="block py-3 border-b last:border-0">
          <h4 className="font-medium hover:text-blue-600">{post.title}</h4>
        </Link>
      ))}
    </div>

    <div className="bg-gray-50 p-6 rounded-2xl">
      <h3 className="text-2xl font-bold mb-4">Lifestyle</h3>
      {posts.filter(p => p.category.title === 'Lifestyle').slice(0, 3).map(post => (
        <Link key={post._id} href={`/posts/${post.currentSlug}`} className="block py-3 border-b last:border-0">
          <h4 className="font-medium hover:text-blue-600">{post.title}</h4>
        </Link>
      ))}
    </div>
  </div>
  )
}
